/**
 * Shivraj Dhaytadak - Portfolio Application Logic
 * High-performance, accessible, zero-dependency client logic
 * Features: Interactive Career Timeline, ⌘K Command Palette, Dark/Light Mode,
 * Live KPI Counters, Toast Notifications, vCard Generation, and Navigation ScrollSpy.
 */

// Application State
let activeCareerAct = "allianz";
let isDarkMode = false;
let cmdkSelectedIndex = 0;
let filteredCmdkItems = [];

// ==========================================================================
// 1. Pure Client-Side Syntax Highlighter (Lightweight & Zero-Dependency)
// ==========================================================================
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function highlightSyntax(code, lang = "json") {
    if (lang === "json") {
        let escaped = escapeHtml(code);
        return escaped.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'syn-number';
            if (/^"/.test(match)) {
                cls = /:$/.test(match) ? 'syn-key' : 'syn-string';
            } else if (/true|false/.test(match)) {
                cls = 'syn-boolean';
            } else if (/null/.test(match)) {
                cls = 'syn-keyword';
            }
            return `<span class="${cls}">${match}</span>`;
        });
    } else if (lang === "python") {
        let lines = code.split("\n");
        return lines.map(line => {
            let escaped = escapeHtml(line);
            let commentIdx = escaped.indexOf("#");
            let comment = "";
            if (commentIdx !== -1) {
                comment = `<span class="syn-comment">${escaped.slice(commentIdx)}</span>`;
                escaped = escaped.slice(0, commentIdx);
            }
            escaped = escaped.replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, '<span class="syn-string">$1</span>');
            escaped = escaped.replace(/\b(from|import|class|def|async|await|return|if|else|elif|for|in|while|try|except|raise|with|as|not|and|or|pass|break|continue)\b/g, '<span class="syn-keyword">$1</span>');
            escaped = escaped.replace(/\b(BaseModel|Field|StateGraph|START|END|TypedDict|Dict|List|Any|Sequence|Annotated|Literal|str|bool|float|int|dict|list|set|tuple|self)\b/g, '<span class="syn-type">$1</span>');
            escaped = escaped.replace(/(@\w+|def\s+(\w+))/g, (m, p1, p2) => {
                if (p2) return `def <span class="syn-func">${p2}</span>`;
                return `<span class="syn-func">${p1}</span>`;
            });
            escaped = escaped.replace(/\b(True|False|None)\b/g, '<span class="syn-boolean">$1</span>');
            escaped = escaped.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="syn-number">$1</span>');
            return escaped + comment;
        }).join("\n");
    }
    return escapeHtml(code);
}

// ==========================================================================
// 2. Toast Notification Engine
// ==========================================================================
function showToast(message, icon = "check-circle", duration = 2800, badge = null, badgeClass = null, iconColor = "text-emerald-400") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    
    let badgeHtml = "";
    if (badge) {
        const bCls = badgeClass || "bg-blue-500/20 text-blue-300 border-blue-500/30";
        badgeHtml = `<span class="px-2 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider border shrink-0 ${bCls}">${badge}</span>`;
    }

    toast.innerHTML = `
        <i data-lucide="${icon}" class="w-4 h-4 shrink-0 ${iconColor}"></i>
        ${badgeHtml}
        <span class="font-medium text-white leading-snug">${message}</span>
    `;
    container.appendChild(toast);

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons({ root: toast });
    }

    setTimeout(() => {
        toast.style.animation = "toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        setTimeout(() => toast.remove(), 250);
    }, duration);
}

