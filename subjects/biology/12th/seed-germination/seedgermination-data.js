// seedgermination-data.js
const experimentData = {
    title: "Seed Germination Study",
    subtitle: "Class 12 Biology - Plant Growth and Development",
    
    aim: "To investigate the necessary conditions (Water, Oxygen, and Warmth) required for seed germination and observe the developmental stages of a seedling.",
    
    theory: `
        <div class="theory-section">
            <h3>Biological Basis of Germination</h3>
            <p>Germination is the process by which an embryo within a seed develops into a seedling. It is a complex physiological transformation that begins with the uptake of water and concludes with the emergence of the radicle.</p>

            <h3>The Three Vital Requirements (W.O.W.)</h3>
            <p>To successfully transition from a dormant state to active growth, most seeds require three specific environmental factors:</p>
            <ul>
                <li><strong>Water:</strong> Required for <em>imbibition</em>. It softens the seed coat and activates metabolic enzymes like amylase to break down stored starch.</li>
                <li><strong>Oxygen:</strong> Necessary for aerobic respiration. Germinating seeds have high metabolic rates and require oxygen to generate ATP for cellular division.</li>
                <li><strong>Warmth (Temperature):</strong> Metabolism is enzyme-driven. Most seeds have an optimum temperature range (usually 25°C - 30°C) where enzymes function most efficiently.</li>
            </ul>

            <h3>Developmental Stages</h3>
            <p>1. <strong>Imbibition:</strong> The seed absorbs water and swells.<br>
               2. <strong>Enzyme Activation:</strong> Gibberellins signal the production of amylase, converting starch into glucose.<br>
               3. <strong>Radicle Emergence:</strong> The embryonic root (radicle) appears first to anchor the plant and absorb more water.<br>
               4. <strong>Plumule Emergence:</strong> The embryonic shoot (plumule) grows upward toward the light source.</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video: Seed Germination Process</h4>
            <div class="video-box">
                <iframe
                    src="https://www.youtube.com/embed/pB4ASdELBbQ"
                    title="Seed Germination Time-lapse"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <p class="video-credit">
                    🎥 Video Credit:
                    <a href="https://www.youtube.com/watch?v=pB4ASdELBbQ" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        Gumbat Tech
                    </a>
                </p>
            </div>
        </div>
    `,
    
    materials: [
        "Dry Bean Seeds (e.g., Phaseolus vulgaris)",
        "Four Petri Dishes (Labeled A, B, C, D)",
        "Cotton Wool",
        "Distilled Water",
        "Refrigerator (to provide 4°C cold environment)",
        "Beaker and Dropper"
    ],
    
    steps: [
        "Prepare four petri dishes with a layer of cotton wool at the base.",
        "Place 5-6 dry bean seeds in each dish.",
        "<strong>Dish A (Control):</strong> Add water to moisten cotton and keep at room temperature (Warm/Wet).",
        "<strong>Dish B (Dry):</strong> Leave the cotton wool dry and keep at room temperature.",
        "<strong>Dish C (No Oxygen):</strong> Submerge the seeds completely in water to exclude air contact.",
        "<strong>Dish D (Cold):</strong> Add water to moisten cotton but place the dish inside a refrigerator at 4°C.",
        "Observe the dishes over a period of 7 days and record changes in root and shoot length."
    ],

    simulationFile: "seed germination.html", 
    
    questions: [
        {
            "question": "Which plant hormone is primarily responsible for signaling the start of the germination process?",
            "options": ["Abscisic Acid", "Gibberellic Acid", "Ethylene", "Cytokinin"],
            "answer": 1
        },
        {
            "question": "Why did the seeds in Setup C (Submerged) fail to thrive despite having water?",
            "options": ["Too much light", "Lack of oxygen for aerobic respiration", "Water was too pure", "Excessive warmth"],
            "answer": 1
        },
        {
            "question": "The first structure to emerge from the seed coat during germination is the:",
            "options": ["Plumule", "Radicle", "Cotyledon", "Epicotyl"],
            "answer": 1
        },
        {
            "question": "Uptake of water by a dry seed through the micropyle is specifically called:",
            "options": ["Osmosis", "Diffusion", "Imbibition", "Active Transport"],
            "answer": 2
        },
        {
            "question": "In Setup D (Refrigerator), germination is inhibited because:",
            "options": ["Water freezes immediately", "Low temperature reduces kinetic energy and enzyme activity", "Oxygen cannot dissolve in cold water", "Seeds enter secondary dormancy"],
            "answer": 1
        },
        {
            "question": "The plumule of a germinating seed eventually develops into the:",
            "options": ["Primary Root", "Shoot System", "Flower", "Seed Coat"],
            "answer": 1
        },
        {
            "question": "What is the primary food source for a germinating bean seed before it can photosynthesize?",
            "options": ["Soil minerals", "Stored starch in Cotyledons", "Atmospheric Nitrogen", "Water molecules"],
            "answer": 1
        },
        {
            "question": "Aerobic respiration in germinating seeds provides:",
            "options": ["Carbon dioxide for growth", "Energy in the form of ATP", "Chlorophyll for the plumule", "Protection against fungi"],
            "answer": 1
        },
        {
            "question": "Which setup in the experiment serves as the 'Control' group?",
            "options": ["Setup B (Dry)", "Setup A (Warm/Wet/Oxygen)", "Setup D (Cold)", "Setup C (Submerged)"],
            "answer": 1
        },
        {
            "question": "A seed that does not germinate even when provided with ideal conditions is likely in a state of:",
            "options": ["Senescence", "Dormancy", "Plasmolysis", "Turgidity"],
            "answer": 1
        }
    ]          
};