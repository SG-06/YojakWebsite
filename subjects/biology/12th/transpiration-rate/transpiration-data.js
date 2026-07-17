// transpiration-data.js
const experimentData = {
    title: "Rate of Transpiration",
    subtitle: "Class 12 Biology – Plant Physiology",
    aim: "To study the process of transpiration in plants and to measure the rate of transpiration using a potometer, observing the effect of wind and heat on the rate.",

    theory: "Transpiration is the process of water loss from the aerial parts of a plant, primarily through stomata on the leaf surface, in the form of water vapour. It is not simply wasteful water loss — transpiration drives the ascent of water and dissolved minerals from the roots to the leaves through the xylem (the transpiration pull or cohesion-tension mechanism), keeps the leaf temperature regulated through evaporative cooling, and maintains the concentration gradient that drives mineral uptake. About 90% of transpiration occurs through stomata (stomatal transpiration), with small amounts through the cuticle (cuticular transpiration) and lenticels (lenticular transpiration). The rate of transpiration is affected by several environmental factors: light (opens stomata, increasing transpiration), temperature (increases evaporation rate and the vapour pressure deficit), wind (removes humid air from around the leaf, steepening the concentration gradient), and humidity (high humidity reduces transpiration by decreasing the gradient). A potometer is an instrument used to indirectly measure the rate of transpiration by measuring the rate of water uptake by a cut shoot. Since nearly all water absorbed by the shoot is lost through transpiration, the two rates are approximately equal. The movement of an air bubble along a calibrated capillary tube indicates the volume of water taken up per unit time.",

    materials: [
        "Freshly cut leafy shoot (e.g., Balsam or Hibiscus)",
        "Potometer (simple or Ganong's potometer)",
        "Petroleum jelly (Vaseline)",
        "Water",
        "Fan or hair dryer (to simulate wind)",
        "Lamp or heat source",
        "Stopwatch or timer",
        "Ruler",
        "Scissors",
        "Large beaker or bucket of water"
    ],

    steps: [
        "Cut a healthy leafy shoot under water (to prevent air from entering the xylem) using scissors. The cut should be diagonal to increase the surface area for water absorption.",
        "Set up the potometer and fill it completely with water, ensuring no air bubbles are present in the apparatus.",
        "Insert the cut end of the shoot into the potometer opening while both the shoot and the opening are submerged in water.",
        "Seal the junction between the shoot stem and the potometer with petroleum jelly to make it airtight, preventing any water loss except through the leaves.",
        "Introduce a small air bubble into the capillary tube of the potometer by briefly lifting the tube out of water.",
        "Under normal conditions (no wind, normal temperature), record the distance the air bubble travels in the capillary tube in 5 minutes. This is the baseline transpiration rate.",
        "Switch on a fan directed at the leaves. After 2 minutes, record the bubble movement over 5 minutes. Compare with the baseline.",
        "Switch off the fan and allow the system to equilibrate. Then switch on a heat lamp directed at the leaves. Record bubble movement over 5 minutes.",
        "Reset the bubble after each condition by submerging the capillary end in water.",
        "Tabulate results showing bubble distance per 5 minutes under each condition — normal, windy, and hot. Observe that both wind and heat significantly increase the rate of transpiration."
    ],

    simulationFile: "transpiration_rate.html",

    questions: [
        {
            question: "Transpiration is defined as:",
            options: [
                "Absorption of water by roots",
                "Loss of water vapour from the aerial parts of a plant, mainly through stomata",
                "Transport of water from stem to leaves",
                "Uptake of CO₂ through leaves"
            ],
            answer: 1
        },
        {
            question: "What percentage of transpiration occurs through stomata?",
            options: ["50%", "70%", "90%", "100%"],
            answer: 2
        },
        {
            question: "A potometer measures:",
            options: [
                "The rate of photosynthesis",
                "The rate of water uptake by a cut shoot, used as an indirect measure of transpiration",
                "The rate of osmosis in root cells",
                "The rate of respiration"
            ],
            answer: 1
        },
        {
            question: "Why is the cut end of the shoot inserted into the potometer under water?",
            options: [
                "To keep the shoot cool",
                "To prevent air from entering and blocking the xylem",
                "To dissolve minerals in the water",
                "To activate the stomata"
            ],
            answer: 1
        },
        {
            question: "Why is petroleum jelly applied around the stem-potometer junction?",
            options: [
                "To provide nutrients to the plant",
                "To create an airtight seal so water only leaves via transpiration",
                "To stimulate root growth",
                "To block the stomata"
            ],
            answer: 1
        },
        {
            question: "How does wind increase the rate of transpiration?",
            options: [
                "Wind opens the stomata",
                "Wind increases the CO₂ supply",
                "Wind removes humid air from around the leaves, increasing the water vapour concentration gradient",
                "Wind cools the leaf, increasing water uptake"
            ],
            answer: 2
        },
        {
            question: "The cohesion-tension mechanism explains how water rises in the xylem. What provides the driving force?",
            options: [
                "Root pressure alone",
                "Transpiration pull — water evaporating from leaves creates tension that pulls water up from the roots",
                "Active transport in xylem cells",
                "Capillary action alone"
            ],
            answer: 1
        },
        {
            question: "Which environmental condition would DECREASE the rate of transpiration?",
            options: ["High temperature", "High wind speed", "High humidity", "High light intensity"],
            answer: 2
        },
        {
            question: "Cuticular transpiration refers to water loss through:",
            options: ["Stomata", "Lenticels", "The waxy cuticle on the leaf surface", "Root tips"],
            answer: 2
        },
        {
            question: "In the potometer experiment, the air bubble moves because:",
            options: [
                "Air is being pushed in by the roots",
                "The shoot absorbs water, creating a pressure difference that pulls the bubble along the capillary",
                "Temperature changes expand the water",
                "The petroleum jelly pushes the bubble"
            ],
            answer: 1
        }
    ]
};