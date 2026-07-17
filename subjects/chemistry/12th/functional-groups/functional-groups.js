'use strict';

/* ======================================================
   TOPIC DATA — Identification of Functional Groups
   (Class 12 CBSE practical: unsaturation, phenolic,
   carboxylic, aldehyde, primary aromatic amino)
   ======================================================
   Each key is one functional-group test. Everything else in
   this file reads from this object — no name, colour, or
   equation is hardcoded elsewhere.
   ====================================================== */
const CASES = {
  unsaturation: {
    name: 'Unsaturation (C=C / C≡C)',
    symbol: 'Bromine water test',
    sampleName: 'Cyclohexene',
    sampleFormula: 'C₆H₁₀',
    reagentName: 'Bromine Water',
    reagentFormula: 'Br₂ (aq)',
    resultFormula: 'C₆H₁₀Br₂ (colourless)',
    resultColourName: 'Orange bromine water decolourises',
    resultColourHex: '#f2efe6',
    equation: 'C₆H₁₀ + Br₂ → C₆H₁₀Br₂',
    note: 'The double bond adds across the bromine molecule, decolourising the orange bromine water — a positive test for unsaturation.',
    effect: 'colour',
    negativeObservation: 'The orange colour of bromine water persists — no decolourisation. Negative test for unsaturation.',
    negativeColourHex: '#e8a33d'
  },
  phenolic: {
    name: 'Phenolic Group (–OH on benzene ring)',
    symbol: 'Neutral FeCl₃ test',
    sampleName: 'Phenol',
    sampleFormula: 'C₆H₅OH',
    reagentName: 'Neutral Ferric Chloride',
    reagentFormula: 'FeCl₃ (aq)',
    resultFormula: '[Fe(OC₆H₅)₆]³⁻ complex',
    resultColourName: 'Violet / purple colouration',
    resultColourHex: '#6b4a8a',
    equation: '6 C₆H₅OH + FeCl₃ → [Fe(OC₆H₅)₆]³⁻ + 6HCl',
    note: 'Phenols form a coloured iron–phenolate complex with neutral FeCl₃ — a violet/purple colour confirms a phenolic –OH group.',
    effect: 'colour',
    negativeObservation: 'No violet/purple colouration develops — the solution stays pale yellow. Negative test for a phenolic –OH group.',
    negativeColourHex: '#e8dfa0'
  },
  carboxylic: {
    name: 'Carboxylic Group (–COOH)',
    symbol: 'NaHCO₃ test',
    sampleName: 'Acetic Acid',
    sampleFormula: 'CH₃COOH',
    reagentName: 'Sodium Bicarbonate solution',
    reagentFormula: 'NaHCO₃ (aq)',
    resultFormula: 'CH₃COONa + H₂O + CO₂↑',
    resultColourName: 'Brisk effervescence (CO₂ gas)',
    resultColourHex: '#dfe6ea',
    equation: 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑',
    note: 'Carboxylic acids are acidic enough to liberate CO₂ gas from bicarbonate — brisk effervescence is the confirmatory test.',
    effect: 'bubbles',
    negativeObservation: 'No effervescence is seen — the solution stays clear and still. Negative test for a carboxylic acid group.',
    negativeColourHex: '#dfe6ea'
  },
  aldehyde: {
    name: 'Aldehyde Group (–CHO)',
    symbol: "Tollens' test",
    sampleName: 'Acetaldehyde',
    sampleFormula: 'CH₃CHO',
    reagentName: "Tollens' Reagent",
    reagentFormula: '[Ag(NH₃)₂]⁺',
    resultFormula: 'CH₃COO⁻ + Ag↓ (mirror)',
    resultColourName: 'Bright silver mirror deposits on the tube',
    resultColourHex: '#dfe3e8',
    equation: 'CH₃CHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → CH₃COO⁻ + 2Ag↓ + 4NH₃ + 2H₂O',
    note: "Aldehydes reduce Tollens' reagent, depositing metallic silver as a mirror on the tube wall — ketones do not give this test.",
    effect: 'precipitate',
    negativeObservation: "No silver mirror forms even on gentle warming — the tube stays clear. Negative test for an aldehyde group.",
    negativeColourHex: '#dfe3e8'
  },
  amine: {
    name: 'Primary Aromatic Amino Group (–NH₂)',
    symbol: 'Bleaching powder test',
    sampleName: 'Aniline',
    sampleFormula: 'C₆H₅NH₂',
    reagentName: 'Bleaching Powder solution',
    reagentFormula: 'CaOCl₂ (aq)',
    resultFormula: 'coloured oxidation product',
    resultColourName: 'Violet colour appears',
    resultColourHex: '#8a4f8f',
    equation: 'C₆H₅NH₂ + CaOCl₂ → coloured oxidation product',
    note: 'Primary aromatic amines are oxidised by bleaching powder to give a characteristic violet colour, confirming a –NH₂ group on the ring.',
    effect: 'glow',
    negativeObservation: 'No violet colour develops — the solution stays colourless. Negative test for a primary aromatic amino group.',
    negativeColourHex: '#dfe3e8'
  }
};

