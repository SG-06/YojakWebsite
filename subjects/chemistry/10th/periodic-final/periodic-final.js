'use strict';

/* ======================================================
   ELEMENT DATA
   ====================================================== */
const ELEMENTS = {
  H:  { symbol: 'H',  name: 'Hydrogen',   Z: 1,  mass: 1,    mendGroup: 'I',   modGroup: 1,  period: 1, family: 'alkali',   familyLabel: 'Alkali Metal',
        note: 'Hydrogen has 1 valence electron like the alkali metals, so Mendeleev placed it at the head of Group I — though it behaves as a non-metal gas.' },
  Li: { symbol: 'Li', name: 'Lithium',    Z: 3,  mass: 7,    mendGroup: 'I',   modGroup: 1,  period: 2, family: 'alkali',   familyLabel: 'Alkali Metal',
        note: 'A soft, highly reactive metal with 1 valence electron — placed consistently in Group I / Group 1 in both tables.' },
  Be: { symbol: 'Be', name: 'Beryllium',  Z: 4,  mass: 9,    mendGroup: 'II',  modGroup: 2,  period: 2, family: 'alkaline', familyLabel: 'Alkaline Earth Metal',
        note: '2 valence electrons place it consistently in Group II / Group 2 in both tables.' },
  B:  { symbol: 'B',  name: 'Boron',      Z: 5,  mass: 11,   mendGroup: 'III', modGroup: 13, period: 2, family: 'pblock',   familyLabel: 'p-Block Element',
        note: 'A metalloid with 3 valence electrons — Group III (Mendeleev) lines up with Group 13 (Modern).' },
  C:  { symbol: 'C',  name: 'Carbon',     Z: 6,  mass: 12,   mendGroup: 'IV',  modGroup: 14, period: 2, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '4 valence electrons — the basis of organic chemistry. Group IV lines up with Group 14.' },
  N:  { symbol: 'N',  name: 'Nitrogen',   Z: 7,  mass: 14,   mendGroup: 'V',   modGroup: 15, period: 2, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '5 valence electrons — Group V lines up with Group 15.' },
  O:  { symbol: 'O',  name: 'Oxygen',     Z: 8,  mass: 16,   mendGroup: 'VI',  modGroup: 16, period: 2, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '6 valence electrons — Group VI lines up with Group 16.' },
  F:  { symbol: 'F',  name: 'Fluorine',   Z: 9,  mass: 19,   mendGroup: 'VII', modGroup: 17, period: 2, family: 'halogen',  familyLabel: 'Halogen',
        note: 'The most reactive non-metal, with 7 valence electrons — Group VII lines up with Group 17.' },
  Na: { symbol: 'Na', name: 'Sodium',     Z: 11, mass: 23,   mendGroup: 'I',   modGroup: 1,  period: 3, family: 'alkali',   familyLabel: 'Alkali Metal',
        note: 'Same family as lithium — 1 valence electron, same reactive-metal behaviour.' },
  Mg: { symbol: 'Mg', name: 'Magnesium',  Z: 12, mass: 24,   mendGroup: 'II',  modGroup: 2,  period: 3, family: 'alkaline', familyLabel: 'Alkaline Earth Metal',
        note: '2 valence electrons — Group II / Group 2.' },
  Al: { symbol: 'Al', name: 'Aluminium',  Z: 13, mass: 27,   mendGroup: 'III', modGroup: 13, period: 3, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '3 valence electrons — the element after which Mendeleev\'s predicted gap "Eka-Aluminium" was named (later filled by Gallium).' },
  Si: { symbol: 'Si', name: 'Silicon',    Z: 14, mass: 28,   mendGroup: 'IV',  modGroup: 14, period: 3, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '4 valence electrons — the element after which Mendeleev\'s predicted gap "Eka-Silicon" was named (later filled by Germanium).' },
  P:  { symbol: 'P',  name: 'Phosphorus', Z: 15, mass: 31,   mendGroup: 'V',   modGroup: 15, period: 3, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '5 valence electrons — Group V / Group 15.' },
  S:  { symbol: 'S',  name: 'Sulphur',    Z: 16, mass: 32,   mendGroup: 'VI',  modGroup: 16, period: 3, family: 'pblock',   familyLabel: 'p-Block Element',
        note: '6 valence electrons — Group VI / Group 16.' },
  Cl: { symbol: 'Cl', name: 'Chlorine',   Z: 17, mass: 35.5, mendGroup: 'VII', modGroup: 17, period: 3, family: 'halogen',  familyLabel: 'Halogen',
        note: '7 valence electrons — same family as fluorine.' },
  K:  { symbol: 'K',  name: 'Potassium',  Z: 19, mass: 39,   mendGroup: 'I',   modGroup: 1,  period: 4, family: 'alkali',   familyLabel: 'Alkali Metal',
        note: '1 valence electron. Note: by atomic mass, potassium (39) sits just before argon (~40) — but by atomic number argon (18) rightly comes before potassium (19). This K/Ar pair is the classic case where mass-ordering fails and number-ordering succeeds.' },
  Ca: { symbol: 'Ca', name: 'Calcium',    Z: 20, mass: 40,   mendGroup: 'II',  modGroup: 2,  period: 4, family: 'alkaline', familyLabel: 'Alkaline Earth Metal',
        note: '2 valence electrons — Group II / Group 2.' }
};

