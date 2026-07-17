// photosynthesis-data.js
const experimentData = {
    title: "Rate of Photosynthesis",
    subtitle: "Class 12 Biology – Plant Physiology",
    aim: "To study the effect of light intensity on the rate of photosynthesis in an aquatic plant (Elodea/Hydrilla) by counting the oxygen bubbles produced per minute.",

    theory: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. The overall equation is: 6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂. It occurs in the chloroplasts and is divided into two stages: the light-dependent reactions (in the thylakoid membranes) and the light-independent reactions or Calvin cycle (in the stroma). The light-dependent reactions capture light energy using chlorophyll, split water molecules (photolysis), and produce ATP, NADPH, and oxygen as a by-product. The Calvin cycle uses ATP and NADPH to fix carbon dioxide into glucose. The rate of photosynthesis is affected by several factors: light intensity, carbon dioxide concentration, temperature, and water availability. As light intensity increases, the rate of photosynthesis increases up to a point (the light saturation point), after which other factors become limiting. An aquatic plant such as Elodea is ideal for this experiment because the oxygen produced can be directly observed and counted as bubbles rising from the cut end of the stem. Sodium bicarbonate is added to the water to provide a constant supply of dissolved CO₂, ensuring that CO₂ is not the limiting factor during the experiment.",

    materials: [
        "Aquatic plant — Elodea or Hydrilla (fresh, healthy shoot)",
        "Beaker (500 mL)",
        "Sodium bicarbonate (NaHCO₃) solution (0.5%)",
        "Light source (lamp with adjustable distance)",
        "Ruler or measuring tape",
        "Stopwatch or timer",
        "Thermometer",
        "Water",
        "Scissors",
        "Dark enclosure (cardboard box) to control ambient light"
    ],

    steps: [
        "Cut a healthy shoot of Elodea about 10 cm long. Make a fresh diagonal cut at the base of the stem under water to prevent air from entering the xylem.",
        "Fill a beaker with 0.5% sodium bicarbonate solution to ensure a constant supply of CO₂.",
        "Place the cut Elodea shoot in the beaker with the cut end facing upward.",
        "Position a lamp at a fixed distance (e.g., 10 cm) from the beaker.",
        "Allow the plant to acclimatise for 2–3 minutes in the light before beginning measurements.",
        "Count the number of oxygen bubbles produced from the cut end of the stem in one minute. Record this as the rate of photosynthesis at that light intensity.",
        "Repeat the bubble count at the same distance for 3 trials and calculate the mean.",
        "Move the lamp to a greater distance (e.g., 20 cm, 30 cm, 40 cm) and repeat steps 5–7 at each distance. Note that light intensity is inversely proportional to the square of the distance (inverse square law).",
        "Plot a graph of bubble count per minute (rate of photosynthesis) on the Y-axis against light intensity (1/distance²) on the X-axis.",
        "Observe the relationship — as light intensity increases, bubble rate increases until the light saturation point, beyond which the rate plateaus."
    ],

    simulationFile: "photosynthesis_rate.html",

    questions: [
        {
            question: "What gas is produced as a by-product of photosynthesis and is measured as bubbles in this experiment?",
            options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
            answer: 2
        },
        {
            question: "Why is sodium bicarbonate added to the water in the photosynthesis experiment?",
            options: [
                "To increase the pH of water",
                "To provide a constant supply of dissolved carbon dioxide",
                "To prevent algae from growing",
                "To improve light transmission through the water"
            ],
            answer: 1
        },
        {
            question: "The overall equation of photosynthesis is:",
            options: [
                "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy",
                "6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂",
                "6O₂ + 6H₂O → 6CO₂ + C₆H₁₂O₆",
                "CO₂ + H₂O → O₂ + Glucose"
            ],
            answer: 1
        },
        {
            question: "Where does the light-dependent reaction of photosynthesis occur?",
            options: ["Stroma of chloroplast", "Thylakoid membrane", "Cytoplasm", "Mitochondria"],
            answer: 1
        },
        {
            question: "According to the inverse square law, if you double the distance of the lamp from the plant, light intensity becomes:",
            options: ["Half", "Double", "One-quarter", "One-third"],
            answer: 2
        },
        {
            question: "Which of the following is NOT a factor affecting the rate of photosynthesis?",
            options: ["Light intensity", "Carbon dioxide concentration", "Oxygen concentration in the atmosphere", "Temperature"],
            answer: 2
        },
        {
            question: "Why is an aquatic plant like Elodea used in this experiment?",
            options: [
                "It photosynthesises faster than land plants",
                "The oxygen produced is visible as bubbles, making it easy to count",
                "It does not require CO₂ for photosynthesis",
                "It has the largest leaves"
            ],
            answer: 1
        },
        {
            question: "The light saturation point refers to:",
            options: [
                "The point at which photosynthesis stops completely",
                "The minimum light needed to begin photosynthesis",
                "The light intensity beyond which increasing light causes no further increase in photosynthesis rate",
                "The point at which light destroys chlorophyll"
            ],
            answer: 2
        },
        {
            question: "Photolysis of water during the light-dependent reaction produces:",
            options: ["CO₂ and ATP", "Glucose and O₂", "O₂, ATP, and NADPH", "Only ATP"],
            answer: 2
        },
        {
            question: "The Calvin cycle (light-independent reactions) takes place in the:",
            options: ["Thylakoid membrane", "Stroma of the chloroplast", "Cytoplasm", "Nucleus"],
            answer: 1
        }
    ]
};