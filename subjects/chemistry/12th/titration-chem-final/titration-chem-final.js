'use strict';

/* ======================================================
   ANALYTE DATA
   ====================================================== */
const ANALYTES = {
  oxalic: {
    name: 'Oxalic Acid',
    formula: 'H₂C₂O₄',
    molarMass: 90.03,
    nFactor: 2,          // 2 electrons transferred per molecule (oxalate → 2CO₂)
    kmno4NF: 5,          // KMnO₄: MnO₄⁻ → Mn²⁺, gain of 5e⁻
    // M₁V₁/n₁ = M₂V₂/n₂  =>  for endpoint: M(KMnO4)*V(KMnO4)/5 = M(analyte)*10/2
    // rearranged: M_analyte = M_KMnO4 * V_KMnO4 * 2 / (5 * 10)
    calcFormula: 'M(analyte) = [M(KMnO₄) × V(KMnO₄) × n(analyte)] / [n(KMnO₄) × V(analyte)]',
    calcFormulaShort: 'M = (0.10 × V_titre × 2) / (5 × 10)',
    balancedEq: '2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 10CO₂ + 8H₂O',
    acidifier: 'Dilute H₂SO₄',
    flaskColour: 'rgba(255,252,220,0.35)',  // pale yellow analyte
    endpointColour: 'rgba(255,180,200,0.55)', // light pink at endpoint
    overshootColour: 'rgba(210,50,120,0.80)', // deep pink if overshot
    note: 'KMnO₄ acts as a self-indicator — the endpoint is the first permanent pale pink colour that persists for at least 30 seconds.'
  },
  mohrs: {
    name: "Mohr's Salt",
    formula: 'FeSO₄·(NH₄)₂SO₄·6H₂O',
    molarMass: 392.14,
    nFactor: 1,          // Fe²⁺ → Fe³⁺, 1e⁻ per molecule
    kmno4NF: 5,
    // M_analyte = M_KMnO4 * V_KMnO4 * 1 / (5 * 10)
    calcFormula: 'M(analyte) = [M(KMnO₄) × V(KMnO₄) × n(analyte)] / [n(KMnO₄) × V(analyte)]',
    calcFormulaShort: 'M = (0.10 × V_titre × 1) / (5 × 10)',
    balancedEq: '2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + K₂SO₄ + 5Fe₂(SO₄)₃ + 8H₂O',
    acidifier: 'Dilute H₂SO₄',
    flaskColour: 'rgba(200,220,255,0.35)',  // pale blue-green (ferrous)
    endpointColour: 'rgba(255,180,200,0.55)',
    overshootColour: 'rgba(210,50,120,0.80)',
    note: 'Mohr\'s salt (ferrous ammonium sulphate) is a primary standard. Fe²⁺ is oxidised to Fe³⁺ by KMnO₄ in acidic medium.'
  }
};

// Fixed KMnO4 concentration (titrant in burette) — standard 0.1 M
const KMNO4_M = 0.1;
const ANALYTE_VOL_ML = 10; // pipetted volume
const BURETTE_CAPACITY_ML = 25; // 25 mL burette

// Possible hidden concentrations for test mode, kept low enough that the
// required titre always fits inside the 25 mL burette (with headroom for
// a visible overshoot past the endpoint).
const TEST_CONCS_BY_ANALYTE = {
  oxalic: [0.03, 0.05, 0.07],
  mohrs: [0.015, 0.025, 0.035]
};

// Safe teaching-mode concentration range per analyte, so the titre needed
// to reach the endpoint (plus overshoot margin) never exceeds the 25 mL
// burette. Mohr's salt has a smaller n-factor than KMnO₄'s, so it needs a
// lower concentration range to stay within the same burette volume.
const CONC_RANGE_BY_ANALYTE = {
  oxalic: { min: 0.02, max: 0.08, step: 0.01, default: 0.05 },
  mohrs: { min: 0.01, max: 0.04, step: 0.005, default: 0.025 }
};

/* ======================================================
   IRIS KNOWLEDGE CONTENT
   ====================================================== */
