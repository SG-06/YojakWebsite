const experimentData = {
    title: "Cell Structure, Kingdom Sorting & Identification",
    subtitle: "Class 9 & 10 Biology - Diversity in Living Organisms",
    
    aim: "To distinguish between prokaryotic and eukaryotic cellular structures, sort diverse specimens into their respective kingdoms, and perform systematic taxonomic identification of a multicellular eukaryotic organism.",
    
    theory: `
        <div class="theory-section">
            <p style="font-size:1.1rem; line-height:1.6; color:#2d4a47; margin-bottom:25px;">
                All living organisms are classified based on their cellular organization, body design, and mode of nutrition. The first major division of life is based on <b>Cellular Complexity</b>: distinguishing between organisms that lack a defined nucleus (<b>Prokaryotes</b>) and those that possess membrane-bound nuclei and organelles (<b>Eukaryotes</b>).
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin: 30px 0;">
                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">🔬 Prokaryotes (Kingdom Monera)</h4>
                    <p>These organisms lack a membrane-bound nucleus and membrane-bound cell organelles. Their genetic material floats freely in a region called the nucleoid. <b>Example:</b> Bacteria.</p>
                </div>

                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--secondary); margin-top:0;">🧬 Eukaryotes (Other Kingdoms)</h4>
                    <p>These organisms possess a highly organized, membrane-bound nucleus hosting their DNA, along with specialized organelles like mitochondria and chloroplasts. <b>Examples:</b> Fungi, Plants, and Animals.</p>
                </div>
            </div>

            <h4 style="color:var(--primary); font-size:1.4rem;">Whittaker's Five Kingdom Classification</h4>
            <table style="width:100%; border-collapse: collapse; margin-top:10px; background: white;">
                <tr style="background:var(--primary); color:white;">
                    <th style="padding:15px; border:1px solid #ddd;">Kingdom</th>
                    <th style="padding:15px; border:1px solid #ddd;">Cell Type</th>
                    <th style="padding:15px; border:1px solid #ddd;">Cell Wall</th>
                    <th style="padding:15px; border:1px solid #ddd;">Mode of Nutrition</th>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Monera</td>
                    <td style="padding:12px; border:1px solid #ddd;">Prokaryotic</td>
                    <td style="padding:12px; border:1px solid #ddd;">Non-cellulosic (Peptidoglycan)</td>
                    <td style="padding:12px; border:1px solid #ddd;">Autotrophic / Heterotrophic</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Fungi</td>
                    <td style="padding:12px; border:1px solid #ddd;">Eukaryotic</td>
                    <td style="padding:12px; border:1px solid #ddd;">Present (Chitin)</td>
                    <td style="padding:12px; border:1px solid #ddd;">Heterotrophic (Saprophytic)</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Plantae</td>
                    <td style="padding:12px; border:1px solid #ddd;">Eukaryotic</td>
                    <td style="padding:12px; border:1px solid #ddd;">Present (Cellulose)</td>
                    <td style="padding:12px; border:1px solid #ddd;">Autotrophic (Photosynthetic)</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Animalia</td>
                    <td style="padding:12px; border:1px solid #ddd;">Eukaryotic</td>
                    <td style="padding:12px; border:1px solid #ddd;">Absent</td>
                    <td style="padding:12px; border:1px solid #ddd;">Heterotrophic (Holozoic)</td>
                </tr>
            </table>

            <h4 style="color:var(--primary); font-size:1.4rem; margin-top:40px;">Video Demonstration</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/URUJD5NEXC8?si=_5mgOrpYDgZKcqvg" title="Classification of Living Organisms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
                <p style="color: #bbb; font-size: 0.85rem; margin-top: 10px;">Visual Guide: Overview of Kingdoms and Cellular Domains (Video courtesy of <b>Nucleus Medical Media</b>)</p>
            </div>

            <div style="background: #fff8e1; padding: 20px; border-radius: 10px; border-left: 5px solid #ffc107; margin-top:30px;">
                <h4 style="color:#f57f17; margin-top:0;">Taxonomic Hierarchy</h4>
                <p>Taxonomy is the science of naming, describing, and classifying organisms. Organisms are grouped in hierarchical tiers: <b>Domain ➔ Kingdom ➔ Phylum ➔ Class ➔ Order ➔ Family ➔ Genus ➔ Species</b>. Understanding this hierarchy helps us map evolutionary relationships (phylogeny) among diverse species.</p>
            </div>
        </div>
    `,
    
    materials: [
        "Prokaryotic Specimen slide (Bacteria)",
        "Multicellular Eukaryotic Fungi slide (Mushroom)",
        "Multicellular Plant Specimen (Tree)",
        "Multicellular Animal Specimen (Tiger)",
        "Virtual Classification Sorting Bins",
        "Taxonomic Identification Keys",
        "Laboratory Observer's Journal"
    ],
    
    steps: [
        "<b>Step 1: Cell Structure Separation</b> - Inspect each specimen and sort them based on whether they contain a nucleus (Eukaryotes) or do not (Prokaryotes) into the correct bins.",
        "<b>Step 2: Kingdom Classification</b> - Identify multicellular organisms within the Eukaryote bin to distinguish between Fungi, Plants, and Animals.",
        "<b>Step 3: Deep Identification</b> - Select the Animal specimen (Bengal Tiger) from the sorting table to activate taxonomic analysis.",
        "<b>Step 4: Taxonomic Mapping</b> - Analyze and record the structural hierarchy (Domain, Kingdom, Phylum, Class) of the animal in the Lab Journal."
    ],

    simulationFile: "cellstructure-kingdomsorting-identification-sim.html", 
    
    questions: [
        {
            question: "What is the primary defining structural difference between prokaryotes and eukaryotes?",
            options: ["The presence of a cell wall", "The presence of a membrane-bound nucleus", "The presence of ribosomes", "The ability to perform photosynthesis"],
            answer: 1
        },
        {
            question: "To which kingdom does a unicellular, prokaryotic organism like Bacteria belong?",
            options: ["Protista", "Fungi", "Monera", "Plantae"],
            answer: 2
        },
        {
            question: "Fungi are distinct from plants because their cell walls are composed of:",
            options: ["Cellulose", "Peptidoglycan", "Chitin", "Silica"],
            answer: 2
        },
        {
            question: "Which of the following kingdoms is characterized by eukaryotic cells without a cell wall?",
            options: ["Animalia", "Plantae", "Fungi", "Monera"],
            answer: 0
        },
        {
            question: "Who proposed the Five Kingdom Classification system of living organisms?",
            options: ["Charles Darwin", "Gregor Mendel", "Robert Whittaker", "Carl Linnaeus"],
            answer: 2
        },
        {
            question: "The Bengal Tiger belongs to which taxonomic class?",
            options: ["Aves", "Mammalia", "Reptilia", "Amphibia"],
            answer: 1
        },
        {
            question: "What is the correct order of taxonomic hierarchy from broadest to most specific?",
            options: ["Domain -> Kingdom -> Class -> Phylum", "Kingdom -> Domain -> Phylum -> Class", "Domain -> Kingdom -> Phylum -> Class", "Kingdom -> Phylum -> Family -> Class"],
            answer: 2
        },
        {
            question: "Organisms that feed on dead and decaying organic matter are termed:",
            options: ["Autotrophs", "Saprophytes", "Parasites", "Holozoic"],
            answer: 1
        },
        {
            question: "Which of the following is a multicellular photosynthetic eukaryote?",
            options: ["Bacteria", "Mushroom", "Tree", "Tiger"],
            answer: 2
        },
        {
            question: "To which Domain does the Tiger, the Mushroom, and the Tree belong?",
            options: ["Archaea", "Bacteria", "Eukarya", "Monera"],
            answer: 2
        },
        {
            question: "Which kingdom includes eukaryotic, mostly unicellular organisms like Amoeba?",
            options: ["Monera", "Protista", "Fungi", "Animalia"],
            answer: 1
        },
        {
            question: "What type of cellular nutrition is exhibited by plants?",
            options: ["Saprozoic", "Heterotrophic", "Autotrophic", "Parasitic"],
            answer: 2
        },
        {
            question: "What is the cell wall of plant cells made of?",
            options: ["Cellulose", "Chitin", "Peptidoglycan", "Protein"],
            answer: 0
        },
        {
            question: "To which phylum does the Bengal Tiger belong?",
            options: ["Arthropoda", "Annelida", "Chordata", "Mollusca"],
            answer: 2
        },
        {
            question: "Which structural feature is absent in animal cells but present in plant cells?",
            options: ["Nucleus", "Cell Membrane", "Chloroplast", "Ribosomes"],
            answer: 2
        }
    ]
};