/* Simplified Bohr shell filling (2, 8, 8, 2) for the atomic structure view */
const SHELLS = {
  H: [1], Li: [2,1], Be: [2,2], B: [2,3], C: [2,4], N: [2,5], O: [2,6], F: [2,7],
  Na: [2,8,1], Mg: [2,8,2], Al: [2,8,3], Si: [2,8,4], P: [2,8,5], S: [2,8,6], Cl: [2,8,7],
  K: [2,8,8,1], Ca: [2,8,8,2]
};

const MEND_COL = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7 };
const MOD_COL  = { 1: 1, 2: 2, 13: 3, 14: 4, 15: 5, 16: 6, 17: 7, 18: 8 };
const MEND_HEADERS = ['I','II','III','IV','V','VI','VII','VIII'];
const MOD_HEADERS  = ['1','2','13','14','15','16','17','18'];

/* ======================================================
   IRIS KNOWLEDGE CONTENT
   ====================================================== */
const IRIS_CONTENT = {
  theory: `
    <h4>Theory — Mendeleev's Table vs the Modern Periodic Table</h4>
    <p>In 1869, <strong>Dmitri Mendeleev</strong> arranged the then-known elements in order of increasing <strong>atomic mass</strong>, and noticed that their properties repeated at regular intervals — the basis of his <em>Periodic Law</em>. Where the pattern broke, he boldly left <strong>gaps</strong>, predicting undiscovered elements such as <strong>Eka-Aluminium</strong> (later Gallium) and <strong>Eka-Silicon</strong> (later Germanium), and describing their properties years before they were found.</p>
    <p>In 1913, <strong>Henry Moseley</strong> showed that an element's <strong>atomic number</strong> (number of protons) — not its mass — is the true fundamental property. The <strong>Modern Periodic Table</strong> is arranged by increasing atomic number, which resolved every inconsistency mass-ordering had produced (e.g. Argon before Potassium, even though Ar's mass is slightly higher).</p>
    <table style="width:100%; border-collapse:collapse; font-size:12.5px; margin-top:10px;">
      <tr style="border-bottom:1px solid var(--ink-border);"><td style="padding:6px 4px;"><strong>Feature</strong></td><td style="padding:6px 4px;"><strong>Mendeleev's Table</strong></td><td style="padding:6px 4px;"><strong>Modern Table</strong></td></tr>
      <tr style="border-bottom:1px solid var(--ink-border);"><td style="padding:6px 4px;">Basis</td><td style="padding:6px 4px;">Atomic mass</td><td style="padding:6px 4px;">Atomic number</td></tr>
      <tr style="border-bottom:1px solid var(--ink-border);"><td style="padding:6px 4px;">Predicted new elements</td><td style="padding:6px 4px;">Yes (gaps left)</td><td style="padding:6px 4px;">No — already discovered</td></tr>
      <tr style="border-bottom:1px solid var(--ink-border);"><td style="padding:6px 4px;">Isotopes</td><td style="padding:6px 4px;">Not explained well</td><td style="padding:6px 4px;">Clearly explained (same atomic number)</td></tr>
      <tr style="border-bottom:1px solid var(--ink-border);"><td style="padding:6px 4px;">Grouping</td><td style="padding:6px 4px;">Some mismatches</td><td style="padding:6px 4px;">Accurate and consistent</td></tr>
      <tr><td style="padding:6px 4px;">Periodicity</td><td style="padding:6px 4px;">Repetition by mass</td><td style="padding:6px 4px;">Repetition by atomic number</td></tr>
    </table>
    <p style="margin-top:10px;">Mendeleev's table also had no place for the noble gases (undiscovered at the time) and grouped isotopes poorly, since isotopes share atomic number but differ in mass. The Modern Table fixes both.</p>
  `,
  materials: `
    <h4>Materials Used</h4>
    <ul>
      <li><strong>Chart paper</strong> or printed templates of both periodic tables (Mendeleev's and Modern)</li>
      <li><strong>Flashcards / element cut-outs</strong> — at least 15–20 elements (H, Li, Be, B, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca used here)</li>
      <li><strong>Markers / pens</strong> — for labelling groups and periods</li>
      <li><strong>Scissors, glue, or magnets</strong> — if working on a physical whiteboard</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <p><strong>Part 1 — Understanding Mendeleev's Table</strong></p>
    <ol>
      <li>Take the simplified Mendeleev's Periodic Table, arranged by <strong>atomic mass</strong>.</li>
      <li>Place each element into the correct group based on similar properties.</li>
      <li>Identify and mark the <strong>gaps</strong> Mendeleev left for undiscovered elements (e.g. Eka-Aluminium, Eka-Silicon).</li>
      <li>Discuss how Mendeleev predicted the properties of these elements accurately, years before they were isolated.</li>
    </ol>
    <p><strong>Part 2 — Exploring the Modern Table</strong></p>
    <ol>
      <li>Take the Modern Periodic Table, arranged by <strong>atomic number</strong>.</li>
      <li>Arrange the same elements again, this time by increasing atomic number.</li>
      <li>Observe how elements with similar properties now fall into the same group more consistently.</li>
    </ol>
    <p><strong>Guided comparison:</strong> Why did Mendeleev leave gaps? How did the modern table improve on his? Which table better explains the position of isotopes and noble gases?</p>
  `
};

