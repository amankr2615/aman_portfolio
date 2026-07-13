const SIMULATIONS = {
  marketing: [
    { text: "> Initializing Agentic Orchestrator...", class: "text-muted-console" },
    { text: "> Spawning specialized child agents: [AnalysisAgent, ForecastAgent, CritiqueAgent]...", class: "text-cyan" },
    { text: "> [AnalysisAgent] Fetching and parsing raw data streams...", class: "text-cyan" },
    { text: "> [AnalysisAgent] DETECTED: Funnel dropoff in checkout module. Conversions down 1.3%.", class: "text-yellow" },
    { text: "> [ForecastAgent] Initiating Monte Carlo simulations for marketing allocations...", class: "text-cyan" },
    { text: "> [CritiqueAgent] Criticizing proposal... feedback loop: 'Re-weight allocation for ad-spend.'", class: "text-purple" },
    { text: "> Structured JSON Constraint validation... matching schema.", class: "text-muted-console" },
    { text: "> Self-Refinement Iteration 2 completed. Solution convergence reached.", class: "text-green" },
    { text: "> Outputting action strategy payload:", class: "text-green" },
    { text: "{\n  \"status\": \"optimal\",\n  \"recommended_adjustment\": \"shift_budget\",\n  \"expected_roi_delta\": \"+18.4%\"\n}", class: "text-yellow" },
    { text: "> Dispatching automated Flask API action trigger to Ad Manager. Done.", class: "text-green" }
  ],
  anomaly: [
    { text: "> Bootstrapping Hybrid Neuro-Symbolic platform...", class: "text-muted-console" },
    { text: "> Fusing Vision Transformer (ViT) spatial features with kinematic physics model...", class: "text-cyan" },
    { text: "> Querying FAISS Vector Database for contextual threat signatures...", class: "text-cyan" },
    { text: "> SQLite Event Log lookup: 3 matches found in recent 10-second buffer.", class: "text-muted-console" },
    { text: "> Physics Scorer: Kinematic divergence detected. Acceleration exceeds vehicle bounds.", class: "text-yellow" },
    { text: "> Running LLM reasoning workflow (Gemini API agentic loop)...", class: "text-purple" },
    { text: "> Anomaly identified: Vehicle exhibiting Aggressive/Distracted behavior.", class: "text-yellow" },
    { text: "> Threat Profile: Critical. Dispatching spatial tracking metrics...", class: "text-green" },
    { text: "Target locked | Range: 184m | Bearing: 42° | Classification: Aggressive", class: "text-green" }
  ],
  aerovit: [
    { text: "> Benchmarking baseline Transformer-CNN model...", class: "text-muted-console" },
    { text: "> Target: Accelerate inference on edge devices (Drone Anomaly dataset).", class: "text-cyan" },
    { text: "> Applying Fast Fourier Transform (FFT) temporal evaluation...", class: "text-cyan" },
    { text: "> Constructing hybrid perceptual loss loop (Consistency + SSIM)...", class: "text-purple" },
    { text: "> Compiling CUDA kernels and optimizing embedding-space dimensions...", class: "text-cyan" },
    { text: "> Running verification benchmarks...", class: "text-muted-console" },
    { text: "> RESULT: Anomaly localization achieved 89% AUC.", class: "text-green" },
    { text: "> SPEEDUP: Computational efficiency optimized by 58x (240ms -> 4.1ms).", class: "text-yellow" },
    { text: "> Deploying model parameters. Verification successful.", class: "text-green" }
  ]
};

let currentSimInterval = null;

function runSimulation(type) {
  const consoleBody = document.getElementById("console-body");
  if (!consoleBody) return;
  
  // Clear any active simulations
  if (currentSimInterval) {
    clearInterval(currentSimInterval);
  }
  consoleBody.innerHTML = "";
  
  const simulationLines = SIMULATIONS[type];
  let lineIdx = 0;
  
  function addLine() {
    if (lineIdx >= simulationLines.length) {
      clearInterval(currentSimInterval);
      return;
    }
    
    const lineData = simulationLines[lineIdx];
    const lineElement = document.createElement("div");
    lineElement.className = "console-line";
    
    const numElement = document.createElement("div");
    numElement.className = "console-line-num";
    numElement.textContent = (lineIdx + 1).toString().padStart(2, '0');
    
    const contentElement = document.createElement("div");
    contentElement.className = `console-line-content ${lineData.class || ''}`;
    contentElement.textContent = lineData.text;
    
    lineElement.appendChild(numElement);
    lineElement.appendChild(contentElement);
    consoleBody.appendChild(lineElement);
    
    // Auto scroll
    consoleBody.scrollTop = consoleBody.scrollHeight;
    
    lineIdx++;
  }
  
  addLine();
  currentSimInterval = setInterval(addLine, 800);
}

// Sandbox sidebar interaction
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".sandbox-option");
  options.forEach(opt => {
    opt.addEventListener("click", () => {
      options.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      const simType = opt.dataset.sim;
      runSimulation(simType);
    });
  });
  
  // Run default simulation
  runSimulation("marketing");

  // Dynamic Header links highlight
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