/* ======================================================
   IRIS KNOWLEDGE CONTENT
   ====================================================== */
const IRIS_CONTENT = {
  theory: `
    <h4>Theory — Identification of Functional Groups</h4>
    <p>Organic compounds are classified by their <strong>functional groups</strong> — reactive atoms or groups that give a molecule its characteristic chemical behaviour. Each functional group has a <em>confirmatory test</em>: a reagent that reacts with it in a distinctive, visible way that other functional groups do not produce.</p>
    <p><strong>Unsaturation (C=C / C≡C) — Bromine water test:</strong><br>
    C₆H₁₀ + Br₂ → C₆H₁₀Br₂<br>
    The double/triple bond adds across Br₂, decolourising the orange bromine water.</p>
    <p><strong>Phenolic –OH — Neutral FeCl₃ test:</strong><br>
    6 C₆H₅OH + FeCl₃ → [Fe(OC₆H₅)₆]³⁻ + 6HCl<br>
    Phenols form a coloured iron–phenolate complex, giving a violet/purple colour.</p>
    <p><strong>Carboxylic –COOH — NaHCO₃ test:</strong><br>
    CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑<br>
    Carboxylic acids are acidic enough to liberate CO₂ gas — seen as brisk effervescence.</p>
    <p><strong>Aldehyde –CHO — Tollens' test:</strong><br>
    CH₃CHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → CH₃COO⁻ + 2Ag↓ + 4NH₃ + 2H₂O<br>
    Aldehydes reduce Tollens' reagent, depositing a silver mirror. Ketones do not give this test.</p>
    <p><strong>Primary aromatic amine –NH₂ — Bleaching powder test:</strong><br>
    C₆H₅NH₂ + CaOCl₂ → coloured oxidation product<br>
    Primary aromatic amines are oxidised to give a characteristic violet colour.</p>
    <p>In <strong>Test Mode</strong>, the compound's identity is unknown. Since each reagent is specific to one functional group, you must try reagents one at a time — only the reagent matching the true functional group gives a positive result; all others give a negative (no visible change) result.</p>
  `,
  materials: `
    <h4>Materials Required</h4>
    <ul>
      <li><strong>Test tube</strong> (with stand) — reaction vessel</li>
      <li><strong>Unknown/known organic compound</strong> — a few mL, freshly sampled for each test</li>
      <li><strong>Bromine water</strong> (Br₂ (aq)) — test for unsaturation</li>
      <li><strong>Neutral ferric chloride</strong> (FeCl₃ (aq)) — test for phenolic –OH</li>
      <li><strong>Sodium bicarbonate solution</strong> (NaHCO₃ (aq)) — test for carboxylic –COOH</li>
      <li><strong>Tollens' reagent</strong> ([Ag(NH₃)₂]⁺, freshly prepared) — test for aldehyde –CHO</li>
      <li><strong>Bleaching powder solution</strong> (CaOCl₂ (aq)) — test for primary aromatic –NH₂</li>
      <li><strong>Dropper</strong> — for adding reagents</li>
      <li><strong>Water bath</strong> — for gentle warming (Tollens' test)</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <ol>
      <li>Place a clean, dry test tube in the stand.</li>
      <li>Take a small quantity (about 1 mL) of the compound to be tested into the test tube.</li>
      <li>Choose one reagent and add a few drops to the tube. Note any immediate change (colour, gas, precipitate).</li>
      <li>Compare the observation with the expected positive result for that reagent's functional group.</li>
      <li>If the result is <strong>negative</strong> (no visible change), take a fresh sample in a clean tube and repeat with the next reagent.</li>
      <li>If the result is <strong>positive</strong>, that reagent's functional group is present — no need to test further reagents.</li>
      <li>Record all tests performed, including negative results, before concluding.</li>
      <li>State the functional group confirmed by the one positive test, supported by the balanced equation.</li>
    </ol>
  `
};

/* ======================================================
   EVALUATION QUESTIONS — 10 MCQs
   ====================================================== */
