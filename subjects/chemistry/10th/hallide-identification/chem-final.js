'use strict';

/* ======================================================
   HALIDE DATA
   ====================================================== */
const HALIDES = {
  Cl: {
    name: 'Chloride', symbol: 'Cl⁻',
    saltName: 'Potassium Chloride', saltFormula: 'KCl',
    precipitateFormula: 'AgCl', colourName: 'White', colourHex: '#f4f3ee',
    ionEquation: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)',
    note: 'AgCl is white and curdy, and dissolves in excess dilute ammonia — unlike AgI.'
  },
  Br: {
    name: 'Bromide', symbol: 'Br⁻',
    saltName: 'Potassium Bromide', saltFormula: 'KBr',
    precipitateFormula: 'AgBr', colourName: 'Pale (cream) yellow', colourHex: '#ece4b8',
    ionEquation: 'Ag⁺(aq) + Br⁻(aq) → AgBr(s)',
    note: 'AgBr is pale yellow and only partially dissolves in concentrated ammonia.'
  },
  I: {
    name: 'Iodide', symbol: 'I⁻',
    saltName: 'Potassium Iodide', saltFormula: 'KI',
    precipitateFormula: 'AgI', colourName: 'Bright (deep) yellow', colourHex: '#d9c233',
    ionEquation: 'Ag⁺(aq) + I⁻(aq) → AgI(s)',
    note: 'AgI is the deepest yellow and is essentially insoluble in ammonia at any concentration.'
  }
};

/* ======================================================
   IRIS KNOWLEDGE CONTENT
   ====================================================== */
const IRIS_CONTENT = {
  theory: `
    <h4>Theory — Identification of Halide Ions</h4>
    <p>Halide ions are the anions of the halogens: <strong>chloride (Cl⁻)</strong>, <strong>bromide (Br⁻)</strong>, and <strong>iodide (I⁻)</strong>. The <strong>Silver Nitrate Test</strong> is the standard qualitative method used to identify which halide is present in an unknown salt solution.</p>
    <p>When silver nitrate (AgNO₃) is added to a solution containing halide ions, a silver halide precipitate forms immediately:</p>
    <ul>
      <li><strong>Ag⁺ + Cl⁻ → AgCl(s)</strong> — white precipitate</li>
      <li><strong>Ag⁺ + Br⁻ → AgBr(s)</strong> — pale (cream) yellow precipitate</li>
      <li><strong>Ag⁺ + I⁻ → AgI(s)</strong> — bright (deep) yellow precipitate</li>
    </ul>
    <p>Dilute nitric acid (HNO₃) is added <em>before</em> the silver nitrate to suppress interference from other anions — carbonate (CO₃²⁻) and sulphite (SO₃²⁻) would also form precipitates with Ag⁺, giving false positives. HNO₃ dissolves these interfering ions without affecting halide ions.</p>
    <p>The three precipitates can be further confirmed by their solubility in ammonia: <strong>AgCl</strong> dissolves in dilute ammonia, <strong>AgBr</strong> only in concentrated ammonia, and <strong>AgI</strong> is insoluble in ammonia at any concentration.</p>
  `,
  materials: `
    <h4>Materials Used</h4>
    <ul>
      <li><strong>Test tubes</strong> (3 — one per halide salt)</li>
      <li><strong>Test tube stand</strong></li>
      <li><strong>Dropper / Pasteur pipette</strong> — for adding reagents drop by drop</li>
      <li><strong>0.1 M Silver Nitrate solution (AgNO₃)</strong> — the diagnostic reagent</li>
      <li><strong>Dilute Nitric Acid (HNO₃, ~2 M)</strong> — to suppress interfering ions</li>
      <li><strong>Sample salt solutions:</strong>
        <ul>
          <li>Potassium Chloride (KCl) — contains Cl⁻</li>
          <li>Potassium Bromide (KBr) — contains Br⁻</li>
          <li>Potassium Iodide (KI) — contains I⁻</li>
        </ul>
      </li>
      <li><strong>Distilled water</strong> — for rinsing and preparing solutions</li>
      <li><strong>Beaker</strong> — for waste disposal</li>
      <li><strong>Labels / marking pen</strong> — to identify each test tube</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <ol>
      <li>Label three clean, dry test tubes <strong>A</strong>, <strong>B</strong>, and <strong>C</strong>. Place them in the test tube stand.</li>
      <li>Add approximately <strong>5 mL of each salt solution</strong> to the respective test tubes: KCl → tube A, KBr → tube B, KI → tube C.</li>
      <li>Add <strong>2–3 drops of dilute HNO₃</strong> to each test tube to acidify and suppress interfering anions. Swirl gently.</li>
      <li>Using a dropper, add <strong>4–5 drops of 0.1 M AgNO₃ solution</strong> to each test tube.</li>
      <li><strong>Observe immediately</strong> — a precipitate forms in each tube:
        <ul>
          <li>Tube A (KCl) → <strong>White</strong> precipitate (AgCl)</li>
          <li>Tube B (KBr) → <strong>Pale yellow</strong> precipitate (AgBr)</li>
          <li>Tube C (KI) → <strong>Bright yellow</strong> precipitate (AgI)</li>
        </ul>
      </li>
      <li>Record your observations in the observation table.</li>
      <li><em>Optional confirmatory test:</em> Add dilute ammonia solution to each tube. AgCl dissolves readily; AgBr dissolves partially in concentrated ammonia; AgI does not dissolve at all.</li>
    </ol>
  `
};

