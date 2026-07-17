'use strict';

/* ======================================================
   SALT DATA
   ====================================================== */
const SALTS = {
  NH4Cl:     { formula: 'NH₄Cl',      name: 'Ammonium Chloride',  cation: 'NH4', anion: 'Cl'   },
  PbNO3_2:   { formula: 'Pb(NO₃)₂',   name: 'Lead Nitrate',       cation: 'Pb',  anion: 'NO3'  },
  CuSO4:     { formula: 'CuSO₄',      name: 'Copper Sulphate',    cation: 'Cu',  anion: 'SO4'  },
  ZnCl2:     { formula: 'ZnCl₂',      name: 'Zinc Chloride',      cation: 'Zn',  anion: 'Cl'   },
  Al2SO4_3:  { formula: 'Al₂(SO₄)₃',  name: 'Aluminium Sulphate', cation: 'Al',  anion: 'SO4'  },
  BaBr2:     { formula: 'BaBr₂',      name: 'Barium Bromide',     cation: 'Ba',  anion: 'Br'   },
  NH4_2C2O4: { formula: '(NH₄)₂C₂O₄', name: 'Ammonium Oxalate',   cation: 'NH4', anion: 'C2O4' },
  NiCl2:     { formula: 'NiCl₂',      name: 'Nickel Chloride',    cation: 'Ni',  anion: 'Cl'   }
};

/* ======================================================
   ANION SCHEME
   ====================================================== */
const ANION_GROUPS = ['dilute', 'concentrated', 'special'];

const ANION_TEST_META = {
  dilute: {
    reagent: 'dilh2so4', reagentName: 'Dilute H₂SO₄',
    title: 'Anion Test 1 — Dilute Acid Test', groupLabel: 'Dilute acid group',
    instruction: 'Add a few drops of dilute sulphuric acid to the salt sample. Warm gently and watch closely for any gas.',
    positives: ['C2O4']
  },
  concentrated: {
    reagent: 'conch2so4', reagentName: 'Conc. H₂SO₄',
    title: 'Anion Test 2 — Concentrated Acid Test', groupLabel: 'Concentrated acid group',
    instruction: 'No gas with dilute acid. Add a few drops of concentrated sulphuric acid directly to the solid salt and warm gently — note the colour and smell of any fumes.',
    positives: ['Cl', 'Br', 'NO3']
  },
  special: {
    reagent: 'bacl2', reagentName: 'BaCl₂ Solution',
    title: 'Anion Test 3 — Special / Confirmatory Test', groupLabel: 'Special test group',
    instruction: 'Neither acid produced a gas — that rules out most anions. Add barium chloride solution to a fresh sample and look for a precipitate.',
    positives: ['SO4']
  }
};

const ANION_DATA = {
  Cl: {
    name: 'Chloride', symbol: 'Cl⁻',
    effect: { type: 'gas', colourHex: '#e9e7df' },
    observation: 'A colourless gas with a pungent, choking smell is evolved. A glass rod dipped in ammonia held at the mouth of the tube produces dense white fumes.',
    equation: 'Cl⁻ + H₂SO₄(conc.) → HSO₄⁻ + HCl↑',
    confirmNote: 'Dense white fumes of NH₄Cl with ammonia are the confirmatory clue for chloride.'
  },
  Br: {
    name: 'Bromide', symbol: 'Br⁻',
    effect: { type: 'gas', colourHex: '#a8503f' },
    observation: 'Reddish-brown fumes with a sharp, pungent smell are evolved as bromine vapour escapes the tube.',
    equation: '2Br⁻ + 2H₂SO₄(conc.) → SO₄²⁻ + SO₂↑ + Br₂↑ + 2H₂O',
    confirmNote: 'The reddish-brown colour (not violet, not white) is the giveaway for bromide.'
  },
  NO3: {
    name: 'Nitrate', symbol: 'NO₃⁻',
    effect: { type: 'gas', colourHex: '#8a5a2e' },
    observation: 'Brown, pungent fumes are evolved on warming, more strongly if a few copper turnings are dropped in.',
    equation: '2NO₃⁻ + H₂SO₄(conc.) → 2HNO₃ + SO₄²⁻  ;  4HNO₃ →(warm) 4NO₂↑ + O₂↑ + 2H₂O',
    confirmNote: 'The brown-ring test (fresh FeSO₄ solution with conc. H₂SO₄ poured carefully down the side) is the standard confirmatory test.'
  },
  SO4: {
    name: 'Sulphate', symbol: 'SO₄²⁻',
    effect: { type: 'precipitate', colourHex: '#f2f1ec' },
    observation: 'A dense white precipitate forms at once, and does not dissolve even in excess dilute HCl.',
    equation: 'SO₄²⁻ + BaCl₂ → BaSO₄(s)↓ + 2Cl⁻',
    confirmNote: 'Insolubility of the white precipitate in dilute HCl rules out carbonate, sulphite and phosphate — confirming sulphate.'
  },
  C2O4: {
    name: 'Oxalate', symbol: 'C₂O₄²⁻',
    effect: { type: 'gas', colourHex: '#d9dde3' },
    observation: 'A colourless, odourless gas is evolved on warming and turns lime water milky.',
    equation: 'C₂O₄²⁻ + H₂SO₄ → SO₄²⁻ + H₂O + CO₂↑ (+ CO↑ on stronger heating)',
    confirmNote: 'Decolourisation of warm, acidified KMnO₄ solution is the standard confirmatory test for oxalate.'
  }
};

