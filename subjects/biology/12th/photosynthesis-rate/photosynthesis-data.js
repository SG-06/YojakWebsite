// START OF FILE photosynthesis-data.js
const experimentData = {
    title: "Rate of Photosynthesis Lab",
    subtitle: "Class 12 Biology - Plant Physiology",
    
    aim: "To study the effect of light intensity and CO₂ concentration on the rate of photosynthesis by counting oxygen bubbles in an aquatic plant (Elodea).",
    
    theory: `
        <div class="theory-section">
            <h3>The Photosynthetic Equation</h3>
            <p>Photosynthesis is the photochemical process by which green plants transform light energy into chemical energy. The balanced chemical equation is:</p>
            <p style="text-align:center; font-weight:bold; color:var(--primary); font-size:1.2rem;">
                6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂
            </p>

            <h3>Key Factors Affecting the Rate</h3>
            <ul>
                <li><strong>Light Intensity:</strong> As light intensity increases, the rate of light-dependent reactions increases, leading to more oxygen evolution, until a saturation point is reached.</li>
                <li><strong>CO₂ Concentration:</strong> Carbon dioxide is a primary reactant. Increasing the concentration of dissolved CO₂ (using Sodium Bicarbonate) typically increases the rate of the Calvin Cycle.</li>
                <li><strong>Temperature:</strong> Enzymes like RuBisCO are temperature-sensitive. Very high temperatures can denature enzymes and slow down the process.</li>
            </ul>

            <h3>Why use Elodea/Hydrilla?</h3>
            <p>Aquatic plants are ideal for this experiment because the oxygen produced during photosynthesis is released as visible <strong>bubbles</strong>. By counting these bubbles per minute, we can directly quantify the rate of the reaction.</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Lesson: Photosynthesis Explained</h4>
            <div class="video-box">
                <iframe
                    src="https://www.youtube.com/embed/N1ZJe_-i0dg?si=cNAvUZtEScPYmZaW"
                    title="Photosynthesis | Quick Support"
                    allowfullscreen>
                </iframe>
                <p class="video-credit">
                    🎥 Video Credit:
                    <a href="https://www.youtube.com/embed/N1ZJe_-i0dg?si=cNAvUZtEScPYmZaW" 
                       target="_blank"
                       rel="noopener noreferrer">
                        Quick Support
                    </a>
                </p>
            </div>
        </div>
    `,
    
    materials: [
        "Aquatic plant (Elodea or Hydrilla)",
        "Beaker and Glass Funnel",
        "Test Tube",
        "Sodium Bicarbonate (NaHCO₃)",
        "Powerful Lamp / Light Source",
        "Stopwatch",
        "Water"
    ],
    
    steps: [
        "Place a fresh specimen of Elodea in a beaker filled with water.",
        "Add a spoonful of Sodium Bicarbonate (NaHCO₃) to provide an ample source of Carbon Dioxide.",
        "Invert a glass funnel over the plant and place a water-filled test tube over the funnel stem.",
        "Position a light source at a measured distance from the beaker.",
        "Switch on the light and allow the plant to stabilize for a few minutes.",
        "Start the stopwatch and count the number of oxygen bubbles evolving from the cut end of the stem for 1 minute.",
        "Move the light source closer or further away to observe the effect of light intensity on the bubble count."
    ],

    simulationFile: "photosynthesis_rate.html", 
    
    questions: [
        {
            "question": "Which gas is evolved as a byproduct during photosynthesis?",
            "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            "answer": 1
        },
        {
            "question": "What is the primary role of Sodium Bicarbonate in this experiment?",
            "options": ["To increase water temperature", "To act as a catalyst", "To provide Carbon Dioxide", "To color the water"],
            "answer": 2
        },
        {
            "question": "In which part of the chloroplast does the light-dependent reaction occur?",
            "options": ["Stroma", "Thylakoids (Grana)", "Outer membrane", "Cytoplasm"],
            "answer": 1
        },
        {
            "question": "What happens to the rate of photosynthesis as the light source is moved further away from the plant?",
            "options": ["It increases", "It decreases", "It remains constant", "It stops immediately"],
            "answer": 1
        },
        {
            "question": "Which pigment is responsible for capturing light energy?",
            "options": ["Hemoglobin", "Chlorophyll", "Carotene", "Xanthophyll"],
            "answer": 1
        },
        {
            "question": "The splitting of water molecules using light energy is known as:",
            "options": ["Electrolysis", "Photolysis", "Hydrolysis", "Glycolysis"],
            "answer": 1
        },
        {
            "question": "During the Calvin Cycle (Dark Reaction), CO₂ is fixed into:",
            "options": ["ATP", "Oxygen", "Glucose (Sugar)", "Water"],
            "answer": 2
        },
        {
            "question": "Which of these is a limiting factor for photosynthesis on a very cloudy day?",
            "options": ["Water", "Light Intensity", "Oxygen concentration", "Soil nutrients"],
            "answer": 1
        },
        {
            "question": "What is the chemical formula for the glucose produced during photosynthesis?",
            "options": ["C12H22O11", "CO2", "C6H12O6", "CH4"],
            "answer": 2
        },
        {
            "question": "Why do bubbles stop appearing if the lamp is turned off?",
            "options": ["The plant dies", "The water evaporates", "The light-dependent reaction stops", "The CO2 runs out"],
            "answer": 2
        }
    ]          
};