/* ======================================================
   EVALUATION QUESTIONS
   ====================================================== */
const EVAL_QUESTIONS = [
  {
    q: 'Which reagent is added before silver nitrate, and why?',
    opts: ['Dilute HNO₃, to suppress false positives from interfering anions like CO₃²⁻ and SO₃²⁻', 'Dilute NaOH, to neutralise the solution', 'Distilled water, to dilute the sample', 'Concentrated H₂SO₄, to acidify the sample'],
    answer: 0
  },
  {
    q: 'What colour precipitate forms when AgNO₃ is added to a chloride solution?',
    opts: ['Bright yellow', 'Pale yellow', 'White', 'Black'],
    answer: 2
  },
  {
    q: 'What is the formula of the precipitate formed in the bromide test?',
    opts: ['AgCl', 'AgBr', 'AgI', 'AgNO₃'],
    answer: 1
  },
  {
    q: 'Which silver halide precipitate is essentially insoluble even in concentrated ammonia?',
    opts: ['AgCl', 'AgBr', 'AgI', 'All three dissolve equally'],
    answer: 2
  },
  {
    q: 'The ionic equation for the iodide test is:',
    opts: ['Ag⁺(aq) + Cl⁻(aq) → AgCl(s)', 'Ag⁺(aq) + Br⁻(aq) → AgBr(s)', 'Ag⁺(aq) + I⁻(aq) → AgI(s)', 'Ag²⁺(aq) + 2I⁻(aq) → AgI₂(s)'],
    answer: 2
  },
  {
    q: 'Why is dilute H₂SO₄ NOT used instead of dilute HNO₃ in this experiment?',
    opts: ['Sulphuric acid is too expensive', 'Sulphate ions (SO₄²⁻) would react with Ag⁺ to form a white precipitate, interfering with the test', 'Sulphuric acid dissolves silver nitrate', 'Sulphuric acid has no effect on the experiment'],
    answer: 1
  },
  {
    q: 'A student adds AgNO₃ to an unknown sample and observes a pale yellow precipitate. Which halide ion is present?',
    opts: ['Chloride (Cl⁻)', 'Bromide (Br⁻)', 'Iodide (I⁻)', 'Fluoride (F⁻)'],
    answer: 1
  },
  {
    q: 'AgCl dissolves in dilute ammonia because:',
    opts: ['Ammonia reduces AgCl back to Ag metal', 'Ag⁺ forms a soluble diamine silver complex [Ag(NH₃)₂]⁺ with ammonia', 'Ammonia provides OH⁻ which reacts with Cl⁻', 'AgCl is always soluble in any liquid'],
    answer: 1
  },
  {
    q: 'Which of the following halides does NOT form a precipitate with silver nitrate?',
    opts: ['Chloride', 'Bromide', 'Iodide', 'Fluoride'],
    answer: 3
  },
  {
    q: 'The formation of a precipitate in the silver nitrate test is an example of:',
    opts: ['A redox reaction', 'A precipitation reaction where an insoluble silver halide is formed', 'An acid-base neutralisation', 'A complexation reaction only'],
    answer: 1
  }
];

