// data-food-test.js
const experimentData = {
    title: "DNA Profiling",
    subtitle: "Class 12 Biology - Life Processes & Nutrition",
    
    aim: "To compare and match unknown DNA with a known DNA of a person",
    
    theory: `
        <div class="theory-section">
            <!-- Phase 1 -->
            <h3>DNA Profiling</h3>
            <p>DNA profiling is a molecular biology technique used to identify individuals based on their unique genetic code.<br>
            While human beings share over 99.9% of their DNA sequence, certain regions are highly variable.</p>

            <h3>The Mechanics of Separation</h3>
            <p>Before loading, DNA samples are mixed with <strong>Restriction Enzymes</strong> which cut the strands at specific sequences, creating fragments of varying lengths. These fragments are then separated using <strong>Gel Electrophoresis</strong> via two primary principles:</p>
            <ul>
                <li><strong>Electrical Charge:</strong> DNA possesses phosphate backbones that impart a net negative electrical charge. When an electric current is applied, the DNA naturally migrates away from the negative electrode (cathode) towards the positive electrode (anode).</li>
                <li><strong>Molecular Sieving:</strong> The agarose gel matrix acts like a microscopic sponge. Small DNA fragments travel quickly through the tiny pores and move farther down the gel, whereas larger fragments encounter high resistance, moving much slower and staying closer to the starting wells.</li>
            </ul>

            <h3>Visualization & Analysis</h3>
            <p>Because DNA is clear and invisible to the naked eye, a fluorescent binding dye is embedded in the gel matrix. When exposed to an ultraviolet (UV) transilluminator, these bands fluoresce to reveal a highly individualistic banding pattern. By comparing the position of these bands, investigators can establish an absolute match if all fragments align identically.</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: DNA Profiling</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/ZDZUAleWX78?si=u5jmfnj7rl_MLOHZ" title="Food Test Lab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
            </div>
        </div>
    `,
    
    materials: [
        "Unknown DNA Sample",
        "Known DNA Sample 1,2,3",
        "Agarose Gel",
        "Power Supply",
        "Fluorescent dyes",
        "UV Light Emitter",
    ],
    
    steps: [
        "Carefully transfer and inject the Unknown Crime Scene DNA into the first well of the agarose gel slab.",
        "Repeat the process to draw and load known Suspect 1, Suspect 2, and Suspect 3 DNA samples into the remaining three wells.",
        "Turn on the power supply to apply a 120 V electrical current and initiate negative-to-positive DNA fragment migration.",
        "Wait for the electrical current to separate the fragments through the microscopic pores of the gel matrix.",
        "Expose the gel slab under the UV transilluminator to visualize the fluorescent bands and identify the matching suspect profile."
    ],

    simulationFile: "dna_fingerprinting.html", 
    
    questions: [
        {
            "question": "Which of the following regions of human DNA forms the basis of DNA fingerprinting because it shows a high degree of polymorphism?",
            "options": ["Coding DNA sequences", "Satellite DNA within non-coding regions", "Exonic sequences of structural genes", "Ribosomal RNA structural genes"],
            "answer": 1
        },
        {
            "question": "During density gradient centrifugation using Caesium Chloride (CsCl), satellite DNA separates from bulk genomic DNA as separate peaks due to differences in:",
            "options": ["Base composition (Adenine-Thymine vs. Guanine-Cytosine ratio)", "The total structural length of the chromosome arms", "The type of chemical bonds in the phosphate backbone", "The net negative electrical charge per nucleotide unit"],
            "answer": 0
        },
        {
            "question": "What is the specific name given to the tandemly repeated short nucleotide sequences where the copy number varies highly from person to person?",
            "options": ["Single Nucleotide Polymorphisms (SNPs)", "Variable Number of Tandem Repeats (VNTRs)", "Exon-Intron splice junctions", "Palindromic recognition sequences"],
            "answer": 1
        },
        {
            "question": "In the classic Southern Blotting technique utilized during DNA profiling, what is the purpose of transferring the DNA fragments from the agarose gel to a synthetic membrane?",
            "options": ["To double the copy number of the separated DNA fragments", "To fix the single-stranded DNA fragments onto a durable surface for probe hybridization", "To digest the DNA fragments into even smaller components", "To introduce radioactive phosphorus atoms into the DNA strands"],
            "answer": 1
        },
        {
            "question": "A radiolabeled single-stranded DNA molecule used to detect complementary VNTR sequences on the nylon membrane during DNA profiling is termed a:",
            "options": ["Primer", "Template", "Probe", "Vector"],
            "answer": 2
        },
        {
            "question": "If the quantity of DNA extracted from a forensic crime scene sample is extremely low, which molecular biological technique is deployed to multiply the sample copies before gel electrophoresis?",
            "options": ["Polymerase Chain Reaction (PCR)", "Western Blotting analysis", "Sanger Dideoxy Sequencing", "RNA Interference (RNAi) silencing"],
            "answer": 0
        },
        {
            "question": "Which of the following statements about VNTRs is true, explaining why they are ideal for establishing parental heritage?",
            "options": ["They are completely degraded during child development", "An individual inherits half of their specific VNTR patterns from each parent", "They match the maternal profile 100% and show zero paternal traits", "They undergo immediate mutation in every consecutive cell cycle"],
            "answer": 1
        },
        {
            "question": "What structural feature allows DNA fragments to migrate toward the positive electrode (anode) during agarose gel electrophoresis?",
            "options": ["The presence of basic amino acid side chains on nitrogenous bases", "The negative charge of the structural phosphate groups in the backbone", "The hydrogen bonds holding the complementary purines and pyrimidines", "The hydrophobic nature of the inner double helix core"],
            "answer": 1
        },
        {
            "question": "The technique of DNA Fingerprinting was initially conceptualized and developed by which pioneering molecular geneticist?",
            "options": ["Alec Jeffreys", "James Watson and Francis Crick", "Francois Jacob and Jacques Monod", "Gregor Mendel"],
            "answer": 0
        },
        {
            "question": "When a population displays an inheritable genetic mutation at a frequency greater than 0.01 in a locus, it is formally classified as:",
            "options": ["Genetic drift", "DNA polymorphism", "Chromosomal deletion", "Somatic variation"],
            "answer": 1
        }
    ]          
};