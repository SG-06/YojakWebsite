'use strict';

/* ======================================================
   REACTION DATA — four types, Class 10 NCERT
   ====================================================== */
const CASES = {
  combination: {
    name: 'Combination Reaction',
    symbol: 'A + B → AB',
    sampleName: 'Calcium Oxide (Quicklime)',
    sampleFormula: 'CaO',
    reagentName: 'Water',
    reagentFormula: 'H₂O',
    resultFormula: 'Ca(OH)₂',
    resultColourName: 'Milky white slurry; heat released',
    resultColourHex: '#e8e4da',
    equation: 'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat',
    observation: 'Solution turns milky white (lime water); tube becomes hot — exothermic reaction.',
    note: 'Two or more substances combine to form a single product. This reaction is also exothermic — energy is released as heat.'
  },
  decomposition: {
    name: 'Decomposition Reaction',
    symbol: 'AB → A + B',
    sampleName: 'Lead Nitrate',
    sampleFormula: 'Pb(NO₃)₂',
    reagentName: 'Heat (bunsen burner)',
    reagentFormula: '△ (heat)',
    resultFormula: 'PbO + NO₂ + O₂',
    resultColourName: 'Brown fumes of NO₂; yellow PbO residue',
    resultColourHex: '#c2a44e',
    equation: '2Pb(NO₃)₂(s) →(heat) 2PbO(s) + 4NO₂(g) + O₂(g)',
    observation: 'Brown fumes of nitrogen dioxide gas evolve; yellow lead(II) oxide solid remains in the tube.',
    note: 'A single compound breaks down into two or more simpler substances. Thermal decomposition requires heat as an energy source.'
  },
  displacement: {
    name: 'Displacement Reaction',
    symbol: 'A + BC → AC + B',
    sampleName: 'Iron Nail',
    sampleFormula: 'Fe',
    reagentName: 'Copper Sulphate Solution',
    reagentFormula: 'CuSO₄(aq)',
    resultFormula: 'FeSO₄ + Cu',
    resultColourName: 'Blue solution fades; reddish copper deposits on iron',
    resultColourHex: '#b87333',
    equation: 'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)',
    observation: 'The blue colour of copper sulphate solution slowly fades to pale green (FeSO₄); a reddish layer of copper metal deposits on the iron nail.',
    note: 'A more reactive element displaces a less reactive element from its compound. Iron is more reactive than copper in the activity series.'
  },
  double: {
    name: 'Double Displacement Reaction',
    symbol: 'AB + CD → AD + CB',
    sampleName: 'Sodium Sulphate Solution',
    sampleFormula: 'Na₂SO₄(aq)',
    reagentName: 'Barium Chloride Solution',
    reagentFormula: 'BaCl₂(aq)',
    resultFormula: 'BaSO₄↓ + NaCl',
    resultColourName: 'White precipitate of BaSO₄ forms immediately',
    resultColourHex: '#f0ede6',
    equation: 'Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ + 2NaCl(aq)',
    observation: 'A white precipitate of barium sulphate forms instantly when the two solutions are mixed. The precipitate is insoluble in water.',
    note: 'Ions from two different compounds exchange partners to form two new compounds. One product is usually an insoluble precipitate, a gas, or water.'
  }
};

/* ======================================================
   IRIS KNOWLEDGE CONTENT
   ====================================================== */