/* ======================================================
   STATE
   ====================================================== */
const state = {
  mode: 'teach', currentSalt: 'Cl',
  tubePlaced: false, sampleAdded: false, hno3Added: false, agno3Added: false,
  precipitateFormed: false, step: 1, answered: false
};

/* ======================================================
   DOM REFS
   ====================================================== */
const el = id => document.getElementById(id);
const standSlot     = el('tube-drop-target');
const irisMsg       = el('iris-message');
const instrTitle    = el('instruction-title');
const instrBody     = el('instruction-body');
const saltCard      = el('salt-card');
const saltCardName  = el('salt-card-name');
const saltCardFormula = el('salt-card-formula');
const saltPicker    = el('salt-picker');
const logSalt       = el('log-salt');
const logHno3       = el('log-hno3');
const logAgno3      = el('log-agno3');
const logColour     = el('log-colour');
const testModePanel = el('test-mode-panel');
const verdictBanner = el('verdict-banner');
const verdictBannerMain = el('verdict-banner-main');
const openMicroscopeBtn = el('open-microscope');
const microscopeModal   = el('microscope-modal');
const closeMicroscopeBtn = el('close-microscope');
const roHalide = el('ro-halide');
const roPrecip = el('ro-precip');
const roColour = el('ro-colour');
const ionicEq  = el('ionic-eq');
let tubeVisualEl = null;

/* ======================================================
   THEME
   ====================================================== */
el('theme-toggle').addEventListener('click', () => {
  const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  el('theme-toggle').textContent = next === 'dark' ? '☀' : '🌙';
});

/* ======================================================
   RESET
   ====================================================== */
el('reset-lab').addEventListener('click', () => location.reload());

/* ======================================================
   IRIS KNOWLEDGE PANEL
   ====================================================== */
const irisCardTrigger = el('iris-card-trigger');
const irisPanel       = el('iris-panel');
const irisTabContent  = el('iris-tab-content');
let currentIrisTab    = 'theory';
let irisPanelOpen     = false;

irisCardTrigger.addEventListener('click', () => {
  irisPanelOpen = !irisPanelOpen;
  irisPanel.hidden = !irisPanelOpen;
  irisCardTrigger.classList.toggle('panel-open', irisPanelOpen);
  if (irisPanelOpen) renderIrisTab(currentIrisTab);
});

document.querySelectorAll('.iris-tab').forEach(tab => {
  tab.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.iris-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentIrisTab = tab.dataset.tab;
    renderIrisTab(currentIrisTab);
  });
});

function renderIrisTab(tab) {
  irisTabContent.innerHTML = IRIS_CONTENT[tab] || '';
}

/* ======================================================
   EVALUATION QUIZ — one question at a time
   ====================================================== */
const evalState = {
  current: 0,       // index of the question being shown
  score: 0,
  answered: false    // whether current question has been answered
};

(function buildEvalQuiz() {
  const body = el('eval-body');

  // Progress bar + counter
  body.innerHTML = `
    <div class="eval-progress-row">
      <span class="eval-counter" id="eval-counter">Question 1 of ${EVAL_QUESTIONS.length}</span>
      <div class="eval-progress-bar"><div class="eval-progress-fill" id="eval-progress-fill"></div></div>
    </div>
    <div id="eval-question-slot"></div>
    <div class="eval-nav-row" id="eval-nav-row">
      <div class="eval-feedback" id="eval-feedback"></div>
      <div class="eval-nav-btns">
        <button class="eval-check-btn" id="eval-check-btn">Check Answer</button>
        <button class="eval-next-btn" id="eval-next-btn" hidden>Next →</button>
      </div>
    </div>
    <div class="eval-result-panel" id="eval-result-panel" hidden>
      <div class="eval-result-icon" id="eval-result-icon"></div>
      <div class="eval-result-text" id="eval-result-text"></div>
      <button class="eval-restart-btn" id="eval-restart-btn">Try Again</button>
    </div>
  `;

  renderEvalQuestion(0);

  el('eval-check-btn').addEventListener('click', checkEvalAnswer);
  el('eval-next-btn').addEventListener('click', nextEvalQuestion);
  el('eval-restart-btn').addEventListener('click', restartEval);
})();