// 1-Click Clipboard Helper
function copyToClipboard(text, label = "Item") {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied ${label} to clipboard!`, "check");
        }).catch(() => {
            fallbackCopy(text, label);
        });
    } else {
        fallbackCopy(text, label);
    }
}

function fallbackCopy(text, label) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(`Copied ${label} to clipboard!`, "check");
    } catch (err) {
        showToast(`Could not copy ${label}`, "alert-circle");
    }
    textArea.remove();
}

// Dynamic vCard (.vcf) Generator
function downloadVCard() {
    const p = portfolioData.profile;
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Dhaytadak;Shivraj;;;
FN:${p.name}
ORG:Allianz Services
TITLE:${p.title}
EMAIL;type=INTERNET;type=WORK:${p.email}
TEL;type=CELL:${p.phone}
ADR;type=WORK:;;Pune;Maharashtra;;India
URL:${p.linkedin}
NOTE:Agentic AI Consultant specializing in Multi-Agent Workflows, LangGraph, and Distributed Cloud Pipelines.
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Shivraj_Dhaytadak.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("Downloaded vCard (Shivraj_Dhaytadak.vcf)", "user-check");
}

// Resume Download Tracking Hook
function trackResumeDownload(source = "unknown", event = null) {
    try {
        const payload = {
            event: "resume_download",
            source: source,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            referrer: document.referrer || "direct"
        };
        window.dispatchEvent(new CustomEvent("portfolio:telemetry", { detail: payload }));
        if (typeof window.gtag === "function") {
            window.gtag("event", "file_download", {
                file_name: "Shivraj_Dhaytadak_Resume.pdf",
                link_text: "Download Resume",
                source: source
            });
        }
        showToast("Opening Shivraj Dhaytadak Resume PDF", "file-text", 3000, "Verified Candidate", "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30");
    } catch (err) {
        console.warn("[Telemetry] Resume tracking warning:", err);
    }
}

// ==========================================================================
// 3. Dark Mode & Recruiter Mode Toggle Engine
// ==========================================================================
function setRecruiterMode(state) {
    isDarkMode = Boolean(state);

    document.documentElement.setAttribute("data-recruiter-mode", state ? "true" : "false");
    document.documentElement.setAttribute("data-theme", state ? "dark" : "light");
    document.documentElement.classList.toggle("dark", state);
    document.documentElement.classList.toggle("light", !state);

    localStorage.setItem("portfolio_recruiter_mode", state ? "true" : "false");
    localStorage.setItem("portfolio_theme", state ? "dark" : "light");

    const toggleText = document.getElementById("theme-toggle-text");
    const indicator = document.getElementById("theme-mode-indicator");
    const toggleIcon = document.getElementById("theme-toggle-icon");
    const toggleBtn = document.getElementById("theme-toggle-btn");

    if (toggleText) {
        toggleText.innerText = state ? "Light Mode" : "Dark Mode";
    }
    if (toggleBtn) {
        toggleBtn.setAttribute("aria-checked", state ? "true" : "false");
        toggleBtn.title = state ? "Switch to Light Mode" : "Toggle Dark Mode (Obsidian Scheme)";
    }
    if (toggleIcon) {
        toggleIcon.setAttribute("data-lucide", state ? "sun" : "moon");
        if (window.lucide && typeof lucide.createIcons === "function") {
            lucide.createIcons();
        }
    }
    if (indicator) {
        indicator.className = state
            ? "w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-amber-400 shadow"
            : "w-1.5 h-1.5 rounded-full bg-slate-400";
    }
}

function toggleRecruiterMode() {
    const nextState = !isDarkMode;
    setRecruiterMode(nextState);
    showToast(nextState ? "Dark Mode Active: Obsidian scheme" : "Light Mode Active: Warm editorial theme", nextState ? "moon" : "sun");
}
const toggleTheme = toggleRecruiterMode;

// ==========================================================================
// 4. Command Palette (⌘K) Engine
// ==========================================================================
function openCmdk() {
    const modal = document.getElementById("cmdk-modal");
    const input = document.getElementById("cmdk-input");
    if (!modal) return;
    modal.classList.remove("hidden");
    cmdkSelectedIndex = 0;
    if (input) {
        input.value = "";
        input.focus();
    }
    renderCmdkList("");
}

function closeCmdk() {
    const modal = document.getElementById("cmdk-modal");
    if (!modal) return;
    modal.classList.add("hidden");
}

function executeCmdkAction(item) {
    closeCmdk();
    if (item.action === "scroll") {
        const target = document.getElementById(item.target);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } else if (item.action === "download-resume") {
        trackResumeDownload("cmdk");
        const link = document.createElement("a");
        link.href = portfolioData.profile.resumeUrl;
        link.download = "Shivraj_Dhaytadak_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
    } else if (item.action === "toggle-recruiter-mode") {
        toggleRecruiterMode();
    } else if (item.action === "copy-email") {
        copyToClipboard(portfolioData.profile.email, "Email");
    } else if (item.action === "copy-phone") {
        copyToClipboard(portfolioData.profile.phone, "Phone");
    } else if (item.action === "download-vcard") {
        downloadVCard();
    } else if (item.action === "open-link" && item.url) {
        window.open(item.url, "_blank", "noopener,noreferrer");
    }
}

function renderCmdkList(filterText = "") {
    const container = document.getElementById("cmdk-results");
    if (!container) return;

    const query = filterText.toLowerCase().trim();
    filteredCmdkItems = portfolioData.commandPaletteItems.filter(item => {
        if (!query) return true;
        return item.label.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
    });

    if (filteredCmdkItems.length === 0) {
        container.innerHTML = `
            <div class="p-6 text-center text-slate-400 font-mono text-xs">
                No matching actions found for "${escapeHtml(filterText)}"
            </div>
        `;
        return;
    }

    container.innerHTML = filteredCmdkItems.map((item, index) => `
        <div data-cmdk-index="${index}" class="cmdk-item flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${index === cmdkSelectedIndex ? "bg-[#003781]/10 dark:bg-indigo-950/60 text-[#003781] dark:text-sky-300 font-semibold" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"}">
            <div class="flex items-center gap-2.5">
                <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0 text-slate-500"></i>
                <span class="text-xs sm:text-sm">${item.label}</span>
            </div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">${item.category}</span>
        </div>
    `).join('');

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons({ root: container });
    }
}

function setupCmdkListeners() {
    const input = document.getElementById("cmdk-input");
    const modal = document.getElementById("cmdk-modal");

    if (input) {
        input.addEventListener("input", (e) => {
            cmdkSelectedIndex = 0;
            renderCmdkList(e.target.value);
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                if (filteredCmdkItems.length > 0) {
                    cmdkSelectedIndex = (cmdkSelectedIndex + 1) % filteredCmdkItems.length;
                    renderCmdkList(input.value);
                }
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (filteredCmdkItems.length > 0) {
                    cmdkSelectedIndex = (cmdkSelectedIndex - 1 + filteredCmdkItems.length) % filteredCmdkItems.length;
                    renderCmdkList(input.value);
                }
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filteredCmdkItems[cmdkSelectedIndex]) {
                    executeCmdkAction(filteredCmdkItems[cmdkSelectedIndex]);
                }
            } else if (e.key === "Escape") {
                closeCmdk();
            }
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target.classList.contains("cmdk-backdrop")) {
                closeCmdk();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            const modal = document.getElementById("cmdk-modal");
            if (modal && !modal.classList.contains("hidden")) {
                closeCmdk();
            } else {
                openCmdk();
            }
        }
    });

    document.addEventListener("click", (e) => {
        const itemEl = e.target.closest("[data-cmdk-index]");
        if (itemEl) {
            const index = parseInt(itemEl.dataset.cmdkIndex, 10);
            if (filteredCmdkItems[index]) {
                executeCmdkAction(filteredCmdkItems[index]);
            }
        }
    });
}

// ==========================================================================
// 5. Interactive Editorial Timeline (The Career Evolution)
// ==========================================================================
function renderCareerAct(actId) {
    activeCareerAct = actId;
    const act = portfolioData.careerTimeline.find(a => a.id === actId);
    if (!act) return;

    const brandTheme = {
        allianz: {
            activeBtn: "bg-[#003781] text-white border-[#003781] shadow-md shadow-[#003781]/20 font-semibold",
            inactiveBtn: "bg-white hover:bg-[#EBF3FB] border border-[rgba(40,30,20,0.12)] text-[#003781] hover:text-[#002659] font-medium",
            badgeClass: "brand-allianz-pill font-bold",
            honorsClass: "bg-[#EBF3FB] border border-[#003781]/30 text-[#003781]",
            cardBorder: "border-l-4 border-l-[#003781]",
            roleAccent: "text-[#003781]",
            bulletDot: "bg-[#003781]"
        },
        yashtechnologies: {
            activeBtn: "bg-[#D32F2F] text-white border-[#D32F2F] shadow-md shadow-[#D32F2F]/20 font-semibold",
            inactiveBtn: "bg-white hover:bg-[#FEF2F2] border border-[rgba(40,30,20,0.12)] text-slate-700 hover:text-[#D32F2F] font-medium",
            badgeClass: "brand-yash-pill font-bold",
            honorsClass: "bg-[#FEF2F2] border border-[#D32F2F]/30 text-[#D32F2F]",
            cardBorder: "border-l-4 border-l-[#D32F2F]",
            roleAccent: "text-[#1E3A8A]",
            bulletDot: "bg-[#D32F2F]"
        },
        persistentsystems: {
            activeBtn: "bg-[#D97706] text-white border-[#D97706] shadow-md shadow-[#D97706]/20 font-semibold",
            inactiveBtn: "bg-white hover:bg-[#FEF3C7] border border-[rgba(40,30,20,0.12)] text-slate-700 hover:text-[#D97706] font-medium",
            badgeClass: "brand-persistent-pill font-bold",
            honorsClass: "bg-[#FEF3C7] border border-[#D97706]/30 text-[#B45309]",
            cardBorder: "border-l-4 border-l-[#D97706]",
            roleAccent: "text-[#D97706]",
            bulletDot: "bg-[#D97706]"
        }
    }[actId] || {
        activeBtn: "bg-[#003781] text-white border-[#003781]",
        inactiveBtn: "bg-white text-slate-700 border border-[rgba(40,30,20,0.12)]",
        badgeClass: "bg-slate-100 text-slate-700",
        honorsClass: "bg-slate-100 text-slate-700",
        cardBorder: "border-l-4 border-l-slate-400",
        roleAccent: "text-slate-600",
        bulletDot: "bg-slate-400"
    };

    document.querySelectorAll("[data-career-tab]").forEach(btn => {
        const targetId = btn.dataset.careerTab;
        const isActive = targetId === actId;
        const dot = btn.querySelector("span.rounded-full");
        
        if (targetId === "allianz") {
            btn.className = `px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${isActive ? brandTheme.activeBtn : "bg-white hover:bg-[#EBF3FB] border border-[rgba(40,30,20,0.12)] text-[#003781] hover:text-[#002659] font-medium"}`;
            if (dot) dot.className = `w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-[#003781]"}`;
        } else if (targetId === "yashtechnologies") {
            btn.className = `px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${isActive ? "bg-[#D32F2F] text-white border-[#D32F2F] shadow-md shadow-[#D32F2F]/20 font-semibold" : "bg-white hover:bg-[#FEF2F2] border border-[rgba(40,30,20,0.12)] text-slate-700 hover:text-[#D32F2F] font-medium"}`;
            if (dot) dot.className = `w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-[#D32F2F]"}`;
        } else if (targetId === "persistentsystems") {
            btn.className = `px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${isActive ? "bg-[#D97706] text-white border-[#D97706] shadow-md shadow-[#D97706]/20 font-semibold" : "bg-white hover:bg-[#FEF3C7] border border-[rgba(40,30,20,0.12)] text-slate-700 hover:text-[#D97706] font-medium"}`;
            if (dot) dot.className = `w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-white" : "bg-[#D97706]"}`;
        }
    });

    const displayContainer = document.getElementById("career-act-display");
    if (!displayContainer) return;

    displayContainer.innerHTML = `
        <div class="p-6 sm:p-8 bento-card bg-white border border-[rgba(40,30,20,0.08)] ${brandTheme.cardBorder} flex flex-col gap-6 shadow-xl animate-fade-in">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[rgba(40,30,20,0.08)] pb-5">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-0.5 rounded-full ${brandTheme.badgeClass} font-mono text-xs font-semibold">${act.act}</span>
                        <span class="text-xs font-mono text-slate-500">${act.period}</span>
                        <span class="text-xs text-slate-400">&bull;</span>
                        <span class="text-xs text-slate-500">${act.location}</span>
                    </div>
                    <h3 class="text-2xl font-extrabold text-slate-900 mt-1.5 flex items-center gap-3">
                        <span>${act.company}</span>
                        <span class="text-sm font-semibold ${brandTheme.roleAccent} font-sans hidden sm:inline">&mdash; ${act.role}</span>
                    </h3>
                    <p class="text-xs sm:text-sm font-medium text-slate-700 mt-1">${act.theme}</p>
                    <p class="text-xs text-slate-500 mt-0.5">${act.context}</p>
                </div>
                <div class="shrink-0 flex flex-col items-start md:items-end gap-1.5">
                    <div class="px-3.5 py-1.5 rounded-lg ${brandTheme.honorsClass} text-xs font-semibold flex items-center gap-2 shadow-sm">
                        <i data-lucide="award" class="w-4 h-4"></i>
                        <span>${act.honors}</span>
                    </div>
                </div>
            </div>

            <!-- Key Metrics Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${act.metrics.map(m => `
                    <div class="bg-[#FAF8F5] border border-[rgba(40,30,20,0.07)] p-3.5 rounded-xl">
                        <div class="text-xs uppercase font-mono tracking-wider text-slate-500 font-medium">${m.label}</div>
                        <div class="text-xl font-bold font-mono text-slate-900 mt-1">${m.value}</div>
                    </div>
                `).join('')}
            </div>

            <!-- STAR Narrative Breakdown -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div class="bg-[#FAF8F5] border border-[rgba(40,30,20,0.07)] p-4 rounded-xl flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                        <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-slate-500"></i> The Friction / Problem
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">${act.narrative.challenge}</p>
                </div>
                <div class="bg-[#FAF8F5] border border-[rgba(40,30,20,0.07)] p-4 rounded-xl flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                        <i data-lucide="cpu" class="w-3.5 h-3.5 text-slate-500"></i> The Architectural Solution
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">${act.narrative.solution}</p>
                </div>
                <div class="bg-[#FAF8F5] border border-[rgba(40,30,20,0.07)] p-4 rounded-xl flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-800">
                        <i data-lucide="trending-up" class="w-3.5 h-3.5 text-slate-500"></i> Proven Impact
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">${act.narrative.impact}</p>
                </div>
            </div>

            <!-- Key Engineering Deliverables -->
            <div class="border-t border-[rgba(40,30,20,0.08)] pt-4">
                <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-slate-500"></i>
                    <span>Production Engineering Deliverables</span>
                </div>
                <ul class="space-y-2.5">
                    ${act.deliverables.map(d => `
                        <li class="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                            <span class="w-1.5 h-1.5 rounded-full ${brandTheme.bulletDot} mt-2 shrink-0"></span>
                            <span>${d}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Technology Stack Badges -->
            <div class="border-t border-[rgba(40,30,20,0.08)] pt-4 flex flex-wrap items-center gap-2">
                <span class="text-xs font-medium text-slate-500 mr-2">Verified Stack:</span>
                ${act.stack.map(s => `
                    <span class="glass-pill px-2.5 py-1 rounded-md text-slate-700 bg-[#FAF8F5] border border-[rgba(40,30,20,0.08)] text-xs font-mono font-medium">${s}</span>
                `).join('')}
            </div>
        </div>
    `;

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons({ root: displayContainer });
    }
}

// ==========================================================================
// 6. Live KPI Counter Animation
// ==========================================================================
function initKpiCounters() {
    const counterElements = document.querySelectorAll("[data-counter-target]");
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.counterTarget);
                const suffix = el.dataset.counterSuffix || "";
                animateCounter(el, target, suffix);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
}

function animateCounter(element, target, suffix = "", duration = 1200) {
    const start = 0;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = progress * (2 - progress);
        const current = Math.floor(start + (target - start) * easeOutQuad);

        element.textContent = `${current}${suffix}`;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = `${target}${suffix}`;
        }
    }
    requestAnimationFrame(update);
}

// ==========================================================================
// 7. UI Enhancements: Glow, ScrollReveal, ScrollSpy, Mobile Nav, Lightbox
// ==========================================================================
function initBentoCardGlow() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".bento-card");
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
}

function initScrollSpy() {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    if (!navLinks.length) return;

    const sectionIds = Array.from(navLinks).map(link => link.getAttribute("href").substring(1));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${activeId}`) {
                        link.classList.add("nav-link-active");
                        link.setAttribute("aria-current", "true");
                    } else {
                        link.classList.remove("nav-link-active");
                        link.removeAttribute("aria-current");
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
}