const IRIS_CONTENT = {
  theory: `
    <h4>Theory — Types of Chemical Reactions</h4>
    <p>Chemical reactions are classified into four main types based on how reactants are rearranged to form products.</p>
    <ul>
      <li><strong>Combination (Synthesis) Reaction — A + B → AB</strong><br>
      Two or more substances combine to form a single product. Example: CaO + H₂O → Ca(OH)₂. These reactions are often exothermic (release heat).</li>
      <li><strong>Decomposition Reaction — AB → A + B</strong><br>
      A single compound breaks down into two or more simpler substances, usually by supplying energy (heat, light, or electricity). Example: 2Pb(NO₃)₂ →(heat) 2PbO + 4NO₂ + O₂.</li>
      <li><strong>Displacement (Single Displacement) Reaction — A + BC → AC + B</strong><br>
      A more reactive element displaces a less reactive element from its compound in solution. The reactivity series determines which metal can displace another. Example: Fe + CuSO₄ → FeSO₄ + Cu.</li>
      <li><strong>Double Displacement Reaction — AB + CD → AD + CB</strong><br>
      Ions from two compounds exchange partners. These reactions often produce a precipitate, a gas, or water. Example: Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl.</li>
    </ul>
    <p>To identify a reaction type, look at the number of reactants and products, whether elements are being swapped, and whether a precipitate or gas is formed.</p>
  `,
  materials: `
    <h4>Materials Used</h4>
    <p><strong>For Combination Reaction (CaO + H₂O):</strong></p>
    <ul>
      <li>Calcium oxide / quicklime (CaO) — a small piece</li>
      <li>Distilled water, dropper</li>
      <li>Test tube, test tube stand, tongs</li>
      <li>Thermometer (to detect heat released)</li>
    </ul>
    <p><strong>For Decomposition Reaction (Pb(NO₃)₂):</strong></p>
    <ul>
      <li>Lead nitrate crystals — Pb(NO₃)₂</li>
      <li>Test tube, test tube holder, Bunsen burner or spirit lamp</li>
      <li>Delivery tube (to collect gases safely)</li>
    </ul>
    <p><strong>For Displacement Reaction (Fe + CuSO₄):</strong></p>
    <ul>
      <li>Iron nail (cleaned with sandpaper)</li>
      <li>Copper sulphate solution — CuSO₄(aq), 0.1 M</li>
      <li>Test tube, test tube stand, forceps</li>
    </ul>
    <p><strong>For Double Displacement Reaction (Na₂SO₄ + BaCl₂):</strong></p>
    <ul>
      <li>Sodium sulphate solution — Na₂SO₄(aq)</li>
      <li>Barium chloride solution — BaCl₂(aq)</li>
      <li>Test tube, dropper, test tube stand</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <p><strong>Combination:</strong></p>
    <ol>
      <li>Place a small piece of calcium oxide in a test tube. Note the appearance.</li>
      <li>Add 2–3 drops of distilled water carefully using a dropper.</li>
      <li>Observe: the mixture turns milky white (slaked lime) and the tube becomes hot — indicating an exothermic combination reaction.</li>
    </ol>
    <p><strong>Decomposition:</strong></p>
    <ol>
      <li>Take a small amount of lead nitrate crystals in a dry test tube.</li>
      <li>Heat strongly over a Bunsen burner (in a fume cupboard).</li>
      <li>Observe: brown fumes of NO₂ evolve; yellow PbO residue remains — a single compound has broken into multiple products.</li>
    </ol>
    <p><strong>Displacement:</strong></p>
    <ol>
      <li>Pour ~5 mL of copper sulphate solution into a test tube.</li>
      <li>Clean an iron nail with sandpaper and immerse it in the solution.</li>
      <li>Leave for 10–15 minutes. Observe: the blue colour fades and a reddish copper deposit appears on the nail — Fe has displaced Cu.</li>
    </ol>
    <p><strong>Double Displacement:</strong></p>
    <ol>
      <li>Take ~3 mL of sodium sulphate solution in a test tube.</li>
      <li>Add ~3 mL of barium chloride solution using a dropper.</li>
      <li>Observe immediately: a white precipitate of barium sulphate forms — two ionic compounds have exchanged partners.</li>
    </ol>
  `
};

/* ======================================================
   EVALUATION QUESTIONS — 10 MCQs
   ====================================================== */