/* ======================================================
   EVALUATION QUESTIONS
   ====================================================== */
const EVAL_QUESTIONS = [
  { q: "What was the basis of classification in Mendeleev's Periodic Table?",
    opts: ['Atomic number', 'Atomic mass', 'Number of neutrons', 'Electronegativity'], answer: 1 },
  { q: 'What is the basis of classification in the Modern Periodic Table?',
    opts: ['Atomic mass', 'Number of isotopes', 'Atomic number', 'Density'], answer: 2 },
  { q: "Why did Mendeleev leave gaps in his periodic table?",
    opts: ['He made errors in calculation', 'To reserve space for elements not yet discovered', 'To separate metals from non-metals', 'Because some elements were radioactive'], answer: 1 },
  { q: 'Which pair is the classic example of atomic-mass ordering giving an inconsistent result compared to atomic-number ordering?',
    opts: ['Hydrogen and Helium', 'Argon and Potassium', 'Carbon and Nitrogen', 'Sodium and Magnesium'], answer: 1 },
  { q: 'How does the Modern Periodic Table handle isotopes of the same element?',
    opts: ['Places each isotope in a different group', 'Places all isotopes in the same position, since atomic number is unchanged', 'Ignores isotopes entirely', 'Groups isotopes by mass only'], answer: 1 },
  { q: 'Two elements Mendeleev predicted but had not yet been discovered were later named:',
    opts: ['Eka-Boron and Eka-Nitrogen', 'Eka-Aluminium and Eka-Silicon', 'Eka-Sodium and Eka-Chlorine', 'Eka-Oxygen and Eka-Fluorine'], answer: 1 },
  { q: 'Which statement about grouping of elements is most accurate?',
    opts: ["Mendeleev's table had some mismatches; the modern table groups elements more consistently", 'Both tables group elements identically in every case', "Mendeleev's table is entirely obsolete and teaches nothing useful", 'The modern table has more mismatches than Mendeleev\'s'], answer: 0 },
  { q: "Why doesn't the Modern Periodic Table need to leave unexplained gaps the way Mendeleev's did?",
    opts: ['Atomic number is a fixed whole-number property, and virtually all elements up to a given number have now been discovered', 'Scientists stopped looking for new elements', 'Atomic mass is now known exactly', 'Noble gases were removed from the table'], answer: 0 },
  { q: 'A student orders potassium (K) before argon (Ar) by atomic mass, but the modern table places argon first. What explains this?',
    opts: ['Argon has a lower atomic number, so this ordering is actually reversed by mistake', "Argon's atomic number (18) is lower than potassium's (19), even though its atomic mass is slightly higher", 'Potassium is not a real element', 'Ar and K belong to the same group'], answer: 1 },
  { q: 'Which of these is a repeating pattern (periodicity) observed in both tables?',
    opts: ['Elements with similar properties recur at regular intervals as you move through the table', 'Every element has identical reactivity', 'Atomic mass always equals atomic number', 'Only metals show periodicity'], answer: 0 }
];

