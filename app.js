/**
 * Shivraj Dhaytadak - Portfolio Application Logic & Reactive Engine
 * Handles 3D cylinder controls, company state switches, accessible live region announcements,
 * architecture simulation engine, and dynamic brand theming.
 */

// Application Runtime State
let selectedCompanyId = "allianz";
let activeProjectKey = "bluey_ai_lodgement";
let activeArchTab = "orchestration";
let isExpandedViewActive = false;
let blueprintViewMode = "interactive"; // 'interactive' or 'static'

function setAppState(companyId, tabId = null) {
    selectedCompanyId = companyId;
    document.documentElement.setAttribute('data-theme', companyId);
    const company = portfolioData.companies.find(c => c.id === companyId);
    if (!company) return;
    activeProjectKey = company.mappedProject;

    const projectTabs = Object.keys(portfolioData.projects[activeProjectKey].tabs);
    activeArchTab = tabId || projectTabs[0];

    renderApp();
    triggerTelemetryAnimation();
}

function triggerTelemetryAnimation() {
    const targets = [
        document.getElementById("metrics-strip-container"),
        document.getElementById("context-banner"),
        document.getElementById("project-workspace-container")
    ];
    targets.forEach(el => {
        if (!el) return;
        el.classList.remove("animate-fade-in");
        void el.offsetWidth;
        el.classList.add("animate-fade-in");
    });
}

function cycleCompany(direction) {
    const total = portfolioData.companies.length;
    const currentIndex = portfolioData.companies.findIndex(c => c.id === selectedCompanyId);
    const nextIndex = (currentIndex + direction + total) % total;
    setAppState(portfolioData.companies[nextIndex].id);
}

function setupCylinderInteractions() {
    const cylinderCard = document.getElementById("experience-cylinder-card");
    if (!cylinderCard) return;

    // Accessibility focus setup
    cylinderCard.setAttribute("tabindex", "0");
    cylinderCard.setAttribute("role", "region");
    cylinderCard.setAttribute("aria-label", "Work Experience 3D Carousel. Use arrow keys or scroll when focused to rotate.");

    // Mouse wheel rotation (strictly guarded: only intercepts when card has active focus)
    let wheelDebounce = false;
    cylinderCard.addEventListener("wheel", (e) => {
        // Do NOT hijack page scroll if user is simply scrolling past the card
        if (document.activeElement !== cylinderCard) return;

        e.preventDefault();
        if (wheelDebounce) return;
        wheelDebounce = true;
        setTimeout(() => { wheelDebounce = false; }, 260);

        if (e.deltaY > 12) {
            cycleCompany(1); // Next company
        } else if (e.deltaY < -12) {
            cycleCompany(-1); // Previous company
        }
    }, { passive: false });

    // Touch swipe listeners for mobile & tablet screens
    let touchStartY = 0;
    cylinderCard.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    cylinderCard.addEventListener("touchend", (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY - touchEndY;
        if (Math.abs(delta) > 28) {
            if (delta > 0) {
                cycleCompany(1); // Swiped up -> next company
            } else {
                cycleCompany(-1); // Swiped down -> previous company
            }
        }
    }, { passive: true });

    // Keyboard navigation when cylinder card is focused
    cylinderCard.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            cycleCompany(1);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            cycleCompany(-1);
        }
    });
}

function setArchTab(tabId) {
    activeArchTab = tabId;
    renderApp();
}

function toggleExpandedCanvas(state) {
    isExpandedViewActive = state;
    renderApp();
}

function setBlueprintMode(mode) {
    blueprintViewMode = mode;
    renderApp();
}