const EVAL_QUESTIONS = [
  {
    q: 'Which reagent is used to test for unsaturation (C=C or C≡C) in an organic compound?',
    opts: ['Neutral FeCl₃', 'Bromine water', "Tollens' reagent", 'Bleaching powder solution'],
    answer: 1
  },
  {
    q: 'A positive bromine water test is indicated by:',
    opts: ['A silver mirror forming', 'Brisk effervescence', 'Decolourisation of the orange bromine water', 'A violet colour appearing'],
    answer: 2
  },
  {
    q: 'Neutral ferric chloride (FeCl₃) is used to test for which functional group?',
    opts: ['Aldehyde (–CHO)', 'Carboxylic acid (–COOH)', 'Phenolic (–OH on benzene ring)', 'Amine (–NH₂)'],
    answer: 2
  },
  {
    q: 'Why does a carboxylic acid produce effervescence with NaHCO₃ but a phenol does not?',
    opts: [
      'Phenols are insoluble in water',
      'Carboxylic acids are acidic enough to liberate CO₂ from bicarbonate; phenols are too weakly acidic to do so',
      'NaHCO₃ only reacts with aromatic compounds',
      'Phenols react with NaHCO₃ to give a different gas'
    ],
    answer: 1
  },
  {
    q: "Tollens' test is a confirmatory test for:",
    opts: ['Ketones', 'Aldehydes', 'Alcohols', 'Amines'],
    answer: 1
  },
  {
    q: "A positive Tollens' test is observed as:",
    opts: ['Brisk effervescence', 'A violet colouration', 'A bright silver mirror deposited on the tube', 'Decolourisation of an orange solution'],
    answer: 2
  },
  {
    q: 'Why must Tollens\' reagent be freshly prepared before use?',
    opts: [
      'It is inexpensive to prepare fresh each time',
      'It decomposes on standing and can form an unstable, explosive silver compound',
      'It changes colour if stored',
      'Fresh reagent reacts faster only, with no safety concern'
    ],
    answer: 1
  },
  {
    q: 'Bleaching powder solution gives a violet colour with aniline because aniline contains a:',
    opts: ['Carboxylic acid group', 'Primary aromatic amino group', 'Aldehyde group', 'Phenolic group'],
    answer: 1
  },
  {
    q: 'In test mode, a compound gives a positive result only with Tollens\' reagent and negative results with all other reagents. The compound contains:',
    opts: ['A carboxylic acid group', 'An aldehyde group', 'A phenolic group', 'A carbon-carbon double bond'],
    answer: 1
  },
  {
    q: 'Why is it important to use a fresh sample of the unknown compound for each individual test, rather than adding all reagents to the same tube?',
    opts: [
      'It saves reagent',
      'Mixing reagents together in one tube can mask or interfere with each test\'s specific colour change, so results would be unreliable',
      'It has no real importance, it is just convention',
      'Only Tollens\' test requires a fresh sample'
    ],
    answer: 1
  }
];


/* ======================================================
   STATE
   Procedure: place tube → add Compound → add Reagent
   → result forms → (test mode) answer → conclude.
   ====================================================== */
const state = {
  mode: 'teach',
  currentCase: 'unsaturation',    // teach mode: the demo test shown; test mode: the TRUE hidden identity
  selectedReagent: 'unsaturation', // which reagent the student has picked to try next (test mode)
  tubePlaced: false,
  sampleAdded: false,   // Compound added
  reagentAdded: false,  // Reagent added
  resultFormed: false,
  step: 1,
  answered: false,
  testsRun: {},          // test mode: { reagentKey: 'positive' | 'negative' }
  positiveFound: false   // test mode: true once the diagnostic positive test has been run
};

/* ======================================================
   DOM REFS
   ====================================================== */
const el = (id) => document.getElementById(id);
const standSlot = el('tube-drop-target');
const tubeStand = el('tube-stand');
const irisMsg = el('iris-message');
const instrTitle = el('instruction-title');
const instrBody = el('instruction-body');
const stepTracker = el('step-tracker');
const saltCard = el('salt-card');
const saltCardName = el('salt-card-name');
const saltCardFormula = el('salt-card-formula');
const saltPicker = el('salt-picker');
const reagentPicker = el('reagent-picker');
const reagentCardName = el('reagent-card-name');
const reagentCardFormula = el('reagent-card-formula');
const logSalt = el('log-salt');
const logHno3 = el('log-hno3');
const logColour = el('log-colour');
const testsLogCard = el('tests-log-card');
const testsLogList = el('tests-log-list');
const newTestBtn = el('new-test-btn');
const testModePanel = el('test-mode-panel');
const verdictBanner = el('verdict-banner');
const verdictBannerMain = el('verdict-banner-main');
const openMicroscopeBtn = el('open-microscope');
const microscopeModal = el('microscope-modal');
const closeMicroscopeBtn = el('close-microscope');
const roHalide = el('ro-halide');
const roPrecip = el('ro-precip');
const roColour = el('ro-colour');
const ionicEq = el('ionic-eq');