/* ======================================================
   STATE
   ====================================================== */
const state = {
  mode: 'teach', currentElement: 'Li',
  chartsPlaced: false, sampleAdded: false, massSorted: false, numberSorted: false,
  step: 1, answered: false
};

/* ======================================================
   DOM REFS
   ====================================================== */
const el = id => document.getElementById(id);
let standSlot        = el('tube-drop-target');
const irisMsg       = el('iris-message');
const instrTitle    = el('instruction-title');
const instrBody     = el('instruction-body');
const elementCard   = el('element-card');
const elementCardIcon = el('element-card-icon');
const elementCardName  = el('element-card-name');
const elementCardFormula = el('element-card-formula');
const elementPicker = el('element-picker');
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
const roMendeleev = el('ro-mendeleev');
const roModern = el('ro-modern');
const roColour = el('ro-colour');
const basisEq  = el('basis-eq');
let mendGridBox = null, modGridBox = null, stagedEl = null;

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
  if (isLast) setTimeout(showEvalResult, 800);
  else el('eval-next-btn').hidden = false;
}

function nextEvalQuestion() { renderEvalQuestion(evalState.current + 1); }

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
    (pct >= 70 ? 'Well done — solid grasp of how classification evolved.' : 'Review the Theory tab in Iris and try again.');
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
    elementPicker.style.display = state.mode === 'teach' ? 'flex' : 'none';
    updateElementCardLabel();
  });
});
elementPicker.style.display = 'flex';

/* Build the element picker grid dynamically */
(function buildElementPicker() {
  Object.keys(ELEMENTS).forEach((key, i) => {
    const btn = document.createElement('button');
    btn.className = 'element-opt' + (i === 0 ? '' : '');
    btn.dataset.el = key;
    btn.textContent = key;
    if (key === state.currentElement) btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.element-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentElement = key;
      updateElementCardLabel();
    });
    elementPicker.appendChild(btn);
  });
})();

function updateElementCardLabel() {
  const data = ELEMENTS[state.currentElement];
  if (state.mode === 'teach') {
    elementCardIcon.textContent = data.symbol;
    elementCardName.textContent = data.name;
    elementCardFormula.textContent = `Z = ${data.Z} · mass ≈ ${data.mass}`;
  } else {
    elementCardIcon.textContent = '?';
    elementCardName.textContent = 'Unknown Element Sample';
    elementCardFormula.textContent = `Z = ${data.Z} · mass ≈ ${data.mass}`;
  }
}