function initializeStaticProfile() {
    const p = portfolioData.profile;
    const nameEl = document.getElementById("prof-name");
    const roleEl = document.getElementById("prof-role");
    const metaEl = document.getElementById("prof-meta");
    const githubLink = document.getElementById("link-github");
    const linkedinLink = document.getElementById("link-linkedin");
    const emailLink = document.getElementById("link-email");
    const phoneLink = document.getElementById("link-phone");
    const phoneText = document.getElementById("link-phone-text");

    if (nameEl) nameEl.innerText = p.name;
    if (roleEl) roleEl.innerText = p.role;
    if (metaEl) {
        const metaParts = [p.subRole, p.location, p.relocation].filter(Boolean);
        metaEl.innerHTML = metaParts.join(" &bull; ");
    }
    if (githubLink) githubLink.href = p.github;
    if (linkedinLink) linkedinLink.href = p.linkedin;
    if (emailLink) emailLink.href = `mailto:${p.email}`;
    if (phoneLink && p.phone) {
        phoneLink.href = `tel:${p.phone.replace(/[\s\-]/g, '')}`;
        if (phoneText) phoneText.innerText = p.phone;
    }

    // Render Tech Stack Bar Segment
    const barContainer = document.getElementById("skills-matrix-bar");
    if (barContainer && portfolioData.careerDashboard && portfolioData.careerDashboard.skills) {
        barContainer.innerHTML = "";
        let count = 0;
        Object.entries(portfolioData.careerDashboard.skills).forEach(([category, list]) => {
            list.slice(0, 3).forEach(skill => {
                if (count < 15) {
                    const pill = document.createElement("span");
                    pill.className = "px-2.5 py-1 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs rounded font-medium transition-colors";
                    pill.innerText = skill;
                    barContainer.appendChild(pill);
                    count++;
                }
            });
        });
    }
}