let tubeVisualEl = null;

/* ======================================================
   THEME TOGGLE
   ====================================================== */
el('theme-toggle').addEventListener('click', () => {
  const body = document.body;
  const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  el('theme-toggle').textContent = next === 'dark' ? '☀' : '🌙';
});

/* ======================================================
   RESET
   ====================================================== */
el('reset-lab').addEventListener('click', () => location.reload());

/* ======================================================
   MODE TOGGLE (Teach vs Test)
   ====================================================== */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;

    saltPicker.style.display = state.mode === 'teach' ? 'flex' : 'none';
    reagentPicker.style.display = state.mode === 'test' ? 'flex' : 'none';

    // Hide all test-mode UI when entering Teaching Mode
    if (state.mode === 'teach') {
  newTestBtn.hidden = true;
  testModePanel.hidden = true;
  testsLogCard.hidden = true;
  verdictBanner.hidden = true;
  updateSaltCardLabel();
} else {
  // Start a new Test Mode session
  newTestBtn.hidden = true;
  testModePanel.hidden = true;
  verdictBanner.hidden = true;
  testsLogCard.hidden = false;
}
  });
});
saltPicker.style.display = 'flex';
reagentPicker.style.display = 'none';

document.querySelectorAll('.salt-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.salt-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentCase = btn.dataset.salt;
    updateSaltCardLabel();
  });
});

document.querySelectorAll('.reagent-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    if (state.reagentAdded) return; // can't switch reagent mid-test
    document.querySelectorAll('.reagent-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedReagent = btn.dataset.reagent;
    updateSaltCardLabel();
  });
});

function updateSaltCardLabel() {
  if (state.mode === 'teach') {
    const data = CASES[state.currentCase];
    saltCardName.textContent = data.sampleName;
    saltCardFormula.textContent = data.sampleFormula + ' · known compound';
    reagentCardName.textContent = data.reagentName;
    reagentCardFormula.textContent = data.reagentFormula;
  } else {
    // The compound's identity is a genuine unknown in test mode — never
    // reveal its real name/formula here.
    saltCardName.textContent = 'Unknown Compound';
    saltCardFormula.textContent = 'unidentified organic compound';
    const reagentData = CASES[state.selectedReagent];
    reagentCardName.textContent = reagentData.reagentName;
    reagentCardFormula.textContent = reagentData.reagentFormula;
  }
}

// In test mode, randomize the functional group secretly so it's a real unknown
function maybeRandomizeForTest() {
  if (state.mode === 'test') {
    const keys = Object.keys(CASES);
    state.currentCase = keys[Math.floor(Math.random() * keys.length)];
    state.testsRun = {};
    state.positiveFound = false;
    state.selectedReagent = keys[0];
    document.querySelectorAll('.reagent-opt').forEach(b => {
      b.classList.remove('active', 'tried-positive', 'tried-negative');
      if (b.dataset.reagent === state.selectedReagent) b.classList.add('active');
    });
    testsLogList.innerHTML = '<p class="tests-log-empty">No tests run yet — pick a reagent above and add it to the tube.</p>';
    updateSaltCardLabel();
  }
}

/* ======================================================
   TESTS PERFORMED LOG (test mode)
   ====================================================== */
function logTestResult(reagentKey, isPositive) {
  if (testsLogList.querySelector('.tests-log-empty')) testsLogList.innerHTML = '';
  const data = CASES[reagentKey];
  const row = document.createElement('div');
  row.className = 'tests-log-row ' + (isPositive ? 'positive' : 'negative');
  row.innerHTML = `<span class="tlr-name">${data.reagentName}</span><span class="tlr-result">${isPositive ? '✓ Positive' : '✗ Negative'}</span>`;
  testsLogList.appendChild(row);
}

/* ======================================================
   STEP TRACKER + IRIS MESSAGING
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
function setInstruction(title, body) {
  instrTitle.textContent = title;
  instrBody.textContent = body;
}

/* ======================================================
   DRAG + TAP ENGINE (unified) — reusable pattern, unchanged
   ====================================================== */
let armedItem = null; // { type: 'testtube'|'salt'|'hno3' }

function clearArmed() {
  armedItem = null;
  document.querySelectorAll('.reagent-card').forEach(c => c.classList.remove('armed'));
  standSlot.classList.remove('armed');
}

