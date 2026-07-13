// Web Audio API Synthesizer for Retro Game Beeps
let audioCtx = null;
function playBeep(frequency, duration, type = "sine") {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.log("Audio not supported or blocked");
  }
}

// Conversation Dialogue Script
const RESPONSES = {
  about: `
    <p>I am <strong>Aman Kumar</strong>, currently pursuing my <strong>M.Tech in CSSP at the Indian Institute of Technology (IIT) Patna (7.69 CPI)</strong>. My focus lies at the intersection of AI orchestration, algorithmic optimization, and real-time computer vision systems.</p>
    <p>Before entering IIT Patna, I worked as a Systems Engineer at <strong>Tata Consultancy Services (TCS)</strong> driving complex data pipeline automations, and at <strong>InfoVision Labs</strong> where I debugged and optimized high-performance Python backends.</p>
    <p><strong>My Vision & Trajectory:</strong> I see myself architecting high-agency agentic platforms and robust AI-Native systems that solve critical production constraints. Rather than just applying models, my goal is to design scalable systems that integrate deterministic logic with generative models, enabling true autonomous intelligence in production workflows.</p>
    
    <div id="about-collapsible" class="collapsible-wrapper collapsed">
      <div class="vision-roadmap">
        <div class="roadmap-header">🎯 CORE MISSION PARADIGMS</div>
        <div class="roadmap-grid">
          <div class="roadmap-item">
            <span class="roadmap-marker">01</span>
            <div class="roadmap-content">
              <h4>Agentic Networks at Scale</h4>
              <p>Architecting secure, multi-agent workflows with self-healing, closed-loop execution logic.</p>
            </div>
          </div>
          <div class="roadmap-item">
            <span class="roadmap-marker">02</span>
            <div class="roadmap-content">
              <h4>Advanced Computer Vision</h4>
              <p>Deploying optimized Vision Transformers (ViTs) and real-time detection models in high-throughput pipelines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button id="btn-about-expand" class="console-toggle-btn">VIEW PARADIGMS & VISION 🔓</button>
  `,
  skills: `
    <div class="skills-showcase">
      <div class="skills-showcase-header">
        <div class="skills-category-tag">COGNITIVE STACK</div>
        <h2 class="skills-showcase-title">Technical Capabilities</h2>
      </div>

      <div class="skills-showcase-grid collapsed">
        <!-- Card 1: AI & LLM Architecture -->
        <div class="skills-showcase-card">
          <div class="card-showcase-header">
            <h3>AI & LLM Architecture</h3>
            <svg class="card-showcase-icon icon-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"/>
            </svg>
          </div>
          <div class="card-showcase-tags">
            <span class="showcase-tag">Agentic Workflows</span>
            <span class="showcase-tag">Multi-Agent Systems</span>
            <span class="showcase-tag">Structured Output</span>
            <span class="showcase-tag">RAG Pipelines</span>
            <span class="showcase-tag">LLM Orchestration</span>
            <span class="showcase-tag">Prompt Engineering</span>
          </div>
        </div>

        <!-- Card 2: Computer Vision / ML -->
        <div class="skills-showcase-card">
          <div class="card-showcase-header">
            <h3>Computer Vision / ML</h3>
            <svg class="card-showcase-icon icon-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <div class="card-showcase-tags">
            <span class="showcase-tag">Vision Transformers (ViT)</span>
            <span class="showcase-tag">PyTorch</span>
            <span class="showcase-tag">YOLO v8/v9</span>
            <span class="showcase-tag">CNN</span>
            <span class="showcase-tag">OpenCV</span>
            <span class="showcase-tag">TensorFlow</span>
            <span class="showcase-tag">Scikit-learn</span>
          </div>
        </div>

        <!-- Card 3: Data, Systems & Cloud -->
        <div class="skills-showcase-card">
          <div class="card-showcase-header">
            <h3>Data, Systems & Cloud</h3>
            <svg class="card-showcase-icon icon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
              <path d="M3 12A9 3 0 0 0 21 12"/>
            </svg>
          </div>
          <div class="card-showcase-tags">
            <span class="showcase-tag">FAISS VectorDB</span>
            <span class="showcase-tag">SQLite</span>
            <span class="showcase-tag">Python</span>
            <span class="showcase-tag">JavaScript / HTML / CSS</span>
            <span class="showcase-tag">SQL</span>
            <span class="showcase-tag">Java</span>
            <span class="showcase-tag">Render Deployment</span>
            <span class="showcase-tag">Git</span>
          </div>
        </div>
      </div>
      <button class="btn-skills-expand" id="btn-skills-expand">VIEW MORE CAPABILITIES 🔓</button>
    </div>
  `,
  experience: `
    <p class="pitch-text"><strong>RETRIEVING PROFESSIONAL EXPERIENCE LOGS:</strong></p>
    <div style="margin: 0.8rem 0; font-size: 0.82rem; line-height: 1.5; border-left: 2px solid var(--color-neon-purple); padding-left: 0.8rem; margin-bottom: 1rem;">
      <strong style="color: var(--color-neon-purple);">Tata Consultancy Services (TCS)</strong><br>
      <span style="color: #64748b; font-size: 0.76rem;">Assistant System Engineer Trainee | Kolkata, India (Feb 2022 - July 2023)</span><br>
      • Optimized SQL based data pipelines to improve data availability for analytics and reporting workflows.<br>
      • Developed Java automation tools to streamline reporting processes, reducing manual effort by 20%.<br>
      • Performed data-driven root cause analysis on production systems to identify and resolve performance issues.
    </div>
    <div style="margin: 0.8rem 0; font-size: 0.82rem; line-height: 1.5; border-left: 2px solid var(--color-neon-green); padding-left: 0.8rem; margin-bottom: 1rem;">
      <strong style="color: var(--color-neon-green);">InfoVision Labs India Pvt. Ltd.</strong><br>
      <span style="color: #64748b; font-size: 0.76rem;">Software Engineer L1, FTE | Pune, India (Sept 2021)</span><br>
      • Wrote test cases and debugged Python modules to improve code quality and reliability.<br>
      • Gained practical exposure to software testing lifecycle (STLC).
    </div>
  `,
  projects: `
    <p class="pitch-text"><strong>DATABASE QUERY COMPLETE: 2 ACTIVE INSTANCES RETRIEVED</strong></p>
    <div style="margin: 0.8rem 0; font-size: 0.82rem; line-height: 1.5; border-left: 2px solid var(--color-neon-green); padding-left: 0.8rem; margin-bottom: 1rem;">
      <strong style="color: var(--color-neon-green);">Quest 1: Neuro-Symbolic CV Tracker (AeroViT)</strong><br>
      • Highlights: 58x Compute Slashing | 89% Detection AUC | 80% False Alarm Pruning.<br>
      • Software: Decoupled Spatio-Temporal ViT telemetry, 2D FFT spectral Radial Mask filtering, and EKF trajectory checks.
    </div>
    <div style="margin: 0.8rem 0; font-size: 0.82rem; line-height: 1.5; border-left: 2px solid var(--color-neon-purple); padding-left: 0.8rem; margin-bottom: 1rem;">
      <strong style="color: var(--color-neon-purple);">Quest 2: AI-driven Business Intelligence (BI) platform (SaaS Analytics)</strong><br>
      • Highlights: Math-Verified Analytics | &lt;15ms Cached Retrieval | 7-Agent AI Pipeline.<br>
      • Software: 3-tier cache waterfall (Memory &rarr; Redis &rarr; Postgres) and async self-healing JSON recovery (Codemender).
    </div>
    <p class="pitch-text" style="color: #64748b; font-size: 0.78rem; margin-top: 0.8rem; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 0.6rem;">
      👉 Select <strong style="color: var(--color-text-bright);">PROJECT SHOWROOM 🏰</strong> from the header menu or click <a href="javascript:void(0)" onclick="window.openShowroom()" style="color: var(--color-neon-green); text-decoration: underline; font-weight: bold;">[LAUNCH INTERACTIVE SHOWROOM]</a> to open video demos and visual metrics galleries.
    </p>
  `,
  contact: `
    <p>Establish direct communication channels through the following ports:</p>
    <p style="margin: 0.8rem 0;">
      <svg height="14" width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 6px; position: relative; top: -1.5px; color: #10B981;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> <strong>Portfolio Basecamp:</strong> <a href="https://amankr2615.github.io/aman_portfolio/" target="_blank" style="color:#10B981;">amankr2615.github.io/aman_portfolio/</a><br>
      <svg height="14" width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 6px; position: relative; top: -1.5px; color: #10B981;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> <strong>Academic Email:</strong> <a href="mailto:aman_2411ee27@iitp.ac.in" style="color:#10B981;">aman_2411ee27@iitp.ac.in</a><br>
      <svg height="14" width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 6px; position: relative; top: -1.5px; color: #10B981;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> <strong>Personal Email:</strong> <a href="mailto:aman.kr2615@gmail.com" style="color:#10B981;">aman.kr2615@gmail.com</a><br>
      📞 <strong>Phone:</strong> <a href="tel:+919325815142" style="color:#A78BFA;">+91-9325815142</a><br>
      <svg height="14" width="14" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 6px; position: relative; top: -1.5px; color: #10B981;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aman-kumar-26v15m" target="_blank" style="color:#10B981;">aman-kumar-26v15m</a><br>
      <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 6px; position: relative; top: -1px; color: #A78BFA;"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> <strong>GitHub:</strong> <a href="https://github.com/amankr2615" target="_blank" style="color:#A78BFA;">github.com/amankr2615</a>
    </p>
  `
};