function renderEvalQuestion(qi) {
  const item = EVAL_QUESTIONS[qi];
  const total = EVAL_QUESTIONS.length;
  evalState.current = qi;
  evalState.answered = false;

  el('eval-counter').textContent = `Question ${qi + 1} of ${total}`;
  el('eval-progress-fill').style.width = `${(qi / total) * 100}%`;

  const slot = el('eval-question-slot');
  slot.innerHTML = `
    <div class="eval-q-text">${qi + 1}. ${item.q}</div>
    <div class="eval-opts" id="eval-opts-${qi}">
      ${item.opts.map((opt, oi) => `
        <label class="eval-opt">
          <input type="radio" name="eq_current" value="${oi}">
          <span>${opt}</span>
        </label>`).join('')}
    </div>`;

  const fb = el('eval-feedback');
  fb.className = 'eval-feedback';
  fb.textContent = '';

  el('eval-check-btn').hidden = false;
  el('eval-check-btn').disabled = false;
  el('eval-next-btn').hidden = true;
  el('eval-nav-row').hidden = false;
  el('eval-result-panel').hidden = true;
}

function checkEvalAnswer() {
  if (evalState.answered) return;
  const qi = evalState.current;
  const item = EVAL_QUESTIONS[qi];
  const selected = document.querySelector('input[name="eq_current"]:checked');

  if (!selected) {
    const fb = el('eval-feedback');
    fb.className = 'eval-feedback show wrong';
    fb.textContent = 'Please select an answer first.';
    return;
  }

  evalState.answered = true;
  const chosen = parseInt(selected.value, 10);
  const correct = chosen === item.answer;
  if (correct) evalState.score++;

  // Mark options visually
  document.querySelectorAll(`#eval-opts-${qi} .eval-opt`).forEach((label, oi) => {
    label.querySelector('input').disabled = true;
    if (oi === item.answer) label.classList.add('correct');
    else if (oi === chosen && !correct) label.classList.add('wrong');
  });

  const fb = el('eval-feedback');
  if (correct) {
    fb.className = 'eval-feedback show correct';
    fb.textContent = '✓ Correct.';
  } else {
    fb.className = 'eval-feedback show wrong';
    fb.textContent = `✗ Incorrect. Correct answer: ${item.opts[item.answer]}`;
  }

  el('eval-check-btn').hidden = true;
  const isLast = qi === EVAL_QUESTIONS.length - 1;
  if (isLast) {
    // show submit / result after a short delay so feedback is readable
    setTimeout(showEvalResult, 800);
  } else {
    el('eval-next-btn').hidden = false;
  }
}

function nextEvalQuestion() {
  renderEvalQuestion(evalState.current + 1);
}

function showEvalResult() {
  const total = EVAL_QUESTIONS.length;
  const pct = Math.round((evalState.score / total) * 100);
  el('eval-progress-fill').style.width = '100%';
  el('eval-counter').textContent = `Complete — ${evalState.score} / ${total}`;
  el('eval-nav-row').hidden = true;
  el('eval-question-slot').innerHTML = '';

  const panel = el('eval-result-panel');
  panel.hidden = false;
  el('eval-result-icon').textContent = pct >= 70 ? '🎉' : '📚';
  el('eval-result-text').innerHTML =
    `<strong>Score: ${evalState.score} / ${total} (${pct}%)</strong><br>` +
    (pct >= 70 ? 'Well done — solid understanding of the silver nitrate test.' : 'Review the Theory tab in Iris and try again.');
}

function restartEval() {
  evalState.score = 0;
  evalState.answered = false;
  el('eval-result-panel').hidden = true;
  el('eval-nav-row').hidden = false;
  renderEvalQuestion(0);
}