const EVAL_QUESTIONS = [
  {
    q: 'Which of the following is an example of a combination reaction?',
    opts: [
      'CaO + H₂O → Ca(OH)₂',
      '2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂',
      'Fe + CuSO₄ → FeSO₄ + Cu',
      'Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl'
    ],
    answer: 0
  },
  {
    q: 'In the reaction Fe + CuSO₄ → FeSO₄ + Cu, iron displaces copper because:',
    opts: [
      'Copper is more reactive than iron',
      'Iron is more reactive than copper in the activity series',
      'The reaction is endothermic',
      'Copper sulphate is a weak electrolyte'
    ],
    answer: 1
  },
  {
    q: 'A white precipitate forms when Na₂SO₄(aq) is mixed with BaCl₂(aq). This is an example of:',
    opts: ['Combination reaction', 'Decomposition reaction', 'Displacement reaction', 'Double displacement reaction'],
    answer: 3
  },
  {
    q: 'When lead nitrate is heated, brown fumes are produced. This is a:',
    opts: ['Combination reaction', 'Thermal decomposition reaction', 'Double displacement reaction', 'Photochemical reaction'],
    answer: 1
  },
  {
    q: 'The general form of a double displacement reaction is:',
    opts: ['A + B → AB', 'AB → A + B', 'A + BC → AC + B', 'AB + CD → AD + CB'],
    answer: 3
  },
  {
    q: 'Which observation confirms that a combination reaction between CaO and H₂O has taken place?',
    opts: [
      'Brown fumes are produced',
      'A reddish deposit forms',
      'The solution turns milky white and the tube becomes hot',
      'A white precipitate that is insoluble in water forms'
    ],
    answer: 2
  },
  {
    q: 'The reaction 2H₂O →(electricity) 2H₂ + O₂ is classified as:',
    opts: ['Combination', 'Displacement', 'Electrolytic decomposition', 'Double displacement'],
    answer: 2
  },
  {
    q: 'In a displacement reaction, which of the following metals can displace zinc from zinc sulphate solution?',
    opts: ['Copper (Cu)', 'Silver (Ag)', 'Magnesium (Mg)', 'Gold (Au)'],
    answer: 2
  },
  {
    q: 'In the double displacement reaction between Na₂SO₄ and BaCl₂, the white precipitate formed is:',
    opts: ['NaCl', 'BaCl₂', 'Na₂SO₄', 'BaSO₄'],
    answer: 3
  },
  {
    q: 'Which type of reaction always involves a single reactant?',
    opts: ['Combination', 'Decomposition', 'Displacement', 'Double displacement'],
    answer: 1
  }
];

/* ======================================================
   STATE
   ====================================================== */
const state = {
  mode: 'teach',
  currentCase: 'combination',
  tubePlaced: false,
  reactantAAdded: false,
  reactantBAdded: false,
  reactionComplete: false,
  step: 1,
  answered: false
};

/* ======================================================
   DOM REFS
   ====================================================== */
const el = id => document.getElementById(id);
const standSlot       = el('tube-drop-target');
const irisMsg         = el('iris-message');
const instrTitle      = el('instruction-title');
const instrBody       = el('instruction-body');
const saltCard        = el('salt-card');
const saltCardName    = el('salt-card-name');
const saltCardFormula = el('salt-card-formula');
const reagentCardName = el('reagent-card-name');
const reagentCardFormula = el('reagent-card-formula');
const saltPicker      = el('salt-picker');
const logSalt         = el('log-salt');
const logHno3         = el('log-hno3');
const logColour       = el('log-colour');
const testModePanel   = el('test-mode-panel');
const verdictBanner   = el('verdict-banner');
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

  renderEvalQuestion(0);
  el('eval-check-btn').addEventListener('click', checkEvalAnswer);
  el('eval-next-btn').addEventListener('click', () => renderEvalQuestion(evalState.current + 1));
  el('eval-restart-btn').addEventListener('click', () => {
    evalState.score = 0; evalState.answered = false;
    el('eval-result-panel').hidden = true;
    el('eval-nav-row').hidden = false;
    renderEvalQuestion(0);
  });
})();