function initMobileNav() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const drawer = document.getElementById("mobile-nav-drawer");
    const backdrop = document.getElementById("mobile-nav-backdrop");
    const closeBtn = document.getElementById("mobile-nav-close");
    const navLinks = document.querySelectorAll(".mobile-nav-link");

    if (!menuBtn || !drawer) return;

    function openDrawer() {
        drawer.classList.add("open");
        if (backdrop) backdrop.classList.add("open");
        document.body.classList.add("overflow-hidden");
        menuBtn.setAttribute("aria-expanded", "true");
        drawer.setAttribute("aria-hidden", "false");
    }

    function closeDrawer() {
        drawer.classList.remove("open");
        if (backdrop) backdrop.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        drawer.setAttribute("aria-hidden", "true");
    }

    menuBtn.addEventListener("click", () => {
        if (drawer.classList.contains("open")) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    navLinks.forEach(link => link.addEventListener("click", closeDrawer));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("open")) {
            closeDrawer();
        }
    });
}

// Architecture Blueprint Lightbox
window.openLightbox = function() {
    const lb = document.getElementById('blueprint-lightbox');
    if (lb) {
        lb.classList.remove('hidden');
        lb.classList.add('flex');
        document.body.style.overflow = 'hidden';
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ root: lb });
        }
    }
};