el('eval-toggle').addEventListener('click', () => {
  const body = el('eval-body');
  const chevron = el('eval-chevron');
  const open = !body.classList.contains('open');
  body.classList.toggle('open', open);
  chevron.classList.toggle('open', open);
});

/* ======================================================
   MODE TOGGLE
   ====================================================== */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
    saltPicker.style.display = state.mode === 'teach' ? 'flex' : 'none';
    updateSaltCardLabel();
  });
});
saltPicker.style.display = 'flex';

document.querySelectorAll('.salt-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.salt-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentSalt = btn.dataset.salt;
    updateSaltCardLabel();
  });
});

function updateSaltCardLabel() {
  const data = HALIDES[state.currentSalt];
  if (state.mode === 'teach') {
    saltCardName.textContent = data.saltName;
    saltCardFormula.textContent = data.saltFormula + ' · solution';
  } else {
    saltCardName.textContent = 'Unknown Salt Solution';
    saltCardFormula.textContent = 'Sample X · solution';
  }
}

function maybeRandomizeForTest() {
  if (state.mode === 'test') {
    const keys = Object.keys(HALIDES);
    state.currentSalt = keys[Math.floor(Math.random() * keys.length)];
  }
}

/* ======================================================
   STEP TRACKER + MESSAGING
   ====================================================== */
function setStep(n) {
  state.step = n;
  document.querySelectorAll('.step').forEach(s => {
    const sn = parseInt(s.dataset.step, 10);
    s.classList.remove('active','done');
    if (sn < n) s.classList.add('done');
    if (sn === n) s.classList.add('active');
  });
}
function setIris(msg) { irisMsg.innerHTML = msg; }
function setInstruction(title, body) { instrTitle.textContent = title; instrBody.textContent = body; }

/* ======================================================
   DRAG + TAP ENGINE
   ====================================================== */
let armedItem = null;

function clearArmed() {
  armedItem = null;
  document.querySelectorAll('.reagent-card').forEach(c => c.classList.remove('armed'));
  standSlot.classList.remove('armed');
}

document.querySelectorAll('.reagent-card[draggable="true"]').forEach(card => {
  card.addEventListener('dragstart', e => {
    if (card.classList.contains('disabled') || card.classList.contains('used')) { e.preventDefault(); return; }
    e.dataTransfer.setData('text/plain', card.dataset.item);
    e.dataTransfer.setData('application/x-item-' + card.dataset.item, '1');
  });
  card.addEventListener('click', () => {
    if (card.classList.contains('disabled') || card.classList.contains('used')) return;
    const type = card.dataset.item;
    if (armedItem && armedItem.type === type) { clearArmed(); return; }
    clearArmed();
    armedItem = { type };
    card.classList.add('armed');
    if (type === 'testtube') standSlot.classList.add('armed');
  });
});

standSlot.addEventListener('dragover', e => {
  e.preventDefault();
  const types = e.dataTransfer.types || [];
  const found = Array.from(types).find(t => t.startsWith('application/x-item-'));
  const type = found ? found.replace('application/x-item-', '') : '';
  if (isLegalDrop(type)) standSlot.classList.add('armed');
});
standSlot.addEventListener('dragleave', () => standSlot.classList.remove('armed'));

function isLegalDrop(type) {
  if (type === 'testtube') return !state.tubePlaced;
  if (type === 'salt')    return state.tubePlaced && !state.sampleAdded;
  if (type === 'hno3')   return state.sampleAdded && !state.hno3Added;
  if (type === 'agno3')  return state.hno3Added && !state.agno3Added;
  return false;
}

standSlot.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  if (type === 'testtube') placeTube();
  else if (type === 'salt')  addSample();
  else if (type === 'hno3')  addHNO3();
  else if (type === 'agno3') addAgNO3();
});
standSlot.addEventListener('click', () => {
  if (!armedItem) return;
  const type = armedItem.type;
  if (type === 'testtube') placeTube();
  else if (type === 'salt')  addSample();
  else if (type === 'hno3')  addHNO3();
  else if (type === 'agno3') addAgNO3();
});

/* ======================================================
   STAGE HANDLERS
   ====================================================== */