function renderEvalQuestion(qi) {
  const item = EVAL_QUESTIONS[qi];
  const total = EVAL_QUESTIONS.length;
  evalState.current = qi; evalState.answered = false;
  el('eval-counter').textContent = `Question ${qi + 1} of ${total}`;
  el('eval-progress-fill').style.width = `${(qi / total) * 100}%`;
  el('eval-question-slot').innerHTML = `
    <div class="eval-q-text">${qi + 1}. ${item.q}</div>
    <div class="eval-opts" id="eval-opts-${qi}">
      ${item.opts.map((o, oi) => `<label class="eval-opt"><input type="radio" name="eq_current" value="${oi}"><span>${o}</span></label>`).join('')}
    </div>`;
  const fb = el('eval-feedback');
  fb.className = 'eval-feedback'; fb.textContent = '';
  el('eval-check-btn').hidden = false; el('eval-check-btn').disabled = false;
  el('eval-next-btn').hidden = true;
  el('eval-nav-row').hidden = false; el('eval-result-panel').hidden = true;
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
  document.querySelectorAll(`#eval-opts-${qi} .eval-opt`).forEach((label, oi) => {
    label.querySelector('input').disabled = true;
    if (oi === item.answer) label.classList.add('correct');
    else if (oi === chosen && !correct) label.classList.add('wrong');
  });
  const fb = el('eval-feedback');
  fb.className = `eval-feedback show ${correct ? 'correct' : 'wrong'}`;
  fb.textContent = correct ? '✓ Correct.' : `✗ Incorrect. Correct answer: ${item.opts[item.answer]}`;
  el('eval-check-btn').hidden = true;
  if (qi === EVAL_QUESTIONS.length - 1) {
    setTimeout(showEvalResult, 800);
  } else {
    el('eval-next-btn').hidden = false;
  }
}

function showEvalResult() {
  const total = EVAL_QUESTIONS.length;
  const pct = Math.round((evalState.score / total) * 100);
  el('eval-progress-fill').style.width = '100%';
  el('eval-counter').textContent = `Complete — ${evalState.score} / ${total}`;
  el('eval-nav-row').hidden = true;
  el('eval-question-slot').innerHTML = '';
  el('eval-result-panel').hidden = false;
  el('eval-result-icon').textContent = pct >= 70 ? '🎉' : '📚';
  el('eval-result-text').innerHTML =
    `<strong>Score: ${evalState.score} / ${total} (${pct}%)</strong><br>` +
    (pct >= 70
      ? 'Well done — you can confidently identify the four reaction types.'
      : 'Review the Theory tab in Iris for definitions and examples, then try again.');
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
    updateLabels();
  });
});
saltPicker.style.display = 'flex';

document.querySelectorAll('.salt-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.salt-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentCase = btn.dataset.salt;
    updateLabels();
  });
});

function updateLabels() {
  const data = CASES[state.currentCase];
  if (state.mode === 'teach') {
    saltCardName.textContent = data.sampleName;
    saltCardFormula.textContent = data.sampleFormula + ' · reactant A';
    reagentCardName.textContent = data.reagentName;
    reagentCardFormula.textContent = data.reagentFormula;
  } else {
    saltCardName.textContent = 'Unknown Reactant A';
    saltCardFormula.textContent = 'Sample X';
    reagentCardName.textContent = 'Unknown Reactant B';
    reagentCardFormula.textContent = 'Reagent Y';
  }
}

function maybeRandomize() {
  if (state.mode === 'test') {
    const keys = Object.keys(CASES);
    state.currentCase = keys[Math.floor(Math.random() * keys.length)];
  }
}

/* ======================================================
   STEP TRACKER + MESSAGING
   ====================================================== */