document.querySelectorAll('.reagent-card[draggable="true"]').forEach(card => {
  card.addEventListener('dragstart', (e) => {
    if (card.classList.contains('disabled') || card.classList.contains('used')) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text/plain', card.dataset.item);
    e.dataTransfer.setData('application/x-item-' + card.dataset.item, '1');
  });

  card.addEventListener('click', () => {
    if (card.classList.contains('disabled') || card.classList.contains('used')) return;
    const type = card.dataset.item;
    if (armedItem && armedItem.type === type) {
      clearArmed();
      return;
    }
    clearArmed();
    armedItem = { type };
    card.classList.add('armed');
    if (type === 'testtube') standSlot.classList.add('armed');
    else if (tubeVisualEl) tubeVisualEl.classList.add('armed-target');
  });
});

standSlot.addEventListener('dragover', (e) => {
  e.preventDefault();
  const type = getDragType(e);
  if (isLegalDrop(type)) standSlot.classList.add('armed');
});
standSlot.addEventListener('dragleave', () => { standSlot.classList.remove('armed'); });

function getDragType(e) {
  const types = e.dataTransfer.types || [];
  const found = Array.from(types).find(t => t.startsWith('application/x-item-'));
  return found ? found.replace('application/x-item-', '') : '';
}

function isLegalDrop(type) {
  if (type === 'testtube') return !state.tubePlaced;
  if (type === 'salt') return state.tubePlaced && !state.sampleAdded;
  if (type === 'hno3') return state.sampleAdded && !state.reagentAdded;
  return false;
}
standSlot.addEventListener('drop', (e) => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  if (type === 'testtube') placeTube();
});
standSlot.addEventListener('click', () => {
  if (armedItem && armedItem.type === 'testtube' && !state.tubePlaced) {
    placeTube();
  }
});

function placeTube() {
  if (state.tubePlaced) return;
  state.tubePlaced = true;
  clearArmed();
  standSlot.classList.remove('armed');
  standSlot.innerHTML = '';
  tubeVisualEl = document.createElement('div');
  tubeVisualEl.className = 'test-tube-visual';
  tubeVisualEl.innerHTML = `<div class="tube-liquid" id="tube-liquid"></div><div class="tube-precipitate" id="tube-precipitate"></div>`;
  standSlot.appendChild(tubeVisualEl);
  document.querySelector('[data-item="testtube"]').classList.add('used');

  if(state.mode==='test'){
    maybeRandomizeForTest();
  }
  else{
  updateSaltCardLabel();}

  setStep(2);
  if (state.mode === 'teach') {
    setIris(`Good — the test tube is in place. Now drag <strong>${CASES[state.currentCase].sampleFormula}</strong> onto the tube.`);
    setInstruction('Step 2: Add the Compound', `Drag the ${CASES[state.currentCase].sampleName} card onto the test tube.`);
  } else {
    setIris(`Good — the test tube is in place. Now drag the <strong>Unknown Compound</strong> onto the tube to take your first sample.`);
    setInstruction('Step 2: Add the Compound', 'Drag the Unknown Compound card onto the test tube.');
  }

  saltCard.classList.remove('disabled');
}

function wireTubeDrop(itemType, handler) {
  standSlot.addEventListener('drop', (e) => {
    const type = e.dataTransfer.getData('text/plain');
    if (type === itemType) { e.preventDefault(); handler(); }
  });
  standSlot.addEventListener('click', () => {
    if (armedItem && armedItem.type === itemType) handler();
  });
}

wireTubeDrop('salt', addSample);
wireTubeDrop('hno3', addReagent);

function addSample() {
  if (!state.tubePlaced || state.sampleAdded) return;
  state.sampleAdded = true;
  clearArmed();
  saltCard.classList.add('used');

  const liquid = el('tube-liquid');
  liquid.style.height = '45%';
  liquid.style.background = 'rgba(180, 200, 220, 0.3)';

  document.querySelector('[data-item="hno3"]').classList.remove('disabled');
  setStep(3);

  if (state.mode === 'teach') {
    logSalt.textContent = CASES[state.currentCase].sampleFormula;
    setIris(`Now drag <strong>${CASES[state.currentCase].reagentFormula}</strong> (${CASES[state.currentCase].reagentName}) onto the tube to run the test.`);
    setInstruction('Step 3: Add the Reagent', `Drag the ${CASES[state.currentCase].reagentName} card onto the test tube.`);
  } else {
    logSalt.textContent = 'Unknown compound';
    const reagentData = CASES[state.selectedReagent];
    setIris(`Pick a reagent above (currently <strong>${reagentData.reagentName}</strong>), then drag it onto the tube to test for ${reagentData.name.split(' (')[0]}.`);
    setInstruction('Step 3: Choose & Add a Reagent', `Select a reagent from the picker, then drag the reagent card onto the test tube to run that test.`);
  }
}