/* ======================================================
   CATION SCHEME (Groups 0–V used by these 8 salts)
   ====================================================== */
const CATION_GROUPS = ['0', 'I', 'II', 'III', 'IV', 'V'];

const CATION_TEST_META = {
  '0': {
    reagent: 'naoh', reagentName: 'NaOH (warm)',
    title: 'Preliminary Test — Group 0 (Ammonium)', groupLabel: 'Group 0',
    instruction: 'Add sodium hydroxide solution to the salt, warm gently, and hold a moist red litmus paper at the mouth of the tube.',
    positives: ['NH4']
  },
  'I': {
    reagent: 'dilhcl', reagentName: 'Dilute HCl',
    title: 'Cation Group I', groupLabel: 'Group I',
    instruction: 'No ammonia — proceed to Group I. Add dilute hydrochloric acid to the salt solution and watch for a precipitate.',
    positives: ['Pb']
  },
  'II': {
    reagent: 'h2sacidic', reagentName: 'H₂S gas (acidic medium)',
    title: 'Cation Group II', groupLabel: 'Group II',
    instruction: 'No precipitate in Group I. Pass H₂S gas through the same acidified solution and watch for a precipitate.',
    positives: ['Cu']
  },
  'III': {
    reagent: 'nh4ohexcess', reagentName: 'NH₄Cl + excess NH₄OH',
    title: 'Cation Group III', groupLabel: 'Group III',
    instruction: 'No precipitate in Group II. Add solid ammonium chloride, then excess ammonium hydroxide, to the filtrate.',
    positives: ['Al']
  },
  'IV': {
    reagent: 'h2sbasic', reagentName: 'H₂S gas (ammoniacal medium)',
    title: 'Cation Group IV', groupLabel: 'Group IV',
    instruction: 'No precipitate in Group III. Pass H₂S gas through the same ammoniacal filtrate and watch for a precipitate.',
    positives: ['Zn', 'Ni']
  },
  'V': {
    reagent: 'nh4co3', reagentName: '(NH₄)₂CO₃ Solution',
    title: 'Cation Group V', groupLabel: 'Group V',
    instruction: 'No precipitate in Group IV. Add ammonium carbonate solution to the filtrate and watch for a precipitate.',
    positives: ['Ba']
  }
};

const CATION_DATA = {
  NH4: {
    name: 'Ammonium', symbol: 'NH₄⁺', group: '0',
    effect: { type: 'litmus' },
    observation: 'A pungent smell of ammonia is released, and the moist red litmus paper turns blue.',
    equation: 'NH₄⁺ + OH⁻ →(warm) NH₃↑ + H₂O',
    confirmNote: "Nessler's reagent gives a brown precipitate with ammonium ions as an additional confirmatory test.",
    micro: { ion1: 'NH₄⁺', ion1Color: '#cfd6e0', ion2: 'OH⁻', ion2Color: '#8fb7dd', productColor: null, productFormula: 'NH₃ (gas) + H₂O', reactionType: 'gas' }
  },
  Pb: {
    name: 'Lead', symbol: 'Pb²⁺', group: 'I',
    effect: { type: 'precipitate', colourHex: '#eceae3' },
    observation: 'A white precipitate forms, which dissolves on heating and reappears as shiny plate-like crystals on cooling.',
    equation: 'Pb²⁺ + 2Cl⁻ → PbCl₂(s)↓',
    confirmNote: 'Potassium chromate solution gives a bright yellow precipitate of PbCrO₄ as further confirmation.',
    micro: { ion1: 'Pb²⁺', ion1Color: '#cfd6e0', ion2: 'Cl⁻', ion2Color: '#9fb3cc', productColor: '#eceae3', productFormula: 'PbCl₂', reactionType: 'precipitate' }
  },
  Cu: {
    name: 'Copper', symbol: 'Cu²⁺', group: 'II',
    effect: { type: 'precipitate', colourHex: '#161616' },
    observation: 'A black precipitate forms.',
    equation: 'Cu²⁺ + H₂S → CuS(s)↓ + 2H⁺',
    confirmNote: 'A deep blue colour with excess ammonia (formation of [Cu(NH₃)₄]²⁺) confirms copper.',
    micro: { ion1: 'Cu²⁺', ion1Color: '#5fa3c9', ion2: 'S²⁻', ion2Color: '#e8d97a', productColor: '#161616', productFormula: 'CuS', reactionType: 'precipitate' }
  },
  Al: {
    name: 'Aluminium', symbol: 'Al³⁺', group: 'III',
    effect: { type: 'precipitate', colourHex: '#f0efe9' },
    observation: 'A white, gelatinous precipitate forms, which does not dissolve in excess ammonium hydroxide.',
    equation: 'Al³⁺ + 3NH₄OH → Al(OH)₃(s)↓ + 3NH₄⁺',
    confirmNote: 'The blue-lake test (with a lake dye and ammonia) confirms aluminium.',
    micro: { ion1: 'Al³⁺', ion1Color: '#cfd6e0', ion2: 'OH⁻', ion2Color: '#8fb7dd', productColor: '#f0efe9', productFormula: 'Al(OH)₃', reactionType: 'precipitate' }
  },
  Zn: {
    name: 'Zinc', symbol: 'Zn²⁺', group: 'IV',
    effect: { type: 'precipitate', colourHex: '#e6e4dc' },
    observation: 'A dirty-white precipitate forms.',
    equation: 'Zn²⁺ + H₂S → ZnS(s)↓ + 2H⁺',
    confirmNote: 'Dissolving the precipitate in dilute HCl and treating it with potassium ferrocyanide gives a bluish-white precipitate, confirming zinc.',
    micro: { ion1: 'Zn²⁺', ion1Color: '#cfd6e0', ion2: 'S²⁻', ion2Color: '#e8d97a', productColor: '#e6e4dc', productFormula: 'ZnS', reactionType: 'precipitate' }
  },
  Ni: {
    name: 'Nickel', symbol: 'Ni²⁺', group: 'IV',
    effect: { type: 'precipitate', colourHex: '#141414' },
    observation: 'A black precipitate forms.',
    equation: 'Ni²⁺ + H₂S → NiS(s)↓ + 2H⁺',
    confirmNote: 'The dimethylglyoxime (DMG) test gives a bright rosy-red precipitate in ammoniacal solution, confirming nickel.',
    micro: { ion1: 'Ni²⁺', ion1Color: '#8fbf8f', ion2: 'S²⁻', ion2Color: '#e8d97a', productColor: '#141414', productFormula: 'NiS', reactionType: 'precipitate' }
  },
  Ba: {
    name: 'Barium', symbol: 'Ba²⁺', group: 'V',
    effect: { type: 'precipitate', colourHex: '#efeee8' },
    observation: 'A white precipitate forms.',
    equation: 'Ba²⁺ + CO₃²⁻ → BaCO₃(s)↓',
    confirmNote: 'A grassy-green flame test is the classic confirmatory test for barium.',
    micro: { ion1: 'Ba²⁺', ion1Color: '#cfd6e0', ion2: 'CO₃²⁻', ion2Color: '#8fb7dd', productColor: '#efeee8', productFormula: 'BaCO₃', reactionType: 'precipitate' }
  }
};