function setStep(n) {
  state.step = n;
  document.querySelectorAll('.step').forEach(s => {
    const sn = parseInt(s.dataset.step, 10);
    s.classList.remove('active', 'done');
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
  if (type === 'salt')    return state.tubePlaced && !state.reactantAAdded;
  if (type === 'hno3')   return state.reactantAAdded && !state.reactantBAdded;
  return false;
}

standSlot.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  if (type === 'testtube') placeTube();
  else if (type === 'salt') addReactantA();
  else if (type === 'hno3') addReactantB();
});
standSlot.addEventListener('click', () => {
  if (!armedItem) return;
  const t = armedItem.type;
  if (t === 'testtube') placeTube();
  else if (t === 'salt') addReactantA();
  else if (t === 'hno3') addReactantB();
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
  maybeRandomize();
  updateLabels();
  setStep(2);
  const data = CASES[state.currentCase];
  const label = state.mode === 'teach' ? `<strong>${data.sampleName}</strong>` : 'the first reactant';
  setIris(`Test tube placed. Now drag ${label} from the shelf into the tube.`);
  setInstruction('Step 2: Add Reactant A', 'Drag (or tap) Reactant A from the shelf onto the test tube.');
  saltCard.classList.remove('disabled');
}

function addReactantA() {
  if (!state.tubePlaced || state.reactantAAdded) return;
  state.reactantAAdded = true;
  clearArmed();
  saltCard.classList.add('used');
  const data = CASES[state.currentCase];
  const liquid = el('tube-liquid');
  liquid.style.height = '55%';
  liquid.style.background = 'rgba(180,200,220,0.4)';
  logSalt.textContent = state.mode === 'teach' ? data.sampleFormula : 'Unknown A';
  document.querySelector('[data-item="hno3"]').classList.remove('disabled');
  setStep(3);
  const bLabel = state.mode === 'teach' ? `<strong>${data.reagentName}</strong>` : 'the second reactant';
  setIris(`Reactant A added. Now add ${bLabel} to trigger the reaction — watch the tube carefully.`);
  setInstruction('Step 3: Add Reactant B', 'Drag (or tap) Reactant B from the shelf onto the test tube.');
}

function addReactantB() {
  if (!state.reactantAAdded || state.reactantBAdded) return;
  state.reactantBAdded = true;
  clearArmed();
  document.querySelector('[data-item="hno3"]').classList.add('used');
  spawnDrip('#3f7fd1');
  const data = CASES[state.currentCase];
  logHno3.textContent = state.mode === 'teach' ? data.reagentFormula : 'Unknown B';
  setTimeout(showReactionResult, 500);
}

function spawnDrip(color) {
  const drip = document.createElement('div');
  drip.className = 'drip'; drip.style.background = color;
  standSlot.appendChild(drip);
  setTimeout(() => drip.remove(), 650);
}

function showReactionResult() {
  state.reactionComplete = true;
  const data = CASES[state.currentCase];

  const precipEl = el('tube-precipitate');
  precipEl.style.height = '35%';
  precipEl.style.background = data.resultColourHex;
  precipEl.classList.add('show');

  // Add glow and bubbles for visual interest
  tubeVisualEl.classList.add('glow');
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      if (!tubeVisualEl) return;
      const bubble = document.createElement('div');
      bubble.className = 'tube-bubble';
      bubble.style.left = (30 + Math.random() * 40) + '%';
      tubeVisualEl.appendChild(bubble);
      setTimeout(() => bubble.remove(), 1200);
    }, i * 220);
  }

  logColour.textContent = data.observation;
  roColour.textContent = data.resultColourName;

  if (state.mode === 'teach') {
    roHalide.textContent = data.name;
    roPrecip.textContent = data.resultFormula;
    ionicEq.textContent = data.equation;
  } else {
    roHalide.textContent = '?';
    roPrecip.textContent = '[masked]';
    ionicEq.textContent = '[masked until answered]';
  }

  setStep(4);
  openMicroscopeBtn.disabled = false;

  if (state.mode === 'teach') {
    setIris(`Reaction complete! <strong>${data.observation}</strong> This is a <strong>${data.name}</strong>.`);
    setInstruction('Step 4: Observe', 'Note the visual change. Open Molecular View to see what happened at the particle level.');
    setTimeout(() => showFinalVerdict(true), 600);
  } else {
    setIris(`The reaction has occurred — observe the change in the tube carefully. What type of reaction do you think this is?`);
    setInstruction('Step 5: Identify the Reaction', 'Based on what you observed, select the reaction type below.');
    testModePanel.hidden = false;
    setStep(5);
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
    const correct = guess === state.currentCase;
    const data = CASES[state.currentCase];

    document.querySelectorAll('.answer-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.answer === state.currentCase) b.classList.add('correct');
      else if (b === btn && !correct) b.classList.add('wrong');
    });

    roHalide.textContent = data.name;
    roPrecip.textContent = data.resultFormula;
    ionicEq.textContent = data.equation;

    verdictBanner.hidden = false;
    if (correct) {
      verdictBanner.className = 'verdict-banner correct';
      verdictBanner.innerHTML = `<strong>Correct!</strong> This was a ${data.name}. ${data.note}`;
      setIris(`Correct! You identified a <strong>${data.name}</strong> — ${data.note}`);
    } else {
      const guessName = CASES[guess] ? CASES[guess].name : guess;
      verdictBanner.className = 'verdict-banner wrong';
      verdictBanner.innerHTML = `<strong>Not quite.</strong> This was a <strong>${data.name}</strong>, not a ${guessName}. ${data.note}`;
      setIris(`Not quite — this was a <strong>${data.name}</strong>. ${data.note}`);
    }
    showFinalVerdict(correct);
  });
});

