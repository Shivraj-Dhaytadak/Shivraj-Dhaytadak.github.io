/**
 * Shivraj Dhaytadak - Portfolio Application Logic
 * Standard: "Wall of Portfolios" Interactive Engine
 * Features: High-Craft Syntax Highlighting, Recruiter Mode, ⌘K Command Palette,
 * Interactive Editorial Timeline, Topology Simulator Inspector, Live KPI Counter, vCard Generator.
 */

// Application State
let activeCareerAct = "allianz";
let activeCodeTabId = "schema_tab";
let activeTopologyNodeId = "langgraph_engine";
let isRecruiterMode = false;
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
        // Safe regex highlighter for JSON
        let escaped = escapeHtml(code);
        return escaped
            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
                let cls = 'syn-number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'syn-key';
                    } else {
                        cls = 'syn-string';
                    }
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
            
            // Highlight full-line or trailing comments
            let commentIdx = escaped.indexOf("#");
            let comment = "";
            if (commentIdx !== -1) {
                comment = `<span class="syn-comment">${escaped.slice(commentIdx)}</span>`;
                escaped = escaped.slice(0, commentIdx);
            }

            // Strings ("..." or '...')
            escaped = escaped.replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, '<span class="syn-string">$1</span>');

            // Keywords
            escaped = escaped.replace(/\b(from|import|class|def|async|await|return|if|else|elif|for|in|while|try|except|raise|with|as|not|and|or|pass|break|continue)\b/g, '<span class="syn-keyword">$1</span>');

            // Common types & builtins
            escaped = escaped.replace(/\b(BaseModel|Field|StateGraph|START|END|TypedDict|Dict|List|Any|Sequence|Annotated|str|bool|float|int|dict|list|set|tuple|self)\b/g, '<span class="syn-type">$1</span>');

            // Decorators or functions
            escaped = escaped.replace(/(@\w+|def\s+(\w+))/g, (m, p1, p2) => {
                if (p2) return `def <span class="syn-func">${p2}</span>`;
                return `<span class="syn-func">${p1}</span>`;
            });

            // Booleans & Numbers
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
function showToast(message, icon = "check-circle", duration = 2800) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <i data-lucide="${icon}" class="w-4 h-4 text-emerald-400 shrink-0"></i>
        <span class="font-medium text-slate-100">${message}</span>
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

// ==========================================================================
// 3. Recruiter Mode Toggle Engine
// ==========================================================================
function setRecruiterMode(state) {
    isRecruiterMode = state;
    document.documentElement.setAttribute("data-recruiter-mode", state ? "true" : "false");
    localStorage.setItem("portfolio_recruiter_mode", state ? "true" : "false");

    const toggleText = document.getElementById("recruiter-toggle-text");
    const indicator = document.getElementById("recruiter-mode-indicator");

    if (toggleText) {
        toggleText.innerText = state ? "Recruiter Mode: ON" : "Recruiter Mode";
    }
    if (indicator) {
        indicator.className = state
            ? "w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-emerald-400 shadow"
            : "w-2 h-2 rounded-full bg-slate-500";
    }

    if (state) {
        showToast("Recruiter Mode Active: Highlighting verified KPIs & executive invariants", "sparkles");
    }
}

function toggleRecruiterMode() {
    setRecruiterMode(!isRecruiterMode);
}

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
        const link = document.createElement("a");
        link.href = portfolioData.profile.resumeUrl;
        link.download = "Shivraj_Dhaytadak_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        showToast("Initiated Resume PDF download", "file-text");
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
        return item.label.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
    });

    if (filteredCmdkItems.length === 0) {
        container.innerHTML = `
            <div class="p-6 text-center text-slate-500 text-xs">
                No matching navigation items found for "${filterText}".
            </div>
        `;
        return;
    }

    // Group by category
    const categories = {};
    filteredCmdkItems.forEach((item, idx) => {
        if (!categories[item.category]) categories[item.category] = [];
        categories[item.category].push({ ...item, globalIndex: idx });
    });

    let html = "";
    Object.keys(categories).forEach(cat => {
        html += `
            <div class="px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                ${cat}
            </div>
        `;
        categories[cat].forEach(item => {
            const isSelected = item.globalIndex === cmdkSelectedIndex;
            html += `
                <div class="cmdk-item ${isSelected ? 'selected' : ''}" data-cmdk-index="${item.globalIndex}">
                    <div class="flex items-center gap-2.5">
                        <i data-lucide="${item.icon}" class="w-3.5 h-3.5 text-indigo-400"></i>
                        <span class="text-xs text-slate-200">${item.label}</span>
                    </div>
                    <span class="text-[10px] font-mono text-slate-500">↵</span>
                </div>
            `;
        });
    });

    container.innerHTML = html;
    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons({ root: container });
    }
}