const ANION_MICRO = {
  SO4: { ion1: 'Ba²⁺', ion1Color: '#cfd6e0', ion2: 'SO₄²⁻', ion2Color: '#e8d97a', productColor: '#f2f1ec', productFormula: 'BaSO₄', reactionType: 'precipitate' }
};

/* ======================================================
   IRIS KNOWLEDGE CONTENT
   ====================================================== */
const IRIS_CONTENT = {
  theory: `
    <h4>Theory — Systematic Salt Analysis</h4>
    <p>Salt analysis (qualitative inorganic analysis) is the systematic procedure used to identify the <strong>anion (acidic radical)</strong> and <strong>cation (basic radical)</strong> present in an unknown inorganic salt. By convention, <strong>anions are analysed first</strong>, since knowing the anion helps decide how to safely prepare the "original solution" used for cation analysis.</p>
    <p><strong>Anion analysis</strong> proceeds through three groups:</p>
    <ul>
      <li><strong>Dilute acid group</strong> — dilute H₂SO₄ is added cold, then warm. Anions like oxalate (C₂O₄²⁻), carbonate, and sulphite react even with a dilute acid, releasing a gas.</li>
      <li><strong>Concentrated acid group</strong> — conc. H₂SO₄ is added to the solid salt and warmed. Chloride, bromide, and nitrate only release characteristic fumes with the concentrated acid.</li>
      <li><strong>Special / confirmatory group</strong> — anions such as sulphate (SO₄²⁻) give no gas with either acid, and are instead detected with a specific reagent (BaCl₂ solution, giving a white precipitate insoluble in dilute HCl).</li>
    </ul>
    <p><strong>Cation analysis</strong> uses the classical H₂S scheme, precipitating cations out of solution group by group with a specific reagent, in a fixed order:</p>
    <ul>
      <li><strong>Group 0</strong> — NH₄⁺, detected directly with NaOH (warm) and litmus/smell, no precipitate.</li>
      <li><strong>Group I</strong> — Pb²⁺ (also Ag⁺, Hg₂²⁺), precipitated by dilute HCl.</li>
      <li><strong>Group II</strong> — Cu²⁺ (also Cd²⁺, Bi³⁺, As, Sb, Sn), precipitated as sulphides by H₂S in acidic medium.</li>
      <li><strong>Group III</strong> — Al³⁺ (also Fe³⁺, Cr³⁺), precipitated as hydroxides by NH₄OH in the presence of NH₄Cl.</li>
      <li><strong>Group IV</strong> — Zn²⁺, Ni²⁺ (also Co²⁺, Mn²⁺), precipitated as sulphides by H₂S in ammoniacal (basic) medium.</li>
      <li><strong>Group V</strong> — Ba²⁺ (also Sr²⁺, Ca²⁺), precipitated as carbonates by (NH₄)₂CO₃.</li>
      <li><strong>Group VI</strong> — Mg²⁺ remains in solution and is confirmed with Na₂HPO₄; not required for any of the eight salts in this lab.</li>
    </ul>
    <p>At each cation group, a <em>negative</em> result (no precipitate) simply means the filtrate is passed on to the next group's reagent — the systematic elimination is what makes the scheme reliable.</p>
  `,
  materials: `
    <h4>Materials Used</h4>
    <ul>
      <li><strong>Test tubes</strong> and a <strong>test tube stand</strong></li>
      <li><strong>Dropper / Pasteur pipette</strong></li>
      <li><strong>Anion reagents:</strong>
        <ul>
          <li>Dilute Sulphuric Acid (H₂SO₄)</li>
          <li>Concentrated Sulphuric Acid (H₂SO₄)</li>
          <li>Barium Chloride solution (BaCl₂)</li>
        </ul>
      </li>
      <li><strong>Cation reagents:</strong>
        <ul>
          <li>Sodium Hydroxide solution (NaOH)</li>
          <li>Dilute Hydrochloric Acid (HCl)</li>
          <li>Hydrogen Sulphide gas (H₂S) — acidic and ammoniacal media</li>
          <li>Solid Ammonium Chloride (NH₄Cl) and Ammonium Hydroxide (NH₄OH), in excess</li>
          <li>Ammonium Carbonate solution ((NH₄)₂CO₃)</li>
        </ul>
      </li>
      <li><strong>Sample salts:</strong> NH₄Cl, Pb(NO₃)₂, CuSO₄, ZnCl₂, Al₂(SO₄)₃, BaBr₂, (NH₄)₂C₂O₄, NiCl₂</li>
      <li><strong>Moist red litmus paper</strong>, distilled water, and a beaker for waste</li>
    </ul>
  `,
  procedure: `
    <h4>Procedure</h4>
    <p><strong>A. Anion analysis (done first)</strong></p>
    <ol>
      <li>Take a small quantity of the salt in a dry test tube. Add a few drops of <strong>dilute H₂SO₄</strong>, warm gently, and observe. A gas confirms the dilute-acid-group anion (oxalate); no gas means proceed.</li>
      <li>Take a fresh portion of the solid salt. Add a few drops of <strong>concentrated H₂SO₄</strong> and warm. Note the colour and smell of any fumes — this identifies chloride, bromide, or nitrate; no fumes means proceed.</li>
      <li>If neither acid gives a gas, add <strong>BaCl₂ solution</strong> to a fresh sample solution. A white precipitate insoluble in dilute HCl confirms sulphate.</li>
    </ol>
    <p><strong>B. Cation analysis (done after the anion is known)</strong></p>
    <ol>
      <li>Add <strong>NaOH</strong> to the salt, warm, and test the vapour with moist red litmus. Blue litmus and an ammonia smell confirm Group 0 (NH₄⁺) directly.</li>
      <li>If Group 0 is negative, add <strong>dilute HCl</strong> to the solution — a white precipitate confirms Group I (Pb²⁺).</li>
      <li>If Group I is negative, pass <strong>H₂S gas</strong> through the acidified solution — a coloured precipitate confirms Group II (Cu²⁺).</li>
      <li>If Group II is negative, add <strong>NH₄Cl then excess NH₄OH</strong> to the filtrate — a white gelatinous precipitate confirms Group III (Al³⁺).</li>
      <li>If Group III is negative, pass <strong>H₂S gas</strong> through the same ammoniacal filtrate — a coloured precipitate confirms Group IV (Zn²⁺ or Ni²⁺, distinguished by colour).</li>
      <li>If Group IV is negative, add <strong>(NH₄)₂CO₃ solution</strong> — a white precipitate confirms Group V (Ba²⁺).</li>
      <li>Record all observations, and combine the confirmed anion and cation to state the full identity of the salt.</li>
    </ol>
  `
};

