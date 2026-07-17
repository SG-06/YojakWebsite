'use strict';

/* ======================================================
   STATE — three independent activities, one shared shell,
   one global Teaching/Test mode toggle
   ====================================================== */
const state = {
  activity: 'conduct',
  mode: 'teach', // 'teach' | 'test'
  conduct: { rodPlaced: false, switchOn: false, done: false },
  solubility: { water: 'none', kerosene: 'none', oil: 'none', done: false }, // 'none' | 'added' | 'done'
  combustion: { coalPlaced: false, ignited: false, litmusTested: false, done: false }
};

const el = (id) => document.getElementById(id);

/* ======================================================
   THEME + RESET
   ====================================================== */
el('theme-toggle').addEventListener('click', () => {
  const body = document.body;
  const next = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  el('theme-toggle').textContent = next === 'dark' ? '☀' : '🌙';
});
el('reset-lab').addEventListener('click', () => location.reload());

/* ======================================================
   TAB SWITCHING (experiment selector, lives in the shelf)
   ====================================================== */
const ACTIVITY_SEQUENCE = ['conduct', 'solubility', 'combustion'];

function selectActivity(act) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.activity === act));
  state.activity = act;
  document.querySelectorAll('.shelf-section[data-shelf-for]').forEach(s => {
    s.hidden = s.dataset.shelfFor !== act;
  });
  document.querySelectorAll('.activity-panel').forEach(p => {
    p.hidden = p.id !== 'activity-' + act;
  });
  clearArmed();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => selectActivity(btn.dataset.activity));
});

// auto-advance to the next experiment tab the instant an
// activity's 10-question evaluation finishes — no manual
// tab click needed between experiments
function autoAdvanceAfter(key) {
  const next = ACTIVITY_SEQUENCE[ACTIVITY_SEQUENCE.indexOf(key) + 1];
  if (next) selectActivity(next);
}

/* ======================================================
   LAB MODE (Teaching vs Test) — global, affects sample
   labels and how much explanation Iris gives up front
   ====================================================== */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
    updateSampleLabels();
  });
});

function updateSampleLabels() {
  const teach = state.mode === 'teach';
  el('graphite-rod-name').textContent = teach ? 'Pencil Lead (Graphite)' : 'Unknown Solid Sample';
  el('graphite-rod-sub').textContent = teach ? 'removed from a pencil' : 'to be tested';
  el('coal-powder-name').textContent = teach ? 'Coal Powder' : 'Unknown Black Powder';
  el('coal-name').textContent = teach ? 'Lump of Coal' : 'Unknown Solid Fuel';
}
updateSampleLabels();

/* ======================================================
   STEP TRACKER / IRIS / INSTRUCTION helpers (per-activity)
   ====================================================== */
function setStepIn(trackerId, n) {
  document.getElementById(trackerId).querySelectorAll('.step').forEach(s => {
    const sn = parseInt(s.dataset.step, 10);
    s.classList.remove('active', 'done');
    if (sn < n) s.classList.add('done');
    if (sn === n) s.classList.add('active');
  });
}
function setIris(suffix, html) { el('iris-message-' + suffix).innerHTML = html; }
function setInstruction(suffix, title, body) {
  el('instruction-title-' + suffix).textContent = title;
  el('instruction-body-' + suffix).textContent = body;
}
// pick teach-mode (explanatory) vs test-mode (neutral) wording
function modeText(teachHtml, testHtml) { return state.mode === 'teach' ? teachHtml : testHtml; }

/* ======================================================
   IRIS KNOWLEDGE PANELS — Theory / Materials / Procedure,
   one self-contained expandable panel per activity
   ====================================================== */
const IRIS_CONTENT_CONDUCT = {
  theory: `
    <h4>Theory — Electrical Conductivity of Graphite</h4>
    <p>Carbon exists in different <strong>allotropic forms</strong>. Graphite — the "lead" in a pencil — is one such form, made of carbon atoms arranged in flat, hexagonal layers.</p>
    <p>Unlike almost every other non-metal, graphite <strong>conducts electricity</strong>. Each carbon atom bonds to only three neighbours within its own layer, leaving one electron per atom free (delocalised) to move along the layer and carry current.</p>
  `,
  materials: `
    <h4>Materials Required</h4>
    <ul>
      <li>Pencil (for its graphite "lead")</li>
      <li>Electrical connecting wires</li>
      <li>Battery / cell</li>
      <li>Small bulb</li>
      <li>Switch</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <ol>
      <li>Remove the graphite lead from a pencil. Feel its texture with your fingers, note its colour, and try to break it.</li>
      <li>Assemble a simple circuit: battery → wire → gap → wire → bulb, leaving a small gap for the graphite.</li>
      <li>Place the graphite lead across the gap and close the switch. Observe whether the bulb lights up.</li>
    </ol>
  `
};
const IRIS_CONTENT_SOLUBILITY = {
  theory: `
    <h4>Theory — Solubility of Carbon</h4>
    <p>Carbon atoms — whether in graphite, diamond, or impure forms like coal — are held together by strong <strong>covalent bonds</strong> in a giant structure. There are no free ions and no small enough molecular units for a solvent to pull apart.</p>
    <p>Because of this, elemental carbon does not dissolve in polar solvents like water, non-polar solvents like kerosene, or oils. Coal powder added to any of these liquids simply forms an insoluble <strong>suspension</strong> and settles out on standing.</p>
  `,
  materials: `
    <h4>Materials Required</h4>
    <ul>
      <li>3 conical flasks</li>
      <li>Stirrer</li>
      <li>Water</li>
      <li>Kerosene</li>
      <li>Cooking oil</li>
      <li>Coal powder</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <ol>
      <li>Take three conical flasks and add water, kerosene, and cooking oil to them respectively.</li>
      <li>Add half a spoonful of coal powder to each flask.</li>
      <li>Stir each mixture with a stirrer.</li>
      <li>Observe the mixtures in all three flasks and record whether the coal powder dissolves.</li>
    </ol>
  `
};
const IRIS_CONTENT_COMBUSTION = {
  theory: `
    <h4>Theory — Reaction of Carbon with Oxygen</h4>
    <p>Carbon burns in the oxygen of the air to form carbon dioxide gas:</p>
    <p><strong>C (s) + O₂ (g) → CO₂ (g)</strong></p>
    <p>Carbon dioxide is a mildly <strong>acidic oxide</strong>. When it dissolves in the moisture on blue litmus paper, it forms the weak acid carbonic acid (H₂CO₃), which turns the paper <strong>red</strong>. This colour change is a standard test used to confirm that the gas released on burning carbon is CO₂.</p>
  `,
  materials: `
    <h4>Materials Required</h4>
    <ul>
      <li>Coal</li>
      <li>Tongs</li>
      <li>Match box</li>
      <li>Moist blue litmus paper</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <ol>
      <li>Hold a lump of coal in the tongs and ignite it using a match.</li>
      <li>Hold a moist blue litmus paper over the gas released as the coal burns.</li>
      <li>Observe any colour change in the litmus paper.</li>
      <li>Identify the gas responsible and write the chemical equation for the reaction.</li>
    </ol>
  `
};

