// START OF FILE transpiration-data.js
const experimentData = {
    title: "Rate of Transpiration Lab",
    subtitle: "Class 12 Biology - Plant Physiology",
    
    aim: "To measure and compare the rate of transpiration in a leafy shoot under different environmental conditions using Ganong's Potometer.",
    
    theory: `
        <div class="theory-section">
            <h3>Biological Concept</h3>
            <p><strong>Transpiration</strong> is the process of water movement through a plant and its evaporation from aerial parts, such as leaves, stems, and flowers. While plants absorb massive amounts of water through roots, over 97% is lost via transpiration through microscopic pores called <strong>stomata</strong>.</p>

            <h3>The Potometer Principle</h3>
            <p>A potometer (from Greek 'poto' - drink) is an apparatus used to measure the rate of water uptake. It works on the principle that <em>water absorbed is almost equal to the water lost through transpiration</em>. By measuring the movement of an air bubble in a graduated capillary tube, we can calculate the volume of water transpired per unit of time.</p>

            <h3>Environmental Factors Affecting Rate</h3>
            <ul>
                <li><strong>Light Intensity:</strong> Stomata usually open in light and close in darkness. Increased light increases transpiration.</li>
                <li><strong>Temperature:</strong> Higher temperatures increase the kinetic energy of water molecules, leading to faster evaporation.</li>
                <li><strong>Wind Speed:</strong> Moving air removes the boundary layer of water vapor around the leaf, maintaining a steep concentration gradient and increasing the rate.</li>
                <li><strong>Humidity:</strong> High external humidity reduces the concentration gradient between the leaf interior and the atmosphere, slowing down transpiration.</li>
            </ul>

            <h3>Experimental Precautions</h3>
            <p>The potometer must be perfectly <strong>air-tight</strong>. This is why petroleum jelly (vaseline) is applied to all joints. Any air leak (other than the intended bubble) will cause incorrect readings. Furthermore, the shoot must be cut under water to prevent air bubbles from blocking the xylem vessels (embolism).</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Lesson: Transpiration Mechanism</h4>
            <div class="video-box">
                <iframe
                    src="https://www.youtube.com/embed/FWxh28CTEcM?si=fNncDYtnvMI86WJW"
                    title="Transpiration Video"
                    allowfullscreen>
                </iframe>
                <p class="video-credit">
                    🎥 Video Credit:
                    <a href="https://www.youtube.com/embed/FWxh28CTEcM?si=fNncDYtnvMI86WJW" 
                       target="_blank"
                       rel="noopener noreferrer">
                        Oxford Mastering Biology 牛津基礎生物學
                    </a>
                </p>
            </div>
        </div>
    `,
    
    materials: [
        "Ganong's Potometer",
        "A leafy plant shoot (e.g., Balsam or Nerium)",
        "Beaker of Water",
        "Stopwatch",
        "Petroleum Jelly (Vaseline)",
        "Table Fan (for Wind simulation)",
        "High-wattage Lamp (for Heat/Light simulation)",
        "Sharp Blade/Knife"
    ],
    
    steps: [
        "Cut a healthy leafy shoot under water to prevent air entering the xylem.",
        "Fill the potometer with water and insert the shoot through the rubber cork.",
        "Apply petroleum jelly to all joints to ensure the apparatus is completely airtight.",
        "Introduce a small air bubble into the capillary tube by lifting the end out of the water for a moment.",
        "Record the initial position of the bubble and start the stopwatch.",
        "Measure the distance moved by the bubble in a fixed time interval (e.g., 5 minutes).",
        "Repeat the measurements under different conditions: still air, moving air (fan), and high temperature (lamp)."
    ],

    simulationFile: "transpiration_rate.html", 
    
    questions: [
        {
            "question": "Which instrument is specifically designed to measure the rate of water uptake in plants?",
            "options": ["Auxanometer", "Potometer", "Respirometer", "Clinostat"],
            "answer": 1
        },
        {
            "question": "Why is the plant shoot cut under water before placing it in the potometer?",
            "options": ["To keep the leaves clean", "To prevent air bubbles from entering the xylem", "To increase the rate of photosynthesis", "To soften the stem"],
            "answer": 1
        },
        {
            "question": "What is the primary function of applying petroleum jelly to the potometer joints?",
            "options": ["To lubricate the glass", "To keep the plant cool", "To ensure the system is airtight", "To prevent water from evaporating from the flask"],
            "answer": 2
        },
        {
            "question": "How does high atmospheric humidity affect the rate of transpiration?",
            "options": ["It increases the rate", "It decreases the rate", "It has no effect", "It stops transpiration completely"],
            "answer": 1
        },
        {
            "question": "Under which condition will the air bubble in the potometer move the fastest?",
            "options": ["In a dark, humid room", "In still, cool air", "In bright light with moving air", "In a closed cupboard"],
            "answer": 2
        },
        {
            "question": "Transpiration through which part of the leaf accounts for the majority of water loss?",
            "options": ["Cuticle", "Lenticels", "Stomata", "Hydathodes"],
            "answer": 2
        },
        {
            "question": "What biological principle allows a potometer to estimate the transpiration rate?",
            "options": ["Water uptake is roughly equal to water loss", "Plants create water during respiration", "Air bubbles push water out of leaves", "Root pressure is the only force involved"],
            "answer": 0
        },
        {
            "question": "Which of the following is an internal factor affecting transpiration?",
            "options": ["Wind speed", "Temperature", "Leaf surface area", "Light intensity"],
            "answer": 2
        },
        {
            "question": "The loss of water in the form of liquid droplets from the margins of leaves is called:",
            "options": ["Transpiration", "Evaporation", "Guttation", "Condensation"],
            "answer": 2
        },
        {
            "question": "During the day, what causes stomata to open?",
            "options": ["Loss of turgor in guard cells", "Accumulation of CO2", "Guard cells becoming turgid", "Plasmolysis of epidermal cells"],
            "answer": 2
        }
    ]          
};