const experimentData = {
    title: "DNA Extraction",
    subtitle: "Class 12 Biology - Molecular Basis of Inheritance",
    
    aim: "To isolate macromolecular DNA from plant tissue (Strawberry)",
    
    theory: `
        <div class="theory-section">
            <h3>Introduction to DNA Isolation</h3>
            <p>DNA isolation is the initial prerequisite step for most downstream molecular biology workflows, including PCR amplification, Southern blotting, and genomic sequencing. Plant cells present unique mechanical and chemical barriers—specifically rigid cell walls and lipid membranes—that must be systematically disrupted to harvest pure nucleic acids.</p>

            <h3>The Mechanics of Extraction</h3>
            <p>The isolation of DNA from an octaploid (8n) organism like a strawberry follows a systematic biochemical pathway:</p>
            <ul>
                <li><strong>Mechanical Disruption:</strong> Physical mashing physically breaks down the structural cellulose cell walls, maximizing the surface area of the tissue for subsequent chemical exposure.</li>
                <li><strong>Cell Membrane Lysis:</strong> An aqueous lysis buffer containing a detergent (such as Sodium Dodecyl Sulfate) is introduced. The amphiphilic detergent molecules bind to and solubilize the amphipathic lipid bilayer of both the plasma and nuclear membranes, thereby releasing genomic DNA into the solution.</li>
                <li><strong>Charge Neutralization:</strong> Sodium chloride NaCl within the lysis solution provides positively charged sodium ions Na<sup>+</sup> that bind to the negatively charged hydrophilic phosphate backbone of the DNA. This neutralizes the repulsive forces between DNA strands, enabling them to aggregate.</li>
            </ul>

            <h3>Precipitation and Spooling</h3>
            <p>Because DNA is highly polar due to its phosphate groups, it dissolves easily in water but remains completely insoluble in alcohols. When ice-cold ethanol is carefully layered on top of the filtered lysate, the hydration shell surrounding the DNA molecules is stripped away. The neutralized DNA precipitates out of the aqueous phase, appearing as an insoluble, white, web-like macromolecular mass at the interface that can be wrapped around a glass rod (spooled).</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Extraction of DNA</h4>
            <div class="video-box">
    <iframe
        src="https://www.youtube.com/embed/7_BWWE4eb74"
        title="DNA Extraction Lab"
        allowfullscreen>
    </iframe>

    <p class="video-credit">
        🎥 Video Credit:
        <a href="https://youtu.be/7_BWWE4eb74"
           target="_blank"
           rel="noopener noreferrer">
            AAU Streaming
        </a>
    </p>
</div>
        </div>
    `,
    
    materials: [
        "Fresh Strawberry Sample",
        "Lysis Buffer (Detergent + Salt Solution)",
        "Filter Funnel and Cheesecloth",
        "Ice-Cold Ethanol (95%)",
        "Glass Spooling Rod",
        "Mortar and Pestle"
    ],
    
    steps: [
        "Place the strawberry into the mortar and use the pestle to crush it thoroughly, mechanically breaking the cellulose cell walls.",
        "Pour the liquid chemical Lysis Buffer into the mashed strawberry mixture to break down the lipid bilayers of the cell and nuclear membranes.",
        "Pass the slurry through a filter funnel setup to separate large cell wall fragments and insoluble cellular debris from the clear liquid filtrate.",
        "Carefully slowly pour ice-cold ethanol down the side of the test tube containing the filtrate to form a distinct upper layer.",
        "Insert the glass rod into the solution interface and slowly spin it to collect and spool the precipitated white DNA fibers."
    ],

    simulationFile: "dna_extractions_plant.html", 
    
    questions: [
        {
            "question": "Which of the following enzymes would be strictly required alongside a lysis buffer to isolate pure DNA from a plant cell but is unnecessary for animal cells?",
            "options": ["Lysozyme", "Cellulase", "Chitinase", "Ribonuclease"],
            "answer": 1
        },
        {
            "question": "During plant DNA extraction, what specific role does Sodium Chloride (NaCl) play in the lysis mixture?",
            "options": ["It denatures RNA molecules explicitly", "It neutralizes the negative charges of the phosphate backbone, allowing DNA strands to aggregate", "It acts as a co-factor for dangerous cellular DNase enzymes", "It breaks down the cellulose layer of the cell wall structure"],
            "answer": 1
        },
        {
            "question": "Why is detergent (like SDS or liquid soap) a mandatory component of a cellular chemical lysis buffer?",
            "options": ["To precipitate the proteins out of the aqueous solution", "To hydrolyze the phosphodiester bonds of structural RNA", "To disrupt and solubilize the lipid bilayers of the plasma and nuclear membranes", "To maintain the physiological pH of the nucleic acids"],
            "answer": 2
        },
        {
            "question": "Why does the genomic DNA visibly precipitate out of the filtrate only after the addition of ice-cold ethanol?",
            "options": ["DNA is completely insoluble in alcohol, causing it to dehydrate and aggregate", "Ethanol chemically breaks the hydrogen bonds between purines and pyrimidines", "Cold alcohol acts as a competitive substrate for restriction endonucleases", "Ethanol converts double-stranded DNA into single-stranded loops"],
            "answer": 0
        },
        {
            "question": "If you wish to completely remove RNA contamination from an extracted genomic DNA sample, which enzyme should you treat the mixture with?",
            "options": ["Protease", "Amylase", "Ribonuclease (RNase)", "Deoxyribonuclease (DNase)"],
            "answer": 2
        },
        {
            "question": "What macromolecular characteristic allows a researcher to wind or 'spool' the precipitated DNA onto a simple glass rod?",
            "options": ["Its highly spherical globular tertiary structure", "Its nature as a long, high-molecular-weight linear polymer", "The presence of unique covalent bonds between different chromosomes", "Its complete transition into a gaseous state under alcohol layers"],
            "answer": 1
        },
        {
            "question": "Which of the following treatments would mistakenly destroy your targeted macromolecule during an isolation experiment?",
            "options": ["Treating the cell extract with Protease enzymes", "Treating the cell extract with Deoxyribonuclease (DNase)", "Treating the cell extract with Ribonuclease (RNase)", "Chilling the alcohol prior to addition"],
            "answer": 1
        },
        {
            "question": "Why are fresh strawberries frequently chosen as excellent target material for classroom DNA extraction demonstrations?",
            "options": ["They completely lack nuclear membranes inside their cells", "They do not contain any proteins or RNA molecules", "They are octaploid (8n), yielding a massive, highly visible quantity of DNA", "Their DNA contains uracil instead of thymine bases"],
            "answer": 2
        },
        {
            "question": "The structural backbone of a single DNA strand is held together by which strong chemical bonds?",
            "options": ["Hydrogen bonds between base pairs", "Phosphodiester bonds between sugars and phosphate groups", "Glycosidic linkages between nitrogenous bases", "Peptide bonds between amino acids"],
            "answer": 1
        },
        {
            "question": "What is the primary reason for utilizing 'ice-cold' ethanol rather than room temperature ethanol during DNA precipitation?",
            "options": ["To activate structural cell wall degrading enzymes", "To lower the solubility of DNA further and maximize extraction yield", "To prevent the evaporation of water from the bottom phase", "To induce mutations within the coding exons"],
            "answer": 1
        }
    ]          
};