function maybeRandomizeForTest() {
  if (state.mode === 'test') {
    const keys = Object.keys(ELEMENTS);
    state.currentElement = keys[Math.floor(Math.random() * keys.length)];
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
    e.dataTransfer.effectAllowed = 'copy';
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
    if (type === 'charts') standSlot.classList.add('armed');
  });
});

standSlot.addEventListener('dragover', e => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  const types = e.dataTransfer.types || [];
  const found = Array.from(types).find(t => t.startsWith('application/x-item-'));
  const type = found ? found.replace('application/x-item-', '') : '';
  if (isLegalDrop(type)) standSlot.classList.add('armed');
});
standSlot.addEventListener('dragleave', () => standSlot.classList.remove('armed'));

function isLegalDrop(type) {
  if (type === 'charts')   return !state.chartsPlaced;
  if (type === 'element')  return state.chartsPlaced && !state.sampleAdded;
  if (type === 'masssort') return state.sampleAdded && !state.massSorted;
  if (type === 'numsort')  return state.massSorted && !state.numberSorted;
  return false;
}

standSlot.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  if (type === 'charts')   placeCharts();
  else if (type === 'element')  addSample();
  else if (type === 'masssort') doMassSort();
  else if (type === 'numsort')  doNumberSort();
});
standSlot.addEventListener('click', () => {
  if (!armedItem) return;
  const type = armedItem.type;
  if (type === 'charts')   placeCharts();
  else if (type === 'element')  addSample();
  else if (type === 'masssort') doMassSort();
  else if (type === 'numsort')  doNumberSort();
});

/* ======================================================
   GRID BUILDING
   ====================================================== */
function buildGridHTML(type) {
  const headers = type === 'mendeleev' ? MEND_HEADERS : MOD_HEADERS;
  const cols = headers.length;
  let html = `<div class="pt-grid ${type}" style="grid-template-columns:repeat(${cols},1fr)">`;
  headers.forEach(h => { html += `<div class="pt-cell head">${h}</div>`; });
  for (let p = 1; p <= 4; p++) {
    for (let c = 1; c <= cols; c++) {
      const isReserved = (type === 'mendeleev' && c === 8) || (type === 'modern' && c === 8);
      html += `<div class="pt-cell${isReserved ? ' gap' : ''}" id="pt-${type}-p${p}-c${c}" data-p="${p}" data-c="${c}">${isReserved ? '·' : ''}</div>`;
    }
  }
  html += `</div>`;
  return html;
}

/* ======================================================
   STAGE HANDLERS
   ====================================================== */
function placeCharts() {
  if (state.chartsPlaced) return;
  state.chartsPlaced = true;
  clearArmed();
  standSlot.innerHTML = '';
  standSlot.classList.remove('pt-tray');

  const bench = document.createElement('div');
  bench.className = 'pt-bench';
  bench.innerHTML = `
    <div class="pt-tray" id="element-tray"><span class="drop-hint">Drop the element sample here</span></div>
    <div class="pt-tables">
      <div class="pt-table-box" id="mendeleev-box">
        <div class="pt-table-title">Mendeleev · by Atomic Mass</div>
        ${buildGridHTML('mendeleev')}
      </div>
      <div class="pt-table-box" id="modern-box">
        <div class="pt-table-title">Modern · by Atomic Number</div>
        ${buildGridHTML('modern')}
      </div>
    </div>
  `;
  el('pt-bench').replaceWith(bench);
  bench.id = 'pt-bench';
  mendGridBox = el('mendeleev-box');
  modGridBox = el('modern-box');

  document.querySelector('[data-item="charts"]').classList.add('used');
  maybeRandomizeForTest();
  updateElementCardLabel();
  setStep(2);
  setIris(`Good — both grids are laid out. Now drag the <strong>${state.mode === 'teach' ? ELEMENTS[state.currentElement].name : 'unknown element sample'}</strong> onto the tray.`);
  setInstruction('Step 2: Add the Element Sample', 'Drag (or tap) the element sample card onto the tray in the middle of the bench.');
  elementCard.classList.remove('disabled');

  // re-wire the tray as the active drop target
  standSlot = el('element-tray');
  wireTray();
}