function setupCmdkListeners() {
    window.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            const modal = document.getElementById("cmdk-modal");
            if (modal && !modal.classList.contains("hidden")) {
                closeCmdk();
            } else {
                openCmdk();
            }
        } else if (e.key === "Escape") {
            closeCmdk();
        }
    });

    const modal = document.getElementById("cmdk-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeCmdk();
        });
    }

    const input = document.getElementById("cmdk-input");
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
            }
        });
    }

    const results = document.getElementById("cmdk-results");
    if (results) {
        results.addEventListener("click", (e) => {
            const itemEl = e.target.closest("[data-cmdk-index]");
            if (itemEl) {
                const idx = parseInt(itemEl.dataset.cmdkIndex, 10);
                if (!isNaN(idx) && filteredCmdkItems[idx]) {
                    executeCmdkAction(filteredCmdkItems[idx]);
                }
            }
        });
    }
}

// ==========================================================================
// 5. Live KPI Counter-Up Animation
// ==========================================================================
function initKpiCounters() {
    const kpiElements = document.querySelectorAll("[data-counter-target]");
    if (kpiElements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.counterTarget, 10);
                const suffix = el.dataset.counterSuffix || "";
                if (!isNaN(target)) {
                    animateCounter(el, target, suffix);
                }
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    kpiElements.forEach(el => observer.observe(el));
}

function animateCounter(element, target, suffix = "", duration = 1200) {
    if (target === 1) {
        element.innerText = "1" + suffix;
        return;
    }
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeProgress * target);
        element.innerText = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.innerText = target + suffix;
        }
    }

    requestAnimationFrame(update);
}

// ==========================================================================
// 6. Mouse Follow Radial Gradient on Bento Cards
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