/* ======================================================
   EVALUATION QUESTIONS
   ====================================================== */
const EVAL_QUESTIONS = [
  {
    q: 'Why are anions analysed before cations in systematic salt analysis?',
    opts: ['It is purely a matter of convention with no practical reason', 'Knowing the anion helps decide a safe solvent/reagent for preparing the original solution used in cation analysis', 'Cations cannot be tested without first destroying the anion', 'Anion tests are always faster to perform'],
    answer: 1
  },
  {
    q: 'Which anion in this experiment reacts even with dilute H₂SO₄, evolving a gas on warming?',
    opts: ['Chloride', 'Sulphate', 'Oxalate', 'Bromide'],
    answer: 2
  },
  {
    q: 'A salt gives reddish-brown fumes with concentrated H₂SO₄. Which anion is present?',
    opts: ['Chloride', 'Bromide', 'Sulphate', 'Oxalate'],
    answer: 1
  },
  {
    q: 'Sulphate gives no gas with dilute or concentrated acid. How is it confirmed instead?',
    opts: ['Flame test', 'White precipitate with BaCl₂, insoluble in dilute HCl', 'Brown ring test', 'Litmus paper test'],
    answer: 1
  },
  {
    q: 'Which cation group does NH₄⁺ belong to, and what reagent detects it?',
    opts: ['Group I, with dilute HCl', 'Group V, with (NH₄)₂CO₃', 'Group 0, with NaOH (warm) and litmus paper', 'Group III, with excess NH₄OH'],
    answer: 2
  },
  {
    q: 'Dilute HCl is used to precipitate which cation group, and why only a controlled amount?',
    opts: ['Group I; excess Cl⁻ would also precipitate later-group cations that are actually soluble chlorides', 'Group IV; to keep the solution acidic for H₂S', 'Group III; to neutralise excess ammonia', 'Group V; to dissolve carbonates'],
    answer: 0
  },
  {
    q: 'A white gelatinous precipitate forms with excess NH₄OH (after adding NH₄Cl), insoluble in the excess reagent. Which cation is this?',
    opts: ['Zn²⁺', 'Al³⁺', 'Ba²⁺', 'Cu²⁺'],
    answer: 1
  },
  {
    q: 'Both Zn²⁺ and Ni²⁺ are precipitated by H₂S in ammoniacal medium (Group IV). How are they distinguished?',
    opts: ['They cannot be distinguished', 'By the colour of the sulphide precipitate — ZnS is dirty-white, NiS is black', 'By flame test colour only', 'By solubility in water'],
    answer: 1
  },
  {
    q: 'Why is NH₄Cl added along with NH₄OH before Group III precipitation?',
    opts: ['To make the solution more acidic', 'To suppress ionisation of NH₄OH via the common-ion effect, keeping OH⁻ low enough to precipitate only Group III hydroxides', 'To provide the chloride needed for Group I', 'It has no real purpose, it is just tradition'],
    answer: 1
  },
  {
    q: 'A salt gives a white precipitate with dilute HCl that dissolves on heating and reappears as crystals on cooling. Which cation is this?',
    opts: ['Cu²⁺', 'Pb²⁺', 'Al³⁺', 'Ba²⁺'],
    answer: 1
  }
];