const IRIS_CONTENT = {
  theory: `
    <h4>Theory — KMnO₄ Volumetric Analysis (Titration)</h4>
    <p><strong>Titration</strong> is a quantitative analytical technique in which a solution of known concentration (the <em>titrant</em>, here KMnO₄) is added from a burette to a known volume of analyte until the reaction is exactly complete (the <em>equivalence point</em>).</p>
    <p>Potassium permanganate (KMnO₄) is a strong oxidising agent that acts as a <strong>self-indicator</strong> — the deep purple colour of KMnO₄ itself signals when excess titrant is present. The endpoint is the appearance of a permanent <strong>pale pink (light pink)</strong> colour that persists for at least 30 seconds. A deep pink or purple colour means you have overshot the endpoint.</p>
    <p><strong>With Oxalic Acid (H₂C₂O₄):</strong><br>
    2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 10CO₂ + 8H₂O<br>
    Oxalate is oxidised to CO₂; Mn(VII) is reduced to Mn²⁺ (colourless).</p>
    <p><strong>With Mohr's Salt (FeSO₄·(NH₄)₂SO₄·6H₂O):</strong><br>
    2KMnO₄ + 10FeSO₄ + 8H₂SO₄ → 2MnSO₄ + K₂SO₄ + 5Fe₂(SO₄)₃ + 8H₂O<br>
    Fe²⁺ is oxidised to Fe³⁺; Mn(VII) is reduced to Mn²⁺.</p>
    <p>The concentration is calculated using the <strong>n-factor method</strong>:<br>
    M₁V₁/n₁ = M₂V₂/n₂, where n is the n-factor (electrons transferred per formula unit).</p>
  `,
  materials: `
    <h4>Materials Required</h4>
    <ul>
      <li><strong>Burette</strong> (25 mL, with stand and clamp) — filled with 0.1 M KMnO₄</li>
      <li><strong>Pipette</strong> (10 mL, calibrated) — for transferring analyte to flask</li>
      <li><strong>Conical flask</strong> (250 mL Erlenmeyer) — reaction vessel</li>
      <li><strong>Beaker</strong> (100 mL) — for waste / rinsing</li>
      <li><strong>Burette stand + clamp</strong></li>
      <li><strong>Funnel</strong> — for filling the burette</li>
      <li><strong>KMnO₄ solution</strong> — 0.1 M (titrant, filled in burette)</li>
      <li><strong>Dilute H₂SO₄</strong> — acidifying agent (NOT HCl or HNO₃ — these interfere)</li>
      <li><strong>Analyte:</strong>
        <ul>
          <li>Oxalic acid (H₂C₂O₄) solution — known or unknown concentration</li>
          <li><em>or</em> Mohr's salt solution — known or unknown concentration</li>
        </ul>
      </li>
      <li><strong>Distilled water</strong> — for rinsing</li>
      <li><strong>White tile</strong> — placed under the flask to see the colour change clearly</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <ol>
      <li>Rinse the burette with distilled water and then with 0.1 M KMnO₄ solution. Fill the burette with KMnO₄ to slightly above the 0 mL mark. Open the stopcock briefly to remove air bubbles and bring the level to exactly 0.00 mL. Record the initial reading.</li>
      <li>Rinse the pipette with distilled water and then with the analyte solution. Pipette exactly <strong>10 mL</strong> of the analyte into a clean conical flask.</li>
      <li>Add about <strong>20 mL of dilute H₂SO₄</strong> to the flask to acidify the solution. Do <strong>not</strong> use HCl (it is oxidised by KMnO₄, interfering with the result).</li>
      <li>Place the flask on a <strong>white tile</strong> under the burette. Heat gently to ~60°C if using oxalic acid (the reaction is slow in the cold).</li>
      <li>Open the burette stopcock to allow KMnO₄ to drip into the flask. <strong>Swirl the flask continuously</strong> so the purple colour disperses and is decolourised as the reaction proceeds.</li>
      <li>As you approach the endpoint, add KMnO₄ dropwise — one drop at a time. Stop when the solution turns a <strong>permanent pale pink</strong> colour that does not disappear within 30 seconds. This is the endpoint.</li>
      <li>Record the final burette reading. Volume of KMnO₄ used = final – initial reading.</li>
      <li>Repeat to get three concordant readings (within 0.1 mL). Take the mean titre for calculation.</li>
    </ol>
  `
};

/* ======================================================
   EVALUATION QUESTIONS — 10 MCQs
   ====================================================== */
const EVAL_QUESTIONS = [
  {
    q: 'Why is H₂SO₄ used to acidify the analyte in KMnO₄ titrations rather than HCl?',
    opts: [
      'H₂SO₄ is cheaper and more available',
      'HCl is oxidised by KMnO₄ producing Cl₂, giving a false higher titre value',
      'HCl makes the solution too basic',
      'H₂SO₄ improves the colour of KMnO₄'
    ],
    answer: 1
  },
  {
    q: 'KMnO₄ acts as a self-indicator in this titration. What does this mean?',
    opts: [
      'KMnO₄ changes pH at the endpoint',
      'No external indicator is needed — excess KMnO₄ itself gives a pale pink colour at the endpoint',
      'KMnO₄ fluoresces at the endpoint',
      'KMnO₄ forms a precipitate at the endpoint'
    ],
    answer: 1
  },
  {
    q: 'What is the correct endpoint colour in a KMnO₄ titration?',
    opts: ['Deep purple', 'Colourless', 'Pale (light) pink that persists for 30 seconds', 'Bright yellow'],
    answer: 2
  },
  {
    q: 'In the titration of oxalic acid with KMnO₄, the n-factor of oxalic acid is:',
    opts: ['1', '2', '3', '5'],
    answer: 1
  },
  {
    q: 'The n-factor of KMnO₄ in acidic medium (MnO₄⁻ → Mn²⁺) is:',
    opts: ['1', '2', '3', '5'],
    answer: 3
  },
  {
    q: 'In the balanced equation 2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → products, what are the gaseous products from oxalate oxidation?',
    opts: ['SO₂', 'CO₂', 'O₂', 'H₂'],
    answer: 1
  },
  {
    q: 'If 10 mL of oxalic acid required 25 mL of 0.02 M KMnO₄ at the endpoint, the molarity of oxalic acid is:',
    opts: ['0.05 M', '0.10 M', '0.25 M', '0.50 M'],
    answer: 1
  },
  {
    q: 'Why is the conical flask swirled continuously during the titration?',
    opts: [
      'To keep the flask from overheating',
      'To mix the reactants so the purple KMnO₄ colour disperses and the endpoint is not missed',
      'To speed up the reaction by increasing pressure',
      'To prevent the analyte from evaporating'
    ],
    answer: 1
  },
  {
    q: "In Mohr's salt titration with KMnO₄, which ion is oxidised?",
    opts: ['NH₄⁺', 'SO₄²⁻', 'Fe²⁺ (oxidised to Fe³⁺)', 'K⁺'],
    answer: 2
  },
  {
    q: 'Three titre readings are 24.8, 24.9, and 25.0 mL. The mean titre used for calculation should be:',
    opts: ['24.8 mL', '24.9 mL', '25.0 mL', '24.7 mL'],
    answer: 1
  }
];