function placeTube() {
  if (state.tubePlaced) return;
  state.tubePlaced = true;
  clearArmed();
  standSlot.innerHTML = '';
  tubeVisualEl = document.createElement('div');
  tubeVisualEl.className = 'test-tube-visual';
  tubeVisualEl.innerHTML = `<div class="tube-liquid" id="tube-liquid"></div><div class="tube-precipitate" id="tube-precipitate"></div>`;
  standSlot.appendChild(tubeVisualEl);
  document.querySelector('[data-item="testtube"]').classList.add('used');
  maybeRandomizeForTest();
  updateSaltCardLabel();
  setStep(2);
  setIris(`Good — the test tube is in the stand. Now drag the <strong>${state.mode === 'teach' ? HALIDES[state.currentSalt].saltName : 'unknown salt sample'}</strong> into the tube.`);
  setInstruction('Step 2: Add the Salt Sample', 'Drag (or tap) the salt sample bottle onto the test tube to add ~5 mL of solution.');
  saltCard.classList.remove('disabled');
}

function addSample() {
  if (!state.tubePlaced || state.sampleAdded) return;
  state.sampleAdded = true;
  clearArmed();
  saltCard.classList.add('used');
  const liquid = el('tube-liquid');
  liquid.style.height = '55%';
  liquid.style.background = 'rgba(180,200,220,0.35)';
  logSalt.textContent = state.mode === 'teach' ? HALIDES[state.currentSalt].saltFormula : 'Unknown sample';
  document.querySelector('[data-item="hno3"]').classList.remove('disabled');
  setStep(3);
  setIris('Sample added. Now acidify with a few drops of <strong>dilute HNO₃</strong> — this prevents carbonate and sulphite ions from giving false precipitates.');
  setInstruction('Step 3: Acidify with Dilute HNO₃', 'Drag (or tap) the dilute nitric acid dropper onto the test tube — a few drops only.');
}

function addHNO3() {
  if (!state.sampleAdded || state.hno3Added) return;
  state.hno3Added = true;
  clearArmed();
  document.querySelector('[data-item="hno3"]').classList.add('used');
  spawnDrip('#c0584f');
  logHno3.textContent = '2–3 drops';
  document.querySelector('[data-item="agno3"]').classList.remove('disabled');
  setStep(4);
  setIris('Acidified. Now add <strong>silver nitrate solution</strong> drop by drop and watch closely — the colour that forms identifies the halide.');
  setInstruction('Step 4: Add Silver Nitrate', 'Drag (or tap) the AgNO₃ dropper onto the test tube, 4–5 drops.');
}

function addAgNO3() {
  if (!state.hno3Added || state.agno3Added) return;
  state.agno3Added = true;
  clearArmed();
  document.querySelector('[data-item="agno3"]').classList.add('used');
  spawnDrip('#3f7fd1');
  logAgno3.textContent = '4–5 drops';
  setTimeout(formPrecipitate, 500);
}

function spawnDrip(color) {
  const drip = document.createElement('div');
  drip.className = 'drip';
  drip.style.background = color;
  standSlot.appendChild(drip);
  setTimeout(() => drip.remove(), 650);
}

function formPrecipitate() {
  state.precipitateFormed = true;
  const data = HALIDES[state.currentSalt];

  const precipEl = el('tube-precipitate');
  precipEl.style.height = '30%';
  precipEl.style.background = data.colourHex;
  precipEl.classList.add('show');

  logColour.textContent = data.colourName;
  roColour.textContent = data.colourName;

  if (state.mode === 'teach') {
    roPrecip.textContent = data.precipitateFormula + ' (s)';
    ionicEq.textContent = data.ionEquation;
    roHalide.textContent = data.symbol;
  } else {
    roPrecip.textContent = '? (s)';
    ionicEq.textContent = 'Ag⁺ + X⁻ → AgX (s)';
    roHalide.textContent = '?';
  }

  setStep(5);
  openMicroscopeBtn.disabled = false;

  if (state.mode === 'teach') {
    setIris(`A <strong>${data.colourName.toLowerCase()}</strong> precipitate of <strong>${data.precipitateFormula}</strong> has formed — confirming <strong>${data.symbol}</strong> ions in the original salt.`);
    setInstruction('Step 5: Observe the Precipitate', 'Note the colour, then open Molecular View to see what happened at the ionic level.');
    setTimeout(() => showFinalVerdict(true), 600);
  } else {
    setIris(`A <strong>${data.colourName.toLowerCase()}</strong> precipitate has formed. Based on this colour — which halide ion was in the unknown sample?`);
    setInstruction('Step 6: Identify the Ion', 'Use the precipitate colour to decide: chloride, bromide, or iodide?');
    testModePanel.hidden = false;
    setStep(6);
  }
}