// ==========================================================================
// 7. Interactive Editorial Timeline (The Career Evolution)
// ==========================================================================
function renderCareerAct(actId) {
    activeCareerAct = actId;
    const act = portfolioData.careerTimeline.find(a => a.id === actId);
    if (!act) return;

    // Update active tab styling
    document.querySelectorAll("[data-career-tab]").forEach(btn => {
        const isActive = btn.dataset.careerTab === actId;
        if (isActive) {
            btn.className = "px-4 py-2.5 rounded-xl bg-indigo-600/25 border border-indigo-400/60 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20";
        } else {
            btn.className = "px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium text-xs sm:text-sm flex items-center gap-2 transition-all";
        }
    });

    const displayContainer = document.getElementById("career-act-display");
    if (!displayContainer) return;

    displayContainer.innerHTML = `
        <div class="p-6 sm:p-8 bento-card flex flex-col gap-6 shadow-2xl animate-fade-in">
            <!-- Header Row -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] font-semibold">${act.act}</span>
                        <span class="text-xs font-mono text-slate-400">${act.period}</span>
                        <span class="text-xs text-slate-600">&bull;</span>
                        <span class="text-xs text-slate-400">${act.location}</span>
                    </div>
                    <h3 class="text-2xl font-extrabold text-white mt-1.5 flex items-center gap-3">
                        <span>${act.company}</span>
                        <span class="text-sm font-semibold text-slate-400 font-sans hidden sm:inline">&mdash; ${act.role}</span>
                    </h3>
                    <p class="text-xs sm:text-sm font-medium text-indigo-300 mt-1">${act.theme}</p>
                    <p class="text-xs text-slate-400 mt-0.5">${act.context}</p>
                </div>
                <div class="shrink-0 flex flex-col items-start md:items-end gap-1.5">
                    <div class="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2 shadow-sm">
                        <i data-lucide="award" class="w-4 h-4 text-emerald-400"></i>
                        <span>${act.honors}</span>
                    </div>
                </div>
            </div>

            <!-- Key Metrics Strip -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${act.metrics.map(m => `
                    <div class="bg-slate-950/60 border border-slate-800/80 p-3.5 rounded-xl">
                        <div class="text-xs text-slate-400 font-medium">${m.label}</div>
                        <div class="text-xl font-bold font-mono text-white mt-1">${m.value}</div>
                    </div>
                `).join('')}
            </div>

            <!-- STAR-P Narrative Breakdown -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div class="bg-slate-950/50 border border-amber-500/20 p-4 rounded-xl flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                        <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> The Friction / Problem
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">${act.narrative.challenge}</p>
                </div>
                <div class="bg-slate-950/50 border border-indigo-500/20 p-4 rounded-xl flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        <i data-lucide="cpu" class="w-3.5 h-3.5"></i> The Architectural Solution
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">${act.narrative.solution}</p>
                </div>
                <div class="bg-slate-950/50 border border-emerald-500/20 p-4 rounded-xl flex flex-col gap-2">
                    <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        <i data-lucide="trending-up" class="w-3.5 h-3.5"></i> Proven Impact
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">${act.narrative.impact}</p>
                </div>
            </div>

            <!-- Key Engineering Deliverables -->
            <div class="border-t border-slate-800/80 pt-4">
                <div class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-indigo-400"></i>
                    <span>Production Engineering Deliverables</span>
                </div>
                <ul class="space-y-2.5">
                    ${act.deliverables.map(d => `
                        <li class="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                            <span>${d}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Technology Stack Badges -->
            <div class="border-t border-slate-800/80 pt-4 flex flex-wrap items-center gap-2">
                <span class="text-xs font-medium text-slate-500 mr-2">Verified Stack:</span>
                ${act.stack.map(s => `
                    <span class="glass-pill px-2.5 py-1 rounded-md text-slate-300 text-xs font-mono font-medium">${s}</span>
                `).join('')}
            </div>
        </div>
    `;

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons({ root: displayContainer });
    }
}

// ==========================================================================
// 8. Flagship Case Study: Interactive Topology Simulator Inspector
// ==========================================================================
function renderTopologyNodeDetails(nodeId) {
    activeTopologyNodeId = nodeId;
    const node = portfolioData.flagshipCaseStudy.topologyNodes.find(n => n.id === nodeId);
    if (!node) return;

    // Update active node styling
    document.querySelectorAll("[data-topo-node]").forEach(el => {
        if (el.dataset.topoNode === nodeId) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    const inspectorEl = document.getElementById("topology-inspector");
    if (!inspectorEl) return;

    const highlightedPayload = highlightSyntax(node.payloadSample, "json");

    inspectorEl.innerHTML = `
        <div class="flex flex-col h-full justify-between gap-4 animate-fade-in">
            <div>
                <div class="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                        <span class="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">${node.category}</span>
                        <h4 class="text-base font-bold text-white mt-0.5">${node.label}</h4>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">${node.badge}</span>
                </div>

                <p class="text-xs text-slate-300 mt-3 leading-relaxed">${node.description}</p>

                <div class="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div class="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                        <div class="text-[10px] text-slate-500 uppercase tracking-wider">Performance SLA</div>
                        <div class="text-xs font-mono font-semibold text-emerald-400 mt-0.5">${node.sla}</div>
                    </div>
                    <div class="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
                        <div class="text-[10px] text-slate-500 uppercase tracking-wider">System Invariant</div>
                        <div class="text-xs font-mono font-semibold text-slate-200 mt-0.5">${node.invariant}</div>
                    </div>
                </div>

                <!-- Live Schema / Payload Inspector with Syntax Highlighting -->
                <div class="mt-4">
                    <div class="flex items-center justify-between text-xs mb-1.5">
                        <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Inspected State Payload</span>
                        <button onclick="copyToClipboard(\`${node.payloadSample.replace(/`/g, '\\`')}\`, 'Payload JSON')" class="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors cursor-pointer">
                            <i data-lucide="copy" class="w-3 h-3"></i> Copy
                        </button>
                    </div>
                    <pre class="p-3 bg-[#08090E] border border-slate-800 rounded-xl text-[11px] font-mono text-slate-300 overflow-x-auto max-h-[190px] leading-relaxed"><code>${highlightedPayload}</code></pre>
                </div>
            </div>

            <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span class="text-[11px] text-slate-500 font-mono">Tech: ${node.tech}</span>
                <a href="workflow.html" target="_blank" class="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 text-xs transition-colors">
                    Full Visualizer <i data-lucide="arrow-right" class="w-3 h-3"></i>
                </a>
            </div>
        </div>
    `;

    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons({ root: inspectorEl });
    }
}

// ==========================================================================
// 9. Case Study Code Tabs Engine with Syntax Highlighting
// ==========================================================================
function renderCodeTab(tabId) {
    activeCodeTabId = tabId;
    const tab = portfolioData.flagshipCaseStudy.codeTabs.find(t => t.id === tabId);
    if (!tab) return;

    document.querySelectorAll("[data-code-tab]").forEach(btn => {
        if (btn.dataset.codeTab === tabId) {
            btn.className = "px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-medium text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/25";
        } else {
            btn.className = "px-3 py-1.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-slate-200 font-medium text-xs transition-colors flex items-center gap-1.5 border border-slate-800";
        }
    });

    const fileNameEl = document.getElementById("code-filename");
    const descEl = document.getElementById("code-description");
    const codeBlockEl = document.getElementById("code-content-block");

    if (fileNameEl) fileNameEl.innerText = tab.fileName;
    if (descEl) descEl.innerText = tab.description;
    if (codeBlockEl) {
        codeBlockEl.innerHTML = highlightSyntax(tab.code, tab.language);
    }
}

function copyActiveCode() {
    const tab = portfolioData.flagshipCaseStudy.codeTabs.find(t => t.id === activeCodeTabId);
    if (tab) {
        copyToClipboard(tab.code, tab.fileName);
    }
}

// ==========================================================================
// 10. Global Delegated Click Handlers
// ==========================================================================
function setupDelegatedListeners() {
    document.addEventListener("click", (e) => {
        // Career Act tab switcher
        const careerBtn = e.target.closest("[data-career-tab]");
        if (careerBtn) {
            const actId = careerBtn.dataset.careerTab;
            if (actId) renderCareerAct(actId);
            return;
        }

        // Topology Node click
        const topoNode = e.target.closest("[data-topo-node]");
        if (topoNode) {
            const nodeId = topoNode.dataset.topoNode;
            if (nodeId) renderTopologyNodeDetails(nodeId);
            return;
        }

        // Code Tab switch
        const codeTabBtn = e.target.closest("[data-code-tab]");
        if (codeTabBtn) {
            const tabId = codeTabBtn.dataset.codeTab;
            if (tabId) renderCodeTab(tabId);
            return;
        }

        // Copy active code button
        if (e.target.closest("#copy-code-btn")) {
            copyActiveCode();
            return;
        }

        // Recruiter Mode button
        if (e.target.closest("#recruiter-toggle-btn")) {
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
}

// ==========================================================================
// 11. Initialization Lifecycle
// ==========================================================================
function initPortfolio() {
    // Restore recruiter mode if saved
    const savedRecruiter = localStorage.getItem("portfolio_recruiter_mode") === "true";
    if (savedRecruiter) {
        setRecruiterMode(true);
    }

    // Initialize sub-components
    renderCareerAct("allianz");
    renderTopologyNodeDetails("langgraph_engine");
    renderCodeTab("schema_tab");
    initKpiCounters();
    initBentoCardGlow();
    setupCmdkListeners();
    setupDelegatedListeners();

    // Lucide Icons initialization
    if (window.lucide && typeof lucide.createIcons === "function") {
        lucide.createIcons();
    }
}

// Window Global Exports
window.openCmdk = openCmdk;
window.closeCmdk = closeCmdk;
window.toggleRecruiterMode = toggleRecruiterMode;
window.copyToClipboard = copyToClipboard;
window.downloadVCard = downloadVCard;
window.copyActiveCode = copyActiveCode;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolio);
} else {
    initPortfolio();
}
