// osmosis-data.js
const experimentData = {
    title: "Osmosis and Plasmolysis",
    subtitle: "Class 12 Biology – Cell Biology",
    aim: "To study the process of osmosis and plasmolysis in plant cells using red onion epidermis, and to observe the effect of hypotonic and hypertonic solutions on cell behaviour.",

    theory: "Osmosis is the movement of water molecules through a selectively permeable membrane from a region of higher water potential (lower solute concentration) to a region of lower water potential (higher solute concentration). In plant cells, the cell membrane acts as the selectively permeable membrane. When a plant cell is placed in a hypotonic solution (distilled water), water enters the cell by osmosis, making the cell turgid — the cell membrane is pushed firmly against the cell wall. This is the normal, healthy state of plant cells and is responsible for the rigidity of non-woody plant parts. When a plant cell is placed in a hypertonic solution (concentrated salt or sugar solution), water leaves the cell by osmosis, causing the cytoplasm to shrink and pull away from the cell wall. This is called plasmolysis, and the cell is said to be plasmolysed or flaccid. The point at which the plasma membrane just begins to pull away from the cell wall is called incipient plasmolysis. Plasmolysis is reversible — if the plasmolysed cell is returned to a hypotonic solution, water re-enters and the cell becomes turgid again (deplasmolysis). Red onion epidermis is the preferred material because the anthocyanin pigment in the vacuole makes the cell boundary and vacuole clearly visible under the microscope without additional staining.",

    materials: [
        "Red onion (Allium cepa)",
        "Distilled water",
        "5% Sodium Chloride (NaCl) solution",
        "Forceps",
        "Razor blade or blade",
        "Compound microscope",
        "Glass slides and cover slips",
        "Dropper / pipette",
        "Blotting paper",
        "Watch glass"
    ],

    steps: [
        "Peel a thin layer of red onion epidermis from the inner surface of an onion scale using forceps.",
        "Place the epidermal peel flat on a clean glass slide.",
        "Add a drop of distilled water to the peel and place a cover slip carefully to avoid air bubbles.",
        "Observe under the microscope at low power (10×) and then high power (40×). Note the fully turgid condition — the purple-coloured vacuole fills the entire cell and the membrane is pressed against the cell wall.",
        "Without disturbing the cover slip, place a drop of 5% NaCl solution at one edge of the cover slip.",
        "Hold a piece of blotting paper at the opposite edge to draw the salt solution under the cover slip by capillary action.",
        "Wait for 3–5 minutes and observe again under the microscope.",
        "Note the plasmolysed condition — the purple vacuole has shrunk and the cytoplasm has pulled away from the cell wall, leaving a clear gap.",
        "To demonstrate deplasmolysis, draw distilled water back under the cover slip in the same way.",
        "Observe and note that the cell slowly regains its turgid state as water re-enters by osmosis."
    ],

    simulationFile: "osmosis_and_plasmolosis.html",

    questions: [
        {
            question: "Osmosis is the movement of water from a region of ______ water potential to ______ water potential.",
            options: ["Lower to higher", "Higher to lower", "Equal to equal", "Higher to equal"],
            answer: 1
        },
        {
            question: "When a plant cell is placed in distilled water, it becomes:",
            options: ["Plasmolysed", "Flaccid", "Turgid", "Dead"],
            answer: 2
        },
        {
            question: "Plasmolysis is defined as:",
            options: [
                "Movement of water into the cell",
                "Shrinkage of the cytoplasm away from the cell wall in a hypertonic solution",
                "Rupturing of the cell membrane",
                "Thickening of the cell wall"
            ],
            answer: 1
        },
        {
            question: "Why is red onion epidermis used for this experiment?",
            options: [
                "Because it has no cell wall",
                "Because it is colourless and transparent",
                "Because the anthocyanin pigment makes vacuole boundaries clearly visible",
                "Because its cells divide rapidly"
            ],
            answer: 2
        },
        {
            question: "In the osmosis experiment, 5% NaCl solution acts as a:",
            options: ["Hypotonic solution", "Isotonic solution", "Hypertonic solution", "Buffer solution"],
            answer: 2
        },
        {
            question: "Incipient plasmolysis refers to the stage when:",
            options: [
                "The cell has fully shrunken",
                "The plasma membrane just begins to pull away from the cell wall",
                "The cell wall breaks",
                "The vacuole disappears completely"
            ],
            answer: 1
        },
        {
            question: "Deplasmolysis occurs when a plasmolysed cell is transferred to:",
            options: ["A hypertonic solution", "Distilled water or a hypotonic solution", "A more concentrated salt solution", "An acidic solution"],
            answer: 1
        },
        {
            question: "Which membrane is primarily responsible for osmosis in plant cells?",
            options: ["Cell wall", "Tonoplast only", "Plasma membrane (selectively permeable)", "Nuclear membrane"],
            answer: 2
        },
        {
            question: "What is the role of blotting paper in the plasmolysis experiment?",
            options: [
                "To stain the cells",
                "To draw the salt solution under the cover slip by capillary action",
                "To fix the cells on the slide",
                "To clean the microscope lens"
            ],
            answer: 1
        },
        {
            question: "A cell in which the cytoplasm just fills the cell wall without pressure on the wall is said to be:",
            options: ["Turgid", "Plasmolysed", "Flaccid", "Lysed"],
            answer: 2
        }
    ]
};