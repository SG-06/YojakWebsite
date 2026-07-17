// data-food-test.js
const experimentData = {
    title: "Blood Group Indentification ",
    subtitle: "Class 12 Biology - Life Processes & Nutrition",
    
    aim: "To identify the blood group of a person using ABO and Rh Blood Typing Laboratory Procedure.",
    
    theory: `
        <div class="theory-section">
        <!-- Phase 1 -->
        <h2>1. The Clinical Lab Bench Phase (Macroscopic Level)</h2>
        <p>In the first phase, you perform the standard bedside/laboratory testing method using a three-well glass slide. This replicates the visual verification process conducted by hematologists to screen core blood profiles.</p>
    
        <ul>
            <li>
                <strong>The Patient Sample:</strong> You place three drops of blood from an unknown patient (hardcoded in this script as an <span class="badge type">A+</span> individual) onto the slide.
            </li>
        <li>
            <strong>The Reagent Serums:</strong> You add chemically manufactured antibody solutions into each distinct well:
            <ul>
                <li><strong style="color: var(--anti-a);">Anti-A Serum:</strong> Contains Anti-A antibodies.</li>
                <li><strong style="color: var(--anti-b);">Anti-B Serum:</strong> Contains Anti-B antibodies.</li>
                <li><strong style="color: var(--anti-d);">Anti-D Serum:</strong> Contains Rh antibodies (which determine if a blood type is positive or negative).</li>
            </ul>
        </li>
        <li>
            <strong>The Mixer &amp; Agglutination:</strong> When you mix the fluids, you look for agglutination (clumping). Clumping is a positive result, indicating that the matching antigen is present on the patient's red blood cells. Because the sample clumps in the <span class="badge a">Anti-A</span> and <span class="badge d">Anti-D</span> wells, but stays completely liquid in the <span class="badge b">Anti-B</span> well, the program accurately diagnoses the patient as <strong>A Positive (A+)</strong>.
        </li>
        </ul>
        </div>
</div>

            <h4 style="color:var(--primary); font-size:1.4rem;">Video Explanation: Identifying Blood Group</h4>
            <div class="video-box" style="background: #000; padding: 15px; border-radius: 15px; margin: 20px 0; text-align: center;">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/iSADEOvYAhI?si=nmr4Q82WGi0BNTdx" title="Food Test Lab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>
            </div>
        </div>
    `,
    
    materials: [
        "Patient Unknown Blood Sample",
        "Anti A Serum",
        "Anti B Serum",
        "Anti D Serum",
        "Mixer Stick",
        "Microscope"
    ],
    
    steps: [
        "Put three drops of patient blood sample on the testing slide.",
        "Add Anti Serum A, B and D into the three blood sample respectively",
        "Mix the three sample well",
        "After some time, observe which samples remains liquid and which samples are clumping",
    ],

    simulationFile: "blood_grp_determine.html", 
    
    questions: [
        {
            "question": "Which of the following genetic phenomena is perfectly illustrated by the human ABO blood grouping system?",
            "options": ["Incomplete dominance", "Co-dominance and Multiple allelism", "Chromosomal aberration", "Polygenic inheritance"],
            "answer": 1
        },
        {
            "question": "A person with blood group O negative undergoes a major accident and requires an immediate blood transfusion. Which blood type can be safely administered to this patient?",
            "options": ["O Positive", "AB Negative", "O Negative", "A Negative"],
            "answer": 2
        },
        {
            "question": "If a father has blood group A (genotype I^A i) and the mother has blood group B (genotype I^B i), what is the probability that their child will have blood group O?",
            "options": ["0%", "25%", "50%", "75%"],
            "answer": 1
        },
        {
            "question": "Which specific sugar polymer is present on the surface of the plasma membrane of red blood cells in a person with blood group O?",
            "options": ["N-acetylgalactosamine", "Galactose", "Only the basic precursor H-antigen core stub without additional sugar terminal branches", "Both glucose and fructose branches"],
            "answer": 2
        },
        {
            "question": "Agglutination of red blood cells is an immunological reaction that occurs because antibodies are typically at least divalent. What kind of interaction does this represent?",
            "options": ["Antigen-Antibody precipitation", "Cross-linking of particulate antigens by antibodies", "Neutralization of toxins", "Opsonization of bacterial cell walls"],
            "answer": 1
        },
        {
            "question": "Erythroblastosis fetalis (Hemolytic disease of the newborn) is a severe condition that can occur during a second pregnancy under which specific condition?",
            "options": ["Rh-positive mother carrying an Rh-negative fetus", "Rh-negative mother carrying an Rh-positive fetus", "Rh-positive mother carrying an Rh-positive fetus", "Rh-negative mother carrying an Rh-negative fetus"],
            "answer": 1
        },
        {
            "question": "Which antibody class is responsible for the ABO blood group naturally occurring isohemagglutinins, which typically cannot cross the placental barrier?",
            "options": ["IgG", "IgE", "IgA", "IgM"],
            "answer": 3
        },
        {
            "question": "An unknown blood sample shows strong clumping when mixed with Anti-B serum and Anti-D serum, but remains completely smooth when mixed with Anti-A serum. What is the blood type?",
            "options": ["B Positive", "A Positive", "AB Negative", "O Negative"],
            "answer": 0
        },
        {
            "question": "The allele i does not produce any surface antigen on red blood cells because:",
            "options": ["It undergoes structural mutation during mitosis", "It produces an inactive enzyme that fails to modify the structural H antigen stub", "It causes early degradation of the RBC membrane proteins", "It alters the shape of the hemoglobin molecule itself"],
            "answer": 1
        },
        {
            "question": "How many distinct genotypes and phenotypes are possible in the human population for the ABO blood grouping system managed by the three alleles (I^A, I^B, and i)?",
            "options": ["4 genotypes, 6 phenotypes", "6 genotypes, 4 phenotypes", "6 genotypes, 6 phenotypes", "3 genotypes, 4 phenotypes"],
            "answer": 1
        }
    ]
          
};