// data-meiosis.js
const experimentData = {
    title: "Meiosis Virtual Lab",
    subtitle: "Class 12 Biology - Cell Cycle and Cell Division",
    
    aim: "To prepare and study the stages of meiosis in flower anther tissue (pollen mother cells)",
    
    theory: `
        <div class="theory-section">
            <h3>Introduction to Meiosis</h3>
            <p>Meiosis is a highly specialized, double-division process that reduces the chromosome number by half 2n->n, resulting in four genetically unique haploid gamete cells. This process is vital for sexual reproduction, ensuring a stable chromosome number across generations while generating genetic diversity.</p>

            <h3>Key Cytological Techniques</h3>
            <p>To visualize meiotic divisions in the laboratory, specific biochemical protocols must be executed:</p>
            <ul>
                <li><strong>Tissue Selection:</strong> Young flower buds (anthers) are selected because they house actively dividing microspore (pollen) mother cells undergoing meiosis.</li>
                <li><strong>Fixation and Staining:</strong> Acetocarmine is an acidic dye that specifically binds to basic histone proteins in chromosomes, staining chromatin a distinct red/pink color for high-contrast viewing.</li>
                <li><strong>Squashing (Maceration):</strong> Pressing the coverslip flattens the multi-layered anther tissue into a monolayer of cells, spreading out chromosomes so they do not overlap under the microscope objective.</li>
            </ul>

            <h3>The Phases of Meiosis</h3>
            <p>Meiosis is organized into two consecutive nuclear divisions:</p>
            <ul>
                <li><strong>Meiosis I (Reductional Division):</strong> Homologous chromosome pairs undergo synapsis and exchange genetic fragments (crossing over) during <em>Prophase I</em>. In <em>Metaphase I</em>, homologous pairs align side-by-side. In <em>Anaphase I</em>, entire homologous chromosomes are pulled to opposite poles while sister chromatids remain structurally joined at their centromeres.</li>
                <li><strong>Meiosis II (Equational Division):</strong> Resembling mitosis, chromosomes align single-file at the equator during <em>Metaphase II</em>. During <em>Anaphase II</em>, centromeres split, separating sister chromatids into individual, single-stranded chromosomes that move to opposing poles.</li>
            </ul>

            <h3>Final Cleavage</h3>
            <p>Following Telophase II and cytokinesis, four non-identical haploid (n) daughter cells (gametes) are generated. Due to crossing over in Prophase I and random independent assortment in Metaphase I, each gamete carries a completely unique combination of alleles.</p>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Meiosis Cell Divsion</h4>
            <div class="video-box">
    <iframe
        src="https://www.youtube.com/embed/3VOLjACdbTs?si=lTQpf4fXM1UPPPtG&amp;start=1"
        title="MITOSIS"
        allowfullscreen>
    </iframe>

    <p class="video-credit">
        🎥 Video Credit:
        <a href="https://www.youtube.com/embed/3VOLjACdbTs?si=lTQpf4fXM1UPPPtG&amp;start=1" 
           target="_blank"
           rel="noopener noreferrer">
            Quizlet
        </a>
    </p>
</div>


        </div>
    `,
    
    materials: [
        "Young Flower Buds (Anthers)",
        "Acetocarmine Stain Solution",
        "Clean Glass Slides and Cover Slips",
        "Inoculating Needle / Forceps",
        "Spirit Lamp / Slide Warmer",
        "Compound Microscope"
    ],
    
    steps: [
        "Carefully harvest young flower anthers from a bud sample and place them in the center of a clean glass slide.",
        "Apply 1-2 drops of acetocarmine stain to fix the tissues and color the chromatin structure.",
        "Place a coverslip gently on top of the sample and apply minor pressure to squash and flatten the cellular layers into a monolayer.",
        "Place the prepared slide onto the microscope stage and align it with the objective optical path.",
        "Adjust the focus controls to sharpen resolution and locate clear, individual pollen mother cells.",
        "Observe and analyze the sequential stages of Meiosis I and Meiosis II, tracking chromosome separation."
    ],

    simulationFile: "Meiosis.html", 
    
    questions: [
        {
            "question": "Which of the following stains is specifically used to dye chromosomes during meiotic slide preparation?",
            "options": ["Safranin", "Acetocarmine", "Methylene Blue", "Crystal Violet"],
            "answer": 1
        },
        {
            "question": "During which stage of Prophase I does crossing over (exchange of genetic material) take place?",
            "options": ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
            "answer": 2
        },
        {
            "question": "Why are flower anthers chosen to study meiosis in botany labs instead of root tips?",
            "options": ["Root tips undergo rapid binary fission", "Anthers contain germ line cells (pollen mother cells) undergoing meiosis", "Anther tissue lacks tough cell walls", "Root tips contain haploid cells only"],
            "answer": 1
        },
        {
            "question": "What is the key structural difference between Metaphase I and Metaphase II alignment?",
            "options": ["Chromosomes align side-by-side in Metaphase I and single-file in Metaphase II", "Chromosomes align single-file in Metaphase I and side-by-side in Metaphase II", "Spindle fibers fail to attach in Metaphase II", "Nuclear envelopes reform prior to Metaphase I"],
            "answer": 0
        },
        {
            "question": "During Anaphase I of meiosis, which structures are segregated to opposite poles?",
            "options": ["Sister chromatids", "Homologous chromosomes", "Centrioles", "Recombinant nuclear envelopes"],
            "answer": 1
        },
        {
            "question": "At which point do the centromeres split, allowing sister chromatids to move to opposite poles?",
            "options": ["Anaphase I", "Metaphase I", "Anaphase II", "Telophase I"],
            "answer": 2
        },
        {
            "question": "If a diploid microspore mother cell has 24 chromosomes (2n = 24), how many chromosomes will be present in each of the four gametes after Telophase II?",
            "options": ["48", "24", "12", "6"],
            "answer": 2
        },
        {
            "question": "The process of pairing homologous chromosomes side-by-side in Prophase I is called:",
            "options": ["Chiasma", "Synapsis", "Karyokinesis", "Interkinesis"],
            "answer": 1
        },
        {
            "question": "What primary evolutionary advantage does meiosis provide over mitosis?",
            "options": ["It clones exact genetic copies of parent cells", "It doubles the chromosome number to increase cell size", "It generates immense genetic diversity through recombination and independent assortment", "It occurs much faster than mitotic division"],
            "answer": 2
        },
        {
            "question": "What holds sister chromatids together during Anaphase I division?",
            "options": ["Spindle fibers", "The centromere", "Chiasmata nodes", "Cell plate"],
            "answer": 1
        }
    ]          
};