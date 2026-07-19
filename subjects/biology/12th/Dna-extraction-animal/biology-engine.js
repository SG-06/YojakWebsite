/** 
 * BIO-SYNTH AUDIO ENGINE 
 * Generates sounds mathematically to bypass browser blocking and loading issues.
 */
const AudioEngine = (() => {
    let audioCtx = null;

    const init = () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    };

    const playTone = (freq, type, duration, volume = 0.1) => {
        try {
            init();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(volume, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.log("Audio not supported yet - requires user interaction");
        }
    };

    return {
        tab: () => playTone(600, 'sine', 0.1, 0.2),      
        click: () => playTone(800, 'triangle', 0.05, 0.1), 
        launch: () => {                                 
            playTone(400, 'sine', 0.4, 0.1); 
            setTimeout(() => playTone(600, 'sine', 0.4, 0.1), 150);
        },
        success: () => {                                
            playTone(523.25, 'sine', 0.2); // C5
            setTimeout(() => playTone(659.25, 'sine', 0.2), 100); // E5
            setTimeout(() => playTone(783.99, 'sine', 0.4), 200); // G5
        },
        wrong: () => {                                  
            playTone(150, 'square', 0.3, 0.1);
        }
    };
})();

// Helper to access the data from the specific experiment's data.js file
const part = experimentData; 
const container = document.getElementById("experiment-container");

/**
 * Handles Tab Switching logic
 */
function handleTabSwitch(tabId, btn) {
    AudioEngine.tab();

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(t => {
        t.style.display = 'none';
        t.classList.remove('active-tab');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active-sub'));

    // Show selected tab content
    const target = document.getElementById(tabId);
    if (target) {
        target.style.display = 'block';
        // Delay slightly for CSS animations
        setTimeout(() => target.classList.add('active-tab'), 10);
    }
    
    // Set button as active
    btn.classList.add('active-sub');
}

/**
 * Main UI Generator
 */
function initLab() {
    if (!container) return;

    container.innerHTML = `
    <section class="hero">
        <div class="hero-content">
            <span class="lab-tag">Virtual Biology Lab</span>
            <h1>${part.title}</h1>
            <p>${part.subtitle}</p>
        </div>
    </section>

    <div class="container wider-container">
        <div class="sub-tabs">
            <button class="sub-btn active-sub" onclick="handleTabSwitch('theory', this)">Theory & Concepts</button>
            <button class="sub-btn" onclick="handleTabSwitch('procedure', this)">Procedure</button>
            <button class="sub-btn" onclick="handleTabSwitch('simulation', this)">Simulation</button>
            <button class="sub-btn" onclick="handleTabSwitch('quiz', this)">Evaluation</button>
        </div>

        <div id="theory" class="tab-content active-tab card-glass">
            <div class="info-segment">
                <h2 class="gradient-text">Aim of Experiment</h2>
                <p>${part.aim}</p>
            </div>
            <div class="info-segment" style="margin-top:30px">
                <h2 class="gradient-text">Theory</h2>
                <div class="theory-body">${part.theory}</div>
            </div>
        </div>

        <div id="procedure" class="tab-content card-glass" style="display:none;">
            <div class="info-segment">
                <h3 class="gradient-text">Materials Required</h3>
                <ul class="styled-list">${part.materials.map(m => `<li>${m}</li>`).join('')}</ul>
            </div>
            <div class="info-segment" style="margin-top:30px;">
                <h3 class="gradient-text">Methodology</h3>
                <ol class="styled-list">${part.steps.map(s => `<li>${s}</li>`).join('')}</ol>
            </div>
        </div>

        <div id="simulation" class="tab-content card-glass" style="display:none;">
            <div id="sim-launcher" class="sim-launcher">
                <div class="launcher-content">
                    <div style="font-size: 5rem;">🔬</div>
                    <h2 class="gradient-text">Virtual Workbench</h2>
                    <p>Click below to begin the interactive laboratory session.</p>
                    <button class="start-sim-btn" onclick="startSimulation()">Start Virtual Experiment</button>
                </div>
            </div>
            <div id="sim-active-area" style="display:none;">
                <div class="simulation-container">
                    <iframe id="sim-frame" data-src="${part.simulationFile}"></iframe>
                </div>
                <div style="margin-top:15px; text-align:right;">
                    <button class="btn-ui" onclick="location.reload()" style="background:#eee; color:#333; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;">↺ Reset Experiment</button>
                </div>
            </div>
        </div>

        <div id="quiz" class="tab-content card-glass" style="display:none;">
            <h2 class="gradient-text">Self-Assessment Quiz</h2>
            <div id="quiz-container"></div>
            <button class="submit-btn" onclick="checkQuiz()">Submit Answers</button>
            <div id="result-display" style="display:none; margin-top:30px; padding:20px; border-radius:15px; text-align:center;"></div>
        </div>
    </div>
    `;
    renderQuiz();
}

/**
 * Simulation Starter
 */
function startSimulation() {
    AudioEngine.launch();
    document.getElementById('sim-launcher').style.display = 'none';
    document.getElementById('sim-active-area').style.display = 'block';
    const frame = document.getElementById('sim-frame');
    // Set the src from data-src only when started (improves performance)
    frame.src = frame.getAttribute('data-src');
}

/**
 * Quiz Renderer
 */
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    part.questions.forEach((q, i) => {
        let qHtml = `
        <div class="quiz-card" style="margin-bottom:20px;">
            <h4 style="margin-bottom:15px;">Q${i+1}. ${q.question}</h4>
            <div class="options-list">
                ${q.options.map((opt, j) => `
                    <label class="option-label" style="display:block; margin-bottom:8px;">
                        <input type="radio" name="q${i}" value="${j}" onclick="AudioEngine.click()">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>`;
        quizContainer.innerHTML += qHtml;
    });
}

/**
 * Quiz Result Checker
 */
function checkQuiz() {
    let score = 0;
    part.questions.forEach((q, i) => {
        const sel = document.querySelector(`input[name="q${i}"]:checked`);
        if (sel && parseInt(sel.value) === q.answer) score++;
    });

    const res = document.getElementById('result-display');
    res.style.display = "block";
    
    let percentage = (score / part.questions.length) * 100;
    let feedback = percentage >= 70 ? "Excellent Work!" : "Keep Practicing!";
    let bgColor = percentage >= 70 ? "#e8f5e9" : "#fff3e0";
    let textColor = percentage >= 70 ? "#2e7d32" : "#e65100";

    res.style.backgroundColor = bgColor;
    res.style.color = textColor;
    res.innerHTML = `
        <h2 style="margin:0;">Your Score: ${score} / ${part.questions.length}</h2>
        <p style="margin:10px 0 0 0; font-weight:bold;">${feedback}</p>
    `;
    
    if(percentage >= 70) AudioEngine.success();
    else AudioEngine.wrong();

    // Scroll to results
    res.scrollIntoView({ behavior: 'smooth' });
}

// Kick off the UI
initLab();