/* ======================================================
   TEST MODE ANSWERS
   ====================================================== */
document.querySelectorAll('.answer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (state.answered) return;
    state.answered = true;
    const guess = btn.dataset.answer;
    const correct = guess === state.currentSalt;
    const data = HALIDES[state.currentSalt];

    document.querySelectorAll('.answer-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.answer === state.currentSalt) b.classList.add('correct');
      else if (b === btn && !correct) b.classList.add('wrong');
    });

    roHalide.textContent = data.symbol;
    roPrecip.textContent = data.precipitateFormula + ' (s)';
    ionicEq.textContent = data.ionEquation;

    verdictBanner.hidden = false;
    if (correct) {
      verdictBanner.className = 'verdict-banner correct';
      verdictBanner.innerHTML = `<strong>Correct.</strong> The unknown was ${data.saltFormula}, containing ${data.symbol}. ${data.note}`;
      setIris(`Correct! The unknown contained <strong>${data.symbol}</strong> ions, confirmed by the ${data.colourName.toLowerCase()} ${data.precipitateFormula} precipitate.`);
    } else {
      verdictBanner.className = 'verdict-banner wrong';
      verdictBanner.innerHTML = `<strong>Not quite.</strong> The unknown was actually ${data.saltFormula}, containing ${data.symbol} (a ${data.colourName.toLowerCase()} precipitate). ${data.note}`;
      setIris(`Not quite — the unknown was <strong>${data.symbol}</strong>. The ${data.colourName.toLowerCase()} colour is the giveaway. Compare it carefully against the other two next time.`);
    }
    showFinalVerdict(correct);
  });
});

function showFinalVerdict(success) {
  const data = HALIDES[state.currentSalt];
  verdictBannerMain.hidden = false;
  if (state.mode === 'teach') {
    verdictBannerMain.className = 'verdict-banner-main conserved';
    verdictBannerMain.innerHTML = `<strong>Confirmed: ${data.name} ion (${data.symbol})</strong> — ${data.ionEquation}. The ${data.colourName.toLowerCase()} precipitate of ${data.precipitateFormula} is the diagnostic test for this halide. ${data.note}`;
  } else {
    verdictBannerMain.className = success ? 'verdict-banner-main correct' : 'verdict-banner-main wrong';
    verdictBannerMain.innerHTML = success
      ? `<strong>Lab complete — correct identification.</strong> ${data.ionEquation}`
      : `<strong>Lab complete — see correction above.</strong> ${data.ionEquation}`;
  }
}

/* ======================================================
   MOLECULAR MICROSCOPE
   ====================================================== */
openMicroscopeBtn.addEventListener('click', () => { microscopeModal.hidden = false; startParticleSim(); });
closeMicroscopeBtn.addEventListener('click', () => { microscopeModal.hidden = true; stopParticleSim(); });
microscopeModal.addEventListener('click', e => { if (e.target === microscopeModal) { microscopeModal.hidden = true; stopParticleSim(); } });