function addReagent() {
  if (!state.sampleAdded || state.reagentAdded) return;
  state.reagentAdded = true;
  clearArmed();
  document.querySelector('[data-item="hno3"]').classList.add('used');

  spawnDrip('#3f7fd1');
  const testedReagentKey = state.mode === 'teach' ? state.currentCase : state.selectedReagent;
  logHno3.textContent = CASES[testedReagentKey].reagentFormula;

  setTimeout(formResult, 500);
}

function spawnDrip(color) {
  const drip = document.createElement('div');
  drip.className = 'drip';
  drip.style.background = color;
  standSlot.appendChild(drip);
  setTimeout(() => drip.remove(), 650);
}

function spawnBubbles(count) {
  if (!tubeVisualEl) return;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const b = document.createElement('div');
      b.className = 'tube-bubble';
      b.style.left = (30 + Math.random() * 40) + '%';
      tubeVisualEl.appendChild(b);
      setTimeout(() => b.remove(), 1300);
    }, i * 180);
  }
}

function formResult() {
  state.resultFormed = true;

  if (state.mode === 'teach') {
    const data = CASES[state.currentCase];
    renderTubeEffect(data);
    logColour.textContent = data.resultColourName;
    roColour.textContent = data.resultColourName;
    roPrecip.textContent = data.resultFormula;
    ionicEq.textContent = data.equation;
    roHalide.textContent = data.name;
    setStep(4);
    openMicroscopeBtn.disabled = false;
    setIris(`This confirms the <strong>${data.name}</strong> — ${data.equation}`);
    setInstruction('Step 4: Observe the Result', data.note);
    setTimeout(() => showFinalVerdict(true), 600);
    return;
  }

  // --- TEST MODE: simulate the chosen reagent's test on the unknown ---
  const reagentKey = state.selectedReagent;
  const isPositive = reagentKey === state.currentCase;
  const positiveData = CASES[state.currentCase];
  const reagentData = CASES[reagentKey];

  // What's actually shown in the tube: the true positive reaction only
  // if this was the right reagent, otherwise the reagent's own negative
  // appearance (which never reveals the compound's real identity).
  const displayData = isPositive
    ? positiveData
    : { resultColourHex: reagentData.negativeColourHex, effect: 'none' };
  renderTubeEffect(displayData);

  logColour.textContent = isPositive ? positiveData.resultColourName : reagentData.negativeObservation;
  roColour.textContent = isPositive ? positiveData.resultColourName : reagentData.negativeObservation;

  state.testsRun[reagentKey] = isPositive ? 'positive' : 'negative';
  logTestResult(reagentKey, isPositive);
  const optBtn = document.querySelector(`.reagent-opt[data-reagent="${reagentKey}"]`);
  if (optBtn) optBtn.classList.add(isPositive ? 'tried-positive' : 'tried-negative');

  setStep(4);
  openMicroscopeBtn.disabled = false;

  if (isPositive) {
    state.positiveFound = true;
    roPrecip.textContent = '? (masked)';
    ionicEq.textContent = '[masked until answered]';
    roHalide.textContent = '?';
    setIris(`Positive result with <strong>${reagentData.reagentName}</strong>: ${positiveData.resultColourName}. Based on this — which functional group is present?`);
    setInstruction('Step 4: Identify the Functional Group', 'You found the diagnostic positive test. Choose unsaturation, phenolic, carboxylic, aldehyde, or amino based on which reagent reacted.');
    testModePanel.hidden = false;
    newTestBtn.hidden = true;
  } else {
    roPrecip.textContent = '? (not yet identified)';
    ionicEq.textContent = '[keep testing]';
    roHalide.textContent = '?';
    setIris(`Negative result with <strong>${reagentData.reagentName}</strong>: ${reagentData.negativeObservation} Take a fresh sample and try another reagent.`);
    setInstruction('Step 4: Try Another Reagent', 'This test was negative. Click "New Test" to take a fresh sample, pick a different reagent, and try again.');
    newTestBtn.hidden = false;
  }
}

// Renders the tube liquid/precipitate/glow/bubbles for a given result
// (either a genuine positive reaction, or a neutral negative appearance).
function renderTubeEffect(data) {
  const liquid = el('tube-liquid');
  liquid.style.height = '55%';
  liquid.style.background = data.resultColourHex;

  const precipEl = el('tube-precipitate');
  precipEl.style.height = '0%';
  precipEl.classList.remove('show');
  if (tubeVisualEl) tubeVisualEl.classList.remove('glow');

  if (data.effect === 'precipitate') {
    precipEl.style.height = '28%';
    precipEl.style.background = data.resultColourHex;
    precipEl.classList.add('show');
  }
  if (data.effect === 'glow' && tubeVisualEl) {
    tubeVisualEl.classList.add('glow');
  }
  if (data.effect === 'bubbles') {
    spawnBubbles(9);
  }
}