function wireTray() {
  standSlot.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    const types = e.dataTransfer.types || [];
    const found = Array.from(types).find(t => t.startsWith('application/x-item-'));
    const type = found ? found.replace('application/x-item-', '') : '';
    if (isLegalDrop(type)) standSlot.classList.add('armed');
  });
  standSlot.addEventListener('dragleave', () => standSlot.classList.remove('armed'));
  standSlot.addEventListener('drop', e => {
    e.preventDefault();
    const type = e.dataTransfer.getData('text/plain');
    if (type === 'element')  addSample();
    else if (type === 'masssort') doMassSort();
    else if (type === 'numsort')  doNumberSort();
  });
  standSlot.addEventListener('click', () => {
    if (!armedItem) return;
    const type = armedItem.type;
    if (type === 'element')  addSample();
    else if (type === 'masssort') doMassSort();
    else if (type === 'numsort')  doNumberSort();
  });
}

function addSample() {
  if (!state.chartsPlaced || state.sampleAdded) return;
  state.sampleAdded = true;
  clearArmed();
  elementCard.classList.add('used');

  const data = ELEMENTS[state.currentElement];
  standSlot.innerHTML = '';
  stagedEl = document.createElement('div');
  stagedEl.className = 'staged-element';
  stagedEl.innerHTML = `<strong>${state.mode === 'teach' ? data.symbol : '?'}</strong><div><small>${state.mode === 'teach' ? data.name : 'Unknown sample'}</small><small>Z = ${data.Z} · mass ≈ ${data.mass}</small></div>`;
  standSlot.appendChild(stagedEl);
  standSlot.classList.remove('armed');

  logSalt.textContent = state.mode === 'teach' ? `${data.name} (${data.symbol})` : `Unknown sample (Z = ${data.Z}, mass ≈ ${data.mass})`;
  document.querySelector('[data-item="masssort"]').classList.remove('disabled');
  setStep(3);
  setIris('Sample staged. Now use <strong>Sort by Atomic Mass</strong> to place it on Mendeleev\'s table — the way Mendeleev himself would have.');
  setInstruction('Step 3: Classify by Atomic Mass', 'Drag (or tap) the "Sort by Atomic Mass" tool onto the staged element.');
}

function doMassSort() {
  if (!state.sampleAdded || state.massSorted) return;
  state.massSorted = true;
  clearArmed();
  document.querySelector('[data-item="masssort"]').classList.add('used');

  const data = ELEMENTS[state.currentElement];
  mendGridBox.classList.add('live');
  const col = MEND_COL[data.mendGroup];
  const cell = el(`pt-mendeleev-p${data.period}-c${col}`);
  if (cell) {
    cell.textContent = isRevealed() ? data.symbol : '?';
    cell.classList.add('filled', 'pulse');
  }

  if (state.mode === 'teach') {
    roMendeleev.textContent = `Group ${data.mendGroup}, Period ${data.period}`;
  } else {
    roMendeleev.textContent = `Group ?, Period ${data.period}`;
  }

  document.querySelector('[data-item="numsort"]').classList.remove('disabled');
  setStep(4);
  setIris('Placed on Mendeleev\'s table by atomic mass. Now use <strong>Sort by Atomic Number</strong> to place the same element on the Modern table.');
  setInstruction('Step 4: Classify by Atomic Number', 'Drag (or tap) the "Sort by Atomic Number" tool onto the staged element.');
}

function doNumberSort() {
  if (!state.massSorted || state.numberSorted) return;
  state.numberSorted = true;
  clearArmed();
  document.querySelector('[data-item="numsort"]').classList.add('used');

  const data = ELEMENTS[state.currentElement];
  modGridBox.classList.add('live');
  const col = MOD_COL[data.modGroup];
  const cell = el(`pt-modern-p${data.period}-c${col}`);
  if (cell) {
    cell.textContent = isRevealed() ? data.symbol : '?';
    cell.classList.add('filled', 'pulse');
  }

  if (state.mode === 'teach') {
    roModern.textContent = `Group ${data.modGroup}, Period ${data.period}`;
  } else {
    roModern.textContent = `Group ?, Period ${data.period}`;
  }

  logHno3.textContent = 'Yes';
  logAgno3.textContent = 'Yes';

  setTimeout(showComparison, 500);
}