document.addEventListener("DOMContentLoaded", () => {
  const lampAssembly = document.getElementById("lamp-assembly");
  const lampCord = document.getElementById("lamp-cord");
  const landingContainer = document.getElementById("landing-container");
  const rpgDashboard = document.getElementById("rpg-dashboard");
  const btnVenture = document.getElementById("btn-venture");
  
  const dialogueHistory = document.getElementById("dialogue-history");
  const optionButtons = document.querySelectorAll(".option-btn");
  const statFills = document.querySelectorAll(".stat-track-fill");

  let isLampOn = false;



  // Pull Cord Action
  function toggleLamp() {
    isLampOn = !isLampOn;
    if (isLampOn) {
      lampAssembly.classList.add("on");
      landingContainer.classList.add("lamp-on");
      playBeep(440, 0.15, "triangle");
      setTimeout(() => playBeep(880, 0.1, "sine"), 80);
    } else {
      lampAssembly.classList.remove("on");
      landingContainer.classList.remove("lamp-on");
      playBeep(220, 0.15, "triangle");
    }
  }

  lampCord.addEventListener("mousedown", () => {
    lampCord.style.transform = "translateY(15px)";
  });
  
  lampCord.addEventListener("mouseup", () => {
    lampCord.style.transform = "translateY(0)";
    toggleLamp();
  });

  // Click anywhere on screen to toggle the light (except clicking the Venture button)
  landingContainer.addEventListener("click", (e) => {
    if (e.target !== btnVenture && !btnVenture.contains(e.target)) {
      // Prevent double trigger if clicking the cord itself which has mouseup
      if (e.target !== lampCord && !lampCord.contains(e.target)) {
        toggleLamp();
      }
    }
  });

  // Venture Forth transitions
  btnVenture.addEventListener("click", () => {
    // Transition classes instantly so the browser starts animating immediately
    landingContainer.classList.add("hidden");
    rpgDashboard.classList.add("active");
    
    // Once opacity transition completes, remove from layout tree to save rendering cycles
    const handleTransitionEnd = (e) => {
      if (e.propertyName === "opacity" && landingContainer.classList.contains("hidden")) {
        landingContainer.style.display = "none";
        landingContainer.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
    landingContainer.addEventListener("transitionend", handleTransitionEnd);
    
    // Defer AudioContext thread negotiation to prevent layout blocking
    setTimeout(() => {
      playBeep(600, 0.2, "sine");
    }, 30);
    
    // Animate character stats loading
    setTimeout(() => {
      statFills.forEach(fill => {
        const targetPercent = fill.dataset.percent;
        fill.style.width = targetPercent + "%";
      });
      playBeep(1200, 0.3, "triangle");
    }, 600);
  });

  // Top Nav Recruiter Buttons
  const btnNavLogin = document.getElementById("btn-nav-login");
  const btnNavProjects = document.getElementById("btn-nav-projects");

  btnNavLogin.addEventListener("click", () => {
    playBeep(300, 0.25, "triangle");
    rpgDashboard.classList.remove("active");
    
    // Restore layout element before removing hidden class
    landingContainer.style.display = "flex";
    void landingContainer.offsetWidth; // Force reflow
    landingContainer.classList.remove("hidden");
    
    // Reset lamp states
    isLampOn = false;
    lampAssembly.classList.remove("on");
    landingContainer.classList.remove("lamp-on");
    
    // Reset stats loaders
    statFills.forEach(fill => {
      fill.style.width = "0%";
    });

    // Reset dialogue history console
    resetDialogueConsole();
  });

  // Static Dossier Card toggle
  const btnDossierExpand = document.getElementById("btn-dossier-expand");
  const dossierCollapsible = document.getElementById("dossier-collapsible");
  if (btnDossierExpand && dossierCollapsible) {
    btnDossierExpand.addEventListener("click", () => {
      playBeep(700, 0.08, "triangle");
      const isCollapsed = dossierCollapsible.classList.toggle("collapsed");
      btnDossierExpand.textContent = isCollapsed ? "VIEW MORE EDUCATION 🔓" : "COLLAPSE DETAILS 🔒";
    });
  }

  // Project Showroom Modal Setup
  const projectShowroom = document.getElementById("project-showroom");
  const btnCloseShowroom = document.getElementById("btn-close-showroom");
  const tabButtons = document.querySelectorAll(".showroom-tab-btn");
  const projectViews = document.querySelectorAll(".project-view");
  const aerovitVideo = document.getElementById("aerovit-video");

  let videoLoadTimer = null;

  function openShowroom() {
    projectShowroom.classList.add("active");
    playBeep(900, 0.15, "sine");
    
    // Dynamically load the video source on first open (deferring loading from main page load)
    const videoSource = document.getElementById("video-source");
    if (aerovitVideo && videoSource && !videoSource.src) {
      videoSource.src = videoSource.getAttribute("data-src");
      aerovitVideo.load();
    }
    
    // Play video directly on user interaction thread to bypass browser autoplay blocks
    if (aerovitVideo) {
      aerovitVideo.play().catch(e => console.log("Auto-play prevented", e));
    }
  }
  
  // Expose to window for inline console links
  window.openShowroom = openShowroom;

  function closeShowroom() {
    projectShowroom.classList.remove("active");
    playBeep(300, 0.15, "triangle");
    if (aerovitVideo) {
      aerovitVideo.pause();
    }
  }

  btnNavProjects.addEventListener("click", openShowroom);
  btnCloseShowroom.addEventListener("click", closeShowroom);

  // Tab switching
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetProj = btn.dataset.project;
      playBeep(700, 0.08, "triangle");
      
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      projectViews.forEach(view => {
        view.classList.remove("active");
        if (view.id === `proj-${targetProj}`) {
          view.classList.add("active");
        }
      });

      if (targetProj === "aerovit" && aerovitVideo) {
        aerovitVideo.play().catch(e => {});
      } else if (aerovitVideo) {
        aerovitVideo.pause();
      }
    });
  });

  // Carousel navigation for screenshots
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const carouselDots = document.querySelectorAll(".carousel-nav-btn");
  carouselDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const targetIndex = parseInt(dot.dataset.slide);
      playBeep(600, 0.05, "sine");
      
      carouselDots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      
      carouselSlides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === targetIndex) {
          slide.classList.add("active");
        }
      });
    });
  });

  const DEFAULT_DIALOGUE_HTML = `
        <div class="msg-bubble bot">
          Welcome, explorer. I am Aman Kumar's system dialogue interface. 
          Query my databases below to extract key capabilities.
        </div>
        <div class="console-bio-card">
          <div class="bio-header">
            <span class="bio-tag">OPERATIVE DOSSIER</span>
            <span class="bio-status">ONLINE</span>
          </div>
          
          <div class="bio-intro-line">Designing Systems, Solving Bottlenecks, Delivering Outsized Leverage.</div>
          
          <p class="bio-pitch">
            M.Tech candidate at <strong>IIT Patna</strong> specializing in AI-Native systems, Agentic orchestration, and real-time computer vision pipelines. Focused on architecting robust systems that solve real production constraints.
          </p>

          <!-- Education Card Table Section -->
          <div class="console-education-section">
            <div class="education-section-title">Education</div>
            
            <div class="education-card">
              <div class="edu-left">
                <div class="edu-degree">M.Tech (CSSP)</div>
                <div class="edu-school">Indian Institute of Technology, Patna</div>
              </div>
              <div class="edu-right">
                <div class="edu-grade grade-green">CPI: 7.69</div>
                <div class="edu-year">July 2024 - July 2026</div>
              </div>
            </div>

            <div class="education-card">
              <div class="edu-left">
                <div class="edu-degree">B.Tech (ECE)</div>
                <div class="edu-school">MIT World Peace University, Pune</div>
              </div>
              <div class="edu-right">
                <div class="edu-grade grade-purple">CGPA: 9.48</div>
                <div class="edu-year">2017 - 2021</div>
              </div>
            </div>
          </div>
        </div>
  `;

  function resetDialogueConsole() {
    dialogueHistory.innerHTML = DEFAULT_DIALOGUE_HTML;
    optionButtons.forEach(b => b.classList.remove("active"));
  }

  // Click on avatar portrait to restore original Operative Dossier view
  const avatarContainer = document.querySelector(".avatar-container");
  if (avatarContainer) {
    avatarContainer.addEventListener("click", () => {
      playBeep(850, 0.1, "sine");
      resetDialogueConsole();
    });
  }

  // Dialogue selection
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.chat;
      
      playBeep(700, 0.08, "triangle");

      const wasActive = btn.classList.contains("active");

      // Reset active states
      optionButtons.forEach(b => b.classList.remove("active"));

      // If already active, deselect and restore dossier bio
      if (wasActive) {
        resetDialogueConsole();
        return;
      }

      btn.classList.add("active");

      // Intercept Projects trigger to show interactive Showroom overlay modal
      if (type === "projects") {
        openShowroom();
        return;
      }

      // Clear dialogue console and render loader immediately
      dialogueHistory.innerHTML = `<span class="spinning-circle-loader console-loader" style="margin: 1rem auto; display: flex;"><span class="loader-bolt">⚡</span><span class="circle-line line-1"></span><span class="circle-line line-2"></span><span class="circle-line line-3"></span></span>`;
      
      dialogueHistory.style.opacity = "1";
      dialogueHistory.style.transform = "translateY(0)";

      // Disable choices temporarily during delay
      optionButtons.forEach(b => b.style.pointerEvents = "none");

      setTimeout(() => {
        // Clear the loader
        dialogueHistory.innerHTML = "";

        // Play terminal reply noise
        playBeep(900, 0.1, "sine");
        
        // Append Bot response block
        const botBubble = document.createElement("div");
        botBubble.className = "msg-bubble bot";
        botBubble.innerHTML = RESPONSES[type];
        dialogueHistory.appendChild(botBubble);
        
        // Dynamically bind skills expand toggle
        if (type === "skills") {
          const btnExpand = botBubble.querySelector("#btn-skills-expand");
          const grid = botBubble.querySelector(".skills-showcase-grid");
          if (btnExpand && grid) {
            btnExpand.addEventListener("click", () => {
              playBeep(700, 0.08, "triangle");
              const isCollapsed = grid.classList.toggle("collapsed");
              btnExpand.textContent = isCollapsed ? "VIEW MORE CAPABILITIES 🔓" : "COLLAPSE MATRIX 🔒";
            });
          }
        }
        
        // Dynamically bind about expand toggle
        if (type === "about") {
          const btnExpand = botBubble.querySelector("#btn-about-expand");
          const collapsible = botBubble.querySelector("#about-collapsible");
          if (btnExpand && collapsible) {
            btnExpand.addEventListener("click", () => {
              playBeep(700, 0.08, "triangle");
              const isCollapsed = collapsible.classList.toggle("collapsed");
              btnExpand.textContent = isCollapsed ? "VIEW PARADIGMS & VISION 🔓" : "COLLAPSE PARADIGMS 🔒";
            });
          }
        }
        
        dialogueHistory.scrollTop = 0;
        
        // Re-enable options
        optionButtons.forEach(b => b.style.pointerEvents = "auto");
      }, 250);
    });
  });

  // Image Lightbox Overlay Actions
  const imageLightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const btnCloseLightbox = document.querySelector(".lightbox-close-btn");
  const galleryImages = document.querySelectorAll(".gallery-img");
  const carouselSlidesList = document.querySelectorAll(".carousel-slide");

  let currentImageArray = [];
  let currentImageIndex = 0;

  function openLightbox(imgList, index) {
    currentImageArray = Array.from(imgList);
    currentImageIndex = index;
    updateLightboxContent();
    imageLightbox.classList.add("active");
    playBeep(800, 0.08, "sine");
  }

  function updateLightboxContent() {
    if (currentImageArray.length === 0) return;
    const activeImg = currentImageArray[currentImageIndex];
    lightboxImg.src = activeImg.src;
    lightboxCaption.textContent = activeImg.alt || "Visual Log Detail";
  }

  // Register click events on gallery thumbs (AeroViT)
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(galleryImages, index);
    });
  });

  // Register click events on carousel screenshots (KPI)
  carouselSlidesList.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(carouselSlidesList, index);
    });
  });

  // Hover cursor indicators based on mouse alignment (left/right) on lightbox overlay
  if (imageLightbox) {
    imageLightbox.addEventListener("mousemove", (e) => {
      // Exclude close button from cursor arrow changes
      if (e.target === btnCloseLightbox) {
        imageLightbox.style.cursor = "default";
        return;
      }
      
      const width = window.innerWidth;
      if (e.clientX > width / 2) {
        imageLightbox.style.cursor = "e-resize"; // Right arrow cursor
      } else {
        imageLightbox.style.cursor = "w-resize"; // Left arrow cursor
      }
    });

    // Handle clicks anywhere on the left/right halves of the overlay window
    imageLightbox.addEventListener("click", (e) => {
      // Exclude close button clicks from navigating slides
      if (e.target === btnCloseLightbox) return;

      const width = window.innerWidth;
      if (e.clientX > width / 2) {
        // Go to next image (right side click)
        currentImageIndex = (currentImageIndex + 1) % currentImageArray.length;
        playBeep(650, 0.05, "sine");
      } else {
        // Go to previous image (left side click)
        currentImageIndex = (currentImageIndex - 1 + currentImageArray.length) % currentImageArray.length;
        playBeep(550, 0.05, "sine");
      }
      updateLightboxContent();
    });
  }

  if (btnCloseLightbox) {
    btnCloseLightbox.addEventListener("click", () => {
      imageLightbox.classList.remove("active");
      playBeep(300, 0.08, "triangle");
    });
  }

  // Interactive Rating Stars
  const ratingStarsContainers = document.querySelectorAll(".rating-stars");

  ratingStarsContainers.forEach(container => {
    const stars = container.querySelectorAll(".star-btn");
    const thankYou = container.parentElement.querySelector(".rating-thankyou");
    const projName = container.dataset.project;
    const scoreLabel = document.getElementById(`score-${projName}`);
    const logList = document.getElementById(`log-list-${projName}`);

    // Fetch local feedback list
    function getFeedbackLogs() {
      const logs = localStorage.getItem(`${projName}_feedback_log`);
      return logs ? JSON.parse(logs) : [];
    }

    // Save feedback list
    function saveFeedbackLogs(logs) {
      localStorage.setItem(`${projName}_feedback_log`, JSON.stringify(logs));
    }

    // Render transparent log list and average score
    function renderLogs() {
      const logs = getFeedbackLogs();
      logList.innerHTML = "";

      if (logs.length === 0) {
        logList.innerHTML = `<p class="no-logs">No ratings recorded yet.</p>`;
        scoreLabel.innerText = "Average: 0★ (0 ratings)";
        return;
      }

      let totalStars = 0;
      logs.forEach(log => {
        totalStars += log.rating;
        const dateStr = new Date(log.timestamp).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "2-digit"
        });
        const logItem = document.createElement("div");
        logItem.className = "log-item";
        logItem.innerHTML = `
          <span class="log-item-name">${escapeHtml(log.name)}</span>
          <div>
            <span class="log-item-stars">${"★".repeat(log.rating)}${"☆".repeat(5 - log.rating)}</span>
            <span style="color: #64748b; font-size: 0.65rem; margin-left: 0.5rem;">${dateStr}</span>
          </div>
        `;
        logList.appendChild(logItem);
      });

      const avg = (totalStars / logs.length).toFixed(1);
      scoreLabel.innerText = `Average: ${avg}★ (${logs.length} rating${logs.length > 1 ? "s" : ""})`;
    }

    // Helper to escape HTML and prevent XSS
    function escapeHtml(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    // Initial render
    renderLogs();

    // Check if current visitor has already voted
    const savedRating = localStorage.getItem(`${projName}_rating`);
    if (savedRating) {
      const ratingVal = parseInt(savedRating, 10);
      stars.forEach((s, sIdx) => {
        if (sIdx < ratingVal) s.classList.add("selected");
      });
      thankYou.innerText = `You rated: ${ratingVal}/5!`;
      thankYou.classList.add("visible");
      container.style.pointerEvents = "none";
    }

    // Hover preview highlight
    stars.forEach((star, idx) => {
      star.addEventListener("mouseenter", () => {
        stars.forEach((s, sIdx) => {
          if (sIdx <= idx) s.classList.add("hover-active");
          else s.classList.remove("hover-active");
        });
      });
    });
    
    container.addEventListener("mouseleave", () => {
      stars.forEach(s => s.classList.remove("hover-active"));
    });
    
    // Click behavior
    stars.forEach((star, idx) => {
      star.addEventListener("click", () => {
        const ratingVal = idx + 1;
        
        // Prompt for rating name to keep official logs
        const reviewerName = prompt("Please enter your name/company to record this rating:");
        if (!reviewerName || reviewerName.trim() === "") {
          alert("Rating cancelled. A valid name is required to log the vote.");
          return;
        }

        // Save rating state for this browser instance
        localStorage.setItem(`${projName}_rating`, ratingVal);

        // Update star visuals
        stars.forEach((s, sIdx) => {
          if (sIdx < ratingVal) s.classList.add("selected");
          else s.classList.remove("selected");
        });

        // Add feedback entry to local logs
        const logs = getFeedbackLogs();
        logs.push({
          name: reviewerName.trim(),
          rating: ratingVal,
          timestamp: new Date().toISOString()
        });
        saveFeedbackLogs(logs);

        // Positive synthesizer audio tones
        playBeep(1200, 0.15, "sine");
        setTimeout(() => playBeep(1500, 0.1, "sine"), 80);
        
        thankYou.innerText = `Thanks for rating ${ratingVal}/5!`;
        thankYou.classList.add("visible");
        
        // Lock stars
        container.style.pointerEvents = "none";
        
        // Re-render
        renderLogs();
      });
    });
  });

  // Global Export CSV Function to download logs as proof
  window.exportFeedbackCSV = function(projName) {
    const logsStr = localStorage.getItem(`${projName}_feedback_log`);
    const logs = logsStr ? JSON.parse(logsStr) : [];
    if (logs.length === 0) {
      alert("No logs available to export yet!");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Name,Rating,Timestamp\n";
    logs.forEach(log => {
      // Escape name double quotes for valid CSV formatting
      const nameEscaped = log.name.replace(/"/g, '""');
      csvContent += `"${nameEscaped}",${log.rating},"${log.timestamp}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${projName}_feedback_proof.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
});