const canvas = el('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [], animFrame = null, nucleated = [];
const ION_COLORS = { Ag: '#cfd6e0', X: null, precipitate: null };
const ION_PAIR_COUNT = 16, MAX_NUCLEI = 16, NUCLEATION_DIST = 16;

function buildParticles() {
  const data = HALIDES[state.currentSalt];
  ION_COLORS.X = data.colourHex === '#f4f3ee' ? '#d8dde6' : data.colourHex;
  ION_COLORS.precipitate = data.colourHex;
  particles = []; nucleated = [];
  const W = canvas.width, H = canvas.height;
  for (let i = 0; i < ION_PAIR_COUNT; i++) particles.push({ kind: 'Ag', x: Math.random()*W, y: Math.random()*H*0.5, vx: (Math.random()-0.5)*1.4, vy: (Math.random()-0.5)*1.4, r: 7, nucleated: false });
  for (let i = 0; i < ION_PAIR_COUNT; i++) particles.push({ kind: 'X', x: Math.random()*W, y: H*0.5+Math.random()*H*0.5, vx: (Math.random()-0.5)*1.4, vy: (Math.random()-0.5)*1.4, r: 7, nucleated: false });
}

function drawLegend() {
  const data = HALIDES[state.currentSalt];
  el('particle-legend').innerHTML = `
    <span><span class="legend-dot" style="background:${ION_COLORS.Ag}"></span>Ag⁺ ion</span>
    <span><span class="legend-dot" style="background:${ION_COLORS.X}"></span>${data.symbol} ion</span>
    <span><span class="legend-dot" style="background:${data.colourHex}"></span>${data.precipitateFormula} precipitate</span>`;
}

function updateExplainer() {
  const data = HALIDES[state.currentSalt];
  el('microscope-explainer').innerHTML = `When Ag⁺ ions meet ${data.symbol} ions in solution, they combine in a 1:1 ratio: ${data.ionEquation}. ${data.precipitateFormula} is almost completely insoluble in water, so as soon as a pair meets it drops out of solution as a solid — the ${data.colourName.toLowerCase()} precipitate you see settle at the bottom of the tube.`;
}

function stepParticles() {
  const W = canvas.width, H = canvas.height;
  for (const p of particles) {
    if (p.nucleated) continue;
    p.x += p.vx; p.y += p.vy;
    if (p.x < p.r || p.x > W-p.r) p.vx *= -1;
    if (p.y < p.r || p.y > H-p.r) p.vy *= -1;
    p.x = Math.max(p.r, Math.min(W-p.r, p.x));
    p.y = Math.max(p.r, Math.min(H-p.r, p.y));
  }
  if (nucleated.length < MAX_NUCLEI) {
    for (const a of particles) {
      if (a.kind !== 'Ag' || a.nucleated) continue;
      for (const b of particles) {
        if (b.kind !== 'X' || b.nucleated) continue;
        const dx = a.x-b.x, dy = a.y-b.y;
        if (Math.sqrt(dx*dx+dy*dy) < NUCLEATION_DIST) {
          a.nucleated = b.nucleated = true;
          const si = nucleated.length, cols = 7;
          nucleated.push({ targetX: 40+si%cols*((W-80)/(cols-1)), targetY: H-24-Math.floor(si/cols)*20, x0: (a.x+b.x)/2, y0: (a.y+b.y)/2, r: 9, progress: 0 });
          break;
        }
      }
    }
  }
  for (const n of nucleated) if (n.progress < 1) n.progress = Math.min(1, n.progress+0.04);
}

function drawParticles() {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 2; ctx.strokeRect(4,4,W-8,H-8);
  for (const p of particles) {
    if (p.nucleated) continue;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = p.kind === 'Ag' ? ION_COLORS.Ag : ION_COLORS.X; ctx.fill();
  }
  for (const n of nucleated) {
    const x = n.x0+(n.targetX-n.x0)*n.progress, y = n.y0+(n.targetY-n.y0)*n.progress;
    ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI*2);
    ctx.fillStyle = ION_COLORS.precipitate; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ctx.stroke();
  }
}

function loop() { stepParticles(); drawParticles(); animFrame = requestAnimationFrame(loop); }
function startParticleSim() { buildParticles(); drawLegend(); updateExplainer(); if (animFrame) cancelAnimationFrame(animFrame); loop(); }
function stopParticleSim() { if (animFrame) cancelAnimationFrame(animFrame); animFrame = null; }

/* ======================================================
   INIT
   ====================================================== */
document.querySelector('[data-item="hno3"]').classList.add('disabled');
document.querySelector('[data-item="agno3"]').classList.add('disabled');
saltCard.classList.add('disabled');
updateSaltCardLabel();