/* ======================================================
   NEW TEST — fresh sample, same unknown, try another reagent
   ====================================================== */
newTestBtn.addEventListener('click', () => {
  state.sampleAdded = false;
  state.reagentAdded = false;
  state.resultFormed = false;
  newTestBtn.hidden = true;

  saltCard.classList.remove('used', 'disabled');
  document.querySelector('[data-item="hno3"]').classList.remove('used');
  document.querySelector('[data-item="hno3"]').classList.add('disabled');

  const liquid = el('tube-liquid');
  liquid.style.height = '0%';
  const precipEl = el('tube-precipitate');
  precipEl.style.height = '0%';
  precipEl.classList.remove('show');
  if (tubeVisualEl) tubeVisualEl.classList.remove('glow');

  logSalt.textContent = '—';
  logHno3.textContent = '—';
  logColour.textContent = '—';
  roColour.textContent = '—';
  roPrecip.textContent = '—';
  roHalide.textContent = '—';
  ionicEq.textContent = '— run the test to reveal the equation —';

  setStep(2);
  setIris('Fresh sample ready. Drag the <strong>Unknown Compound</strong> onto the tube, then pick a different reagent to try.');
  setInstruction('Step 2: Add the Compound', 'Drag the Unknown Compound card onto the test tube for this next test.');
});

/* ======================================================
   TEST MODE — answer buttons
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
      verdictBanner.innerHTML = `<strong>Correct.</strong> This was ${data.name}. ${data.note}`;
      setIris(`Correct! This was <strong>${data.name}</strong>, shown by ${data.resultColourName.toLowerCase()}.`);
    } else {
      verdictBanner.className = 'verdict-banner wrong';
      verdictBanner.innerHTML = `<strong>Not quite.</strong> This was actually ${data.name}. ${data.note}`;
      setIris(`Not quite — this was actually <strong>${data.name}</strong>. ${data.resultColourName} was the giveaway: compare it against the other tests next time.`);
    }
    showFinalVerdict(correct);
  });
});

function showFinalVerdict(success) {
  const data = CASES[state.currentCase];
  verdictBannerMain.hidden = false;
  setStep(5);
  if (state.mode === 'teach') {
    verdictBannerMain.className = 'verdict-banner-main conserved';
    verdictBannerMain.innerHTML = `<strong>Confirmed: ${data.name}</strong>${data.equation} — ${data.resultColourName} is the diagnostic observation for this test. ${data.note}`;
  } else {
    verdictBannerMain.className = success ? 'verdict-banner-main correct' : 'verdict-banner-main wrong';
    verdictBannerMain.innerHTML = success
      ? `<strong>Lab complete — correct identification.</strong>${data.equation}`
      : `<strong>Lab complete — see correction above.</strong>${data.equation}`;
  }
}

/* ======================================================
   MOLECULAR MICROSCOPE — canvas particle sim (reusable
   pattern, unchanged mechanics — legend/explainer text
   below is filled in with the real reaction data)
   ====================================================== */
openMicroscopeBtn.addEventListener('click', () => {
  microscopeModal.hidden = false;
  startParticleSim();
});
closeMicroscopeBtn.addEventListener('click', () => {
  microscopeModal.hidden = true;
  stopParticleSim();
});
microscopeModal.addEventListener('click', (e) => {
  if (e.target === microscopeModal) { microscopeModal.hidden = true; stopParticleSim(); }
});