function showComparison() {
  const data = ELEMENTS[state.currentElement];
  const matches = true; // within this 17-element set, group families always line up
  logColour.textContent = matches ? 'Yes' : 'No';
  openMicroscopeBtn.disabled = false;

  if (state.mode === 'teach') {
    roHalide.textContent = `${data.name} (${data.symbol})`;
    roColour.textContent = data.familyLabel;
    setIris(`<strong>${data.symbol}</strong> lands in the same family position on both tables — Mendeleev's Group ${data.mendGroup} and Modern Group ${data.modGroup} agree. Open the Atomic Structure View to see why.`);
    setInstruction('Step 5: Observe the Comparison', 'Compare the two grids, then open the Atomic Structure View to see the electron shells behind the pattern.');
    setStep(5);
    setTimeout(() => showFinalVerdict(true), 600);
  } else {
    roHalide.textContent = `Unknown sample (Z = ${data.Z}, mass ≈ ${data.mass})`;
    roColour.textContent = '?';
    setIris(`The unknown element now sits on both tables. Based on its position and properties — which family does it belong to?`);
    setInstruction('Step 6: Identify the Family', 'Use the element\'s group position to decide its family.');
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
    const data = ELEMENTS[state.currentElement];
    const correct = guess === data.family;

    document.querySelectorAll('.answer-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.answer === data.family) b.classList.add('correct');
      else if (b === btn && !correct) b.classList.add('wrong');
    });

    roHalide.textContent = `${data.name} (${data.symbol})`;
    roMendeleev.textContent = `Group ${data.mendGroup}, Period ${data.period}`;
    roModern.textContent = `Group ${data.modGroup}, Period ${data.period}`;
    roColour.textContent = data.familyLabel;

    const mendCell = el(`pt-mendeleev-p${data.period}-c${MEND_COL[data.mendGroup]}`);
    const modCell  = el(`pt-modern-p${data.period}-c${MOD_COL[data.modGroup]}`);
    if (mendCell) mendCell.textContent = data.symbol;
    if (modCell)  modCell.textContent = data.symbol;
    if (stagedEl) stagedEl.innerHTML = `<strong>${data.symbol}</strong><div><small>${data.name}</small><small>Z = ${data.Z} · mass ≈ ${data.mass}</small></div>`;
    logSalt.textContent = `${data.name} (${data.symbol})`;

    verdictBanner.hidden = false;
    if (correct) {
      verdictBanner.className = 'verdict-banner correct';
      verdictBanner.innerHTML = `<strong>Correct.</strong> The unknown was ${data.name} (${data.symbol}), a ${data.familyLabel}. ${data.note}`;
      setIris(`Correct! The unknown was <strong>${data.symbol}</strong>, a ${data.familyLabel.toLowerCase()}, consistent in both tables.`);
    } else {
      verdictBanner.className = 'verdict-banner wrong';
      verdictBanner.innerHTML = `<strong>Not quite.</strong> The unknown was actually ${data.name} (${data.symbol}), a ${data.familyLabel}. ${data.note}`;
      setIris(`Not quite — the unknown was <strong>${data.symbol}</strong>, a ${data.familyLabel.toLowerCase()}. Compare its group position in both tables next time.`);
    }
    showFinalVerdict(correct);
  });
});

