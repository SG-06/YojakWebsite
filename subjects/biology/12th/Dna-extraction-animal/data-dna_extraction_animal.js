const experimentData = {
    title: "DNA Extraction (Animal Tissue)",
    subtitle: "Class 12 Biology - Molecular Basis of Inheritance",
    
    aim: "To isolate macromolecular DNA from animal tissue (Cheek Cells/Chicken Liver)",
    
    theory: `
        <div class="theory-section">
            <h3>Molecular Architecture of Animal Cells</h3>
            <p>Unlike plant cells, animal cells lack a rigid cellulose cell wall. The primary barrier is the <b>plasma membrane</b>, a lipid bilayer that protects the cytoplasm and organelles. In animal tissue, DNA is not just found in the nucleus but is tightly coiled around proteins called <b>histones</b> to form chromatin.</p>

            <h3>The Biochemical Process</h3>
            <p>The isolation of animal DNA involves three critical chemical stages:</p>
            <ul>
                <li><strong>Lysis:</strong> A detergent-based lysis buffer is used to solubilize the lipid membranes. Since there is no cell wall, mechanical disruption (like mashing) is less intensive than in plants.</li>
                <li><strong>Proteolysis:</strong> Animal tissues are rich in proteins. Protease enzymes are often added to digest histones and cellular proteins, ensuring that the final DNA extract is not contaminated with protein matter.</li>
                <li><strong>Precipitation:</strong> DNA is a polar molecule and is soluble in water but insoluble in alcohols. By adding <b>Ice-Cold Ethanol</b> or Isopropanol in the presence of salts (NaCl), the water molecules shielding the DNA are removed, causing the DNA to aggregate and become visible as white, stringy fibers.</li>
            </ul>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Extraction of Animal DNA</h4>
            <div class="video-box">
                <iframe
                    src="https://www.youtube.com/embed/tcPgdR9_t64?si=GAo_znhsWj5vixbh&amp;start=1"
                    title="Animal DNA Extraction Lab"
                    allowfullscreen>
                </iframe>
                <p class="video-credit">
                    🎥 Video Credit:
                    <a href="https://www.youtube.com/embed/tcPgdR9_t64?si=GAo_znhsWj5vixbh&amp;start=1"
                       target="_blank"
                       rel="noopener noreferrer">
                        The Jackson Laboratory
37K subscribers

                    </a>
                </p>
            </div>
        </div>
    `,
    
    materials: [
        "Animal Tissue Sample (Cheek cell swab or Liver tissue)",
        "Lysis Buffer (Sodium Dodecyl Sulfate)",
        "Protease Enzyme (or Meat Tenderizer as a substitute)",
        "Sodium Chloride (NaCl)",
        "Ice-Cold 95% Ethanol",
        "Micro-centrifuge or Test Tubes",
        "Glass Spooling Rod"
    ],
    
    steps: [
        "Collect the animal tissue sample. If using cheek cells, rinse the mouth with a saline solution and collect the gargle.",
        "Add Lysis Buffer to the sample. The detergent will break open the plasma membranes and nuclear envelopes.",
        "Add a pinch of Protease (or meat tenderizer). Incubate at 50°C for 10 minutes to digest the histone proteins wrapped around the DNA.",
        "Add a small amount of salt (NaCl) to help neutralize the DNA's negative charge.",
        "Slowly pour ice-cold ethanol down the side of the tube. Do not mix the layers.",
        "Observe the white, cloudy DNA fibers forming at the interface. Use the glass rod to 'spool' the DNA by gently rotating it."
    ],

    simulationFile: "dna_extraction_animal.html", 
    
    questions: [
        {
            "question": "Which structure, present in plants but absent in animal cells, makes DNA extraction from animal tissue easier?",
            "options": ["Nucleus", "Cell Wall", "Plasma Membrane", "Mitochondria"],
            "answer": 1
        },
        {
            "question": "What is the primary function of adding a Protease enzyme during animal DNA extraction?",
            "options": ["To break the DNA strands", "To digest histone proteins and other cellular proteins", "To neutralize the acidity of the solution", "To color the DNA for visibility"],
            "answer": 1
        },
        {
            "question": "Which chemical is responsible for dissolving the lipid bilayer of the cell membrane?",
            "options": ["Ethanol", "Sodium Chloride", "Detergent (SDS)", "Distilled Water"],
            "answer": 2
        },
        {
            "question": "Why does DNA precipitate when cold ethanol is added?",
            "options": ["DNA is insoluble in alcohol", "Ethanol makes DNA heavier", "Ethanol breaks the sugar-phosphate backbone", "Ethanol turns DNA into a gas"],
            "answer": 0
        },
        {
            "question": "What are the proteins called around which animal DNA is tightly coiled?",
            "options": ["Enzymes", "Histones", "Antibodies", "Lipids"],
            "answer": 1
        },
        {
            "question": "In the extraction process, what is the purpose of adding Sodium Chloride (NaCl)?",
            "options": ["To provide a salty taste", "To neutralize the negative charges of the DNA phosphate backbone", "To kill bacteria in the sample", "To prevent the DNA from clumping"],
            "answer": 1
        },
        {
            "question": "What is the appearance of the precipitated DNA in the test tube?",
            "options": ["Clear blue liquid", "Green crystals", "White, stringy web-like fibers", "Black powder"],
            "answer": 2
        },
        {
            "question": "Why must the ethanol used in this experiment be 'ice-cold'?",
            "options": ["To keep the lab smells down", "To increase the solubility of DNA", "To decrease the solubility of DNA and increase yield", "To freeze the cell membranes"],
            "answer": 2
        },
        {
            "question": "Which of these tissues would yield the highest amount of DNA for a classroom experiment?",
            "options": ["Red Blood Cells (Mammalian)", "Muscle tissue", "Liver tissue", "Bone tissue"],
            "answer": 2
        },
        {
            "question": "The technique of collecting the precipitated DNA onto a glass rod is known as:",
            "options": ["Stirring", "Spooling", "Filtration", "Distillation"],
            "answer": 1
        }
    ]          
};