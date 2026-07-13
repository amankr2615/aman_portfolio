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
    <p>I'm <strong>Aman Kumar</strong>, currently pursuing my <strong>M.Tech in CSSP at Indian Institute of Technology (IIT) Patna</strong>.</p>
    <p>My work sits at the intersection of AI orchestration, model acceleration, and advanced computer vision. I design autonomous multi-agent systems and optimize inference pipelines to achieve maximum computational throughput on resource-constrained edge hardware.</p>
    <p>Prior to IIT Patna, I drove systems automation and data pipeline optimizations as an Engineer at <strong>Tata Consultancy Services (TCS)</strong> and debugged high-throughput Python modules at <strong>InfoVision Labs</strong>.</p>
  `,
  skills: `
    <p>Here are my core technological capabilities, categorized by system layer:</p>
    <div class="skills-container">
      <div class="skill-box"><strong>AI & LLM Workflows</strong><br>Agents, RAG, Prompt Eng, JSON Constraints</div>
      <div class="skill-box"><strong>ML Frameworks</strong><br>PyTorch, TensorFlow, OpenCV, Ultralytics YOLO</div>
      <div class="skill-box"><strong>Data & Vectors</strong><br>FAISS VectorDB, SQLite, Pandas, NumPy</div>
      <div class="skill-box"><strong>Cloud & Tools</strong><br>Git, Jupyter, Render Deployment, Linux</div>
      <div class="skill-box"><strong>Core Languages</strong><br>Python, JavaScript, SQL, Java, HTML/CSS</div>
      <div class="skill-box"><strong>Kaggle Explorer</strong><br>Competitor & Notebook Optimizer</div>
    </div>
  `,
  projects: `
    <p>Select a completed Quest to review details:</p>
    
    <div class="quest-box">
      <div class="quest-header">
        <span class="quest-title">Quest 1: Neuro-Symbolic Behavioral Tracker</span>
        <span class="quest-status">[COMPLETED]</span>
      </div>
      <p class="quest-desc">Fuses spatial Vision Transformer (ViT) telemetry with real-time kinematic divergence modeling on aerial footage. Accurately profiles threat behavior with 94% confidence.</p>
      <div class="quest-meta">
        <span class="quest-tag">PyTorch</span>
        <span class="quest-tag">ViT</span>
        <span class="quest-tag">FAISS</span>
        <span class="quest-tag">SQLite</span>
        <span class="quest-tag">Gemini Agents</span>
      </div>
    </div>

    <div class="quest-box">
      <div class="quest-header">
        <span class="quest-title">Quest 2: Multi-Agent Marketing Engine</span>
        <span class="quest-status">[COMPLETED]</span>
      </div>
      <p class="quest-desc">An autonomous coordination framework spawning Analysis, Forecast, and Critique agents. Utilizes structured JSON constraints and self-refinement feedback loops for error-free strategic reporting.</p>
      <div class="quest-meta">
        <span class="quest-tag">LLM Orchestration</span>
        <span class="quest-tag">Flask API</span>
        <span class="quest-tag">Self-Refinement</span>
      </div>
      <div class="quest-links">
        <a href="https://github.com/amankr2615" target="_blank" class="quest-link">→ Github Code</a>
      </div>
    </div>

    <div class="quest-box">
      <div class="quest-header">
        <span class="quest-title">Quest 3: AeroViT Anomaly Accelerator</span>
        <span class="quest-status">[COMPLETED]</span>
      </div>
      <p class="quest-desc">A hybrid CNN-Transformer optimization layer achieving an 89% AUC detection score while boosting inference speed on aerial edge platforms by a factor of 58x.</p>
      <div class="quest-meta">
        <span class="quest-tag">Edge AI</span>
        <span class="quest-tag">Transformer</span>
        <span class="quest-tag">FFT Diagnostics</span>
        <span class="quest-tag">SSIM Loss</span>
      </div>
    </div>
  `,
  contact: `
    <p>Establish direct communication channels through the following ports:</p>
    <p style="margin: 0.8rem 0;">
      📧 <strong>Email:</strong> <a href="mailto:aman.kr2615@gmail.com" style="color:#10B981;">aman.kr2615@gmail.com</a><br>
      📞 <strong>Phone:</strong> <a href="tel:+919325815142" style="color:#A78BFA;">+91-9325815142</a><br>
      🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aman-kumar-26v15m" target="_blank" style="color:#10B981;">aman-kumar-26v15m</a><br>
      🐙 <strong>GitHub:</strong> <a href="https://github.com/amankr2615" target="_blank" style="color:#A78BFA;">github.com/amankr2615</a>
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

  // Check if URL specifies launching directly into the RPG dashboard
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("view") === "rpg") {
    landingContainer.classList.add("hidden");
    rpgDashboard.classList.add("active");
    isLampOn = true;
    lampAssembly.classList.add("on");
    landingContainer.classList.add("lamp-on");
    setTimeout(() => {
      statFills.forEach(fill => {
        fill.style.width = fill.dataset.percent + "%";
      });
      playBeep(1200, 0.3, "triangle");
    }, 200);
  }

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
    playBeep(600, 0.2, "sine");
    landingContainer.classList.add("hidden");
    rpgDashboard.classList.add("active");
    
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
    landingContainer.classList.remove("hidden");
    
    // Reset lamp states
    isLampOn = false;
    lampAssembly.classList.remove("on");
    
    // Reset stats loaders
    statFills.forEach(fill => {
      fill.style.width = "0%";
    });
  });

  btnNavProjects.addEventListener("click", () => {
    const projectsDialogueBtn = document.querySelector('[data-chat="projects"]');
    if (projectsDialogueBtn) {
      projectsDialogueBtn.click();
    }
  });

  // Dialogue selection
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.chat;
      const text = btn.textContent;
      
      playBeep(700, 0.08, "triangle");

      // Append User message
      const userBubble = document.createElement("div");
      userBubble.className = "msg-bubble user";
      userBubble.textContent = text;
      dialogueHistory.appendChild(userBubble);
      
      // Auto Scroll
      dialogueHistory.scrollTop = dialogueHistory.scrollHeight;

      // Disable choices temporarily during response delay
      optionButtons.forEach(b => b.style.pointerEvents = "none");

      setTimeout(() => {
        // Play reply sound
        playBeep(900, 0.1, "sine");
        
        // Append Bot response
        const botBubble = document.createElement("div");
        botBubble.className = "msg-bubble bot";
        botBubble.innerHTML = RESPONSES[type];
        dialogueHistory.appendChild(botBubble);
        
        dialogueHistory.scrollTop = dialogueHistory.scrollHeight;
        
        // Re-enable options
        optionButtons.forEach(b => b.style.pointerEvents = "auto");
      }, 500);
    });
  });
});
