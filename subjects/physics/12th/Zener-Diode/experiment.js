const container = document.getElementById("experiment-container");

// Speech Synthesis Setup
let synth = window.speechSynthesis;
let currentUtterance = null;

function speakText(text, btn) {
    if (synth.speaking) {
        synth.cancel();
        if (btn.classList.contains('stop-btn')) {
            resetSpeakButtons();
            return;
        }
    }
    resetSpeakButtons();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.onend = () => {
        btn.innerHTML = "🔊 Listen";
        btn.classList.remove('stop-btn');
    };
    currentUtterance = utterance;
    btn.innerHTML = "Stop";
    btn.classList.add('stop-btn');
    synth.speak(utterance);
}

function resetSpeakButtons() {
    const buttons = document.querySelectorAll('.speak-btn');
    buttons.forEach(b => {
        b.innerHTML = "🔊 Listen";
        b.classList.remove('stop-btn');
    });
}

function renderContent() {
    let html = `
    <section class="hero">
        <div>
            <h1>${experimentData.title}</h1>
            <p>${experimentData.subtitle}</p>
        </div>
    </section>
    <div class="container">
    <div class="experiment-selector">
    `;

    experimentData.parts.forEach((part, index) => {
        html += `<button class="exp-btn ${index === 0 ? 'active-exp' : ''}" onclick="openExperiment('${part.id}',this)">${part.name}</button>`;
    });

    html += `</div>`;

    experimentData.parts.forEach((part, index) => {
        const theoryText = part.theory.replace(/['"]/g, "");
        const apparatusText = "Apparatus required: " + part.apparatus.join(", ");
        const procedureText = "Procedure: " + part.procedure.join(". ");
        const precautionText = "Precautions: " + part.precautions.join(". ");

        // Clean up URL and create watch link
        const videoEmbedUrl = part.video.split('?')[0]; 
        const videoWatchUrl = videoEmbedUrl.replace('embed/', 'watch?v=');

        html += `
        <div class="experiment-section ${index === 0 ? 'active-exp-section' : ''}" id="${part.id}">
            <div class="sub-tabs">
                <button class="sub-btn active-sub" onclick="openTab('${part.id}-theory',this,'${part.id}')">Theory</button>
                <button class="sub-btn" onclick="openTab('${part.id}-apparatus',this,'${part.id}')">Apparatus</button>
                <button class="sub-btn" onclick="openTab('${part.id}-procedure',this,'${part.id}')">Procedure</button>
                <button class="sub-btn" onclick="openTab('${part.id}-simulation',this,'${part.id}')">Simulation</button>
                <button class="sub-btn" onclick="openTab('${part.id}-quiz',this,'${part.id}')">Self Evaluation</button>
            </div>

            <div class="tab-content active-tab" id="${part.id}-theory">
                <div class="card">
                    <button class="speak-btn" onclick="speakText('${theoryText}', this)">🔊 Listen</button>
                    <h3>Theory</h3>
                    <p>${part.theory}</p>
                </div>
                
                <div class="video-box" style="margin-top: 25px;">
                    <iframe 
                        src="${videoEmbedUrl}" 
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                    <p class="attribution">
                        Video by: <strong>${part.videoAuthor}</strong> | 
                        <a href="${videoWatchUrl}" target="_blank" style="color: #8e6cff; font-weight: bold;">Watch on YouTube</a>
                    </p>
                </div>
            </div>

            <div class="tab-content" id="${part.id}-apparatus">
                <div class="card">
                    <button class="speak-btn" onclick="speakText('${apparatusText}', this)">🔊 Listen</button>
                    <h3>Apparatus</h3>
                    <ul>${part.apparatus.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            </div>

            <div class="tab-content" id="${part.id}-procedure">
                <div class="card">
                    <button class="speak-btn" onclick="speakText('${procedureText}', this)">🔊 Listen</button>
                    <h3>Procedure</h3>
                    <ol>${part.procedure.map(item => `<li>${item}</li>`).join('')}</ol>
                </div>
                <div class="card">
                    <button class="speak-btn" onclick="speakText('${precautionText}', this)">🔊 Listen</button>
                    <h3>Precautions</h3>
                    <ul>${part.precautions.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            </div>

            <div class="tab-content" id="${part.id}-simulation">
                <div class="simulation-frame">
                    <iframe src="${part.simulation}" allowfullscreen></iframe>
                    <p class="attribution">
                        Simulation by <a href="https://phet.colorado.edu" target="_blank">PhET Interactive Simulations</a>, ${part.simulationAuthor}
                    </p>
                </div>
                <div class="observation-box">
                    <h3>Observation</h3>
                    <textarea placeholder="Write observations here"></textarea>
                    <h3 style="margin-top:30px">Result</h3>
                    <p>${part.result}</p>
                </div>
            </div>

            <div class="tab-content" id="${part.id}-quiz">
                <div id="${part.id}-questions"></div>
                <button class="submit-btn" onclick="checkQuiz('${part.id}')">Submit Quiz</button>
                <div class="score" id="${part.id}-score"></div>
            </div>
        </div>`;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Load Quizzes
    experimentData.parts.forEach(part => {
        let qHtml = '';
        part.questions.forEach((q, index) => {
            qHtml += `
            <div class="question">
                <h3>${index + 1}. ${q.question}</h3>
                ${q.options.map((option, optIndex) => `
                <label><input type="radio" name="${part.id}${index}" value="${optIndex}"> ${option}</label>
                `).join('')}
            </div>`;
        });
        document.getElementById(`${part.id}-questions`).innerHTML = qHtml;
    });
}

// UI Functions
function openExperiment(id, btn) {
    synth.cancel();
    resetSpeakButtons();
    document.querySelectorAll('.experiment-section').forEach(el => el.classList.remove('active-exp-section'));
    document.querySelectorAll('.exp-btn').forEach(el => el.classList.remove('active-exp'));
    document.getElementById(id).classList.add('active-exp-section');
    btn.classList.add('active-exp');
}

function openTab(id, btn, parent) {
    synth.cancel();
    resetSpeakButtons();
    let section = document.getElementById(parent);
    section.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active-tab'));
    section.querySelectorAll('.sub-btn').forEach(el => el.classList.remove('active-sub'));
    document.getElementById(id).classList.add('active-tab');
    btn.classList.add('active-sub');
}

function checkQuiz(partId) {
    const part = experimentData.parts.find(p => p.id === partId);
    let score = 0;
    part.questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="${partId}${index}"]:checked`);
        if (selected && Number(selected.value) === q.answer) score++;
    });
    document.getElementById(`${partId}-score`).innerHTML = `Your Score : ${score} / ${part.questions.length}`;
}

renderContent();