function renderApp() {
    // Apply Dynamic Company Color Scheme
    document.documentElement.setAttribute('data-theme', selectedCompanyId);

    // Highlight Corporate Honors in top header based on active company
    ['allianz', 'yashtechnologies', 'persistentsystems'].forEach(cid => {
        const el = document.getElementById(`honor-${cid}`);
        if (el) {
            if (cid === selectedCompanyId) {
                el.className = "theme-badge font-semibold pl-2.5 py-1 rounded border transition-all text-xs";
            } else {
                el.className = "text-slate-400 pl-2.5 py-1 rounded border border-transparent transition-all text-xs";
            }
        }
    });

    // Expanded Canvas View Logic
    const overlayModal = document.getElementById("blueprint-expansion-overlay");
    if (overlayModal) {
        if (isExpandedViewActive) {
            overlayModal.classList.remove("hidden");
            overlayModal.classList.add("flex");
        } else {
            overlayModal.classList.remove("flex");
            overlayModal.classList.add("hidden");
        }
    }

    const selectedCompany = portfolioData.companies.find(c => c.id === selectedCompanyId);
    if (!selectedCompany) return;

    // Render 3D Cylindrical Work Experience Drum
    const cylinderDrum = document.getElementById("cylinder-drum");
    const indicatorDots = document.getElementById("cylinder-indicator-dots");

    if (cylinderDrum) {
        const total = portfolioData.companies.length;
        const currentIdx = portfolioData.companies.findIndex(c => c.id === selectedCompanyId);

        cylinderDrum.innerHTML = portfolioData.companies.map((c, idx) => {
            let roleClass = "";
            let clickAttr = "";

            if (idx === currentIdx) {
                roleClass = "cylinder-active";
            } else if (idx === (currentIdx - 1 + total) % total) {
                roleClass = "cylinder-prev";
                clickAttr = 'data-cycle="-1"';
            } else if (idx === (currentIdx + 1) % total) {
                roleClass = "cylinder-next";
                clickAttr = 'data-cycle="1"';
            } else {
                roleClass = "hidden";
            }

            return `
                <div class="cylinder-item ${roleClass} theme-card border rounded-lg p-2.5 flex items-center justify-between" ${clickAttr} title="Click to rotate to ${c.name}">
                    <div class="flex items-center gap-2 overflow-hidden">
                        <div class="w-1.5 h-7 rounded-full shrink-0" style="${idx === currentIdx ? 'background-color: var(--brand-accent); box-shadow: 0 0 10px var(--brand-glow);' : 'background-color: var(--brand-border);'}"></div>
                        <div class="truncate text-left">
                            <h3 class="text-xs sm:text-sm font-bold text-white truncate leading-snug">${c.name}</h3>
                            <div class="text-[11px] text-slate-400 truncate flex items-center gap-1.5 mt-0.5">
                                <span>${c.targetRole}</span>
                                <span class="opacity-40">&bull;</span>
                                <span class="font-mono text-[10px] theme-text-accent">${c.type}</span>
                            </div>
                        </div>
                    </div>
                    <div class="shrink-0 pl-2 text-right">
                        <span class="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded border theme-badge whitespace-nowrap block">${c.duration}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render Cylinder Indicator Dots
    if (indicatorDots) {
        indicatorDots.innerHTML = portfolioData.companies.map((c) => {
            const isActive = c.id === selectedCompanyId;
            return `
                <button data-company="${c.id}" class="w-2 h-2 rounded-full transition-all cursor-pointer ${
                    isActive ? 'scale-125' : 'opacity-40 hover:opacity-80'
                }" style="${
                    isActive
                    ? 'background-color: var(--brand-accent); box-shadow: 0 0 10px var(--brand-glow);'
                    : 'background-color: var(--brand-border);'
                }" aria-label="Select ${c.name}" title="${c.name} (${c.duration})"></button>
            `;
        }).join('');
    }

    // Update Sidebar Scope Details
    const sidebarRoleBadge = document.getElementById("sidebar-role-badge");
    const sidebarScopeDetails = document.getElementById("sidebar-scope-details");
    if (sidebarRoleBadge) {
        sidebarRoleBadge.innerText = selectedCompany.duration;
        sidebarRoleBadge.className = "text-xs font-mono font-medium theme-badge px-2 py-0.5 rounded";
    }
    if (sidebarScopeDetails) {
        sidebarScopeDetails.innerHTML = `
            <div class="font-bold text-white text-sm flex items-center justify-between">
                <span>${selectedCompany.name}</span>
                <span class="text-xs font-normal theme-text-accent font-mono">${selectedCompany.type}</span>
            </div>
            <div class="text-xs text-slate-300 mt-0.5">${selectedCompany.targetRole}</div>
            <div class="text-[11px] text-slate-400 mt-1 flex items-center gap-1 border-t theme-border pt-1.5">
                <i data-lucide="mouse" class="w-3 h-3 theme-text-accent"></i>
                <span>Use arrows or scroll cylinder at top to switch scope</span>
            </div>
        `;
    }

    // Executive KPI Metric Cards with dynamic company brand palette
    const kpiCompanyBadge = document.getElementById("kpi-box-company-badge");
    if (kpiCompanyBadge) {
        kpiCompanyBadge.innerText = selectedCompany.name;
    }

    const metricsContainer = document.getElementById("metrics-strip-container");
    if (metricsContainer && selectedCompany.metrics) {
        const brandKPIPalettes = {
            allianz: [
                { text: "text-[#38bdf8]", icon: "text-[#38bdf8]", iconBg: "bg-[#003781]/40 border-blue-400/50" },
                { text: "text-[#60a5fa]", icon: "text-[#60a5fa]", iconBg: "bg-[#003781]/40 border-blue-400/50" },
                { text: "text-[#38bdf8]", icon: "text-[#38bdf8]", iconBg: "bg-[#003781]/40 border-blue-400/50" },
                { text: "text-[#93c5fd]", icon: "text-[#93c5fd]", iconBg: "bg-[#003781]/40 border-blue-400/50" },
                { text: "text-[#dbeafe]", icon: "text-[#93c5fd]", iconBg: "bg-[#003781]/55 border-blue-300/60" }
            ],
            yashtechnologies: [
                { text: "text-[#f3e198]", icon: "text-[#f3e198]", iconBg: "bg-[#A89044]/30 border-[#A89044]/60" }, // Luminous Driftwood Gold
                { text: "text-[#faebae]", icon: "text-[#faebae]", iconBg: "bg-[#A89044]/30 border-[#A89044]/60" }, // Bright Driftwood
                { text: "text-[#99bbff]", icon: "text-[#99bbff]", iconBg: "bg-blue-900/40 border-blue-500/60" },   // Stratos Sky Navy
                { text: "text-[#f3e198]", icon: "text-[#f3e198]", iconBg: "bg-[#A89044]/30 border-[#A89044]/60" },
                { text: "text-[#ff8080]", icon: "text-[#ff8080]", iconBg: "bg-[#e63946]/30 border-[#e63946]/70" }  // Vibrant Crimson Red
            ],
            persistentsystems: [
                { text: "text-[#ff7a29]", icon: "text-[#ff7a29]", iconBg: "bg-[#FD5F07]/30 border-[#FD5F07]/60" }, // Blaze Orange
                { text: "text-[#ffa05c]", icon: "text-[#ffa05c]", iconBg: "bg-[#FD5F07]/25 border-[#ffa05c]/55" }, // Light Orange
                { text: "text-[#ff833b]", icon: "text-[#ff833b]", iconBg: "bg-orange-500/25 border-orange-400/50" },
                { text: "text-[#ffa05c]", icon: "text-[#ffa05c]", iconBg: "bg-[#FD5F07]/25 border-[#ffa05c]/55" },
                { text: "text-[#ff7a29]", icon: "text-[#ff7a29]", iconBg: "bg-[#FD5F07]/40 border-[#FD5F07]/75" }  // Midnight Blaze
            ]
        };

        const currentPalette = brandKPIPalettes[selectedCompanyId] || brandKPIPalettes.allianz;

        metricsContainer.innerHTML = selectedCompany.metrics.map((m, idx) => {
            const style = currentPalette[idx] || currentPalette[0];
            const valLen = m.value.length;
            const valSize = valLen <= 4 
                ? 'text-lg sm:text-xl xl:text-2xl font-black' 
                : valLen <= 7 
                    ? 'text-base sm:text-lg xl:text-xl font-extrabold' 
                    : 'text-sm sm:text-base font-bold';

            return `
                <div class="theme-card rounded-lg p-1.5 sm:p-2 flex flex-col justify-between items-center text-center h-full overflow-hidden hover:scale-[1.02] hover:border-slate-500 transition-all animate-fade-in group cursor-default" 
                     style="animation-delay: ${idx * 35}ms;" 
                     title="${m.label}: ${m.value} — ${m.sub}">
                    <div class="p-1 rounded-md border ${style.iconBg} shrink-0 mb-0.5 group-hover:scale-105 transition-transform">
                        <i data-lucide="${m.icon}" class="w-3.5 h-3.5 ${style.icon}"></i>
                    </div>
                    <div class="my-auto py-0.5 px-0.5 w-full flex items-center justify-center">
                        <span class="${valSize} tracking-tight ${style.text} block leading-tight select-none">${m.value}</span>
                    </div>
                    <div class="w-full mt-auto pt-1 border-t border-slate-800/60 flex flex-col justify-center">
                        <span class="text-[9.5px] sm:text-[10px] xl:text-[10.5px] font-bold uppercase tracking-wide text-slate-200 block leading-tight break-words">${m.label}</span>
                        <span class="text-[8.5px] sm:text-[9px] xl:text-[9.5px] text-slate-400 block leading-tight mt-0.5 break-words">${m.sub}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Production Defenses & Moats
    const moatsList = selectedCompany.moats || portfolioData.careerDashboard.moats;
    const moatsContainer = document.getElementById("moats-container");
    if (moatsContainer) {
        moatsContainer.innerHTML = moatsList.map(moat => `
            <div class="flex gap-2.5 items-start text-xs text-slate-300 theme-card p-2.5 rounded-lg">
                <i data-lucide="check" class="w-3.5 h-3.5 theme-text-accent shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">${moat}</span>
            </div>
        `).join('');
    }

    // Technical Baselines
    const baselinesList = selectedCompany.baselines || portfolioData.careerDashboard.baselines;
    const baselinesContainer = document.getElementById("baselines-container");
    if (baselinesContainer) {
        baselinesContainer.innerHTML = baselinesList.map(base => `
            <span class="px-2.5 py-1 bg-slate-950/70 border border-slate-800 text-slate-300 rounded text-xs font-mono">${base}</span>
        `).join('');
    }

    // Project Workspace & Architecture Specs
    const project = portfolioData.projects[activeProjectKey];
    if (project) {
        const contextBanner = document.getElementById("context-banner");
        if (contextBanner) {
            contextBanner.style.background = `linear-gradient(90deg, rgba(var(--brand-primary-rgb), 0.16) 0%, rgba(var(--brand-primary-rgb), 0.03) 100%)`;
            contextBanner.style.borderColor = `var(--brand-border)`;
            contextBanner.innerHTML = `
                <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                        <span class="h-2 w-2 rounded-full" style="background-color: var(--brand-accent);"></span>
                        <h2 class="text-xs font-bold uppercase tracking-wider text-white">${selectedCompany.name} Architecture Matrix</h2>
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed max-w-3xl">${project.impact}</p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <button data-action="toggle-canvas" data-state="true" class="theme-btn-primary px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer">
                        <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                        <span>Inspect Blueprint</span>
                    </button>
                </div>
            `;
        }

        const scopeProjectName = document.getElementById("scope-project-name");
        if (scopeProjectName) scopeProjectName.innerText = project.name;

        const activeTabContent = project.tabs[activeArchTab] || Object.values(project.tabs)[0];

        // Deliverables
        const bulletsContainer = document.getElementById("bullet-points-container");
        if (bulletsContainer) {
            bulletsContainer.innerHTML = activeTabContent.bullets.map(b => `
                <li class="flex gap-2 items-start leading-relaxed text-xs">
                    <span class="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style="background-color: var(--brand-accent);"></span>
                    <span>${b}</span>
                </li>
            `).join('');
        }

        // Tech Stack Tags
        const stackContainer = document.getElementById("scope-project-stack");
        if (stackContainer) {
            stackContainer.innerHTML = project.stack.map(st => `
                <span class="px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700/80 rounded text-[11px] font-mono">${st}</span>
            `).join('');
        }

        // Architecture Tabs Switcher
        const tabsContainer = document.getElementById("arch-tabs-container");
        if (tabsContainer) {
            tabsContainer.innerHTML = "";
            Object.entries(project.tabs).forEach(([tabKey, tabData]) => {
                const isActive = tabKey === activeArchTab;
                const tabButton = document.createElement("button");
                tabButton.className = `w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 cursor-pointer ${
                    isActive ? "text-white shadow-sm" : "theme-card text-slate-400 hover:text-slate-200"
                }`;
                tabButton.setAttribute("data-tab", tabKey);

                if (isActive) {
                    tabButton.style.backgroundColor = 'rgba(var(--brand-primary-rgb), 0.18)';
                    tabButton.style.borderColor = 'var(--brand-border-active)';
                    tabButton.style.boxShadow = '0 0 14px -3px var(--brand-glow)';
                }

                tabButton.innerHTML = `
                    <div class="p-1 rounded mt-0.5 border ${isActive ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}">
                        <i data-lucide="${isActive ? 'layers' : 'workflow'}" class="w-3.5 h-3.5"></i>
                    </div>
                    <div class="overflow-hidden">
                        <div class="text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-slate-300'}">${tabData.title}</div>
                        <p class="text-xs text-slate-400 mt-0.5 leading-snug truncate">${tabData.description}</p>
                    </div>
                `;
                tabsContainer.appendChild(tabButton);
            });
        }

        // Geometric Dynamic SVG Matrix Engine Update Call
        const canvasVis = document.getElementById("layer-canvas-visualization");
        if (canvasVis) {
            canvasVis.innerHTML = generateStructuralVisual(activeTabContent.visualType);
        }

        // Code Specifications Terminal Update Trigger
        const specHeaderTitle = document.getElementById("spec-header-title");
        if (specHeaderTitle) specHeaderTitle.innerText = activeTabContent.specTitle;

        const codeBlock = document.getElementById("spec-code-block");
        if (codeBlock) {
            codeBlock.textContent = activeTabContent.code;
            codeBlock.classList.remove("animate-fade-in");
            void codeBlock.offsetWidth;
            codeBlock.classList.add("animate-fade-in");
        }

        const specTradeoffs = document.getElementById("spec-tradeoffs");
        if (specTradeoffs) specTradeoffs.innerText = activeTabContent.tradeoffs;

        const specBottlenecks = document.getElementById("spec-bottlenecks");
        if (specBottlenecks) specBottlenecks.innerText = activeTabContent.bottlenecks;

        // Blueprint Modal Updates
        if (selectedCompany.blueprint) {
            const bp = selectedCompany.blueprint;
            const titleEl = document.getElementById("blueprint-title");
            const descEl = document.getElementById("blueprint-desc");
            const regEl = document.getElementById("blueprint-registry");
            const mediaEl = document.getElementById("blueprint-media");
            const specsEl = document.getElementById("blueprint-specs");
            const togglesEl = document.getElementById("blueprint-view-toggles");
            const extLinkEl = document.getElementById("blueprint-external-link");

            if (titleEl) titleEl.innerText = bp.title;
            if (descEl) descEl.innerText = bp.overview;
            if (regEl) regEl.innerText = `Blueprint Reference: ${bp.registry}`;

            // Header toggles & action link
            if (togglesEl) {
                if (bp.interactiveUrl) {
                    const isInteractive = blueprintViewMode === "interactive";
                    togglesEl.innerHTML = `
                        <button data-blueprint-mode="interactive" class="px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                            isInteractive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-800 text-slate-400 hover:text-white'
                        }">
                            <i data-lucide="play" class="w-3 h-3 text-emerald-400"></i>
                            Interactive Simulation
                        </button>
                        <button data-blueprint-mode="static" class="px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                            !isInteractive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-800 text-slate-400 hover:text-white'
                        }">
                            <i data-lucide="image" class="w-3 h-3"></i>
                            Static Diagram
                        </button>
                    `;
                } else {
                    togglesEl.innerHTML = `
                        <span class="px-2.5 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded text-xs font-medium">
                            Architectural Specification
                        </span>
                    `;
                }
            }

            if (extLinkEl) {
                if (bp.interactiveUrl) {
                    extLinkEl.innerHTML = `
                        <a href="${bp.interactiveUrl}" target="_blank" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors">
                            <span>Open Fullscreen Studio</span>
                            <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-400"></i>
                        </a>
                    `;
                } else {
                    extLinkEl.innerHTML = '';
                }
            }

            if (mediaEl) {
                if (bp.interactiveUrl && blueprintViewMode === "interactive") {
                    mediaEl.innerHTML = `
                        <div class="w-full h-full min-h-[560px] rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950 flex flex-col">
                            <iframe src="${bp.interactiveUrl}?embed=true" class="w-full h-full flex-1 border-0" title="${bp.title}"></iframe>
                        </div>
                    `;
                } else if (bp.image) {
                    mediaEl.innerHTML = `
                        <div class="w-full h-full flex flex-col justify-center items-center p-4 relative">
                            <img src="${bp.image}" alt="${bp.title}" width="1200" height="675" loading="lazy" decoding="async" class="max-w-full max-h-[72vh] object-contain rounded-lg shadow-xl" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'text-slate-500 text-xs font-mono border border-dashed border-slate-800 p-8 rounded\\'><i data-lucide=\\'image-off\\' class=\\'w-8 h-8 mx-auto mb-2 text-slate-600\\'></i> Blueprint Frame Available:<br><span class=\\'text-slate-300 font-bold\\'>${bp.image}</span></div>'; if (window.lucide) lucide.createIcons();">
                            <span class="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 px-2 py-1 rounded text-xs font-mono text-slate-400">${bp.registry}</span>
                        </div>
                    `;
                } else {
                    mediaEl.innerHTML = `
                        <div class="w-full h-full flex flex-col justify-center items-center p-8 text-center bg-slate-950 animate-fade-in">
                            <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl mb-4">
                                <i data-lucide="cpu" class="w-10 h-10 text-slate-400"></i>
                            </div>
                            <span class="text-xs uppercase font-semibold tracking-wider text-slate-400 mb-1">Architecture Specification</span>
                            <h4 class="text-base font-bold text-white mb-2">${bp.title}</h4>
                            <p class="text-xs text-slate-400 max-w-lg leading-relaxed">${bp.overview}</p>
                            <div class="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                                Reference: ${bp.registry}
                            </div>
                        </div>
                    `;
                }
            }

            if (specsEl && bp.specs) {
                specsEl.innerHTML = bp.specs.map(spec => `
                    <div class="flex gap-2.5 items-start text-xs text-slate-400">
                        <i data-lucide="${spec.icon}" class="w-4 h-4 text-slate-400 shrink-0 mt-0.5"></i>
                        <span><strong class="text-slate-200">${spec.label}:</strong> ${spec.desc}</span>
                    </div>
                `).join('');
            }
        }
    }

    // Re-render Lucide SVG icons if present
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

// Custom Architectural UI Micro-Engine
function generateStructuralVisual(type) {
    if (type === "flow-allianz") {
        return `
            <div class="flex flex-col items-center gap-2 w-full text-slate-400">
                <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">LangGraph Topology</div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[9px] text-center font-semibold text-slate-200">Guardrails Validation Node</div>
                <div class="w-full grid grid-cols-2 gap-1.5">
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">Weather API</div>
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">Coverage Cache</div>
                </div>
                <div class="w-full grid grid-cols-3 gap-1">
                    <div class="bg-slate-900 border border-slate-800 p-0.5 rounded text-[7px] text-center text-slate-300">Fraud Node</div>
                    <div class="bg-slate-900 border border-slate-800 p-0.5 rounded text-[7px] text-center text-slate-300">Reserve Node</div>
                    <div class="bg-slate-900 border border-slate-800 p-0.5 rounded text-[7px] text-center text-slate-300">Triage Node</div>
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[8px] font-mono text-slate-400 text-center">
                    Foundry GPT-5.4 mini
                </div>
            </div>
        `;
    } else if (type === "flow-sql") {
        return `
            <div class="flex flex-col items-center gap-2 w-full text-slate-400">
                <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Text-to-SQL Graph</div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[9px] text-center font-semibold text-slate-200">Natural Language Gateway (FastAPI)</div>
                <div class="w-full grid grid-cols-2 gap-1.5">
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">Short-Term Session Memory</div>
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">Long-Term Schema Store</div>
                </div>
                <div class="w-full grid grid-cols-2 gap-1">
                    <div class="bg-slate-900 border border-slate-800 p-0.5 rounded text-[7px] text-center text-slate-300">CrewAI Synthesizer</div>
                    <div class="bg-slate-900 border border-slate-800 p-0.5 rounded text-[7px] text-center text-slate-300">AST Dialect Validator</div>
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[8px] font-mono text-slate-400 text-center">
                    Google Gemini 2.5
                </div>
            </div>
        `;
    } else if (type === "vector-rag") {
        return `
            <div class="flex flex-col items-center gap-2 w-full text-slate-400">
                <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Codebase Knowledge Graph</div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[9px] text-center font-semibold text-slate-200">Repository AST Chunk Parser</div>
                <div class="w-full grid grid-cols-2 gap-1.5">
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">vLLM Batch Embeddings</div>
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">Vector Store Upsert</div>
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 p-1 rounded text-[8px] text-center font-medium text-slate-300">
                    Similarity Search & Cache Layer
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[8px] font-mono text-slate-400 text-center">
                    FastAPI + AWS Bedrock
                </div>
            </div>
        `;
    } else if (type === "vector-allianz") {
        return `
            <div class="w-full flex flex-col gap-1.5 text-slate-400">
                <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center">Stream Ingestion Fabric</div>
                <div class="grid grid-cols-2 gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded">
                    <div class="text-[8px] p-0.5 text-center bg-slate-950 rounded text-slate-300">Managed Kafka</div>
                    <div class="text-[8px] p-0.5 text-center bg-slate-950 rounded text-slate-300">Azure Event Hubs</div>
                </div>
                <div class="text-[9px] text-slate-500 text-center font-medium">&darr; Stream Pipeline &darr;</div>
                <div class="bg-slate-900 border border-slate-800 p-1.5 rounded-lg text-center text-[9px] text-slate-200">
                    Azure Durable Functions Orchestrator
                    <div class="text-[8px] text-slate-400 mt-0.5">Kafka Ingestion &rarr; LangGraph Activity &rarr; Hot Blob Storage</div>
                </div>
            </div>
        `;
    } else if (type === "guardrails-allianz") {
        return `
            <div class="w-full flex flex-col items-center gap-1.5 text-slate-400">
                <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Observability & Telemetry</div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-2 text-left flex flex-col gap-1">
                    <div class="flex items-center gap-1.5 text-[8px] font-semibold text-slate-300">
                        <span class="h-1.5 w-1.5 rounded-full bg-blue-400"></span> Dual-Emit Observability
                    </div>
                    <div class="grid grid-cols-2 gap-1 text-[7px] font-mono text-slate-400 mt-1">
                        <div>&bull; Ingestion Rate</div>
                        <div>&bull; Agent Latency</div>
                        <div>&bull; Model Duration</div>
                        <div>&bull; Cache Hit Ratio</div>
                    </div>
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[8px] text-center text-slate-300 font-medium">
                    Application Insights & Dynatrace
                </div>
            </div>
        `;
    } else if (type === "curation-rag") {
        return `
            <div class="flex flex-col items-center gap-2 w-full text-slate-400">
                <div class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Dataset Curation & Serving</div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[9px] text-center font-semibold text-slate-200">Multi-Source Dataset Aggregator</div>
                <div class="w-full grid grid-cols-2 gap-1.5">
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">TRL (LoRA/QLoRA)</div>
                    <div class="bg-slate-900 border border-slate-800 p-1 rounded text-[8px] font-medium text-center text-slate-300">Perplexity Filter</div>
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 p-1 rounded text-[8px] text-center font-medium text-slate-300">
                    vLLM Continuous Batching Engine
                </div>
                <div class="w-full bg-slate-900 border border-slate-800 rounded p-1 text-[8px] font-mono text-slate-400 text-center">
                    FastAPI Model Serving (-50% Latency)
                </div>
            </div>
        `;
    }
    return "";
}

// Global Event Delegation (Zero inline onclick handlers required)
function setupGlobalEventDelegation() {
    document.addEventListener("click", (e) => {
        // Cycle buttons or cylinder items
        const cycleBtn = e.target.closest("[data-cycle]");
        if (cycleBtn) {
            const dir = parseInt(cycleBtn.dataset.cycle, 10);
            if (!isNaN(dir)) {
                cycleCompany(dir);
                return;
            }
        }

        // Direct company selection (e.g. indicator dots)
        const companyBtn = e.target.closest("[data-company]");
        if (companyBtn) {
            const companyId = companyBtn.dataset.company;
            if (companyId) {
                setAppState(companyId);
                return;
            }
        }

        // Architecture Tab switches
        const tabBtn = e.target.closest("[data-tab]");
        if (tabBtn) {
            const tabId = tabBtn.dataset.tab;
            if (tabId) {
                setArchTab(tabId);
                return;
            }
        }

        // Blueprint toggle actions
        const actionBtn = e.target.closest("[data-action]");
        if (actionBtn) {
            const action = actionBtn.dataset.action;
            if (action === "toggle-canvas") {
                const state = actionBtn.dataset.state === "true";
                toggleExpandedCanvas(state);
                return;
            }
        }

        // Blueprint mode buttons
        const modeBtn = e.target.closest("[data-blueprint-mode]");
        if (modeBtn) {
            const mode = modeBtn.dataset.blueprintMode;
            if (mode) {
                setBlueprintMode(mode);
                return;
            }
        }
    });
}

// Initialization Lifecycle
function initPortfolioApp() {
    document.documentElement.setAttribute('data-theme', selectedCompanyId);
    initializeStaticProfile();
    renderApp();
    setupCylinderInteractions();
    setupGlobalEventDelegation();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioApp);
} else {
    initPortfolioApp();
}