/* ======================================================
   STATE
   ====================================================== */
const state = {
  mode: 'teach',
  analyte: 'oxalic',
  concM: 0.05,          // teaching mode concentration (set by slider)
  hiddenConcM: 0.05,    // test mode hidden concentration
  burettePlaced: false,
  flaskPlaced: false,
  pipetteDone: false,
  acidified: false,
  titrating: false,
  titreDone: false,
  step: 1,
  volumeDispensed: 0,   // mL of KMnO4 added
  flowRate: 0,          // 0=off, 1=slow, 2=medium, 3=fast
  shakeRate: 1,
  animFrame: null,
  endpointVol: 0,       // the exact volume at endpoint for current run
};

/* ======================================================
   DOM REFS
   ====================================================== */
const el = id => document.getElementById(id);
let canvas, ctx;

/* ======================================================
   THEME + RESET
   ====================================================== */
el('theme-toggle').addEventListener('click', () => {
  const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  el('theme-toggle').textContent = next === 'dark' ? '☀' : '🌙';
});
el('reset-lab').addEventListener('click', () => location.reload());

/* ======================================================
   IRIS PANEL
   ====================================================== */
let irisPanelOpen = false;
let currentIrisTab = 'theory';
el('iris-card-trigger').addEventListener('click', () => {
  irisPanelOpen = !irisPanelOpen;
  el('iris-panel').hidden = !irisPanelOpen;
  el('iris-card-trigger').classList.toggle('panel-open', irisPanelOpen);
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
function renderIrisTab(tab) { el('iris-tab-content').innerHTML = IRIS_CONTENT[tab] || ''; }

/* ======================================================
   EVAL QUIZ
   ====================================================== */
const evalState = { current: 0, score: 0, answered: false };
(function buildEvalQuiz() {
  const body = el('eval-body');
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
    </div>`;
  renderEvalQ(0);
  el('eval-check-btn').addEventListener('click', checkEvalAnswer);
  el('eval-next-btn').addEventListener('click', () => renderEvalQ(evalState.current + 1));
  el('eval-restart-btn').addEventListener('click', () => {
    evalState.score = 0; evalState.answered = false;
    el('eval-result-panel').hidden = true; el('eval-nav-row').hidden = false;
    renderEvalQ(0);
  });
})();

function renderEvalQ(qi) {
  const item = EVAL_QUESTIONS[qi], total = EVAL_QUESTIONS.length;
  evalState.current = qi; evalState.answered = false;
  el('eval-counter').textContent = `Question ${qi + 1} of ${total}`;
  el('eval-progress-fill').style.width = `${(qi / total) * 100}%`;
  el('eval-question-slot').innerHTML = `
    <div class="eval-q-text">${qi + 1}. ${item.q}</div>
    <div class="eval-opts" id="eval-opts-${qi}">
      ${item.opts.map((o, oi) => `<label class="eval-opt"><input type="radio" name="eq_current" value="${oi}"><span>${o}</span></label>`).join('')}
    </div>`;
  const fb = el('eval-feedback'); fb.className = 'eval-feedback'; fb.textContent = '';
  el('eval-check-btn').hidden = false; el('eval-check-btn').disabled = false;
  el('eval-next-btn').hidden = true; el('eval-nav-row').hidden = false; el('eval-result-panel').hidden = true;
}

function checkEvalAnswer() {
  if (evalState.answered) return;
  const qi = evalState.current, item = EVAL_QUESTIONS[qi];
  const selected = document.querySelector('input[name="eq_current"]:checked');
  const fb = el('eval-feedback');
  if (!selected) { fb.className = 'eval-feedback show wrong'; fb.textContent = 'Please select an answer first.'; return; }
  evalState.answered = true;
  const chosen = parseInt(selected.value), correct = chosen === item.answer;
  if (correct) evalState.score++;
  document.querySelectorAll(`#eval-opts-${qi} .eval-opt`).forEach((label, oi) => {
    label.querySelector('input').disabled = true;
    if (oi === item.answer) label.classList.add('correct');
    else if (oi === chosen && !correct) label.classList.add('wrong');
  });
  fb.className = `eval-feedback show ${correct ? 'correct' : 'wrong'}`;
  fb.textContent = correct ? '✓ Correct.' : `✗ Incorrect. Correct answer: ${item.opts[item.answer]}`;
  el('eval-check-btn').hidden = true;
  if (qi === EVAL_QUESTIONS.length - 1) setTimeout(showEvalResult, 800);
  else el('eval-next-btn').hidden = false;
}

function showEvalResult() {
  const total = EVAL_QUESTIONS.length, pct = Math.round(evalState.score / total * 100);
  el('eval-progress-fill').style.width = '100%';
  el('eval-counter').textContent = `Complete — ${evalState.score} / ${total}`;
  el('eval-nav-row').hidden = true; el('eval-question-slot').innerHTML = ''; el('eval-result-panel').hidden = false;
  el('eval-result-icon').textContent = pct >= 70 ? '🎉' : '📚';
  el('eval-result-text').innerHTML = `<strong>Score: ${evalState.score} / ${total} (${pct}%)</strong><br>` +
    (pct >= 70 ? 'Well done — solid understanding of KMnO₄ titration.' : 'Review the Theory tab in Iris, then try again.');
}

el('eval-toggle').addEventListener('click', () => {
  const body = el('eval-body'), chevron = el('eval-chevron'), open = !body.classList.contains('open');
  body.classList.toggle('open', open); chevron.classList.toggle('open', open);
});

/* ======================================================
   MODE + ANALYTE TOGGLES
   ====================================================== */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
    el('teach-conc-section').style.display = state.mode === 'teach' ? '' : 'none';
    updateEquationPanel();
  });
});

