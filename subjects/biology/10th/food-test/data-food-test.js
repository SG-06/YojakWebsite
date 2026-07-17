// data-food-test.js
const experimentData = {
    title: "Detection of Food Nutrients",
    subtitle: "Class 10 Biology - Life Processes & Nutrition",
    
    aim: "To identify the presence of complex carbohydrates (Starch), reducing sugars (Glucose), proteins, and lipids in various food samples.",
    
    theory: `
        <div class="theory-section">
            <p style="font-size:1.1rem; line-height:1.6; color:#2d4a47; margin-bottom:25px;">
                In <b>Class 10 Life Processes</b>, we study how heterotrophic organisms break down complex food into simpler forms. 
                Before enzymes like <b>Salivary Amylase</b> or <b>Pepsin</b> can act, we must identify which macromolecules are present. 
                This biochemical analysis uses specific reagents to cause visible color changes.
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 25px; margin: 30px 0;">
                
                <!-- STARCH CONCEPT -->
                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">1. Complex Carbohydrates (Starch)</h4>
                    <p>Starch is a storage polysaccharide. We use <b>Iodine Solution</b>. The tri-iodide ions slip into the starch's helical structure, creating an 'Inclusion Complex' that reflects a deep <b>Blue-Black</b> color.</p>
                </div>

                <!-- PROTEIN CONCEPT -->
                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">2. Proteins (Peptide Bonds)</h4>
                    <p>Proteins consist of amino acids linked by <b>Peptide Bonds</b>. The <b>Biuret Test</b> uses Copper(II) ions which react with the nitrogen atoms in these bonds to form a <b>Violet/Purple</b> complex.</p>
                </div>

                <!-- SUGAR CONCEPT -->
                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">3. Reducing Sugars (Glucose)</h4>
                    <p>When heated with <b>Benedict's Reagent</b>, reducing sugars like glucose reduce the blue Copper(II) sulfate to <b>Copper(I) oxide</b>, which is an insoluble <b>Brick Red</b> precipitate.</p>
                
                </div>

                <!-- FAT CONCEPT -->
                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">4. Lipids (Fats)</h4>
                    <p>Lipids are hydrophobic. In the <b>Ethanol Emulsion Test</b>, fats dissolve in ethanol. When water is added, the fats fall out of the solution, creating a <b>Milky White Emulsion</b> due to light scattering.</p>
                   
                </div>
            </div>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Nutrition Chemistry</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/sLP8dcnWnJg?si=-al5EWKrI3gWXEcd" title="Food Test Lab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
            </div>
            <div class="video-credits" style="text-align: right; margin-top: -10px; margin-bottom: 30px; font-size: 0.85rem; color: #666; font-style: italic;">
                Video Credits: <a href="https://www.youtube.com/@CognitoEdu" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: none;">Cognito (YouTube)</a>
            </div>

            <h4 style="color:var(--primary); margin-top:40px;">Biochemical Summary Table</h4>
            <table style="width:100%; border-collapse: collapse; margin-top:10px; background: white;">
                <tr style="background:var(--primary); color:white;">
                    <th style="padding:15px; border:1px solid #ddd;">Biological Molecule</th>
                    <th style="padding:15px; border:1px solid #ddd;">Specific Reagent</th>
                    <th style="padding:15px; border:1px solid #ddd;">Observation (Positive)</th>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Starch</td>
                    <td style="padding:12px; border:1px solid #ddd;">Iodine (I2KI)</td>
                    <td style="padding:12px; border:1px solid #ddd; color: #000080; font-weight:bold;">Blue-Black Color</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Protein</td>
                    <td style="padding:12px; border:1px solid #ddd;">Biuret Solution</td>
                    <td style="padding:12px; border:1px solid #ddd; color: #800080; font-weight:bold;">Violet/Purple Color</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Glucose</td>
                    <td style="padding:12px; border:1px solid #ddd;">Benedict's + Heat</td>
                    <td style="padding:12px; border:1px solid #ddd; color: #b22222; font-weight:bold;">Brick Red Precipitate</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Lipids</td>
                    <td style="padding:12px; border:1px solid #ddd;">Ethanol + Water</td>
                    <td style="padding:12px; border:1px solid #ddd; color: #777; font-weight:bold;">Milky White Emulsion</td>
                </tr>
            </table>
        </div>
    `,
    
    materials: [
        "Food samples (Potato, Glucose, Egg white, Oil)",
        "Iodine solution (for Polysaccharides)",
        "Benedict's reagent (for Monosaccharides)",
        "Biuret solution (Sodium Hydroxide + Copper Sulfate)",
        "95% Ethanol and Distilled Water",
        "Test tube holder and Spirit Lamp/Bunsen Burner"
    ],
    
    steps: [
        "Prepare food homogenate (mashing sample with water) where necessary.",
        "<b>Starch Test:</b> Add 2-3 drops of Iodine. Blue-black indicates starch presence.",
        "<b>Glucose Test:</b> Add Benedict's solution and heat in a water bath for 2 mins. Brick red indicates reducing sugar.",
        "<b>Protein Test:</b> Add Sodium Hydroxide then 2 drops of Copper Sulfate. Violet color indicates protein.",
        "<b>Fat Test:</b> Shake sample with Ethanol, then pour into water. Milky cloudiness indicates lipids."
    ],

    simulationFile: "food-test-sim.html", 
    
    questions: [
        {
            question: "In the Life Processes chapter, which enzyme is responsible for the natural digestion of Starch?",
            options: ["Pepsin", "Lipase", "Salivary Amylase", "Trypsin"],
            answer: 2
        },
        {
            question: "Why is the Benedict's test result referred to as a 'Brick Red Precipitate'?",
            options: ["Because Copper is a red metal", "Due to formation of insoluble Copper(I) Oxide", "Because glucose is naturally red", "Due to heating of the sugar"],
            answer: 1
        },
        {
            question: "Which chemical bond does the Biuret reagent detect in proteins?",
            options: ["Ionic Bond", "Peptide Bond", "Hydrogen Bond", "Glycosidic Bond"],
            answer: 1
        },
        {
            question: "A solution of pure glucose is heated with Benedict's. What is the expected color?",
            options: ["Blue", "Violet", "Brick Red", "Black"],
            answer: 2
        },
        {
            question: "What is the role of Bile Salts in the human body regarding fats (similar to the ethanol test)?",
            options: ["Digestion", "Absorption", "Emulsification", "Excretion"],
            answer: 2
        },
        {
            question: "Which reagent would you use to distinguish between a slice of bread and a piece of chicken?",
            options: ["Iodine and Biuret", "Ethanol only", "Water only", "Benedict's only"],
            answer: 0
        },
        {
            question: "Why does starch turn blue-black with iodine but glucose does not?",
            options: ["Glucose is too small to trap iodine molecules", "Glucose is a sugar, starch is not", "Iodine is allergic to glucose", "Starch is green in nature"],
            answer: 0
        },
        {
            question: "Biuret reagent consists of Sodium Hydroxide and:",
            options: ["Copper Sulfate", "Silver Nitrate", "Hydrochloric Acid", "Potassium Iodide"],
            answer: 0
        },
        {
            question: "Villi in the small intestine are primarily responsible for absorbing which of these?",
            options: ["The reagents used", "The food samples", "Digested Nutrients", "Water only"],
            answer: 2
        },
        {
            question: "If a food sample turns violet when Biuret is added, it indicates high levels of:",
            options: ["Energy", "Amino acid chains (Proteins)", "Sugars", "Cellulose"],
            answer: 1
        }
    ]
};