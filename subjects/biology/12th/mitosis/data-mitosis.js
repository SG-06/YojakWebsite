// data-mitosis.js
const experimentData = {
    title: "Mitosis Virtual Lab",
    subtitle: "Class 12 Biology - Cell Cycle and Cell Division",
    
    aim: "To prepare and study the stages of mitosis in onion root tip cells",
    
    theory: `
        <div class="theory-section">
            <h3>Introduction to Mitosis</h3>
            <p>Mitosis is the process of nuclear equational division where a single somatic diploid cell duplicates its genetic material and divides into two genetically identical daughter nuclei. This process is essential for cell growth, tissue repair, and vegetative reproduction in multicellular organisms.</p>

            <h3>The Phases of Mitosis</h3>
            <p>Mitosis is organized into four sequential nuclear stages (Karyokinesis) followed by cytoplasmic division:</p>
            <ul>
                <li><strong>Prophase:</strong> Chromatin fibers condense tightly into individual visible chromosomes consisting of two identical sister chromatids joined at the centromere. The nucleolus disappears and the nuclear envelope breaks down. Microtubules extend outwards from separating poles to assemble the mitotic spindle.</li>
                <li><strong>Metaphase:</strong> Spindle fibers attach to protein complexes called kinetochores on the centromeres. The opposing forces align the chromosomes single-file along the horizontal equator of the cell, forming the <em>metaphase plate</em>.</li>
                <li><strong>Anaphase:</strong> Centromeres split, and sister chromatids are pulled apart by shortening spindle fibers. Once separated, each chromatid becomes an independent daughter chromosome migrating to opposite poles.</li>
                <li><strong>Telophase:</strong> Daughter chromosomes reach their respective poles and begin to uncoil back into diffuse chromatin. New nuclear envelopes reform around each set of chromosomes, and the nucleolus reappears.</li>
            </ul>

            <h3>Final Cleavage (Cytokinesis)</h3>
            <p>Following Telophase, cytokinesis physically divides the cytoplasm. In <strong>animal cells</strong>, this occurs via a <em>cleavage furrow</em> formed by a contractile ring of actin and myosin filaments pinching inward. In <strong>plant cells</strong>, due to a rigid, non-flexible cell wall, a <em>cell plate</em> forms along the equator from fusing Golgi vesicles, growing outward to establish a new separating cell wall.</p>

            <h3>Key Cytological Techniques</h3>
            <p>To clearly visualize mitotic divisions under a compound light microscope, specific biochemical and mechanical protocols must be executed:</p>
            <ul>
                <li><strong>Sample Selection (Onion Root Tip):</strong> Root tips are selected because they contain the <em>apical meristem</em>—a region of rapid cell division and active growth in plants, providing a high density of cells at various stages of the cell cycle.</li>
                <li><strong>Fixation and Staining:</strong> Chromosomes are naturally transparent. Acetocarmine or aceto-orcein is a basic dye that binds specifically to the negatively charged, acidic phosphate backbone of <strong>DNA</strong> and associated histone proteins, staining chromatin a distinct purple/red color for high-contrast viewing.</li>
                <li><strong>Squashing (Maceration):</strong> Pressing the cover slip flattens the multi-layered root tissue into a uniform monolayer of cells, spreading out chromosomes so they do not overlap under the microscope objective.</li>
            </ul>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Mitosis Cell Division</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/5bq1To_RKEo?si=jydtvQMbd8bs-Xis" title="YouTube video player" title="Mitosis Lab Explanation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
            </div>

        </div>
    `,
    
    materials: [
        "Onion Root Tips",
        "Acetocarmine Stain Solution",
        "Clean Glass Slides and Cover Slips",
        "Forceps and Mounted Needles",
        "Spirit Lamp / Light Heater",
        "Compound Microscope"
    ],
    
    steps: [
        "Carefully select and place a freshly harvested onion root tip onto the center of a clean glass slide.",
        "Apply 1-2 drops of acetocarmine stain onto the tissue to bind with the DNA matrix and impart contrast.",
        "Gently place a cover slip over the stained root tip and squash firmly with a thumb or needle eraser to flatten tissue into a thin monolayer.",
        "Mount the prepared glass slide onto the stage clips of the compound microscope.",
        "Rotate and scroll the fine focus controls to clear up blur and sharpen the image of individual cells.",
        "Analyze the active field to identify, observe, and log sequential mitotic phases from prophase through cytokinesis."
    ],

    simulationFile: "mitosis.html", 
    
    questions: [
        {
            "question": "Which specific zone of the onion plant is selected to study active mitotic cell division in the laboratory?",
            "options": ["Pith tissue", "Apical meristem of root tips", "Mature vascular bundles", "Epidermal leaf scales"],
            "answer": 1
        },
        {
            "question": "Acetocarmine or aceto-orcein stains are specifically utilized in chromosome preparations because they bind to:",
            "options": ["Cellulose cell walls", "Lipids in the plasma membrane", "Acidic phosphate backbones of DNA/histones", "Starch granules in vacuoles"],
            "answer": 2
        },
        {
            "question": "During which phase of karyokinesis do chromosomes condense and become clearly visible under a light microscope?",
            "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            "answer": 0
        },
        {
            "question": "Alignment of chromosomes single-file along the equatorial plane characterizes which stage of mitosis?",
            "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            "answer": 1
        },
        {
            "question": "What structural event marks the precise initiation of Anaphase during mitotic division?",
            "options": ["Dissolution of the nuclear envelope", "Splitting of centromeres and separation of sister chromatids", "Reappearance of the nucleolus", "Formation of Golgi vesicle alignments"],
            "answer": 1
        },
        {
            "question": "If an onion root tip cell has a diploid count of 16 chromosomes (2n = 16), how many chromosomes migrate to each pole during Anaphase?",
            "options": ["8", "16", "32", "64"],
            "answer": 1
        },
        {
            "question": "How does plant cell cytokinesis structurally differ from animal cell cytokinesis?",
            "options": ["Plant cells pinch via an actin contractile ring", "Plant cells form a cell plate that grows centripetally from the outside in", "Plant cells form a cell plate from fusing Golgi vesicles growing centrifugally", "Plant cells bypass cytokinesis completely"],
            "answer": 2
        },
        {
            "question": "The dynamic spindle fibers that drag separated chromatids toward opposing poles attach to which part of the chromosome?",
            "options": ["Kinetochores at the centromere region", "Telomeric end caps", "Nuclear matrix proteins", "Chromonema matrices"],
            "answer": 0
        },
        {
            "question": "Re-formation of the nuclear envelope and decondensation of individual chromosomes back into diffuse chromatin occur during:",
            "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            "answer": 3
        },
        {
            "question": "What is the primary genetic significance of mitotic cell division in multicellular organisms?",
            "options": ["It introduces alleles through crossing over", "It reduces chromosome number to half", "It ensures precise, equational preservation of identical genetic material in daughter cells", "It generates random independent assortment of traits"],
            "answer": 2
        }
    ]          
};