document.querySelectorAll('.analyte-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.analyte-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.analyte = btn.dataset.analyte;
    applyConcRangeForAnalyte();
    updateEquationPanel();
    computeEndpointVol();
  });
});

const concSlider = el('conc-slider');
const concValueEl = el('conc-value');

// Keeps the concentration slider's min/max/step within a range that a
// 25 mL burette can actually titrate to completion for the selected
// analyte (Mohr's salt needs a lower concentration range than oxalic
// acid because of its smaller n-factor).
function applyConcRangeForAnalyte() {
  const range = CONC_RANGE_BY_ANALYTE[state.analyte];
  concSlider.min = range.min;
  concSlider.max = range.max;
  concSlider.step = range.step;
  // Keep the current value if it still fits the new range, otherwise fall
  // back to this analyte's default.
  const fits = state.concM >= range.min && state.concM <= range.max;
  state.concM = fits ? state.concM : range.default;
  concSlider.value = state.concM;
  concValueEl.textContent = state.concM.toFixed(2);
}

concSlider.addEventListener('input', () => {
  state.concM = parseFloat(concSlider.value);
  concValueEl.textContent = state.concM.toFixed(2);
  updateEquationPanel();
  computeEndpointVol();
});

function updateEquationPanel() {
  const data = ANALYTES[state.analyte];
  el('balanced-eq').textContent = data.balancedEq;
  el('ro-analyte').textContent = data.name;
  el('ro-volume').textContent = state.volumeDispensed.toFixed(2) + ' mL';
  el('ro-endpoint').textContent = '—';
  el('ro-molarity').textContent = state.mode === 'teach' ? state.concM.toFixed(2) + ' M (set)' : '— (calculate after titration)';
  updateEquationCalc();
}

// Shows the n-factor formula with the actual numbers (including the fixed
// 0.1 M KMnO₄) substituted in, updating live as titrant is dispensed.
function updateEquationCalc() {
  const data = ANALYTES[state.analyte];
  const vol = state.volumeDispensed;
  const calcM = vol > 0 ? (KMNO4_M * vol * data.nFactor) / (data.kmno4NF * ANALYTE_VOL_ML) : 0;
  const substitution = vol > 0
    ? `M = (${KMNO4_M.toFixed(2)} × ${vol.toFixed(2)} × ${data.nFactor}) / (${data.kmno4NF} × ${ANALYTE_VOL_ML}) = ${calcM.toFixed(3)} M`
    : `M = (${KMNO4_M.toFixed(2)} × V(KMnO₄) × ${data.nFactor}) / (${data.kmno4NF} × ${ANALYTE_VOL_ML})`;
  el('equation-calc').innerHTML = `${data.calcFormulaShort}<br>${substitution}`;
}

function computeEndpointVol() {
  // At equivalence: M1*V1/n1 = M2*V2/n2
  // M1=KMnO4=0.02, n1=5, V2=10mL analyte, n2=nFactor, M2=state.concM
  // V1 = M2*V2*n1 / (M1*n2)
  const data = ANALYTES[state.analyte];
  const M2 = state.mode === 'test' ? state.hiddenConcM : state.concM;
  state.endpointVol = (M2 * ANALYTE_VOL_ML * data.kmno4NF) / (KMNO4_M * data.nFactor);
  return state.endpointVol;
}

applyConcRangeForAnalyte();
updateEquationPanel();
computeEndpointVol();

/* ======================================================
   DRAG + TAP ENGINE
   ====================================================== */
let armedItem = null;
const bench = el('bench-surface');

function clearArmed() {
  armedItem = null;
  document.querySelectorAll('.reagent-card').forEach(c => c.classList.remove('armed'));
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
    clearArmed(); armedItem = { type }; card.classList.add('armed');
  });
});