/* ======================================================
   STATE
   ====================================================== */
const state = {
  mode: 'teach', saltKey: 'NH4Cl',
  tubePlaced: false, sampleAdded: false,
  phase: 'setup',           // setup -> anion -> cation -> done
  anionIdx: 0, cationIdx: 0,
  anionFound: null, cationFound: null,
  anionAnswered: false, cationAnswered: false,
  step: 1
};

/* ======================================================
   DOM REFS
   ====================================================== */
const el = id => document.getElementById(id);
const standSlot        = el('tube-drop-target');
const irisMsg           = el('iris-message');
const instrTitle        = el('instruction-title');
const instrBody         = el('instruction-body');
const testProgressEl    = el('test-progress');
const saltCard          = el('salt-card');
const saltCardName      = el('salt-card-name');
const saltCardFormula   = el('salt-card-formula');
const saltPicker        = el('salt-picker');
const logSalt           = el('log-salt');
const logList           = el('log-list');
const litmusStrip       = el('litmus-strip');
const anionGuessPanel   = el('anion-guess-panel');
const cationGuessPanel  = el('cation-guess-panel');
const anionVerdict      = el('anion-verdict-banner');
const cationVerdict     = el('cation-verdict-banner');
const verdictBannerMain = el('verdict-banner-main');
const openMicroscopeBtn = el('open-microscope');
const microscopeModal   = el('microscope-modal');
const closeMicroscopeBtn = el('close-microscope');
const anionEqEl   = el('anion-eq');
const cationEqEl  = el('cation-eq');
const roAnionEl   = el('ro-anion-symbol');
const roCationEl  = el('ro-cation-symbol');
const anionBadge  = el('anion-badge');
const cationBadge = el('cation-badge');
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
    (pct >= 70 ? 'Well done — solid grasp of the salt analysis scheme.' : 'Review the Theory tab in Iris and try again.');
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
   MODE TOGGLE + SALT PICKER
   ====================================================== */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
    saltPicker.style.display = state.mode === 'teach' ? 'grid' : 'none';
    updateSaltCardLabel();
  });
});
saltPicker.style.display = 'grid';

document.querySelectorAll('.salt-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.salt-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.saltKey = btn.dataset.salt;
    updateSaltCardLabel();
  });
});

function updateSaltCardLabel() {
  const data = SALTS[state.saltKey];
  if (state.mode === 'teach') {
    saltCardName.textContent = data.name;
    saltCardFormula.textContent = data.formula + ' · solid / solution';
  } else {
    saltCardName.textContent = 'Unknown Salt Sample';
    saltCardFormula.textContent = 'Sample X · solid / solution';
  }
}

function maybeRandomizeForTest() {
  if (state.mode === 'test') {
    const keys = Object.keys(SALTS);
    state.saltKey = keys[Math.floor(Math.random() * keys.length)];
  }
}

/* ======================================================
   HELPERS
   ====================================================== */
function anionGroupOf(anionKey) {
  return ANION_GROUPS.find(g => ANION_TEST_META[g].positives.includes(anionKey));
}
function cationGroupOf(cationKey) {
  return CATION_GROUPS.find(g => CATION_TEST_META[g].positives.includes(cationKey));
}
function groupRoman(g) { return g === '0' ? '0' : g; }

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
function setInstruction(title, body, progress) {
  instrTitle.textContent = title;
  instrBody.textContent = body;
  if (progress) { testProgressEl.textContent = progress; testProgressEl.hidden = false; }
  else { testProgressEl.hidden = true; }
}

function logEntry(text, positive) {
  const wrap = document.createElement('div');
  wrap.className = 'log-entry ' + (positive ? 'positive' : 'negative');
  wrap.innerHTML = text;
  logList.appendChild(wrap);
  logList.scrollTop = logList.scrollHeight;
}

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

function currentRequiredReagent() {
  if (state.phase === 'anion') return ANION_TEST_META[ANION_GROUPS[state.anionIdx]].reagent;
  if (state.phase === 'cation') return CATION_TEST_META[CATION_GROUPS[state.cationIdx]].reagent;
  return null;
}

function isLegalDrop(type) {
  if (type === 'testtube') return !state.tubePlaced;
  if (type === 'salt') return state.tubePlaced && !state.sampleAdded;
  if (!state.sampleAdded) return false;
  return type === currentRequiredReagent();
}

standSlot.addEventListener('drop', e => {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  handleDrop(type);
});
standSlot.addEventListener('click', () => {
  if (!armedItem) return;
  handleDrop(armedItem.type);
});

function handleDrop(type) {
  if (!isLegalDrop(type)) return;
  if (type === 'testtube') return placeTube();
  if (type === 'salt') return addSample();
  if (state.phase === 'anion') return runAnionTest(type);
  if (state.phase === 'cation') return runCationTest(type);
}

