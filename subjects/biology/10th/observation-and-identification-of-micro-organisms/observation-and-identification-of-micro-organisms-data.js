const experimentData = {
    title: "Observation & Identification of Micro-organisms",
    subtitle: "Class 10 Biology - Systematics and Diversity of Life",
    
    aim: "To study, observe, and identify different groups of micro-organisms (Bacteria, Fungi, Algae, Protozoa, and Viruses) from prepared slides using a compound microscope to understand their key morphological structures.",
    
    theory: `
        <div class="theory-section">
            <p style="font-size:1.1rem; line-height:1.6; color:#2c3e50; margin-bottom:25px;">
                <b>Micro-organisms</b> are ubiquitous, microscopic living entities that cannot be seen clearly with the naked eye. They belong to highly diverse taxonomic groups and play vital roles in ecological balances, biotechnology, and human health. Using compound microscopes, we can distinguish them based on their specific structural morphology and stain retention.
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 30px 0;">
                <div style="background: #fdfefe; padding: 20px; border-radius: 12px; border-left: 5px solid #8e44ad; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="color:#8e44ad; margin-top:0;">1. Bacteria (Prokaryotes)</h4>
                    <p style="font-size:0.9rem; margin-bottom:0;">Unicellular organisms lacking a membrane-bound nucleus. Commonly categorized by shape: <i>Cocci</i> (spherical), <i>Bacilli</i> (rod-shaped), and <i>Spirilla</i> (spiral).</p>
                </div>

                <div style="background: #fdfefe; padding: 20px; border-radius: 12px; border-left: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="color:#e67e22; margin-top:0;">2. Fungi (Eukaryotes)</h4>
                    <p style="font-size:0.9rem; margin-bottom:0;">Achlorophyllous heterotrophs with cell walls made of chitin. Under the microscope, they show thread-like tubular filaments called <b>hyphae</b> and reproductive spore cases (sporangia).</p>
                </div>

                <div style="background: #fdfefe; padding: 20px; border-radius: 12px; border-left: 5px solid #27ae60; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="color:#27ae60; margin-top:0;">3. Algae (Eukaryotes)</h4>
                    <p style="font-size:0.9rem; margin-bottom:0;">Simple, autotrophic oxygenic organisms with distinct cell walls and chlorophyll. Filamentous algae like <i>Spirogyra</i> show prominent ribbon-like, spiral chloroplasts.</p>
                </div>

                <div style="background: #fdfefe; padding: 20px; border-radius: 12px; border-left: 5px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h4 style="color:#3498db; margin-top:0;">4. Protozoa (Eukaryotes)</h4>
                    <p style="font-size:0.9rem; margin-bottom:0;">Unicellular, animal-like protists that lack cell walls. Organisms like <i>Amoeba</i> exhibit highly fluid, irregular structures and move via temporary cytoplasmic projections called <b>pseudopodia</b>.</p>
                </div>
            </div>

            <h4 style="color:var(--primary); font-size:1.4rem;">Microbe Diagnostic Summary</h4>
            <table style="width:100%; border-collapse: collapse; margin-top:10px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <tr style="background:var(--primary); color:white;">
                    <th style="padding:15px; border:1px solid #ddd; text-align:left;">Organism Group</th>
                    <th style="padding:15px; border:1px solid #ddd; text-align:left;">Key Morphological Features</th>
                    <th style="padding:15px; border:1px solid #ddd; text-align:left;">Common Examined Specimen</th>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold; color:#8e44ad;">Bacteria</td>
                    <td style="padding:12px; border:1px solid #ddd;">Minute size, lack of visible nucleus, cocci clusters or rod chains.</td>
                    <td style="padding:12px; border:1px solid #ddd;">Lactobacillus, Streptococcus</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold; color:#e67e22;">Fungi</td>
                    <td style="padding:12px; border:1px solid #ddd;">Network of hyphae (mycelium), spherical sporangia filled with tiny black spores.</td>
                    <td style="padding:12px; border:1px solid #ddd;">Rhizopus (Bread Mould)</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold; color:#27ae60;">Algae</td>
                    <td style="padding:12px; border:1px solid #ddd;">Cellular compartments containing distinct spiral or cup-shaped green chloroplasts.</td>
                    <td style="padding:12px; border:1px solid #ddd;">Spirogyra, Chlamydomonas</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold; color:#3498db;">Protozoa</td>
                    <td style="padding:12px; border:1px solid #ddd;">Amorphous/irregular margins, visible nucleus, contractile vacuoles, pseudopodal extensions.</td>
                    <td style="padding:12px; border:1px solid #ddd;">Amoeba proteus, Paramecium</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold; color:#7f8c8d;">Viruses</td>
                    <td style="padding:12px; border:1px solid #ddd;">Non-cellular, geometric protein shell (capsid) with a tail assembly. (Observed under Electron Microscopes).</td>
                    <td style="padding:12px; border:1px solid #ddd;">Bacteriophage</td>
                </tr>
            </table>

            <h4 style="color:var(--primary); font-size:1.4rem; margin-top:40px;">Educational Demonstration</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/9JW63U2mzqo?si=HaljaWJcFYbKhRTF" title="Microorganisms Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
                <p style="color: #bbb; font-size: 0.85rem; margin-top: 10px;">What are Microorganisms? Bacteria, Viruses and Fungi (Video courtesy of <b>Smile and Learn - English</b>)</p>
            </div>

            <div style="background: #e8f8f5; padding: 20px; border-radius: 10px; border-left: 5px solid #27ae60; margin-top:30px;">
                <h4 style="color:#27ae60; margin-top:0;">Importance in Microbiology</h4>
                <p style="margin-bottom:0;">Accurate morphological identification of micro-organisms is the cornerstone of diagnostic medicine, pharmacology (for tailoring antibiotic therapy), waste-water treatment, and food science (for monitoring fermentation and prevention of spoilage).</p>
            </div>
        </div>
    `,
    
    materials: [
        "Prepared slides of Bacteria (Cocci/Bacilli)",
        "Prepared slides of Fungi (Rhizopus/Mucor)",
        "Prepared slides of Algae (Spirogyra)",
        "Prepared slides of Protozoa (Amoeba)",
        "Prepared slides of Viruses (Bacteriophage)",
        "Compound Microscope",
        "Lens Cleaning Paper and Solvents",
        "Immersion Oil (for 100x high-power objectives)",
        "Laboratory Observation Log"
    ],
    
    steps: [
        "<b>Step 1: Selection</b> - Choose a prepared slide from the Slide Storage box on your sidebar panel.",
        "<b>Step 2: Mounting</b> - Drag and drop the selected slide onto the Microscope Stage.",
        "<b>Step 3: Focusing</b> - Look through the eyepiece and turn the Coarse Focus knob to adjust the visibility.",
        "<b>Step 4: Magnification</b> - Toggle the lens setting (10x, 40x, or 100x) to bring out structural details.",
        "<b>Step 5: Diagnostic Verification</b> - Select the correct microbial group from the dropdown list and click 'Verify'.",
        "<b>Step 6: Recording</b> - Study the identified features in the Lab Journal to capture morphological data."
    ],

    simulationFile: "observation-and-identification-of-micro-organisms-sim.html",
    
    questions: [
        {
            question: "Which of these micro-organisms does not possess a cellular structure?",
            options: ["Bacteria", "Protozoa", "Virus", "Fungi"],
            answer: 2
        },
        {
            question: "What is the cell wall of fungi made of?",
            options: ["Peptidoglycan", "Chitin", "Cellulose", "Pectin"],
            answer: 1
        },
        {
            question: "Spirogyra is classified under which of the following groups?",
            options: ["Fungi", "Algae", "Protozoa", "Bacteria"],
            answer: 1
        },
        {
            question: "Which temporary structure helps Amoeba capture food and move?",
            options: ["Cilia", "Flagella", "Pseudopodia", "Tentacles"],
            answer: 2
        },
        {
            question: "Gram-staining is an identification technique used specifically to categorize:",
            options: ["Viruses", "Fungi", "Protozoans", "Bacteria"],
            answer: 3
        },
        {
            question: "Which organelle inside Spirogyra contains green pigment and has a spiral arrangement?",
            options: ["Mitochondria", "Nucleus", "Chloroplast", "Vacuole"],
            answer: 2
        },
        {
            question: "The spherical shape of bacteria is scientifically called:",
            options: ["Bacillus", "Coccus", "Spirillum", "Vibrio"],
            answer: 1
        },
        {
            question: "What type of microscope is required to see the exact structure of a virus?",
            options: ["Simple Microscope", "Compound Light Microscope", "Electron Microscope", "Stereo Microscope"],
            answer: 2
        },
        {
            question: "Fungal threads that form a web-like network are known as:",
            options: ["Spores", "Hyphae", "Buds", "Flagella"],
            answer: 1
        },
        {
            question: "Which of the following is a prokaryote?",
            options: ["Amoeba", "Rhizopus", "Bacteria", "Spirogyra"],
            answer: 2
        },
        {
            question: "A bacteriophage is a virus that infects:",
            options: ["Human cells", "Plant cells", "Bacterial cells", "Fungal spores"],
            answer: 2
        },
        {
            question: "The vegetative cell wall of plants and green algae is mainly composed of:",
            options: ["Chitin", "Peptidoglycan", "Cellulose", "Glycoprotein"],
            answer: 2
        },
        {
            question: "Which of these are animal-like unicellular eukaryotes that lack cell walls?",
            options: ["Algae", "Protozoa", "Bacteria", "Fungi"],
            answer: 1
        },
        {
            question: "The tiny spore cases visible at the top of fungal stalks are called:",
            options: ["Conidia", "Sporangia", "Zygospores", "Capsids"],
            answer: 1
        },
        {
            question: "Under the compound microscope, rod-shaped bacteria are called:",
            options: ["Cocci", "Bacilli", "Spirilla", "Vibrios"],
            answer: 1
        },
        {
            question: "Microorganisms can be found in which of the following environments?",
            options: ["Deep ocean vents", "Polar ice caps", "Inside human intestines", "All of the above"],
            answer: 3
        },
        {
            question: "The chemical compound peptidoglycan is a primary structural component of the cell walls of:",
            options: ["Archaea", "Fungi", "Plants", "Bacteria"],
            answer: 3
        }
    ]
};