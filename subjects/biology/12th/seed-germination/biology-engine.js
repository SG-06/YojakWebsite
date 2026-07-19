// Sound Controller
const sounds = {
    click: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),
    tab: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
    success: new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'),
    wrong: new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3'),
    launch: new Audio('https://assets.mixkit.co/active_storage/sfx/2630/2630-preview.mp3') // Soft whoosh for launch
};

Object.values(sounds).forEach(s => s.volume = 0.2);

function playSound(type) {
    sounds[type].currentTime = 0;
    sounds[type].play().catch(e => console.log("Sound enabled after user interaction"));
}

const container = document.getElementById("experiment-container");
const part = experimentData;

function initLab() {
    let html = `
    <section class="hero">
        <div class="hero-content">
            <span class="lab-tag">Virtual Biology Lab</span>
            <h1>${part.title}</h1>
            <p>${part.subtitle}</p>
        </div>
    </section>

    <div class="container wider-container">
        <div class="sub-tabs">
            <button class="sub-btn active-sub" onclick="handleTabSwitch('theory', this)">Theory</button>
            <button class="sub-btn" onclick="handleTabSwitch('procedure', this)">Procedure</button>
            <button class="sub-btn" onclick="handleTabSwitch('simulation', this)">Simulation</button>
            <button class="sub-btn" onclick="handleTabSwitch('quiz', this)">Evaluation</button>
        </div>

        <div id="theory" class="tab-content active-tab card-glass">
            <div class="info-segment">
                <h3 class="gradient-text">Aim of Experiment</h3>
                <p>${part.aim}</p>
            </div>
            <div class="info-segment" style="margin-top:20px">
                <h3 class="gradient-text">Biological Theory</h3>
                <p>${part.theory}</p>
            </div>

            <!-- VIDEO SECTION START -->
            ${part.videoUrl ? `
                <div class="video-wrapper" style="margin-top:30px; border-top: 1px dashed #ccc; padding-top:20px;">
                    <h3 class="gradient-text">Visual Explanation</h3>
                    <div class="video-container">
                        <iframe 
                            src="${part.videoUrl}" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-credits" style="text-align:right; font-size:0.8rem; color:#666; margin-top:10px;">
                        ${part.videoCredits} | <a href="${part.videoUrl.replace('embed/', 'watch?v=')}" target="_blank">Watch on YouTube</a>
                    </div>
                </div>
            ` : ''}
            <!-- VIDEO SECTION END -->
        </div>

        <div id="procedure" class="tab-content card-glass">
            <div class="info-segment">
                <h3 class="gradient-text">Materials Required</h3>
                <ul class="styled-list">
                    ${part.materials.map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
            <div class="info-segment" style="margin-top:20px">
                <h3 class="gradient-text">Methodology</h3>
                <ol class="styled-list">
                    ${part.steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
            </div>
        </div>

        <div id="simulation" class="tab-content card-glass">
            <div id="sim-launcher" class="sim-launcher">
                <div class="launcher-content">
                    <div class="icon-circle">🔬</div>
                    <h3>Ready to start the experiment?</h3>
                    <p>Click the button below to initialize the virtual workbench.</p>
                    <button class="start-sim-btn" onclick="startSimulation()">Start Virtual Experiment</button>
                </div>
            </div>
            
            <div id="sim-active-area" style="display:none;">
                <div class="simulation-header">
                    <div>
                        <strong style="color:var(--primary)">Interactive Workbench</strong>
                        <p style="font-size:0.8rem; color:#666;">Use Full Screen for the best experience.</p>
                    </div>
                    <div class="sim-controls">
                        <button class="control-btn" onclick="refreshSim()">↺ Reset</button>
                        <button class="control-btn primary-btn" onclick="toggleFullScreen()">⛶ Full Screen</button>
                    </div>
                </div>
                <div class="simulation-container" id="sim-wrapper">
                    <iframe id="sim-frame" data-src="${part.simulationFile}" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div id="quiz" class="tab-content card-glass">
            <h3 class="gradient-text">Self Assessment</h3>
            <div id="quiz-container"></div>
            <button class="submit-btn" onclick="checkQuiz()">Submit Answers</button>
            <div id="result-display" class="result-box" style="display:none; margin-top:20px;"></div>
        </div>
    </div>
    `;

    container.innerHTML = html;
    renderQuiz();
}

function handleTabSwitch(tabId, btn) {
    playSound('tab'); // TRIGGERS ON SECTION TOGGLE
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active-tab'));
    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active-sub'));
    document.getElementById(tabId).classList.add('active-tab');
    btn.classList.add('active-sub');
}

function startSimulation() {
    playSound('launch');
    const launcher = document.getElementById('sim-launcher');
    const activeArea = document.getElementById('sim-active-area');
    const frame = document.getElementById('sim-frame');
    
    launcher.style.display = 'none';
    activeArea.style.display = 'block';
    
    // Only set the src now to prevent auto-loading
    frame.src = frame.getAttribute('data-src');
}

function refreshSim() {
    const frame = document.getElementById('sim-frame');
    frame.src = frame.src;
    playSound('click');
}

function toggleFullScreen() {
    const elem = document.getElementById("sim-wrapper");
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            alert(`Error: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
    playSound('click');
}

function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    part.questions.forEach((q, i) => {
        let qHtml = `
        <div class="quiz-card">
            <h4>${i+1}. ${q.question}</h4>
            <div class="options-grid">
                ${q.options.map((opt, j) => `
                    <label class="option-label" onclick="playSound('click')">
                        <input type="radio" name="q${i}" value="${j}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>`;
        quizContainer.innerHTML += qHtml;
    });
}

function checkQuiz() {
    let score = 0;
    part.questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });

    const resultDiv = document.getElementById('result-display');
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<div class="card" style="background:#e8f5e9; border-left:5px solid #2e7d32; padding:20px;"><h3>Your Score: ${score} / ${part.questions.length}</h3></div>`;
    
    if(score === part.questions.length) playSound('success');
    else playSound('wrong');
}

initLab();