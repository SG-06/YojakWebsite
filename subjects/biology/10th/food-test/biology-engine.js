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
    };

    return {
        tab: () => playTone(600, 'sine', 0.1, 0.2),      // Soft "Blip"
        click: () => playTone(800, 'triangle', 0.05, 0.1), // Tiny "Tick"
        launch: () => {                                 
            // Changed from 'sawtooth' to 'sine' for a cleaner "ding-ding" sound
            playTone(400, 'sine', 0.4, 0.1); 
            setTimeout(() => playTone(600, 'sine', 0.4, 0.1), 150);
        },
        success: () => {                                // Happy Chime
            playTone(523.25, 'sine', 0.2); // C5
            setTimeout(() => playTone(659.25, 'sine', 0.2), 100); // E5
            setTimeout(() => playTone(783.99, 'sine', 0.4), 200); // G5
        },
        wrong: () => {                                  // Low Buzz
            playTone(150, 'square', 0.3, 0.1);
        }
    };
})();

// Helper to update global part variable
const part = experimentData; 
const container = document.getElementById("experiment-container");

/**
 * Handles Tab Switching
 */
function handleTabSwitch(tabId, btn) {
    // 1. Trigger Sound Immediately
    AudioEngine.tab();

    // 2. Hide all contents
    document.querySelectorAll('.tab-content').forEach(t => {
        t.style.display = 'none';
        t.classList.remove('active-tab');
    });

    // 3. Deactivate all buttons
    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active-sub'));

    // 4. Show target content
    const target = document.getElementById(tabId);
    if (target) {
        target.style.display = 'block';
        // Small timeout to trigger CSS animation
        setTimeout(() => target.classList.add('active-tab'), 10);
    }
    btn.classList.add('active-sub');
}

/**
 * UI Initialization
 */
function initLab() {
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
                <h3 class="gradient-text">Materials</h3>
                <ul class="styled-list">${part.materials.map(m => '<li>' + m + '</li>').join('')}</ul>
            </div>
            <div class="info-segment" style="margin-top:20px;">
                <h3 class="gradient-text">Steps</h3>
                <ol class="styled-list">${part.steps.map(s => '<li>' + s + '</li>').join('')}</ol>
            </div>
        </div>

        <div id="simulation" class="tab-content card-glass" style="display:none;">
            <div id="sim-launcher" class="sim-launcher">
                <div class="launcher-content">
                    <div style="font-size: 5rem;">🔬</div>
                    <h2 class="gradient-text">Virtual Workbench</h2>
                    <button class="start-sim-btn" onclick="startSimulation()">Start Virtual Experiment</button>
                </div>
            </div>
            <div id="sim-active-area" style="display:none;">
                <div class="sim-top-bar">
                    <button class="fullscreen-btn" onclick="toggleFullScreen()">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="white" style="vertical-align:middle; margin-right:5px;"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
                        Enter Fullscreen
                    </button>
                </div>
                <div class="simulation-container" id="sim-wrapper">
                    <iframe id="sim-frame" data-src="${part.simulationFile}"></iframe>
                </div>
            </div>
        </div>

        <div id="quiz" class="tab-content card-glass" style="display:none;">
            <h2 class="gradient-text">Evaluation</h2>
            <div id="quiz-container"></div>
            <button class="submit-btn" onclick="checkQuiz()">Submit Answers</button>
            <div id="result-display" style="display:none; margin-top:30px;"></div>
        </div>
    </div>
    `;
    renderQuiz();
}

function startSimulation() {
    AudioEngine.launch();
    document.getElementById('sim-launcher').style.display = 'none';
    document.getElementById('sim-active-area').style.display = 'block';
    const frame = document.getElementById('sim-frame');
    frame.src = frame.getAttribute('data-src');
}

function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    part.questions.forEach((q, i) => {
        let qHtml = `
        <div class="quiz-card">
            <h4>Q${i+1}. ${q.question}</h4>
            ${q.options.map((opt, j) => `
                <label class="option-label">
                    <input type="radio" name="q${i}" value="${j}" onclick="AudioEngine.click()">
                    ${opt}
                </label>
            `).join('')}
        </div>`;
        quizContainer.innerHTML += qHtml;
    });
}

function checkQuiz() {
    let score = 0;
    part.questions.forEach((q, i) => {
        const sel = document.querySelector(`input[name="q${i}"]:checked`);
        if (sel && parseInt(sel.value) === q.answer) score++;
    });

    const res = document.getElementById('result-display');
    res.style.display = "block";
    res.innerHTML = `<h3>Score: ${score} / ${part.questions.length}</h3>`;
    
    if(score >= 7) AudioEngine.success();
    else AudioEngine.wrong();
}

// Start Lab
initLab();

function toggleFullScreen() {
    const elem = document.getElementById("sim-wrapper");
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}