function showFinalVerdict(success) {
  const data = ELEMENTS[state.currentElement];
  verdictBannerMain.hidden = false;
  if (state.mode === 'teach') {
    verdictBannerMain.className = 'verdict-banner-main conserved';
    verdictBannerMain.innerHTML = `<strong>Confirmed: ${data.name} (${data.symbol})</strong> — Mendeleev Group ${data.mendGroup} / Modern Group ${data.modGroup}, Period ${data.period}. ${data.note}`;
  } else {
    verdictBannerMain.className = success ? 'verdict-banner-main correct' : 'verdict-banner-main wrong';
    verdictBannerMain.innerHTML = success
      ? `<strong>Lab complete — correct identification.</strong> ${data.name} (${data.symbol}) — ${data.familyLabel}.`
      : `<strong>Lab complete — see correction above.</strong> ${data.name} (${data.symbol}) — ${data.familyLabel}.`;
  }
}

/* ======================================================
   ATOMIC STRUCTURE VIEW (repurposed molecular microscope)
   ====================================================== */
openMicroscopeBtn.addEventListener('click', () => { microscopeModal.hidden = false; startParticleSim(); });
closeMicroscopeBtn.addEventListener('click', () => { microscopeModal.hidden = true; stopParticleSim(); });
microscopeModal.addEventListener('click', e => { if (e.target === microscopeModal) { microscopeModal.hidden = true; stopParticleSim(); } });

function isRevealed() { return state.mode === 'teach' || state.answered; }

const canvas = el('particle-canvas');
const ctx = canvas.getContext('2d');
let animFrame = null, rotation = 0;

function drawLegend() {
  const data = ELEMENTS[state.currentElement];
  const neutrons = Math.round(data.mass - data.Z);
  el('particle-legend').innerHTML = `
    <span><span class="legend-dot" style="background:#c0584f"></span>${data.Z} protons</span>
    <span><span class="legend-dot" style="background:#a9b4c9"></span>${neutrons} neutrons</span>
    <span><span class="legend-dot" style="background:#3f7fd1"></span>${data.Z} electrons</span>`;
}

function updateExplainer() {
  const data = ELEMENTS[state.currentElement];
  const shells = SHELLS[state.currentElement];
  const valence = shells[shells.length - 1];
  const label = isRevealed() ? `${data.name} (${data.symbol})` : `This unknown sample (Z = ${data.Z})`;
  el('microscope-explainer').innerHTML = `${label} has ${data.Z} electrons arranged in shells of ${shells.join(', ')} — leaving <strong>${valence} valence electron${valence === 1 ? '' : 's'}</strong> in its outer shell. Elements with the same number of valence electrons recur at regular intervals as atomic number increases — this recurring pattern (periodicity) is exactly what both Mendeleev and the Modern table are built around, one by mass, one by atomic number.`;
}

function drawAtom() {
  const data = ELEMENTS[state.currentElement];
  const shells = SHELLS[state.currentElement];
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 2; ctx.strokeRect(4,4,W-8,H-8);

  // shell rings
  const maxR = Math.min(W, H) / 2 - 30;
  shells.forEach((count, i) => {
    const r = (i + 1) * (maxR / shells.length);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(63,127,209,0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    for (let e = 0; e < count; e++) {
      const angle = rotation * (i % 2 === 0 ? 1 : -1) + (e / count) * Math.PI * 2;
      const ex = cx + r * Math.cos(angle);
      const ey = cy + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(ex, ey, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#3f7fd1';
      ctx.fill();
    }
  });

  // nucleus
  ctx.beginPath();
  ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  ctx.fillStyle = '#16223a';
  ctx.fill();
  ctx.strokeStyle = '#c0584f';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#eef1f6';
  ctx.font = '700 15px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(isRevealed() ? data.symbol : '?', cx, cy);
}

function loop() { rotation += 0.012; drawAtom(); animFrame = requestAnimationFrame(loop); }
function startParticleSim() { drawLegend(); updateExplainer(); if (animFrame) cancelAnimationFrame(animFrame); loop(); }
function stopParticleSim() { if (animFrame) cancelAnimationFrame(animFrame); animFrame = null; }

/* ======================================================
   INIT
   ====================================================== */
document.querySelector('[data-item="masssort"]').classList.add('disabled');
document.querySelector('[data-item="numsort"]').classList.add('disabled');
elementCard.classList.add('disabled');
standSlot.classList.add('pt-tray');
updateElementCardLabel();