/* ======================================================
   STAGE HANDLERS — SETUP
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
  setIris(`Good — the test tube is in the stand. Now drag the <strong>${state.mode === 'teach' ? SALTS[state.saltKey].name : 'unknown salt sample'}</strong> into the tube.`);
  setInstruction('Step 2: Add the Salt Sample', 'Drag (or tap) the salt sample onto the test tube.');
  saltCard.classList.remove('disabled');
}

function addSample() {
  if (!state.tubePlaced || state.sampleAdded) return;
  state.sampleAdded = true;
  clearArmed();
  saltCard.classList.add('used');
  const liquid = el('tube-liquid');
  liquid.style.height = '55%';
  liquid.style.background = 'rgba(180,200,220,0.3)';
  logSalt.textContent = state.mode === 'teach' ? SALTS[state.saltKey].formula : 'Unknown sample';
  beginAnionPhase();
}

/* ======================================================
   ANION PHASE
   ====================================================== */
function beginAnionPhase() {
  state.phase = 'anion';
  state.anionIdx = 0;
  setStep(3);
  enableOnlyReagent(currentRequiredReagent());
  const meta = ANION_TEST_META[ANION_GROUPS[0]];
  setIris(`Sample added. Let's find the <strong>anion</strong> first. Add <strong>${meta.reagentName}</strong> — ${meta.instruction}`);
  setInstruction(meta.title, meta.instruction, `Anion test 1 of ${ANION_GROUPS.length}`);
}

function enableOnlyReagent(reagentKey) {
  document.querySelectorAll('.reagent-card[data-item]').forEach(card => {
    const t = card.dataset.item;
    if (t === 'testtube' || t === 'salt') return;
    if (card.classList.contains('used')) return;
    if (t === reagentKey) card.classList.remove('disabled');
    else card.classList.add('disabled');
  });
}

function runAnionTest(reagentType) {
  const groupId = ANION_GROUPS[state.anionIdx];
  const meta = ANION_TEST_META[groupId];
  if (reagentType !== meta.reagent) return;
  clearArmed();
  document.querySelector(`[data-item="${meta.reagent}"]`).classList.add('used');
  const salt = SALTS[state.saltKey];
  const positive = meta.positives.includes(salt.anion);

  if (positive) {
    const data = ANION_DATA[salt.anion];
    applyEffect(data.effect);
    logEntry(`<strong>${meta.reagentName}:</strong> ${data.observation}`, true);
    state.anionFound = salt.anion;
    state.lastEffectSource = { kind: 'anion', key: salt.anion };
    if (state.mode === 'teach') {
      revealAnionResult();
      setIris(`${data.observation} This confirms <strong>${data.symbol}</strong> ions in the salt.`);
      setInstruction('Anion Confirmed', `${meta.groupLabel} — ${data.name} (${data.symbol}) confirmed. Moving on to cation analysis.`);
      setTimeout(beginCationPhase, 1200);
    } else {
      setIris(`${data.observation} Based on this, which anion do you think is present?`);
      setInstruction('Identify the Anion', 'Use the observation to choose the correct anion below.');
      anionGuessPanel.hidden = false;
    }
  } else {
    logEntry(`<strong>${meta.reagentName}:</strong> No visible reaction.`, false);
    state.anionIdx++;
    if (state.anionIdx >= ANION_GROUPS.length) return; // safety guard
    const nextMeta = ANION_TEST_META[ANION_GROUPS[state.anionIdx]];
    enableOnlyReagent(nextMeta.reagent);
    setIris(`No reaction with ${meta.reagentName}. Let's try <strong>${nextMeta.reagentName}</strong> — ${nextMeta.instruction}`);
    setInstruction(nextMeta.title, nextMeta.instruction, `Anion test ${state.anionIdx + 1} of ${ANION_GROUPS.length}`);
  }
}

function revealAnionResult() {
  const salt = SALTS[state.saltKey];
  const data = ANION_DATA[salt.anion];
  anionEqEl.textContent = data.equation;
  roAnionEl.textContent = data.symbol;
  anionBadge.textContent = ANION_TEST_META[anionGroupOf(salt.anion)].groupLabel;
}

document.querySelectorAll('#anion-guess-panel .answer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (state.anionAnswered) return;
    state.anionAnswered = true;
    const guess = btn.dataset.anion;
    const salt = SALTS[state.saltKey];
    const correct = guess === salt.anion;
    const data = ANION_DATA[salt.anion];

    document.querySelectorAll('#anion-guess-panel .answer-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.anion === salt.anion) b.classList.add('correct');
      else if (b === btn && !correct) b.classList.add('wrong');
    });

    revealAnionResult();
    anionVerdict.hidden = false;
    if (correct) {
      anionVerdict.className = 'verdict-banner correct';
      anionVerdict.innerHTML = `<strong>Correct.</strong> The anion is ${data.symbol} (${data.name}). ${data.confirmNote}`;
      setIris(`Correct! The anion is <strong>${data.symbol}</strong>.`);
    } else {
      anionVerdict.className = 'verdict-banner wrong';
      anionVerdict.innerHTML = `<strong>Not quite.</strong> The anion is actually ${data.symbol} (${data.name}). ${data.confirmNote}`;
      setIris(`Not quite — the anion is <strong>${data.symbol}</strong>. Now let's move on to the cation.`);
    }
    setInstruction('Anion Confirmed', `Moving on to cation analysis.`);
    setTimeout(beginCationPhase, 1400);
  });
});

/* ======================================================
   CATION PHASE
   ====================================================== */
function beginCationPhase() {
  state.phase = 'cation';
  state.cationIdx = 0;
  setStep(4);
  enableOnlyReagent(currentRequiredReagent());
  const meta = CATION_TEST_META[CATION_GROUPS[0]];
  setIris(`Now for the <strong>cation</strong>. Add <strong>${meta.reagentName}</strong> — ${meta.instruction}`);
  setInstruction(meta.title, meta.instruction, `Cation test 1 of ${CATION_GROUPS.length}`);
}

