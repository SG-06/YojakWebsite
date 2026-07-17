const experimentData = {
    title: "Mendel's Monohybrid Cross",
    subtitle: "Class 10 Biology - Heredity and Evolution",
    
    aim: "To study the inheritance of a single pair of contrasting characters (plant height) in pea plants (Pisum sativum) to verify Mendel's Law of Segregation and determine phenotypic and genotypic ratios.",
    
    theory: `
        <div class="theory-section">
            <p style="font-size:1.1rem; line-height:1.6; color:#2d4a47; margin-bottom:25px;">
                <b>Gregor Johann Mendel</b> established the fundamental laws of inheritance through his work with the garden pea, <i>Pisum sativum</i>. A <b>Monohybrid Cross</b> focuses on a single trait—in this case, <b>Stem Height</b>—to track how alleles are transmitted from parents to offspring.
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 25px; margin: 30px 0;">
                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">1. Law of Dominance</h4>
                    <p>When two contrasting alleles are present (Tt), the <b>Dominant</b> allele (T) expresses itself, while the <b>Recessive</b> allele (t) remains hidden. The F1 generation always shows the dominant phenotype.</p>
                    
                </div>

                <div style="background: #f8fdfc; padding: 25px; border-radius: 15px; border: 1px solid #e0eeed;">
                    <h4 style="color:var(--primary); margin-top:0;">2. Law of Segregation</h4>
                    <p>During gamete formation (meiosis), allele pairs separate. Each gamete receives only one allele. This ensures that the recessive trait can reappear in the F2 generation.</p>
                                   </div>
            </div>

            <h4 style="color:var(--primary); font-size:1.4rem;">Genetic Analysis Summary</h4>
            <table style="width:100%; border-collapse: collapse; margin-top:10px; background: white;">
                <tr style="background:var(--primary); color:white;">
                    <th style="padding:15px; border:1px solid #ddd;">Feature</th>
                    <th style="padding:15px; border:1px solid #ddd;">Phenotypic Ratio (F2)</th>
                    <th style="padding:15px; border:1px solid #ddd;">Genotypic Ratio (F2)</th>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Result</td>
                    <td style="padding:12px; border:1px solid #ddd;">3 Tall : 1 Dwarf</td>
                    <td style="padding:12px; border:1px solid #ddd;">1 TT : 2 Tt : 1 tt</td>
                </tr>
                <tr>
                    <td style="padding:12px; border:1px solid #ddd; font-weight:bold;">Interpretation</td>
                    <td style="padding:12px; border:1px solid #ddd;">75% Dominant trait, 25% Recessive</td>
                    <td style="padding:12px; border:1px solid #ddd;">25% Homo. Dom, 50% Hetero, 25% Homo. Rec</td>
                </tr>
            </table>

            <h4 style="color:var(--primary); font-size:1.4rem; margin-top:40px;">Video Demonstration</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/Mehz7tCxjSE?si=DILcAETce6Gq4d34" title="Monohybrid Cross Lab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
                <p style="color: #666; font-size: 0.8rem; margin-top: 10px;">credit: Amoeba Sisters Educational Content</p>
            </div>

            <div style="background: #fff8e1; padding: 20px; border-radius: 10px; border-left: 5px solid #ffc107; margin-top:30px;">
                <h4 style="color:#f57f17; margin-top:0;">Real-World Application</h4>
                <p>Monohybrid crosses are used in agriculture to predict crop yields and trait inheritance (like disease resistance) and in medicine to calculate the probability of offspring inheriting single-gene disorders like Cystic Fibrosis or Sickle Cell Anemia.</p>
            </div>
        </div>
    `,
    
    materials: [
        "Pure-breeding Tall Pea Plant (TT)",
        "Pure-breeding Dwarf Pea Plant (tt)",
        "Pollination Brushes & Forceps",
        "Breeding Pots and Nutrient Soil",
        "Punnett Square Computational Grid",
        "Labeling Tags and Laboratory Journal",
        "Microscope for Gamete Observation"
    ],
    
    steps: [
        "<b>Step 1: Selection</b> - Drag a Homozygous Tall (TT) and Homozygous Dwarf (tt) plant into the workspace.",
        "<b>Step 2: Cross-Pollination</b> - Simulate the transfer of pollen to create the F1 generation.",
        "<b>Step 3: F1 Observation</b> - Observe that 100% of the F1 plants are tall, confirming the Law of Dominance.",
        "<b>Step 4: Gamete Formation</b> - Watch the molecular view to see alleles (T and t) segregate into gametes.",
        "<b>Step 5: Punnett Square</b> - Drag gametes to the grid to predict the F2 generation results.",
        "<b>Step 6: Statistical Count</b> - Identify the 3:1 phenotypic ratio and 1:2:1 genotypic ratio.",
        "<b>Step 7: Recording</b> - Log the results in the journal for evaluation."
    ],

    simulationFile: "monohybrid-cross-sim.html", 
    
    questions: [
        {
            question: "Who is known as the Father of Genetics?",
            options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Jean-Baptiste Lamarck"],
            answer: 1
        },
        {
            question: "What is the scientific name of the garden pea used by Mendel?",
            options: ["Oryza sativa", "Pisum sativum", "Zea mays", "Hibiscus rosa-sinensis"],
            answer: 1
        },
        {
            question: "Which ratio represents the phenotypic frequency in the F2 generation?",
            options: ["1:2:1", "1:1", "3:1", "9:3:3:1"],
            answer: 2
        },
        {
            question: "An organism with two identical alleles for a trait is called:",
            options: ["Heterozygous", "Dominant", "Homozygous", "Recessive"],
            answer: 2
        },
        {
            question: "Which allele expresses itself in the presence of a contrasting allele?",
            options: ["Recessive", "Incomplete", "Co-dominant", "Dominant"],
            answer: 3
        },
        {
            question: "During which process does the Law of Segregation occur?",
            options: ["Mitosis", "Meiosis", "Fertilization", "Budding"],
            answer: 1
        },
        {
            question: "In a cross between TT and tt, the phenotype of the F1 generation is:",
            options: ["All Dwarf", "50% Tall, 50% Dwarf", "All Tall", "Medium height"],
            answer: 2
        },
        {
            question: "The physical appearance of an organism is its:",
            options: ["Genotype", "Allele", "Locus", "Phenotype"],
            answer: 3
        },
        {
            question: "What is the genotypic ratio of the F2 generation?",
            options: ["3:1", "1:2:1", "1:1", "4:0"],
            answer: 1
        },
        {
            question: "If 'T' is tall and 't' is dwarf, what is the phenotype of a 'Tt' plant?",
            options: ["Dwarf", "Tall", "Short-Tall mix", "Medium"],
            answer: 1
        },
        {
            question: "A Punnett square is used to:",
            options: ["Measure plant height", "Extract DNA", "Predict probable genetic outcomes", "Magnify cells"],
            answer: 2
        },
        {
            question: "How many contrasting traits did Mendel study in pea plants?",
            options: ["3", "5", "7", "9"],
            answer: 2
        },
        {
            question: "Which of these is a homozygous recessive genotype?",
            options: ["TT", "Tt", "tT", "tt"],
            answer: 3
        },
        {
            question: "What percentage of offspring in an F2 monohybrid cross are expected to be dwarf?",
            options: ["0%", "25%", "50%", "75%"],
            answer: 1
        },
        {
            question: "The trait that disappears in F1 but reappears in F2 is:",
            options: ["Dominant", "Recessive", "Lethal", "Mutant"],
            answer: 1
        },
        {
            question: "Mendel's Law of Segregation states that gametes carry how many alleles for a trait?",
            options: ["Zero", "One", "Two", "Four"],
            answer: 1
        },
        {
            question: "Why did Mendel choose pea plants?",
            options: ["Long life cycle", "Hard to grow", "Clearly distinct contrasting traits", "No self-pollination"],
            answer: 2
        }
    ]
};