function wireIrisPanel(key, content) {
  const trigger = el('iris-card-trigger-' + key);
  const panel = el('iris-panel-' + key);
  const tabContent = el('iris-tab-content-' + key);
  let open = false;
  let currentTab = 'theory';

  function renderTab() { tabContent.innerHTML = content[currentTab] || ''; }

  trigger.addEventListener('click', () => {
    open = !open;
    panel.hidden = !open;
    if (open) renderTab();
  });
  panel.querySelectorAll('.iris-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.querySelectorAll('.iris-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      renderTab();
    });
  });
}
wireIrisPanel('conduct', IRIS_CONTENT_CONDUCT);
wireIrisPanel('solubility', IRIS_CONTENT_SOLUBILITY);
wireIrisPanel('combustion', IRIS_CONTENT_COMBUSTION);

/* ======================================================
   10-QUESTION EVALUATION — shared engine, one quiz bank per
   activity. Runs identically in Teaching Mode and Test Mode:
   same 10 questions, same order, same feedback either way.
   Each activity's "Conclude" stage is gated behind finishing
   all 10 questions.
   ====================================================== */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const quizState = {}; // key -> { index, score }

function startQuiz(key, questions, onComplete) {
  quizState[key] = { index: 0, score: 0 };
  const panel = el('test-mode-panel-' + key);
  panel.hidden = false;
  el('quiz-score-' + key).hidden = true;
  renderQuizQuestion(key, questions, onComplete);
}

function renderQuizQuestion(key, questions, onComplete) {
  const s = quizState[key];
  const q = questions[s.index];
  el('quiz-progress-' + key).textContent = `Question ${s.index + 1} / ${questions.length}`;
  el('quiz-question-' + key).textContent = q.q;

  const container = el('quiz-answers-' + key);
  container.innerHTML = '';
  container.dataset.answered = 'false';
  el('verdict-banner-' + key).hidden = true;
  const nextBtn = el('quiz-next-' + key);
  nextBtn.hidden = true;

  shuffle(q.options).forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.type = 'button';
    btn.textContent = opt.text;
    btn.dataset.correct = opt.correct ? 'true' : 'false';
    btn.addEventListener('click', () => handleQuizAnswer(key, questions, onComplete, btn, opt));
    container.appendChild(btn);
  });
}

function handleQuizAnswer(key, questions, onComplete, btn, opt) {
  const container = el('quiz-answers-' + key);
  if (container.dataset.answered === 'true') return;
  container.dataset.answered = 'true';

  const s = quizState[key];
  if (opt.correct) s.score++;
  container.querySelectorAll('.answer-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
    else if (b === btn) b.classList.add('wrong');
  });

  const banner = el('verdict-banner-' + key);
  banner.hidden = false;
  banner.className = 'verdict-banner ' + (opt.correct ? 'correct' : 'wrong');
  banner.innerHTML = (opt.correct ? '<strong>Correct.</strong> ' : '<strong>Not quite.</strong> ') + questions[s.index].explain;

  const nextBtn = el('quiz-next-' + key);
  nextBtn.hidden = false;
  nextBtn.textContent = s.index < questions.length - 1 ? 'Next Question →' : 'Finish Evaluation →';
  nextBtn.onclick = () => {
    s.index++;
    if (s.index < questions.length) {
      renderQuizQuestion(key, questions, onComplete);
    } else {
      finishQuiz(key, questions, onComplete);
    }
  };
}

function finishQuiz(key, questions, onComplete) {
  const s = quizState[key];
  el('quiz-question-' + key).textContent = '';
  el('quiz-answers-' + key).innerHTML = '';
  el('verdict-banner-' + key).hidden = true;
  el('quiz-next-' + key).hidden = true;
  el('quiz-progress-' + key).textContent = `${questions.length} / ${questions.length} complete`;

  const scoreBanner = el('quiz-score-' + key);
  scoreBanner.hidden = false;
  scoreBanner.className = 'quiz-score-banner ' + (s.score >= Math.ceil(questions.length * 0.6) ? 'good' : 'needs-review');
  scoreBanner.innerHTML = `<strong>Evaluation complete: ${s.score} / ${questions.length} correct.</strong>`;

  onComplete();
  autoAdvanceAfter(key);
}

/* ======================================================
   DRAG + TAP ENGINE (shared across all three activities)
   ====================================================== */
let armedItem = null; // { type }

function clearArmed() {
  armedItem = null;
  document.querySelectorAll('.reagent-card').forEach(c => c.classList.remove('armed'));
  document.querySelectorAll('.armed').forEach(z => z.classList.remove('armed'));
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
    if (armedItem && armedItem.type === type) { clearArmed(); return; }
    clearArmed();
    armedItem = { type };
    card.classList.add('armed');
  });
});

function wireDropZone(target, itemType, isLegalFn, handler) {
  target.addEventListener('dragover', (e) => {
    e.preventDefault(); // must always preventDefault or the browser blocks the drop on later stages
    if (isLegalFn()) target.classList.add('armed');
  });
  target.addEventListener('dragleave', () => target.classList.remove('armed'));
  target.addEventListener('drop', (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    target.classList.remove('armed');
    if (type === itemType && isLegalFn()) handler();
  });
  target.addEventListener('click', () => {
    if (armedItem && armedItem.type === itemType && isLegalFn()) {
      handler();
      clearArmed();
    }
  });
}

/* ============================================================
   ACTIVITY 1 — ELECTRICAL CONDUCTIVITY OF GRAPHITE
   ============================================================ */
const leadGap = el('lead-gap');
const circuitBulb = el('circuit-bulb');
const switchBtn = el('switch-btn');