window.closeLightbox = function() {
    const lb = document.getElementById('blueprint-lightbox');
    if (lb) {
        lb.classList.add('hidden');
        lb.classList.remove('flex');
        document.body.style.overflow = '';
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeLightbox();
});

// ==========================================================================
// 8. Global Delegated Listeners
// ==========================================================================
function setupDelegatedListeners() {
    document.addEventListener("click", (e) => {
        // Resume Download tracking
        const resumeLink = e.target.closest('a[href*="resume.pdf"], a[href*="Shivraj_Dhaytadak_Resume.pdf"], [data-track-resume]');
        if (resumeLink) {
            const source = resumeLink.getAttribute("data-resume-source") || resumeLink.getAttribute("id") || "portfolio_cta";
            trackResumeDownload(source, e);
        }

        // Career Act tab switcher
        const careerBtn = e.target.closest("[data-career-tab]");
        if (careerBtn) {
            const actId = careerBtn.dataset.careerTab;
            if (actId) renderCareerAct(actId);
            return;
        }

        // Theme Toggle
        if (e.target.closest("#theme-toggle-btn")) {
            toggleRecruiterMode();
            return;
        }

        // Cmd+K open triggers
        if (e.target.closest("[data-open-cmdk]")) {
            openCmdk();
            return;
        }

        // vCard download trigger
        if (e.target.closest("[data-download-vcard]")) {
            downloadVCard();
            return;
        }

        // Quick copy email
        if (e.target.closest("[data-copy-email]")) {
            copyToClipboard(portfolioData.profile.email, "Email");
            return;
        }

        // Quick copy phone
        if (e.target.closest("[data-copy-phone]")) {
            copyToClipboard(portfolioData.profile.phone, "Phone");
            return;
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            const careerBtn = e.target.closest("[data-career-tab]");
            if (careerBtn) {
                e.preventDefault();
                const actId = careerBtn.dataset.careerTab;
                if (actId) renderCareerAct(actId);
            }
        }
    });
}

// ==========================================================================
// 9. Initialization Lifecycle
// ==========================================================================
function initPortfolio() {
    const savedDark = localStorage.getItem("portfolio_recruiter_mode") === "true" || localStorage.getItem("portfolio_theme") === "dark";
    setRecruiterMode(savedDark);

    renderCareerAct("allianz");
    initKpiCounters();
    initBentoCardGlow();
    initScrollSpy();
    initMobileNav();
    initScrollReveal();
    setupCmdkListeners();
    setupDelegatedListeners();

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
}

// Window Global Exports
window.openCmdk = openCmdk;
window.closeCmdk = closeCmdk;
window.toggleRecruiterMode = toggleRecruiterMode;
window.toggleDarkMode = toggleRecruiterMode;
window.toggleTheme = toggleRecruiterMode;
window.setDarkMode = setRecruiterMode;
window.setTheme = setRecruiterMode;
window.copyToClipboard = copyToClipboard;
window.downloadVCard = downloadVCard;
window.trackResumeDownload = trackResumeDownload;
window.initScrollReveal = initScrollReveal;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio);
} else {
    initPortfolio();
}
