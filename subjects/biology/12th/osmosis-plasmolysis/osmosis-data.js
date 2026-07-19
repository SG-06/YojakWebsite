// osmosis-data.js
const experimentData = {
    title: "Osmosis & Plasmolysis Lab",
    subtitle: "Class 12 Biology - Plant Water Relations",
    
    aim: "To observe the movement of water through a semi-permeable membrane and its effect on the cell structure of a red onion peel.",
    
    theory: `
        <div class="theory-section">
            <h3>Understanding Osmosis</h3>
            <p>Osmosis is the spontaneous movement of solvent molecules (usually water) through a <strong>semi-permeable membrane</strong> from a region of higher water potential (lower solute concentration) to a region of lower water potential (higher solute concentration).</p>

            <h3>Osmotic Environments</h3>
            <ul>
                <li><strong>Hypotonic:</strong> A solution with a lower solute concentration than the cell. Water enters the cell, making it <strong>turgid</strong>.</li>
                <li><strong>Hypertonic:</strong> A solution with a higher solute concentration than the cell. Water leaves the cell, leading to <strong>plasmolysis</strong>.</li>
                <li><strong>Isotonic:</strong> A solution with the same solute concentration. There is no net movement of water.</li>
            </ul>

            <h3>Plasmolysis and Deplasmolysis</h3>
            <p>When a plant cell is placed in a hypertonic solution (like concentrated salt water), water is drawn out of the central vacuole. This causes the <strong>protoplast</strong> (the living part of the cell including the membrane) to shrink and pull away from the rigid cell wall. This state is called <strong>Plasmolysis</strong>.</p>
            <p>If the cell is immediately returned to a hypotonic solution (distilled water), water enters the cell again, and the protoplast expands back to its original state. This recovery is called <strong>Deplasmolysis</strong>.</p>

            <h3>Why use Red Onion?</h3>
            <p>The epidermal cells of a red onion contain a colored pigment called <strong>anthocyanin</strong> in their vacuoles. This makes the shrinking of the vacuole and the movement of the cell membrane clearly visible under a microscope without additional staining.</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Osmosis in Plant Cells</h4>
            <div class="video-box">
                <iframe
                    src="https://www.youtube.com/embed/rMa9MzP19zI?si=SAE6W4Ef1Kuy2-NJ"
                    title="Osmosis and Plasmolysis"
                    allowfullscreen>
                </iframe>
                <p class="video-credit">
                    🎥 Video Credit:
                    <a href="https://www.youtube.com/embed/rMa9MzP19zI?si=SAE6W4Ef1Kuy2-NJ" 
                       target="_blank"
                       rel="noopener noreferrer">
                        BOGObiology
                    </a>
                </p>
            </div>
        </div>
    `,
    
    materials: [
        "Fresh Red Onion",
        "Distilled Water (Hypotonic Solution)",
        "5% Sodium Chloride (NaCl) Solution (Hypertonic Solution)",
        "Glass Slides and Cover Slips",
        "Forceps and Needles",
        "Dropper",
        "Filter Paper (to draw solution)",
        "Compound Microscope"
    ],
    
    steps: [
        "Peel a small, thin layer of the pigmented epidermis from the concave surface of a red onion scale using forceps.",
        "Place the peel in a drop of distilled water on a clean glass slide to observe the turgid state of the cells.",
        "Gently place a cover slip over the peel, avoiding air bubbles.",
        "Observe the cells under the microscope. Note the purple vacuole filling the cell space.",
        "Add 1-2 drops of 5% NaCl solution to one edge of the cover slip.",
        "Use a piece of filter paper at the opposite edge to draw the salt solution across the tissue.",
        "Observe the gradual shrinking of the protoplast away from the cell wall (Plasmolysis).",
        "Replace the salt solution with distilled water and observe the recovery (Deplasmolysis)."
    ],

    simulationFile: "osmosis_and_plasmolosis.html", 
    
    questions: [
        {
            "question": "Which process describes the movement of water from a high concentration to a low concentration through a membrane?",
            "options": ["Diffusion", "Osmosis", "Active Transport", "Maceration"],
            "answer": 1
        },
        {
            "question": "What happens to a plant cell when placed in a hypertonic solution?",
            "options": ["It bursts", "It becomes turgid", "It undergoes plasmolysis", "No change occurs"],
            "answer": 2
        },
        {
            "question": "Why does the cell wall not shrink along with the cell membrane during plasmolysis?",
            "options": ["It is semi-permeable", "It is rigid and non-living", "It is made of proteins", "It contains the vacuole"],
            "answer": 1
        },
        {
            "question": "What is the primary function of the semi-permeable membrane?",
            "options": ["To provide structural support", "To block all molecules", "To allow only solvent molecules to pass", "To regulate the entry and exit of specific substances"],
            "answer": 3
        },
        {
            "question": "In the red onion experiment, what is the role of the purple pigment (anthocyanin)?",
            "options": ["It catalyzes osmosis", "It makes the protoplast visible as it shrinks", "It prevents the cell from dying", "It reacts with salt"],
            "answer": 1
        },
        {
            "question": "Deplasmolysis occurs when a plasmolysed cell is placed in:",
            "options": ["Distilled Water", "Concentrated Sugar Solution", "5% NaCl Solution", "Absolute Alcohol"],
            "answer": 0
        },
        {
            "question": "Which organelle is primarily responsible for maintaining turgor pressure in a plant cell?",
            "options": ["Mitochondria", "Nucleus", "Central Vacuole", "Ribosome"],
            "answer": 2
        },
        {
            "question": "When the protoplast is fully pressed against the cell wall, the cell is said to be:",
            "options": ["Flaccid", "Plasmolysed", "Turgid", "Incubated"],
            "answer": 2
        },
        {
            "question": "The gap between the cell wall and the shrunken protoplast in a plasmolysed cell is filled with:",
            "options": ["Air", "Cytoplasm", "The external hypertonic solution", "Pure water"],
            "answer": 2
        },
        {
            "question": "If a plant cell is placed in an isotonic solution, what is the net movement of water?",
            "options": ["Net movement is zero", "Water only enters the cell", "Water only leaves the cell", "The cell wall dissolves"],
            "answer": 0
        }
    ]          
};