wireDropZone(leadGap, 'graphite-rod', () => !state.conduct.rodPlaced, placeGraphiteRod);

function placeGraphiteRod() {
  if (state.conduct.rodPlaced) return;
  state.conduct.rodPlaced = true;
  leadGap.innerHTML = '';
  const rod = document.createElement('div');
  rod.className = 'graphite-rod';
  leadGap.appendChild(rod);
  document.querySelector('[data-item="graphite-rod"]').classList.add('used');

  el('log-feel').textContent = 'Black, soft, marks fingers — flakes off in layers';
  switchBtn.disabled = false;

  setStepIn('step-tracker-conduct', 2);
  setIris('conduct', modeText(
    'The graphite rod is bridging the gap. Now press <strong>Close Switch</strong> to complete the circuit and see whether current flows through it.',
    'The sample is bridging the gap. Press <strong>Close Switch</strong> to complete the circuit and see what happens.'
  ));
  setInstruction('conduct', 'Step 2: Close the Switch', 'Press the Close Switch button to complete the circuit.');
}

switchBtn.addEventListener('click', () => {
  if (!state.conduct.rodPlaced || state.conduct.switchOn) return;
  state.conduct.switchOn = true;
  circuitBulb.classList.add('lit');
  el('wire-1').classList.add('live');
  el('wire-2').classList.add('live');
  switchBtn.textContent = 'Switch Closed';
  switchBtn.classList.add('on');
  switchBtn.disabled = true;

  el('log-bulb').textContent = 'Lights up — the sample conducts electricity';

  setStepIn('step-tracker-conduct', 3);
  setIris('conduct', modeText(
    'The bulb lit up! Unlike most non-metals, graphite conducts electricity because of loosely held electrons that move freely between its carbon layers. Let\u2019s check your understanding with a short 10-question evaluation before we conclude.',
    'The bulb lit up! Let\u2019s check your understanding with a short 10-question evaluation before we conclude.'
  ));
  setInstruction('conduct', 'Step 3: Evaluation', 'Answer all 10 questions to complete the experiment.');
  startQuiz('conduct', QUIZ_CONDUCT, finishConduct);
});
const QUIZ_CONDUCT = [
  {
    q: 'Why does graphite conduct electricity even though it is a non-metal?',
    explain: 'Each carbon atom in graphite bonds to only three neighbours within its layer, leaving one delocalised electron per atom free to move along the layer and carry current — unusual for a non-metal.',
    options: [
      { text: 'Each carbon atom leaves one free (delocalised) electron that can move along its layers', correct: true },
      { text: 'Graphite is actually a metal, not a non-metal', correct: false },
      { text: 'Graphite conducts because it dissolves in water and forms ions', correct: false },
      { text: 'Graphite conducts because it contains trapped air pockets that carry charge', correct: false }
    ]
  },
  {
    q: 'What is the term for different structural forms of the same element, like graphite and diamond?',
    explain: 'Graphite and diamond are allotropes of carbon — different structural arrangements of the same element.',
    options: [
      { text: 'Allotropes', correct: true },
      { text: 'Isotopes', correct: false },
      { text: 'Isomers', correct: false },
      { text: 'Polymers', correct: false }
    ]
  },
  {
    q: 'How many neighbouring carbon atoms does each carbon atom bond to within a graphite layer?',
    explain: 'Each carbon atom in a graphite layer forms strong covalent bonds with 3 neighbouring atoms, leaving one electron free.',
    options: [
      { text: '3', correct: true },
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    q: 'The "lead" in a pencil is often assumed to be the metal lead. What is it actually made of?',
    explain: 'Despite the name, a pencil\u2019s "lead" contains no metallic lead at all — it is graphite, a form (allotrope) of carbon.',
    options: [
      { text: 'Graphite — a form of carbon', correct: true },
      { text: 'Pure metallic lead', correct: false },
      { text: 'A mixture of lead and iron', correct: false },
      { text: 'Graphite mixed with metallic lead', correct: false }
    ]
  },
  {
    q: 'In which direction do the delocalised electrons move to carry current through graphite?',
    explain: 'The free electron on each carbon atom is delocalised within its own hexagonal layer, so current flows along the layer, not between layers.',
    options: [
      { text: 'Along the flat hexagonal layers', correct: true },
      { text: 'Perpendicular to the layers, jumping between them', correct: false },
      { text: 'Only within a single carbon atom', correct: false },
      { text: 'They remain stationary and do not move', correct: false }
    ]
  },
  {
    q: 'What is the texture/feel of graphite (pencil lead) when handled?',
    explain: 'Graphite\u2019s weakly bonded layers slide over one another easily, giving it a soft, flaky, marking texture.',
    options: [
      { text: 'Black, soft, and slippery — it flakes off in layers and marks the fingers', correct: true },
      { text: 'Hard, colourless, and glassy', correct: false },
      { text: 'Sticky and rubbery', correct: false },
      { text: 'Rough and metallic-cold like steel', correct: false }
    ]
  },
  {
    q: 'In the circuit test, what confirms that graphite conducts electricity?',
    explain: 'A completed circuit with graphite bridging the gap lets current flow, which is confirmed when the bulb lights up.',
    options: [
      { text: 'The bulb lights up once the switch is closed with graphite bridging the gap', correct: true },
      { text: 'The graphite rod visibly melts', correct: false },
      { text: 'The battery voltage increases', correct: false },
      { text: 'The wires change colour', correct: false }
    ]
  },
  {
    q: 'Which property makes graphite useful as an electrode material (e.g. in batteries and electrolysis cells)?',
    explain: 'Graphite\u2019s ability to conduct electricity while resisting chemical attack makes it a widely used electrode material.',
    options: [
      { text: 'Its electrical conductivity combined with chemical stability', correct: true },
      { text: 'Its bright silvery shine', correct: false },
      { text: 'Its high solubility in acids', correct: false },
      { text: 'Its magnetic properties', correct: false }
    ]
  },
  {
    q: 'Why is diamond, another allotrope of carbon, a poor conductor of electricity unlike graphite?',
    explain: 'Diamond\u2019s rigid 3-D structure uses all four valence electrons per carbon atom for bonding, so none are left free to carry current.',
    options: [
      { text: 'In diamond, every carbon atom uses all 4 electrons to bond to 4 neighbours, leaving no free electrons', correct: true },
      { text: 'Diamond atoms are too far apart to touch', correct: false },
      { text: 'Diamond contains no carbon atoms', correct: false },
      { text: 'Diamond is a liquid at room temperature', correct: false }
    ]
  },
  {
    q: 'What broader idea about non-metals does graphite\u2019s conductivity illustrate?',
    explain: 'Non-metals are generally poor conductors, but graphite is a notable exception because of its delocalised electrons — showing that broad classifications like "metal" and "non-metal" can still have exceptions.',
    options: [
      { text: 'Some non-metals can conduct electricity, an exception to the general rule that non-metals are insulators', correct: true },
      { text: 'All non-metals conduct electricity just as well as metals', correct: false },
      { text: 'Graphite is technically not a non-metal at all', correct: false },
      { text: 'Conductivity has nothing to do with an element\u2019s electron structure', correct: false }
    ]
  }
];

function finishConduct() {
  if (state.conduct.done) return;
  state.conduct.done = true;
  setStepIn('step-tracker-conduct', 4);
  el('open-microscope-conduct').disabled = false;
  document.querySelector('[data-activity="conduct"]').classList.add('tab-done');
  setIris('conduct', '<strong>Conclusion:</strong> graphite conducts electricity — an unusual property for a non-metal.');
  setInstruction('conduct', 'Step 4: Conclude', 'Open the Molecular View to see why graphite conducts electricity.');
  el('verdict-conduct').hidden = false;
  el('verdict-conduct').className = 'verdict-banner-main conserved';
  el('verdict-conduct').innerHTML = '<strong>Graphite conducts electricity.</strong> Carbon atoms in graphite are arranged in flat, hexagonal layers; each carbon uses only 3 of its 4 valence electrons to bond within a layer, leaving one delocalised electron per atom free to move along the layer and carry current — unusual for a non-metal.';
  updateNotebook('conduct', 'Graphite conducts electricity due to free (delocalised) electrons moving along its layered structure.');
  checkAllDone();
}

/* ============================================================
   ACTIVITY 2 — SOLUBILITY OF CARBON
   ============================================================ */
const flaskKeys = ['water', 'kerosene', 'oil'];
flaskKeys.forEach(key => {
  const flask = el('flask-' + key);
  wireDropZone(flask, 'coal-powder', () => state.solubility[key] === 'none', () => addCoalToFlask(key));
  el('stir-' + key).addEventListener('click', () => stirFlask(key));
});

function addCoalToFlask(key) {
  if (state.solubility[key] !== 'none') return;
  state.solubility[key] = 'added';
  el('cloud-' + key).classList.add('show');
  el('stir-' + key).disabled = false;
  el('log-flask-' + key).textContent = 'Powder added — stir to observe';

  const doneCount = flaskKeys.filter(k => state.solubility[k] !== 'none').length;
  setStepIn('step-tracker-solubility', Math.min(doneCount + 1, 4));
  const next = flaskKeys.find(k => state.solubility[k] === 'none');
  if (next) {
    setIris('solubility', `The sample is in the ${labelFor(key)} flask. Press its <strong>Stir</strong> button, then move on to the ${labelFor(next)} flask.`);
    setInstruction('solubility', `Step ${doneCount + 1}: Add Coal Powder to ${labelFor(next)}`, `Stir the ${labelFor(key)} flask, then drag Coal Powder onto the ${labelFor(next)} flask.`);
  } else {
    setIris('solubility', `The sample is now in all three flasks. Press each <strong>Stir</strong> button to see whether it dissolves.`);
    setInstruction('solubility', 'Step 4: Stir Each Flask', 'Press the Stir button under each flask to check for dissolving.');
  }
}

function stirFlask(key) {
  if (state.solubility[key] !== 'added') return;
  state.solubility[key] = 'done';
  el('sediment-' + key).style.height = '16%';
  el('stir-' + key).disabled = true;
  el('stir-' + key).textContent = 'Stirred';
  el('log-flask-' + key).textContent = 'Insoluble — forms a suspension, settles on standing';
  maybeFinishSolubility();
}

function labelFor(key) {
  return key === 'water' ? 'Water' : key === 'kerosene' ? 'Kerosene' : 'Cooking Oil';
}

const QUIZ_SOLUBILITY = [
  {
    q: 'Why does coal powder fail to dissolve in water, kerosene, and cooking oil alike?',
    explain: 'Carbon atoms in coal are locked into a giant covalent network of strong carbon\u2013carbon bonds. There is no ionic charge and no small enough molecular unit for water, kerosene, or oil to pull apart, so the powder just settles out unchanged.',
    options: [
      { text: 'Carbon atoms are locked in a giant covalent structure with no ions to separate out', correct: true },
      { text: 'Coal repels all liquids because of its black colour', correct: false },
      { text: 'Coal only dissolves in strong acids, never in neutral liquids', correct: false },
      { text: 'Coal is too dense for any liquid to lift its particles', correct: false }
    ]
  },
  {
    q: 'What type of chemical bonding holds carbon atoms together in coal?',
    explain: 'Coal\u2019s carbon atoms are joined by strong covalent bonds forming a giant, insoluble network.',
    options: [
      { text: 'Strong covalent bonds in a giant network', correct: true },
      { text: 'Weak ionic bonds', correct: false },
      { text: 'Metallic bonds', correct: false },
      { text: 'Hydrogen bonds only', correct: false }
    ]
  },
  {
    q: 'What forms when coal powder is stirred into water, kerosene, or oil?',
    explain: 'Since carbon cannot separate into ions or small molecules, it just disperses temporarily as a suspension and later settles.',
    options: [
      { text: 'An insoluble suspension that settles out on standing', correct: true },
      { text: 'A true solution, evenly dissolved', correct: false },
      { text: 'A gas that bubbles off', correct: false },
      { text: 'A crystalline precipitate that dissolves slowly', correct: false }
    ]
  },
  {
    q: 'Water is a polar solvent. Why can\u2019t it dissolve coal powder?',
    explain: 'Polar water can only dissolve substances with ions or polar molecules; coal\u2019s giant covalent structure has neither.',
    options: [
      { text: 'Coal has no ions or polar molecules for water to surround and pull apart', correct: true },
      { text: 'Water is too polar for anything to dissolve in it', correct: false },
      { text: 'Coal repels water because it is a solid', correct: false },
      { text: 'Water evaporates before it can dissolve coal', correct: false }
    ]
  },
  {
    q: 'Kerosene and cooking oil are non-polar solvents. Why can\u2019t they dissolve coal powder either?',
    explain: 'Regardless of polarity, no common solvent has the ability to break the strong covalent bonds holding carbon atoms together.',
    options: [
      { text: 'Even non-polar solvents can\u2019t break apart carbon\u2019s giant covalent network', correct: true },
      { text: 'Kerosene and oil are actually polar, like water', correct: false },
      { text: 'Coal only dissolves in solvents that are heated', correct: false },
      { text: 'Non-polar solvents dissolve only metals', correct: false }
    ]
  },
  {
    q: 'What is observed in each flask after coal powder is added and stirred?',
    explain: 'With no dissolving occurring, gravity pulls the undissolved coal particles down as a visible sediment layer.',
    options: [
      { text: 'The powder stays suspended briefly, then settles as sediment at the bottom', correct: true },
      { text: 'The liquid changes colour permanently to clear', correct: false },
      { text: 'The flask heats up noticeably', correct: false },
      { text: 'The powder rises and floats on the surface only', correct: false }
    ]
  },
  {
    q: 'How does the solubility behaviour of coal (a form of carbon) compare with an ionic solid like table salt in water?',
    explain: 'Salt dissolves because water can pull apart its ions; carbon has no such ions, so it cannot dissolve the same way.',
    options: [
      { text: 'Unlike salt, which dissolves by separating into ions, coal has no ions to separate into', correct: true },
      { text: 'Both dissolve completely in water for the same reason', correct: false },
      { text: 'Salt is insoluble while coal is highly soluble', correct: false },
      { text: 'Neither substance can ever dissolve in any liquid', correct: false }
    ]
  },
  {
    q: 'What general name is given to different solid structural forms of the same element, such as graphite, diamond, or coal?',
    explain: 'Different structural forms of pure carbon, like graphite, diamond, or amorphous coal, are called allotropes.',
    options: [
      { text: 'Allotropes', correct: true },
      { text: 'Isotopes', correct: false },
      { text: 'Alloys', correct: false },
      { text: 'Compounds', correct: false }
    ]
  },
  {
    q: 'Which apparatus was used to mix coal powder evenly into each liquid before observing the result?',
    explain: 'A stirrer was used to mix the coal powder thoroughly into each flask before observing whether it dissolved.',
    options: [
      { text: 'A stirrer', correct: true },
      { text: 'A Bunsen burner', correct: false },
      { text: 'A funnel', correct: false },
      { text: 'A thermometer', correct: false }
    ]
  },
  {
    q: 'What is the overall inference about the solubility of elemental carbon (as coal) in common solvents?',
    explain: 'Since carbon\u2019s atoms are locked into a giant covalent structure, it remains insoluble across polar and non-polar solvents alike.',
    options: [
      { text: 'Carbon is insoluble in water, kerosene, and cooking oil alike', correct: true },
      { text: 'Carbon dissolves only in cooking oil', correct: false },
      { text: 'Carbon dissolves in water but not in organic solvents', correct: false },
      { text: 'Carbon\u2019s solubility depends on the colour of the container', correct: false }
    ]
  }
];

function maybeFinishSolubility() {
  if (!flaskKeys.every(k => state.solubility[k] === 'done')) return;
  document.querySelector('[data-item="coal-powder"]').classList.add('used');
  setStepIn('step-tracker-solubility', 4);
  setIris('solubility', 'All three flasks are stirred. Let\u2019s check your understanding with a short 10-question evaluation before we conclude.');
  setInstruction('solubility', 'Step 4: Evaluation', 'Answer all 10 questions to complete the experiment.');
  startQuiz('solubility', QUIZ_SOLUBILITY, finishSolubility);
}
function finishSolubility() {
  if (state.solubility.done) return;
  state.solubility.done = true;
  setStepIn('step-tracker-solubility', 4);
  el('open-microscope-solubility').disabled = false;
  document.querySelector('[data-activity="solubility"]').classList.add('tab-done');
  setIris('solubility', '<strong>Conclusion:</strong> coal powder — elemental carbon — does not dissolve in water, kerosene, or cooking oil. It just settles out as a suspension in all three.');
  setInstruction('solubility', 'Step 4: Conclude', 'Open the Molecular View to see why carbon stays undissolved.');
  el('verdict-solubility').hidden = false;
  el('verdict-solubility').className = 'verdict-banner-main conserved';
  el('verdict-solubility').innerHTML = '<strong>Carbon is insoluble in water, kerosene, and cooking oil.</strong> Each carbon atom in coal is locked into a giant covalent network of strong carbon–carbon bonds; there is no ionic charge or small enough molecular unit for water, kerosene, or oil to pull apart and surround, so the powder simply settles out unchanged rather than dissolving.';
  updateNotebook('solubility', 'Coal powder is insoluble in water, kerosene, and cooking oil — settles as a suspension in all three.');
  checkAllDone();
}

/* ============================================================
   ACTIVITY 3 — REACTION OF CARBON WITH OXYGEN
   ============================================================ */
const tongsSlot = el('tongs-slot');
const igniteBtn = el('ignite-btn');
let smokeInterval = null;

wireDropZone(tongsSlot, 'coal', () => !state.combustion.coalPlaced, placeCoal);
wireDropZone(tongsSlot, 'litmus', () => state.combustion.ignited && !state.combustion.litmusTested, testLitmus);

function placeCoal() {
  if (state.combustion.coalPlaced) return;
  state.combustion.coalPlaced = true;
  tongsSlot.innerHTML = '';
  const coal = document.createElement('div');
  coal.className = 'coal-lump';
  coal.id = 'coal-visual';
  tongsSlot.appendChild(coal);
  document.querySelector('[data-item="coal"]').classList.add('used');

  igniteBtn.disabled = false;
  setStepIn('step-tracker-combustion', 2);
  setIris('combustion', modeText(
    'The coal is held in the tongs. Press <strong>Ignite the Coal</strong> to find out what gas is released as it burns.',
    'The sample is held in the tongs. Press <strong>Ignite the Coal</strong> to find out what gas is released as it burns.'
  ));
  setInstruction('combustion', 'Step 2: Ignite the Coal', 'Press the Ignite button to set the coal alight.');
}

igniteBtn.addEventListener('click', () => {
  if (!state.combustion.coalPlaced || state.combustion.ignited) return;
  state.combustion.ignited = true;
  el('coal-visual').classList.add('burning');
  igniteBtn.disabled = true;
  igniteBtn.textContent = '🔥 Burning…';

  el('log-gas').textContent = 'Gas evolving — test with litmus';
  document.querySelector('[data-item="litmus"]').classList.remove('disabled');

  smokeInterval = setInterval(spawnSmoke, 420);

  setStepIn('step-tracker-combustion', 3);
  setIris('combustion', 'It\'s glowing and giving off a gas. Drag the <strong>Moist Blue Litmus</strong> paper over the tongs to test what that gas is.');
  setInstruction('combustion', 'Step 3: Test the Gas', 'Drag the Moist Blue Litmus paper over the burning coal.');
});

function spawnSmoke() {
  const wisp = document.createElement('div');
  wisp.className = 'smoke-wisp';
  wisp.style.left = (46 + Math.random() * 8) + 'px';
  wisp.style.top = '6px';
  wisp.style.setProperty('--dx', (Math.random() * 16 - 8) + 'px');
  tongsSlot.appendChild(wisp);
  setTimeout(() => wisp.remove(), 1800);
}

function testLitmus() {
  if (!state.combustion.ignited || state.combustion.litmusTested) return;
  state.combustion.litmusTested = true;
  document.querySelector('[data-item="litmus"]').classList.add('used');
  el('litmus-strip').classList.add('turned-red');

  el('log-litmus').textContent = 'Turns red — indicates an acidic gas';
  el('log-gas').textContent = 'Carbon dioxide (CO₂)';
  el('combustion-eq').textContent = 'C (s) + O₂ (g) → CO₂ (g)';

  if (smokeInterval) { clearInterval(smokeInterval); smokeInterval = null; }
  setStepIn('step-tracker-combustion', 4);

  setIris('combustion', 'The litmus paper reacted. Let\u2019s check your understanding with a short 10-question evaluation before we conclude.');
  setInstruction('combustion', 'Step 4: Evaluation', 'Answer all 10 questions to complete the experiment.');
  startQuiz('combustion', QUIZ_COMBUSTION, finishCombustion);
}

const QUIZ_COMBUSTION = [
  {
    q: 'The moist blue litmus paper turned red. What does this tell us about the gas released?',
    explain: 'Burning carbon combines with oxygen to form carbon dioxide (C + O\u2082 \u2192 CO\u2082). CO\u2082 dissolves in the moisture on the litmus paper to form carbonic acid, which turns blue litmus red.',
    options: [
      { text: 'It is carbon dioxide, an acidic oxide formed by C + O\u2082 \u2192 CO\u2082', correct: true },
      { text: 'It is oxygen, which is neutral to litmus', correct: false },
      { text: 'It is hydrogen, which is basic/alkaline', correct: false },
      { text: 'It is nitrogen, which has no effect on litmus', correct: false }
    ]
  },
  {
    q: 'What is the balanced chemical equation for carbon burning completely in oxygen?',
    explain: 'One atom of carbon combines with one molecule of oxygen to form one molecule of carbon dioxide: C + O\u2082 \u2192 CO\u2082.',
    options: [
      { text: 'C (s) + O\u2082 (g) \u2192 CO\u2082 (g)', correct: true },
      { text: '2C (s) + O\u2082 (g) \u2192 2CO (g)', correct: false },
      { text: 'C (s) + 2O\u2082 (g) \u2192 CO\u2084 (g)', correct: false },
      { text: 'C (s) + O (g) \u2192 CO (g)', correct: false }
    ]
  },
  {
    q: 'Is carbon dioxide classified as an acidic, basic, or neutral oxide?',
    explain: 'CO\u2082 dissolves in moisture to form a weak acid, which is why it is classified as an acidic (non-metallic) oxide.',
    options: [
      { text: 'Acidic oxide', correct: true },
      { text: 'Basic oxide', correct: false },
      { text: 'Neutral oxide', correct: false },
      { text: 'Amphoteric oxide', correct: false }
    ]
  },
  {
    q: 'What acid forms when carbon dioxide dissolves in the moisture on the litmus paper?',
    explain: 'CO\u2082 reacts with water on the moist paper to form the weak acid carbonic acid (H\u2082CO\u2083), which turns litmus red.',
    options: [
      { text: 'Carbonic acid (H\u2082CO\u2083)', correct: true },
      { text: 'Hydrochloric acid (HCl)', correct: false },
      { text: 'Sulphuric acid (H\u2082SO\u2084)', correct: false },
      { text: 'Nitric acid (HNO\u2083)', correct: false }
    ]
  },
  {
    q: 'What visible signs are observed as coal burns in the tongs?',
    explain: 'Burning coal glows red-hot, releases heat and light energy, and gives off gas/smoke that can be tested.',
    options: [
      { text: 'The coal glows, releases heat and light, and gives off fumes/smoke', correct: true },
      { text: 'The coal turns bright blue and freezes', correct: false },
      { text: 'The coal dissolves into a clear liquid', correct: false },
      { text: 'The coal shrinks silently with no visible change', correct: false }
    ]
  },
  {
    q: 'Which gas from the air is essential for the coal to burn (combust) at all?',
    explain: 'Combustion requires oxygen from the air to combine with carbon; without oxygen, the coal cannot burn.',
    options: [
      { text: 'Oxygen', correct: true },
      { text: 'Nitrogen', correct: false },
      { text: 'Carbon dioxide', correct: false },
      { text: 'Hydrogen', correct: false }
    ]
  },
  {
    q: 'Why are tongs used to hold the coal rather than fingers?',
    explain: 'Tongs let you safely hold and manipulate red-hot burning coal without direct contact.',
    options: [
      { text: 'To safely hold the burning, red-hot coal without risk of burns', correct: true },
      { text: 'Tongs make the coal burn faster', correct: false },
      { text: 'Tongs are needed to cool the coal down', correct: false },
      { text: 'Tongs prevent the release of any gas', correct: false }
    ]
  },
  {
    q: 'Why must the litmus paper be kept moist rather than dry for this test?',
    explain: 'CO\u2082 gas itself doesn\u2019t directly change litmus colour \u2014 it must first dissolve in the paper\u2019s moisture to form carbonic acid.',
    options: [
      { text: 'CO\u2082 needs to dissolve in water to form the acid that changes the litmus colour', correct: true },
      { text: 'Dry litmus paper burns instantly near the flame', correct: false },
      { text: 'Moisture makes the paper turn blue instead of red', correct: false },
      { text: 'A dry paper would turn green in CO\u2082', correct: false }
    ]
  },
  {
    q: 'What long-term environmental effect is linked to large-scale burning of carbon-based fuels like coal, releasing CO\u2082?',
    explain: 'Rising atmospheric CO\u2082 from burning carbon fuels is a major contributor to the greenhouse effect and global warming.',
    options: [
      { text: 'Increased atmospheric CO\u2082 contributing to the greenhouse effect', correct: true },
      { text: 'Depletion of the ozone layer directly by CO\u2082', correct: false },
      { text: 'A decrease in global average temperature', correct: false },
      { text: 'Reduced rainfall caused directly by CO\u2082 gas', correct: false }
    ]
  },
  {
    q: 'Based on all three experiments, which best summarises carbon\u2019s chemical behaviour with oxygen and its physical behaviour with solvents?',
    explain: 'Carbon combines chemically with oxygen when burnt (forming acidic CO\u2082) but does not physically dissolve in solvents like water, kerosene, or oil.',
    options: [
      { text: 'Carbon reacts with oxygen on burning to form an acidic gas, yet stays insoluble in common liquids', correct: true },
      { text: 'Carbon reacts with oxygen only when dissolved in water first', correct: false },
      { text: 'Carbon never reacts with oxygen under any conditions', correct: false },
      { text: 'Carbon dissolves in oxygen gas directly without burning', correct: false }
    ]
  }
];
function finishCombustion() {
  if (state.combustion.done) return;
  state.combustion.done = true;
  el('open-microscope-combustion').disabled = false;
  document.querySelector('[data-activity="combustion"]').classList.add('tab-done');

  setIris('combustion', '<strong>Conclusion:</strong> burning coal releases carbon dioxide, which turns moist blue litmus paper red — carbon dioxide dissolves in the moisture on the paper to form the weak acid carbonic acid.');
  setInstruction('combustion', 'Step 4: Conclude', 'Open the Molecular View to see carbon and oxygen combining.');
  el('verdict-combustion').hidden = false;
  el('verdict-combustion').className = 'verdict-banner-main conserved';
  el('verdict-combustion').innerHTML = '<strong>C (s) + O₂ (g) → CO₂ (g).</strong> Carbon combines with the oxygen in air on burning to form carbon dioxide gas. CO₂ is a mild acidic oxide: it dissolves in the water on the moist litmus paper to form carbonic acid (H₂CO₃), which turns blue litmus red — confirming an acidic, non-metallic oxide.';
  updateNotebook('combustion', 'Burning coal releases CO₂; turns moist blue litmus red (C + O₂ → CO₂, an acidic oxide).');
  checkAllDone();
}

/* ======================================================
   NOTEBOOK + FINAL CONCLUSION
   ====================================================== */
function updateNotebook(key, text) {
  const item = el('nb-' + key);
  item.classList.add('done');
  item.querySelector('.nb-mark').textContent = '✓';
  item.querySelector('span:last-child').textContent = text;
}

function checkAllDone() {
  if (!(state.conduct.done && state.solubility.done && state.combustion.done)) return;
  const banner = el('final-conclusion');
  banner.hidden = false;
  banner.className = 'verdict-banner-main conserved final-conclusion';
  banner.innerHTML = '<strong>Carbon: An Important Element — Summary</strong>Across all three tests, carbon behaves consistently: as graphite it conducts electricity through delocalised electrons yet resists dissolving in common liquids; as coal powder it remains insoluble in water, kerosene, and oil for the same structural reason — its atoms are locked into strong covalent networks rather than free ions; and on burning in air it combines with oxygen to form carbon dioxide, an acidic gas that turns moist blue litmus paper red. Together these confirm carbon as a non-metal with unusually metal-like conductivity in its graphite form.';
}

/* ============================================================
   MOLECULAR MICROSCOPE — three self-contained particle views,
   one per activity's real mechanism (electron flow / no-mixing /
   combustion nucleation). Same modal, same animation loop shell;
   each activity supplies its own buildParticles/step/draw trio.
   ============================================================ */
let currentMicroscopeActivity = 'conduct';
const microscopeModal = el('microscope-modal');
const canvas = el('particle-canvas');
const ctx = canvas.getContext('2d');
let animFrame = null;
let particles = [];
let nucleated = [];

el('open-microscope-conduct').addEventListener('click', () => openMicroscope('conduct'));
el('open-microscope-solubility').addEventListener('click', () => openMicroscope('solubility'));
el('open-microscope-combustion').addEventListener('click', () => openMicroscope('combustion'));
el('close-microscope').addEventListener('click', closeMicroscope);
microscopeModal.addEventListener('click', (e) => { if (e.target === microscopeModal) closeMicroscope(); });

function openMicroscope(activity) {
  currentMicroscopeActivity = activity;
  microscopeModal.hidden = false;
  startParticleSim();
}
function closeMicroscope() {
  microscopeModal.hidden = true;
  stopParticleSim();
}

function startParticleSim() {
  buildParticles();
  drawLegend();
  updateExplainer();
  if (animFrame) cancelAnimationFrame(animFrame);
  loop();
}
function stopParticleSim() {
  if (animFrame) cancelAnimationFrame(animFrame);
  animFrame = null;
}
function loop() {
  stepParticles();
  drawParticles();
  animFrame = requestAnimationFrame(loop);
}

function buildParticles() {
  const W = canvas.width, H = canvas.height;
  particles = [];
  nucleated = [];

  if (currentMicroscopeActivity === 'conduct') {
    // free delocalised electrons drifting rightward through graphite's layers
    const lanes = [H * 0.25, H * 0.45, H * 0.65, H * 0.85];
    lanes.forEach(y => {
      for (let i = 0; i < 6; i++) {
        particles.push({ kind: 'electron', x: Math.random() * W, y: y + (Math.random() * 10 - 5), vx: 2 + Math.random() * 1.5, r: 5 });
      }
    });
  } else if (currentMicroscopeActivity === 'solubility') {
    // carbon stays clustered (insoluble); solvent molecules move freely and never bond to it
    const cx = W / 2, cy = H / 2;
    for (let i = 0; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 46;
      particles.push({ kind: 'carbon', baseX: cx + Math.cos(angle) * dist, baseY: cy + Math.sin(angle) * dist, x: 0, y: 0, r: 6, t: Math.random() * 100 });
    }
    for (let i = 0; i < 26; i++) {
      particles.push({ kind: 'solvent', x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 2.2, vy: (Math.random() - 0.5) * 2.2, r: 4 });
    }
  } else {
    // combustion: carbon atoms + O2 units collide and nucleate into CO2
    const count = 14;
    for (let i = 0; i < count; i++) {
      particles.push({ kind: 'C', x: Math.random() * W, y: Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 1.6, vy: (Math.random() - 0.5) * 1.6, r: 7, nucleated: false });
    }
    for (let i = 0; i < count; i++) {
      particles.push({ kind: 'O2', x: Math.random() * W, y: H * 0.5 + Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 1.6, vy: (Math.random() - 0.5) * 1.6, r: 8, nucleated: false });
    }
  }
}

function stepParticles() {
  const W = canvas.width, H = canvas.height;

  if (currentMicroscopeActivity === 'conduct') {
    for (const p of particles) {
      p.x += p.vx;
      if (p.x > W + p.r) p.x = -p.r;
    }
  } else if (currentMicroscopeActivity === 'solubility') {
    for (const p of particles) {
      if (p.kind === 'carbon') {
        p.t += 0.05;
        p.x = p.baseX + Math.sin(p.t) * 2;
        p.y = p.baseY + Math.cos(p.t * 0.8) * 2;
      } else {
        p.x += p.vx; p.y += p.vy;
        if (p.x < p.r || p.x > W - p.r) p.vx *= -1;
        if (p.y < p.r || p.y > H - p.r) p.vy *= -1;
        p.x = Math.max(p.r, Math.min(W - p.r, p.x));
        p.y = Math.max(p.r, Math.min(H - p.r, p.y));
      }
    }
  } else {
    for (const p of particles) {
      if (p.nucleated) continue;
      p.x += p.vx; p.y += p.vy;
      if (p.x < p.r || p.x > W - p.r) p.vx *= -1;
      if (p.y < p.r || p.y > H - p.r) p.vy *= -1;
      p.x = Math.max(p.r, Math.min(W - p.r, p.x));
      p.y = Math.max(p.r, Math.min(H - p.r, p.y));
    }
    const MAX_NUCLEI = 14;
    if (nucleated.length < MAX_NUCLEI) {
      for (const a of particles) {
        if (a.kind !== 'C' || a.nucleated) continue;
        for (const b of particles) {
          if (b.kind !== 'O2' || b.nucleated) continue;
          const dx = a.x - b.x, dy = a.y - b.y;
          if (Math.sqrt(dx * dx + dy * dy) < 16) {
            a.nucleated = true; b.nucleated = true;
            const slot = nucleated.length, cols = 7;
            nucleated.push({
              x0: (a.x + b.x) / 2, y0: (a.y + b.y) / 2,
              targetX: 40 + (slot % cols) * ((W - 80) / (cols - 1)),
              targetY: H - 24 - Math.floor(slot / cols) * 20,
              r: 9, progress: 0
            });
            break;
          }
        }
      }
    }
    for (const n of nucleated) { if (n.progress < 1) n.progress = Math.min(1, n.progress + 0.04); }
  }
}

function drawParticles() {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 2;
  ctx.strokeRect(4, 4, W - 8, H - 8);

  if (currentMicroscopeActivity === 'conduct') {
    ctx.strokeStyle = 'rgba(217,165,100,0.25)';
    [0.25, 0.45, 0.65, 0.85].forEach(f => {
      ctx.beginPath(); ctx.moveTo(20, H * f); ctx.lineTo(W - 20, H * f); ctx.stroke();
    });
    for (const p of particles) {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = '#3f7fd1'; ctx.fill();
    }
  } else if (currentMicroscopeActivity === 'solubility') {
    for (const p of particles) {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.kind === 'carbon' ? '#1e2024' : 'rgba(120,170,220,0.6)';
      ctx.fill();
    }
  } else {
    for (const p of particles) {
      if (p.nucleated) continue;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.kind === 'C' ? '#2a2c31' : '#c0584f';
      ctx.fill();
    }
    for (const n of nucleated) {
      const x = n.x0 + (n.targetX - n.x0) * n.progress;
      const y = n.y0 + (n.targetY - n.y0) * n.progress;
      ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = '#8b93a3'; ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ctx.stroke();
    }
  }
}

function drawLegend() {
  const legend = el('particle-legend');
  if (currentMicroscopeActivity === 'conduct') {
    legend.innerHTML = `<span><span class="legend-dot" style="background:#3f7fd1"></span>Delocalised electron</span>
      <span><span class="legend-dot" style="background:#d9a564"></span>Carbon layer (graphite plane)</span>`;
  } else if (currentMicroscopeActivity === 'solubility') {
    legend.innerHTML = `<span><span class="legend-dot" style="background:#1e2024"></span>Carbon (stays clustered)</span>
      <span><span class="legend-dot" style="background:#78aadc"></span>Solvent molecule (water / kerosene / oil)</span>`;
  } else {
    legend.innerHTML = `<span><span class="legend-dot" style="background:#2a2c31"></span>Carbon (C)</span>
      <span><span class="legend-dot" style="background:#c0584f"></span>Oxygen (O₂)</span>
      <span><span class="legend-dot" style="background:#8b93a3"></span>Carbon dioxide (CO₂)</span>`;
  }
}

function updateExplainer() {
  let text;
  if (currentMicroscopeActivity === 'conduct') {
    text = 'Graphite is carbon atoms arranged in flat hexagonal layers. Each atom bonds to only 3 neighbours within its layer, leaving one electron per atom free to drift along the layer — that flow of delocalised electrons is the electric current you saw light the bulb.';
  } else if (currentMicroscopeActivity === 'solubility') {
    text = 'Carbon atoms are held together by strong covalent bonds into a giant structure, not separate ions or small polar molecules. Water, kerosene, and oil molecules have nothing to pull apart or surround, so the carbon particles stay clustered together and simply settle out rather than dissolving.';
  } else {
    text = 'On heating, carbon atoms gain enough energy to collide with oxygen molecules (O₂) from the air. Each collision forms one carbon dioxide molecule (CO₂) — the reaction C + O₂ → CO₂ releasing heat and light as the coal glows, and the CO₂ produced turns moist blue litmus paper red.';
  }
  el('microscope-explainer').textContent = text;
}

/* ======================================================
   INIT
   ====================================================== */
switchBtn.disabled = true;
igniteBtn.disabled = true;