function runCationTest(reagentType) {
  const groupId = CATION_GROUPS[state.cationIdx];
  const meta = CATION_TEST_META[groupId];
  if (reagentType !== meta.reagent) return;
  clearArmed();
  document.querySelector(`[data-item="${meta.reagent}"]`).classList.add('used');
  const salt = SALTS[state.saltKey];
  const positive = meta.positives.includes(salt.cation);

  if (positive) {
    const data = CATION_DATA[salt.cation];
    applyEffect(data.effect);
    logEntry(`<strong>${meta.reagentName}:</strong> ${data.observation}`, true);
    state.cationFound = salt.cation;
    state.lastEffectSource = { kind: 'cation', key: salt.cation };
    if (state.mode === 'teach') {
      revealCationResult();
      setIris(`${data.observation} This confirms <strong>${data.symbol}</strong> ions — ${meta.groupLabel}.`);
      setInstruction('Cation Confirmed', `${meta.groupLabel} — ${data.name} (${data.symbol}) confirmed.`);
      setTimeout(() => concludeExperiment(true), 1000);
    } else {
      setIris(`${data.observation} Based on the group and the precipitate, which cation do you think is present?`);
      setInstruction('Identify the Cation', 'Use the group and the precipitate colour to choose the correct cation below.');
      cationGuessPanel.hidden = false;
    }
  } else {
    logEntry(`<strong>${meta.reagentName}:</strong> No visible reaction.`, false);
    state.cationIdx++;
    if (state.cationIdx >= CATION_GROUPS.length) return; // safety guard
    const nextMeta = CATION_TEST_META[CATION_GROUPS[state.cationIdx]];
    enableOnlyReagent(nextMeta.reagent);
    setIris(`No reaction with ${meta.reagentName}. Let's try <strong>${nextMeta.reagentName}</strong> — ${nextMeta.instruction}`);
    setInstruction(nextMeta.title, nextMeta.instruction, `Cation test ${state.cationIdx + 1} of ${CATION_GROUPS.length}`);
  }
}

function revealCationResult() {
  const salt = SALTS[state.saltKey];
  const data = CATION_DATA[salt.cation];
  cationEqEl.textContent = data.equation;
  roCationEl.textContent = data.symbol;
  cationBadge.textContent = CATION_TEST_META[cationGroupOf(salt.cation)].groupLabel;
}

document.querySelectorAll('#cation-guess-panel .answer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (state.cationAnswered) return;
    state.cationAnswered = true;
    const guess = btn.dataset.cation;
    const salt = SALTS[state.saltKey];
    const correct = guess === salt.cation;
    const data = CATION_DATA[salt.cation];

    document.querySelectorAll('#cation-guess-panel .answer-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.cation === salt.cation) b.classList.add('correct');
      else if (b === btn && !correct) b.classList.add('wrong');
    });

    revealCationResult();
    cationVerdict.hidden = false;
    if (correct) {
      cationVerdict.className = 'verdict-banner correct';
      cationVerdict.innerHTML = `<strong>Correct.</strong> The cation is ${data.symbol} (${data.name}). ${data.confirmNote}`;
      setIris(`Correct! The cation is <strong>${data.symbol}</strong>.`);
    } else {
      cationVerdict.className = 'verdict-banner wrong';
      cationVerdict.innerHTML = `<strong>Not quite.</strong> The cation is actually ${data.symbol} (${data.name}). ${data.confirmNote}`;
      setIris(`Not quite — the cation is <strong>${data.symbol}</strong>.`);
    }
    setTimeout(() => concludeExperiment(correct), 1000);
  });
});

/* ======================================================
   EFFECTS (visual)
   ====================================================== */
function applyEffect(effect) {
  if (!effect) return;
  if (effect.type === 'precipitate') {
    const p = el('tube-precipitate');
    p.style.height = '30%';
    p.style.background = effect.colourHex;
    p.classList.add('show');
    openMicroscopeBtn.disabled = false;
  } else if (effect.type === 'gas') {
    spawnFumes(effect.colourHex);
  } else if (effect.type === 'litmus') {
    litmusStrip.classList.add('blue');
  }
}

function spawnFumes(colorHex) {
  if (!tubeVisualEl) return;
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const f = document.createElement('div');
      f.className = 'tube-fume';
      f.style.background = colorHex;
      f.style.width = '9px';
      f.style.height = '9px';
      f.style.left = (16 + Math.random() * 24) + 'px';
      f.style.bottom = '45%';
      tubeVisualEl.appendChild(f);
      setTimeout(() => f.remove(), 1200);
    }, i * 130);
  }
}

/* ======================================================
   CONCLUSION
   ====================================================== */