bench.addEventListener('dragover', e => { e.preventDefault(); });
bench.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  dispatchDrop(type);
});
bench.addEventListener('click', () => {
  if (!armedItem) return;
  const type = armedItem.type;
  clearArmed();
  dispatchDrop(type);
});

function dispatchDrop(type) {
  if (type === 'burette' && !state.burettePlaced) placeBurette();
  else if (type === 'flask' && state.burettePlaced && !state.flaskPlaced) placeFlask();
  else if (type === 'pipette' && state.flaskPlaced && !state.pipetteDone) doPipette();
  else if (type === 'indicator' && state.pipetteDone && !state.acidified) doAcidify();
}

/* ======================================================
   STAGE HANDLERS
   ====================================================== */
function setStep(n) {
  state.step = n;
  document.querySelectorAll('.step').forEach(s => {
    const sn = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (sn < n) s.classList.add('done');
    if (sn === n) s.classList.add('active');
  });
}
function setIris(msg) { el('iris-message').innerHTML = msg; }
function setInstruction(title, body) { el('instruction-title').textContent = title; el('instruction-body').textContent = body; }

function initCanvas() {
  if (canvas) return;
  canvas = el('tit-canvas');
  ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  el('bench-hint').style.display = 'none';
  function resize() {
    const rect = bench.getBoundingClientRect();
    canvas.width = rect.width || 480;
    canvas.height = rect.height || 480;
    drawScene();
  }
  resize();
  window.addEventListener('resize', resize);
}

function placeBurette() {
  state.burettePlaced = true;
  el('burette-card').classList.add('used');
  el('flask-card').classList.remove('disabled');
  initCanvas();
  computeEndpointVol();
  if (state.mode === 'test') {
    const concs = TEST_CONCS_BY_ANALYTE[state.analyte];
    state.hiddenConcM = concs[Math.floor(Math.random() * concs.length)];
    computeEndpointVol();
  }
  setStep(2);
  setIris('Burette filled with KMnO₄ and clamped to stand. Now drag the <strong>Conical Flask</strong> onto the bench.');
  setInstruction('Step 2: Place the Conical Flask', 'Drag (or tap) the Conical Flask onto the bench surface.');
  drawScene();
}

function placeFlask() {
  state.flaskPlaced = true;
  el('flask-card').classList.add('used');
  el('pipette-card').classList.remove('disabled');
  setStep(3);
  setIris('Flask placed under the burette. Now pipette <strong>10 mL of ' + ANALYTES[state.analyte].name + '</strong> into the flask.');
  setInstruction('Step 3: Pipette the Analyte', 'Drag (or tap) the Pipette card to transfer 10 mL of analyte into the flask.');
  el('log-analyte').textContent = state.mode === 'teach' ? ANALYTES[state.analyte].name : 'Unknown analyte';
  drawScene();
}

function doPipette() {
  state.pipetteDone = true;
  el('pipette-card').classList.add('used');
  el('indicator-card').classList.remove('disabled');
  setStep(4);
  el('log-vol-analyte').textContent = '10.00 mL';
  setIris('10 mL of analyte transferred. Now add <strong>dilute H₂SO₄</strong> to acidify — this is critical for KMnO₄ to oxidise in acidic medium.');
  setInstruction('Step 4: Acidify with H₂SO₄', 'Drag (or tap) the H₂SO₄ dropper onto the bench to acidify the analyte.');
  drawScene();
}

function doAcidify() {
  state.acidified = true;
  el('indicator-card').classList.add('used');
  setStep(5);
  setIris('Solution acidified with H₂SO₄. The flask is ready. Now use the levers to begin the titration — add KMnO₄ slowly and swirl continuously.');
  setInstruction('Step 5: Begin Titration', 'Adjust the Flow Rate lever to start dripping KMnO₄. Keep Shaking at Gentle. Stop when pale pink appears and persists.');
  state.titrating = true;
  el('lever-panel').hidden = false;
  setStep(6);
  startTitrationLoop();
  drawScene();
}

/* ======================================================
   TITRATION SIMULATION LOOP
   ====================================================== */
const FLOW_RATES = [0, 0.008, 0.025, 0.08]; // mL per animation tick at each lever position
const SHAKE_LABELS = ['Still', 'Gentle', 'Vigorous'];
const FLOW_LABELS = ['Closed', 'Slow', 'Medium', 'Fast'];

el('flow-lever').addEventListener('input', () => {
  state.flowRate = parseInt(el('flow-lever').value);
  el('flow-value').textContent = FLOW_LABELS[state.flowRate];
});
el('shake-lever').addEventListener('input', () => {
  state.shakeRate = parseInt(el('shake-lever').value);
  el('shake-value').textContent = SHAKE_LABELS[state.shakeRate];
});

el('stop-titration-btn').addEventListener('click', () => {
  if (!state.titrating) return;
  state.flowRate = 0;
  el('flow-lever').value = 0;
  el('flow-value').textContent = 'Closed';
  stopTitrationLoop();
  recordEndpoint();
});