function showFinalVerdict(success) {
  const data = CASES[state.currentCase];
  verdictBannerMain.hidden = false;
  if (state.mode === 'teach') {
    verdictBannerMain.className = 'verdict-banner-main conserved';
    verdictBannerMain.innerHTML = `<strong>✓ ${data.name}</strong><br>${data.equation}<br><em>${data.note}</em>`;
  } else {
    verdictBannerMain.className = success ? 'verdict-banner-main correct' : 'verdict-banner-main wrong';
    verdictBannerMain.innerHTML = success
      ? `<strong>Lab complete — correct identification.</strong><br>${data.equation}`
      : `<strong>Lab complete — see correction above.</strong><br>${data.equation}`;
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
const ION_COLORS = { A: '#6fa3d4', B: null, product: null };
const ION_PAIR_COUNT = 16, MAX_NUCLEI = 16, NUCLEATION_DIST = 16;

function buildParticles() {
  const data = CASES[state.currentCase];
  ION_COLORS.B = data.resultColourHex;
  ION_COLORS.product = data.resultColourHex;
  particles = []; nucleated = [];
  const W = canvas.width, H = canvas.height;
  for (let i = 0; i < ION_PAIR_COUNT; i++)
    particles.push({ kind: 'A', x: Math.random()*W, y: Math.random()*H*0.5, vx: (Math.random()-0.5)*1.4, vy: (Math.random()-0.5)*1.4, r: 7, nucleated: false });
  for (let i = 0; i < ION_PAIR_COUNT; i++)
    particles.push({ kind: 'B', x: Math.random()*W, y: H*0.5+Math.random()*H*0.5, vx: (Math.random()-0.5)*1.4, vy: (Math.random()-0.5)*1.4, r: 7, nucleated: false });
}

function drawLegend() {
  const data = CASES[state.currentCase];
  el('particle-legend').innerHTML = `
    <span><span class="legend-dot" style="background:${ION_COLORS.A}"></span>${data.sampleFormula} (Reactant A)</span>
    <span><span class="legend-dot" style="background:${ION_COLORS.B}"></span>${data.reagentFormula} (Reactant B)</span>
    <span><span class="legend-dot" style="background:${data.resultColourHex}"></span>${data.resultFormula} (Product)</span>`;
}

function updateExplainer() {
  const data = CASES[state.currentCase];
  el('microscope-explainer').innerHTML = `<strong>${data.name}:</strong> ${data.equation}<br>${data.note}`;
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
      if (a.kind !== 'A' || a.nucleated) continue;
      for (const b of particles) {
        if (b.kind !== 'B' || b.nucleated) continue;
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
    ctx.fillStyle = p.kind === 'A' ? ION_COLORS.A : ION_COLORS.B; ctx.fill();
  }
  for (const n of nucleated) {
    const x = n.x0+(n.targetX-n.x0)*n.progress, y = n.y0+(n.targetY-n.y0)*n.progress;
    ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI*2);
    ctx.fillStyle = ION_COLORS.product; ctx.fill();
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
saltCard.classList.add('disabled');
updateLabels();