function concludeExperiment(cationCorrect) {
  setStep(5);
  const salt = SALTS[state.saltKey];
  const aData = ANION_DATA[salt.anion];
  const cData = CATION_DATA[salt.cation];
  verdictBannerMain.hidden = false;

  if (state.mode === 'teach') {
    verdictBannerMain.className = 'verdict-banner-main conserved';
    verdictBannerMain.innerHTML = `<strong>Confirmed: ${salt.name} (${salt.formula})</strong> — contains ${cData.symbol} (${cData.name}, ${CATION_TEST_META[cationGroupOf(salt.cation)].groupLabel}) and ${aData.symbol} (${aData.name}, ${ANION_TEST_META[anionGroupOf(salt.anion)].groupLabel}).`;
    setIris(`Lab complete. The salt is <strong>${salt.name} (${salt.formula})</strong> — ${cData.symbol} and ${aData.symbol}.`);
  } else {
    const overallCorrect = (state.anionFound === salt.anion) && cationCorrect;
    verdictBannerMain.className = overallCorrect ? 'verdict-banner-main correct' : 'verdict-banner-main wrong';
    verdictBannerMain.innerHTML = overallCorrect
      ? `<strong>Lab complete — correct identification!</strong> The unknown was ${salt.name} (${salt.formula}): ${cData.symbol} + ${aData.symbol}.`
      : `<strong>Lab complete — see corrections above.</strong> The unknown was ${salt.name} (${salt.formula}): ${cData.symbol} + ${aData.symbol}.`;
    setIris(`Lab complete. The unknown salt was <strong>${salt.name} (${salt.formula})</strong>.`);
  }
  setInstruction('Step 5: Conclude', 'Review the equations panel and Observation Log, then open Molecular View for the confirming reaction.');
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
let MICRO = null;
const ION_PAIR_COUNT = 16, MAX_NUCLEI = 16, NUCLEATION_DIST = 16;

function currentMicroInfo() {
  const src = state.lastEffectSource;
  if (!src) return null;
  if (src.kind === 'cation') return CATION_DATA[src.key].micro;
  if (src.kind === 'anion' && src.key === 'SO4') return ANION_MICRO.SO4;
  return null;
}

function buildParticles() {
  MICRO = currentMicroInfo();
  particles = []; nucleated = [];
  if (!MICRO) return;
  const W = canvas.width, H = canvas.height;
  for (let i = 0; i < ION_PAIR_COUNT; i++) particles.push({ kind: 'a', x: Math.random() * W, y: Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 1.4, vy: (Math.random() - 0.5) * 1.4, r: 7, nucleated: false });
  for (let i = 0; i < ION_PAIR_COUNT; i++) particles.push({ kind: 'b', x: Math.random() * W, y: H * 0.5 + Math.random() * H * 0.5, vx: (Math.random() - 0.5) * 1.4, vy: (Math.random() - 0.5) * 1.4, r: 7, nucleated: false });
}

function drawLegend() {
  if (!MICRO) { el('particle-legend').innerHTML = ''; return; }
  const productSwatch = MICRO.productColor || '#8fb7dd';
  el('particle-legend').innerHTML = `
    <span><span class="legend-dot" style="background:${MICRO.ion1Color}"></span>${MICRO.ion1} ion</span>
    <span><span class="legend-dot" style="background:${MICRO.ion2Color}"></span>${MICRO.ion2} ion</span>
    <span><span class="legend-dot" style="background:${productSwatch}"></span>${MICRO.productFormula}</span>`;
}

function updateExplainer() {
  if (!MICRO) { el('microscope-explainer').innerHTML = ''; return; }
  const verb = MICRO.reactionType === 'gas' ? 'a gas that escapes upward' : 'an insoluble solid that settles as a precipitate';
  el('microscope-explainer').innerHTML = `When ${MICRO.ion1} ions meet ${MICRO.ion2} ions in solution, they combine to form ${MICRO.productFormula} — ${verb}. That is exactly the reaction you just triggered on the bench.`;
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
      if (a.kind !== 'a' || a.nucleated) continue;
      for (const b of particles) {
        if (b.kind !== 'b' || b.nucleated) continue;
        const dx = a.x - b.x, dy = a.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < NUCLEATION_DIST) {
          a.nucleated = b.nucleated = true;
          const si = nucleated.length, cols = 7;
          const goingUp = MICRO && MICRO.reactionType === 'gas';
          const targetY = goingUp ? 20 : H - 24 - Math.floor(si / cols) * 20;
          nucleated.push({ targetX: 40 + (si % cols) * ((W - 80) / (cols - 1)), targetY, x0: (a.x + b.x) / 2, y0: (a.y + b.y) / 2, r: 9, progress: 0, fade: goingUp });
          break;
        }
      }
    }
  }
  for (const n of nucleated) if (n.progress < 1) n.progress = Math.min(1, n.progress + 0.03);
}

function drawParticles() {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 2; ctx.strokeRect(4, 4, W - 8, H - 8);
  if (!MICRO) return;
  for (const p of particles) {
    if (p.nucleated) continue;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.kind === 'a' ? MICRO.ion1Color : MICRO.ion2Color; ctx.fill();
  }
  const productColor = MICRO.productColor || '#cfd6e0';
  for (const n of nucleated) {
    const x = n.x0 + (n.targetX - n.x0) * n.progress, y = n.y0 + (n.targetY - n.y0) * n.progress;
    const alpha = n.fade ? Math.max(0, 1 - n.progress) : 1;
    ctx.globalAlpha = alpha;
    ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = productColor; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function loop() { stepParticles(); drawParticles(); animFrame = requestAnimationFrame(loop); }
function startParticleSim() { buildParticles(); drawLegend(); updateExplainer(); if (animFrame) cancelAnimationFrame(animFrame); loop(); }
function stopParticleSim() { if (animFrame) cancelAnimationFrame(animFrame); animFrame = null; }

/* ======================================================
   INIT
   ====================================================== */
document.querySelectorAll('.reagent-card[data-item]').forEach(card => {
  const t = card.dataset.item;
  if (t !== 'testtube') card.classList.add('disabled');
});
saltCard.classList.add('disabled');
updateSaltCardLabel();