function startTitrationLoop() {
  if (state.animFrame) return;
  function tick() {
    if (!state.titrating) return;
    if (state.flowRate > 0) {
      state.volumeDispensed += FLOW_RATES[state.flowRate];
      if (state.volumeDispensed >= BURETTE_CAPACITY_ML) {
        state.volumeDispensed = BURETTE_CAPACITY_ML; // burette empty — stop the flow
        state.flowRate = 0;
        el('flow-lever').value = 0;
        el('flow-value').textContent = 'Closed (empty)';
      }
      el('ro-volume').textContent = state.volumeDispensed.toFixed(2) + ' mL';
      el('log-titre').textContent = state.volumeDispensed.toFixed(2) + ' mL';
      updateEquationCalc();
    }
    drawScene();
    state.animFrame = requestAnimationFrame(tick);
  }
  state.animFrame = requestAnimationFrame(tick);
}

function stopTitrationLoop() {
  if (state.animFrame) cancelAnimationFrame(state.animFrame);
  state.animFrame = null;
  state.titrating = false;
}

function recordEndpoint() {
  state.titreDone = true;
  el('lever-panel').hidden = true;

  const ep = state.endpointVol;
  const vol = state.volumeDispensed;
  const data = ANALYTES[state.analyte];
  const overshoot = vol > ep * 1.15;
  const undershoot = vol < ep * 0.85;
  const atEndpoint = !overshoot && !undershoot;

  // Calculate actual molarity from what was dispensed
  // M_analyte = M_KMnO4 * V_KMnO4 * n_analyte / (n_KMnO4 * V_analyte)
  const calcM = (KMNO4_M * vol * data.nFactor) / (data.kmno4NF * ANALYTE_VOL_ML);

  el('log-colour').textContent = overshoot ? 'Deep pink/purple (overshot)' : atEndpoint ? 'Pale pink (endpoint ✓)' : 'Colourless (undershoot — add more)';
  el('ro-endpoint').textContent = atEndpoint ? '✓ Pale pink' : overshoot ? '✗ Overshot' : '— Not reached';
  updateEquationCalc();

  setStep(7);

  if (state.mode === 'teach') {
    el('ro-molarity').textContent = calcM.toFixed(3) + ' M (from titre)';
    const expected = state.concM;
    const match = Math.abs(calcM - expected) / expected < 0.12;
    showMainVerdict(match,
      match
        ? `✓ Endpoint reached at ${vol.toFixed(2)} mL. Calculated M = ${calcM.toFixed(3)} M — matches the set concentration of ${expected.toFixed(2)} M.`
        : overshoot
          ? `Overshot — you dispensed ${vol.toFixed(2)} mL (endpoint was ~${ep.toFixed(2)} mL). The deep pink indicates excess KMnO₄. Try again with a slower flow rate near the endpoint.`
          : `Stopped too early (${vol.toFixed(2)} mL dispensed; endpoint ~${ep.toFixed(2)} mL). The solution is still colourless. Add more KMnO₄ dropwise.`,
      match ? 'correct' : 'wrong');
    setIris(match ? `Excellent! Titre = ${vol.toFixed(2)} mL. Calculated concentration = ${calcM.toFixed(3)} M.` : overshoot ? 'Overshot — deep pink means excess KMnO₄. Reset and try slower near the endpoint.' : 'Not enough KMnO₄ added — solution still colourless. Reset and continue.');
  } else {
    // Test mode — show calculation panel
    el('test-mode-panel').hidden = false;
    el('calc-formula').innerHTML =
      `${data.calcFormula}\n\nWhere:\n  M(KMnO₄) = ${KMNO4_M} M\n  V(KMnO₄) = ${vol.toFixed(2)} mL  ← your titre\n  n(analyte) = ${data.nFactor}\n  n(KMnO₄) = ${data.kmno4NF}\n  V(analyte) = ${ANALYTE_VOL_ML} mL\n\n→ M(analyte) = ?`;
    el('ro-molarity').textContent = '— calculate below';
    setIris(`Titration recorded: ${vol.toFixed(2)} mL of KMnO₄ used. Now calculate the molarity of the unknown analyte using the formula in the panel.`);
    setInstruction('Step 6: Calculate the Concentration', 'Use the n-factor formula to find M(analyte). Enter your answer below.');

    el('submit-calc-btn').addEventListener('click', () => {
      const ans = parseFloat(el('student-answer').value);
      if (isNaN(ans)) return;
      const correct = Math.abs(ans - calcM) / calcM < 0.05; // within 5%
      el('verdict-banner').hidden = false;
      if (correct) {
        el('verdict-banner').className = 'verdict-banner correct';
        el('verdict-banner').innerHTML = `<strong>Correct!</strong> M(analyte) = ${calcM.toFixed(3)} M. The hidden concentration was ${state.hiddenConcM.toFixed(2)} M.`;
        showMainVerdict(true, `✓ Correct — M(analyte) = ${calcM.toFixed(3)} M (hidden: ${state.hiddenConcM.toFixed(2)} M). ${data.note}`, 'correct');
      } else {
        el('verdict-banner').className = 'verdict-banner wrong';
        el('verdict-banner').innerHTML = `<strong>Not quite.</strong> Expected ≈ ${calcM.toFixed(3)} M. Check your substitution — use V(KMnO₄) = ${vol.toFixed(2)} mL.`;
      }
    });
  }
  drawScene();
}

