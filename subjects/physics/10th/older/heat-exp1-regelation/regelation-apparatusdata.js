const experimentData = {
    title: "Regelation of Ice",
    subtitle: "Interactive Virtual Physics Laboratory",
    parts: [{
        id: "regelation",
        name: "Melting and Refreezing Under Pressure",
        theory: "Regelation is the phenomenon in which ice melts when subjected to pressure and refreezes when the pressure is removed. When a thin metallic wire with heavy weights attached is hung over an ice block, it exerts high pressure on the ice just below it. Because the melting point of ice decreases with an increase in pressure, the ice directly under the wire melts into water. This water escapes to the top of the wire where the pressure is at normal atmospheric levels. Here, the water refreezes into ice. This continuous process allows the wire to pass completely through the block without splitting it into two separate pieces.",
        apparatus: [
            "Large block of ice",
            "Thin metallic wire (e.g., copper or steel)",
            "Two heavy weights (e.g., 1 kg or 2 kg each)",
            "Wooden stand or two separate supports",
            "Tray (to collect any dripping water)"
        ],
        procedure: [
            "Place the block of ice on the wooden stand such that its middle portion is unsupported and suspended in the air.",
            "Take the thin metallic wire and securely attach the two heavy weights to its ends.",
            "Hang the wire over the middle of the ice block so that the weights hang freely on either side.",
            "Observe the wire carefully as it begins to slowly cut through the ice block.",
            "Notice that as the wire moves downward, the water above the wire refreezes.",
            "Wait until the wire passes completely through the ice block and falls to the table.",
            "Examine the ice block to observe that it remains as a single, intact solid piece."
        ],
        precautions: [
            "Use a sufficiently thin metallic wire, as a smaller surface area produces higher pressure (P = F/A).",
            "Ensure the weights attached are heavy enough to exert adequate pressure, but not so heavy that they snap the wire.",
            "Perform the experiment at or slightly above room temperature.",
            "Do not touch or disturb the ice block while the wire is cutting through it to prevent it from fracturing."
        ],
        result: "The thin loaded wire passes completely through the ice block, yet the block remains intact. This successfully demonstrates regelation, proving that ice melts under increased pressure and refreezes when the pressure is removed.",
        video: "https://www.youtube.com/embed/5D_1EaW9mHw",
        simulation: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html",
        questions: [{
                question: "What is the phenomenon called where ice melts under pressure and refreezes when pressure is removed?",
                options: [
                    "Sublimation",
                    "Regelation",
                    "Evaporation",
                    "Condensation"
                ],
                answer: 1
            },
            {
                question: "How does an increase in pressure affect the melting point of ice?",
                options: [
                    "It decreases the melting point",
                    "It increases the melting point",
                    "It does not affect the melting point",
                    "It causes the ice to instantly vaporize"
                ],
                answer: 0
            },
            {
                question: "Why is a very thin wire used in this experiment instead of a thick rope?",
                options: [
                    "A thin wire is lighter",
                    "A thin wire conducts cold better",
                    "A smaller area increases the pressure on the ice",
                    "A thick rope would absorb the water"
                ],
                answer: 2
            },
            {
                question: "What happens to the water immediately after the wire passes below it?",
                options: [
                    "It evaporates into the air",
                    "It flows off the ice block",
                    "It boils due to friction",
                    "It refreezes into ice"
                ],
                answer: 3
            },
            {
                question: "What is the state of the ice block after the wire has passed completely through it?",
                options: [
                    "It splits into two clean halves",
                    "It shatters into many pieces",
                    "It remains as a single solid intact block",
                    "It completely melts into a puddle"
                ],
                answer: 2
            },
            {
                question: "Which of the following real-world activities heavily relies on the principle of regelation?",
                options: [
                    "Boiling water for tea",
                    "Ice skating",
                    "Swimming in a lake",
                    "Flying an airplane"
                ],
                answer: 1
            },
            {
                question: "Why does the water above the wire refreeze?",
                options: [
                    "Because the wire is very cold",
                    "Because the pressure above the wire returns to normal atmospheric pressure",
                    "Because the weights pull the heat out of the ice",
                    "Because the room temperature suddenly drops"
                ],
                answer: 1
            },
            {
                question: "If the weights attached to the wire were completely removed, what would happen?",
                options: [
                    "The wire would cut through the ice much faster",
                    "The wire would not cut through the ice at all",
                    "The ice block would melt instantly",
                    "The wire would float in the air"
                ],
                answer: 1
            },
            {
                question: "Apart from pressure, what property of a metal wire (like copper) helps it pass through the ice faster than a non-metal string?",
                options: [
                    "Electrical conductivity",
                    "Thermal conductivity",
                    "Magnetic properties",
                    "Elasticity"
                ],
                answer: 1
            },
            {
                question: "In the pressure formula (P = F/A), what represents the 'F' in this experiment?",
                options: [
                    "The thickness of the wire",
                    "The temperature of the room",
                    "The force exerted by the heavy weights",
                    "The size of the ice block"
                ],
                answer: 2
            }
        ]
    }]
};