const canvas = el('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animFrame = null;
let nucleated = [];

const ION_COLORS = { Ag: '#cfd6e0', X: null, precipitate: null };

const NUCLEATION_DIST = 16;
const ION_PAIR_COUNT = 16;
const MAX_NUCLEI = ION_PAIR_COUNT;

// Which CASES entry the microscope should visualize. In teach mode it's
// always the demo test shown. In test mode, before a positive result is
// found this must NOT reveal the true unknown — it shows the generic
// reaction for whichever reagent the student currently has selected
// instead (illustrating the mechanism without leaking the identity).
function getMicroscopeCaseKey() {
  if (state.mode === 'teach') return state.currentCase;
  return state.positiveFound ? state.currentCase : state.selectedReagent;
}

function buildParticles() {
  const data = CASES[getMicroscopeCaseKey()];
  ION_COLORS.X = data.resultColourHex === '#f2efe6' ? '#d8dde6' : data.resultColourHex;
  ION_COLORS.precipitate = data.resultColourHex;

  particles = [];
  const W = canvas.width, H = canvas.height;
  const count = ION_PAIR_COUNT;
  for (let i = 0; i < count; i++) {
    particles.push({ kind: 'Ag', x: Math.random() * W, y: Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 1.4, vy: (Math.random() - 0.5) * 1.4, r: 7, nucleated: false });
  }
  for (let i = 0; i < count; i++) {
    particles.push({ kind: 'X', x: Math.random() * W, y: H * 0.5 + Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 1.4, vy: (Math.random() - 0.5) * 1.4, r: 7, nucleated: false });
  }
  nucleated = [];
}

function drawLegend() {
  const key = getMicroscopeCaseKey();
  const data = CASES[key];
  const compoundLabel = (state.mode === 'test' && !state.positiveFound) ? 'unknown compound' : data.sampleFormula;
  const legend = el('particle-legend');
  legend.innerHTML = `
    <span><span class="legend-dot" style="background:${ION_COLORS.Ag}"></span>${compoundLabel} (compound)</span>
    <span><span class="legend-dot" style="background:${ION_COLORS.X}"></span>${data.reagentFormula} (reagent)</span>
    <span><span class="legend-dot" style="background:${data.resultColourHex}"></span>${data.resultFormula} (result)</span>
  `;
}

function updateExplainer() {
  const key = getMicroscopeCaseKey();
  const data = CASES[key];
  const compoundLabel = (state.mode === 'test' && !state.positiveFound) ? 'the unknown compound' : data.sampleFormula;
  el('microscope-explainer').innerHTML =
    `${compoundLabel} and ${data.reagentFormula} particles drift and collide. When they meet, they react to give ${data.resultFormula}: ${data.equation}. ${data.note}`;
}

function stepParticles() {
  const W = canvas.width, H = canvas.height;
  for (const p of particles) {
    if (p.nucleated) continue;
    p.x += p.vx; p.y += p.vy;
    if (p.x < p.r || p.x > W - p.r) p.vx *= -1;
    if (p.y < p.r || p.y > H - p.r) p.vy *= -1;
    p.x = Math.max(p.r, Math.min(W - p.r, p.x));
    p.y = Math.max(p.r, Math.min(H - p.r, p.y));
  }
  if (nucleated.length < MAX_NUCLEI) {
    for (const a of particles) {
      if (a.kind !== 'Ag' || a.nucleated) continue;
      for (const b of particles) {
        if (b.kind !== 'X' || b.nucleated) continue;
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < NUCLEATION_DIST) {
          a.nucleated = true; b.nucleated = true;
          const slotIndex = nucleated.length;
          const cols = 7;
          const col = slotIndex % cols;
          const row = Math.floor(slotIndex / cols);
          nucleated.push({ targetX: 40 + col * ((W - 80) / (cols - 1)), targetY: H - 24 - row * 20, x0: (a.x + b.x) / 2, y0: (a.y + b.y) / 2, r: 9, progress: 0 });
          break;
        }
      }
    }
  }
  for (const n of nucleated) { if (n.progress < 1) n.progress = Math.min(1, n.progress + 0.04); }
}

function drawParticles() {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 2;
  ctx.strokeRect(4, 4, W - 8, H - 8);
  for (const p of particles) {
    if (p.nucleated) continue;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.kind === 'Ag' ? ION_COLORS.Ag : ION_COLORS.X;
    ctx.fill();
  }
  for (const n of nucleated) {
    const x = n.x0 + (n.targetX - n.x0) * n.progress;
    const y = n.y0 + (n.targetY - n.y0) * n.progress;
    ctx.beginPath();
    ctx.arc(x, y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = ION_COLORS.precipitate;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function loop() { stepParticles(); drawParticles(); animFrame = requestAnimationFrame(loop); }
function startParticleSim() { buildParticles(); drawLegend(); updateExplainer(); if (animFrame) cancelAnimationFrame(animFrame); loop(); }
function stopParticleSim() { if (animFrame) cancelAnimationFrame(animFrame); animFrame = null; }

/* ======================================================
   IRIS PANEL (theory / materials / procedure)
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
    (pct >= 70 ? 'Well done — solid understanding of functional group tests.' : 'Review the Theory tab in Iris, then try again.');
}

el('eval-toggle').addEventListener('click', () => {
  const body = el('eval-body'), chevron = el('eval-chevron'), open = !body.classList.contains('open');
  body.classList.toggle('open', open); chevron.classList.toggle('open', open);
});

/* ======================================================
   INIT
   ====================================================== */
document.querySelector('[data-item="hno3"]').classList.add('disabled');
saltCard.classList.add('disabled');
updateSaltCardLabel();