function showMainVerdict(success, msg, cls) {
  const vb = el('verdict-banner-main');
  vb.hidden = false;
  vb.className = 'verdict-banner-main ' + cls;
  vb.innerHTML = msg;
}

/* ======================================================
   CANVAS DRAWING — titration apparatus scene
   ====================================================== */
function drawScene() {
  if (!canvas || !ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2;
  const data = ANALYTES[state.analyte];

  // --- Colours based on volume dispensed ---
  const ep = state.endpointVol || 1;
  const frac = Math.min(state.volumeDispensed / ep, 2.0); // 0=no KMnO4, 1=endpoint, >1=overshot
  let flaskLiquidColor = data.flaskColour;
  if (state.acidified && state.volumeDispensed > 0) {
    if (frac >= 1.15) {
      flaskLiquidColor = data.overshootColour;
    } else if (frac >= 0.90) {
      // smooth transition into the permanent pale pink endpoint colour
      const t = (frac - 0.90) / 0.25;
      flaskLiquidColor = lerpColor(data.flaskColour, data.endpointColour, Math.min(t, 1));
    }
  }

  // --- Shared burette geometry (needed by both the burette and the drip) ---
  const bx = cx - 20;
  const btop = 30;
  const bh = H * 0.48;
  const bw = 18;
  const tipY = btop + bh + 22; // where the drop leaves the nozzle

  // --- Shared conical (Erlenmeyer) flask geometry ---
  const fx = cx;
  const fy = H - 55;          // base of flask
  const baseW = 92;           // width at the base
  const neckW = 18;           // neck width
  const fHeight = 122;        // total height, base to top of straight neck
  const neckH = 30;           // length of the straight neck
  const lipW = neckW + 12;    // flared lip width at the very top
  const lipH = 9;             // flare height
  const cornerR = 12;          // bottom corner rounding
  const neckTopY = fy - fHeight;     // top of the straight neck (below the lip)
  const shoulderY = neckTopY + neckH; // where the body starts widening out
  const liquidTopY = fy - fHeight * 0.40; // resting liquid level once analyte is in

  // Gentle rocking transform applied while the flask is being shaken
  let shakeAngle = 0, shakeOffsetX = 0;
  if (state.titrating && state.shakeRate > 0) {
    const t = Date.now() / (state.shakeRate === 2 ? 130 : 230);
    const amp = state.shakeRate === 2 ? 0.10 : 0.05; // radians
    shakeAngle = Math.sin(t) * amp;
    shakeOffsetX = Math.sin(t * 1.4) * (state.shakeRate === 2 ? 4.5 : 2);
  }

  // --- BURETTE (fixed to its stand, unaffected by shaking) ---
  if (state.burettePlaced) {
    // Stand rod
    ctx.fillStyle = getComputedColor('--text-low');
    ctx.fillRect(cx + 40, btop, 5, H - btop - 60);

    // Burette body
    ctx.fillStyle = 'rgba(140,180,220,0.18)';
    ctx.strokeStyle = getComputedColor('--text-mid');
    ctx.lineWidth = 2;
    ctx.strokeRect(bx, btop, bw, bh);

    // KMnO4 fill inside burette (purple, depleting as volume dispensed)
    const remainFrac = Math.max(0, 1 - state.volumeDispensed / BURETTE_CAPACITY_ML);
    const fillH = bh * remainFrac;
    ctx.fillStyle = 'rgba(140, 30, 160, 0.75)';
    ctx.fillRect(bx + 2, btop + bh - fillH, bw - 4, fillH);

    // Stopcock
    ctx.fillStyle = getComputedColor('--brass');
    ctx.fillRect(bx - 4, btop + bh, bw + 8, 6);

    // Tip nozzle
    ctx.strokeStyle = getComputedColor('--text-mid');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, btop + bh + 6);
    ctx.lineTo(cx, tipY);
    ctx.stroke();

    // Drip animation — falls from the nozzle tip down to the liquid
    // surface in the flask (or the flask mouth if no analyte yet).
    if (state.titrating && state.flowRate > 0) {
      const targetY = state.flaskPlaced
        ? (state.pipetteDone ? liquidTopY : neckTopY)
        : tipY + 40;
      const period = 820 - state.flowRate * 220; // faster flow = quicker drops
      const now = Date.now();
      const cycle = now % period;
      const fallT = cycle / period;
      const dropY = tipY + fallT * (targetY - tipY);
      const dropAlpha = 0.85 * (1 - fallT * 0.3);
      ctx.beginPath();
      ctx.arc(cx, dropY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(140,30,160,${dropAlpha.toFixed(2)})`;
      ctx.fill();
    }

    // Burette label
    ctx.fillStyle = getComputedColor('--text-mid');
    ctx.font = `11px ${getFont('--font-mono')}`;
    ctx.textAlign = 'center';
    ctx.fillText('KMnO₄ · 25 mL', bx + bw / 2, btop - 8);

    // Volume scale marks (5 mL graduations, standard for a 25 mL burette)
    ctx.strokeStyle = getComputedColor('--text-low');
    ctx.lineWidth = 1;
    for (let ml = 0; ml <= 25; ml += 5) {
      const y = btop + bh * (ml / 25);
      ctx.beginPath(); ctx.moveTo(bx - 4, y); ctx.lineTo(bx, y); ctx.stroke();
      ctx.fillStyle = getComputedColor('--text-low');
      ctx.font = `9px ${getFont('--font-mono')}`;
      ctx.textAlign = 'right';
      ctx.fillText(ml, bx - 6, y + 3);
    }
  }

  // --- CONICAL FLASK (rocks/tilts while being shaken) ---
  if (state.flaskPlaced) {
    ctx.save();
    ctx.translate(fx + shakeOffsetX, fy);
    ctx.rotate(shakeAngle);
    ctx.translate(-fx, -fy);

    // Build the flask body path: neck, shoulder curve, rounded base — open
    // at the top so it reads as a real vessel rather than a sealed triangle.
    const body = new Path2D();
    body.moveTo(fx - neckW / 2, neckTopY);
body.lineTo(fx - neckW / 2, shoulderY);

// Left side - almost straight
// Left side
body.lineTo(fx - baseW * 0.43, fy - 22);

// Smooth rounded bottom
body.quadraticCurveTo(
    fx - baseW / 2 - 4,
    fy + 8,
    fx,
    fy
);

body.quadraticCurveTo(
    fx + baseW / 2 + 4,
    fy + 8,
    fx + baseW * 0.43,
    fy - 22
);

body.lineTo(fx + neckW / 2, shoulderY);

body.lineTo(fx + neckW / 2, neckTopY);

    // Liquid — clipped to the exact flask silhouette so it always hugs the
    // curved glass walls, however much analyte is in the flask.
    if (state.pipetteDone) {
      let liquidTop = liquidTopY;
      // While actively shaking, give the surface a gentle slosh instead of
      // a perfectly flat line.
      const slosh = (state.titrating && state.shakeRate > 0) ? Math.sin(Date.now() / 160) * (state.shakeRate === 2 ? 5 : 2.5) : 0;
      ctx.save();
      ctx.clip(body);
      ctx.beginPath();
      ctx.moveTo(fx - baseW, liquidTop + slosh);
      ctx.quadraticCurveTo(fx, liquidTop - slosh, fx + baseW, liquidTop + slosh);
      ctx.lineTo(fx + baseW, fy + 5);
      ctx.lineTo(fx - baseW, fy + 5);
      ctx.closePath();
      ctx.fillStyle = flaskLiquidColor;
      ctx.fill();
      ctx.restore();
    }

    // Glass outline (open top — this is a vessel, not a sealed shape)
    ctx.strokeStyle = getComputedColor('--text-mid');
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.stroke(body);

    // Flared lip + mouth opening
    ctx.beginPath();
    ctx.moveTo(fx - neckW / 2, neckTopY);
    ctx.lineTo(fx - lipW / 2, neckTopY - lipH);
    ctx.moveTo(fx + neckW / 2, neckTopY);
    ctx.lineTo(fx + lipW / 2, neckTopY - lipH);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(fx, neckTopY - lipH, lipW / 2, 3, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Flask label
    ctx.fillStyle = getComputedColor('--text-mid');
    ctx.font = `11px ${getFont('--font-mono')}`;
    ctx.textAlign = 'center';
    const label = state.mode === 'teach' ? ANALYTES[state.analyte].formula : '? M analyte';
    ctx.fillText(label, fx, fy + 16);

    ctx.restore();
  }

  // Volume display overlay
  if (state.burettePlaced) {
    ctx.fillStyle = getComputedColor('--text-low');
    ctx.font = `12px ${getFont('--font-mono')}`;
    ctx.textAlign = 'left';
    ctx.fillText(`Dispensed: ${state.volumeDispensed.toFixed(2)} mL`, 8, H - 12);

    if (state.acidified && !state.titreDone) {
      const remaining = Math.max(0, state.endpointVol - state.volumeDispensed);
      // Only show endpoint hint in teach mode
      if (state.mode === 'teach') {
        ctx.fillStyle = getComputedColor('--brass-light');
        ctx.textAlign = 'right';
        ctx.fillText(`~${remaining.toFixed(2)} mL to endpoint`, W - 8, H - 12);
      }
    }
  }
}

function getComputedColor(cssVar) {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() || '#888';
}
function getFont(cssVar) {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() || 'monospace';
}
function parseRgba(str) {
  const m = str.match(/rgba?\(([^)]+)\)/);
  if (!m) return [136, 136, 136, 1];
  const parts = m[1].split(',').map(s => parseFloat(s));
  return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1];
}
function lerpColor(c1, c2, t) {
  const a = parseRgba(c1), b = parseRgba(c2);
  const r = a[0] + (b[0] - a[0]) * t;
  const g = a[1] + (b[1] - a[1]) * t;
  const bl = a[2] + (b[2] - a[2]) * t;
  const al = a[3] + (b[3] - a[3]) * t;
  return `rgba(${r.toFixed(0)},${g.toFixed(0)},${bl.toFixed(0)},${al.toFixed(2)})`;
}

/* ======================================================
   INIT
   ====================================================== */
el('teach-conc-section').style.display = '';
updateEquationPanel();
