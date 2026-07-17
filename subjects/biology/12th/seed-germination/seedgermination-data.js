// seedgermination-data.js
const experimentData = {
    title: "Seed Germination",
    subtitle: "Class 12 Biology – Plant Growth and Development",
    aim: "To study the conditions necessary for seed germination and to compare germination under different environmental conditions: normal (warm and moist), dry, submerged (no oxygen), and cold.",

    theory: "Seed germination is the process by which a dormant seed resumes active growth to develop into a seedling. For germination to occur, three essential conditions must be met: adequate water (for imbibition — the uptake of water that activates metabolic enzymes and softens the seed coat), optimum temperature (for enzyme activity; most seeds germinate between 25–35°C), and oxygen (for aerobic respiration to provide the energy needed for cell division and growth). Some seeds also require light (photoblastic seeds), but most common crop seeds are non-photoblastic and can germinate in the dark. Germination begins with imbibition of water, which activates hydrolytic enzymes (amylases, proteases) that break down stored food (starch, proteins, fats) in the cotyledons or endosperm into simpler molecules (glucose, amino acids) that fuel cell growth. The radicle (embryonic root) emerges first, anchoring the seedling and absorbing water and minerals. The plumule (embryonic shoot) then emerges and grows toward the light. Seeds that germinate with the cotyledons above the soil are epigeal germinators (e.g., bean), while those where cotyledons remain below soil are hypogeal germinators (e.g., maize, pea). The absence of any one of the three essential conditions — water, oxygen, or suitable temperature — will prevent or significantly delay germination.",

    materials: [
        "Bean seeds (or maize/peas — fresh, viable seeds)",
        "4 petri dishes or shallow trays",
        "Cotton wool or filter paper",
        "Water / dropper",
        "Refrigerator (for cold condition)",
        "A container to submerge seeds fully in water (for no-oxygen condition)",
        "Labels (A, B, C, D)",
        "Magnifying glass or microscope (for observing seed structure)",
        "Ruler",
        "Notebook for recording observations"
    ],

    steps: [
        "Label four petri dishes A, B, C, and D.",
        "Dish A (Control — Warm and Moist): Line with moist cotton wool. Place 5–6 seeds. Keep at room temperature (25–30°C). This is the control — all three conditions (water, warmth, oxygen) are present.",
        "Dish B (No Water — Dry): Line with dry cotton wool. Place 5–6 seeds without adding any water. Keep at room temperature. This tests whether water is necessary.",
        "Dish C (No Oxygen — Submerged): Place seeds in a container completely submerged under water so they have no access to atmospheric oxygen. Keep at room temperature.",
        "Dish D (No Warmth — Cold): Line with moist cotton wool. Place 5–6 seeds. Put this dish in a refrigerator at approximately 4°C. This tests whether optimum temperature is necessary.",
        "Observe all four setups daily for 7–10 days.",
        "Record whether germination occurs in each dish, the number of days until germination, and the length of the radicle and plumule on day 3, day 5, and day 7.",
        "Note that only Dish A (control) shows normal, healthy germination.",
        "Prepare a comparative observation table showing germination status, radicle length, and plumule length across all four dishes.",
        "Draw and label diagrams of a germinating seed showing the testa, radicle, plumule, and cotyledons."
    ],

    simulationFile: "seed germination.html",

    questions: [
        {
            question: "Which of the following is NOT an essential condition for seed germination?",
            options: ["Water", "Light", "Oxygen", "Suitable temperature"],
            answer: 1
        },
        {
            question: "The process by which seeds absorb water at the start of germination is called:",
            options: ["Osmosis", "Plasmolysis", "Imbibition", "Transpiration"],
            answer: 2
        },
        {
            question: "Which part of the embryo emerges first during germination?",
            options: ["Plumule", "Cotyledon", "Endosperm", "Radicle"],
            answer: 3
        },
        {
            question: "Seeds in Setup C (submerged in water) failed to germinate because they lacked:",
            options: ["Water", "Warmth", "Oxygen for aerobic respiration", "Light"],
            answer: 2
        },
        {
            question: "In epigeal germination, the cotyledons:",
            options: [
                "Remain below the soil surface",
                "Are carried above the soil surface",
                "Are digested before germination begins",
                "Fuse with the endosperm"
            ],
            answer: 1
        },
        {
            question: "Stored food in the seed is broken down by which enzymes during germination?",
            options: ["Oxidases and peroxidases", "Hydrolytic enzymes such as amylases and proteases", "DNA polymerase", "ATP synthase"],
            answer: 1
        },
        {
            question: "Seeds in Setup D (4°C refrigerator) did not germinate because:",
            options: [
                "They had no water",
                "They had no oxygen",
                "Low temperature inhibited enzyme activity required for metabolic processes",
                "Light was absent"
            ],
            answer: 2
        },
        {
            question: "The embryonic shoot that grows upward toward light is called the:",
            options: ["Radicle", "Testa", "Plumule", "Micropyle"],
            answer: 2
        },
        {
            question: "Hypogeal germination is seen in which of the following?",
            options: ["Bean (Phaseolus)", "Castor (Ricinus)", "Maize (Zea mays)", "Gourd (Cucurbita)"],
            answer: 2
        },
        {
            question: "Why is Setup A considered the control in this experiment?",
            options: [
                "Because it has the fewest seeds",
                "Because it provides all three essential conditions — water, warmth, and oxygen — and serves as the basis for comparison",
                "Because it is kept in the dark",
                "Because it uses the largest seeds"
            ],
            answer: 1
        }
    ]
};