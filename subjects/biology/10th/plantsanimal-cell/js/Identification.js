/**
 * BIO-CORE - IDENTIFICATION MODULE
 * Handles organelle database, hotspot injection, and narration.
 */
export class Identification {
    constructor(viewer, infoHud) {
        this.viewer = viewer;
        this.infoHud = infoHud;
        this.isActive = false;

        // Biological Database for both specimens
        this.cellData = {
            plant: {
                "NUCLEOLUS": "The dense area inside the nucleus where ribosomes are produced.",
                "CHLOROPLAST": "Organelle that captures light energy for photosynthesis.",
                "GOLGI APPARATUS": "The packaging center that modifies and sorts proteins.",
                "MITOCHONDRIA": "The powerhouse that converts nutrients into ATP energy.",
                "WALL OF ADJACENT CELL": "The shared boundary between plant cells providing structural support.",
                "PLASMA MEMBRANE": "A semi-permeable layer regulating what enters and leaves the cell.",
                "PEROXISOME": "Membrane-bound organelle involved in lipid metabolism and chemical detoxification.",
                "CENTRAL VACUOLE": "A large sac used for storage and maintaining turgor pressure."
            },
            animal: {
                "NUCLEOLUS": "The center of the nucleus responsible for ribosome synthesis.",
                "NUCLEUS": "The brain of the cell containing the animal's genetic material.",
                "LYSOSOMES": "Small sacs containing enzymes to break down waste materials.",
                "MITOCHONDRIA": "Converts chemical energy from food into cellular fuel (ATP).",
                "CENTRIOLES": "Cylindrical structures that help coordinate cell division.",
                "ROUGH ENDOPLASMIC RETICULUM": "Studded with ribosomes; involved in protein synthesis and transport.",
                "SMOOTH ENDOPLASMIC RETICULUM": "Responsible for lipid synthesis and detoxification processes.",
                "CHROMATIN": "Mass of genetic material (DNA and proteins) that condenses to form chromosomes.",
                "GOLGI APPARATUS": "The shipping department of the cell, sorting and tagging proteins.",
                "CYTOPLASM": "The jelly-like fluid that fills the cell and surrounds the organelles.",
                "PLASMA MEMBRANE": "The flexible outer boundary that regulates molecular traffic."
            }
        };

        // Hotspot Coordinates
        this.hotspots = {
            plant: [
                { name: "NUCLEOLUS", pos: "7.052m 0.299m -1.531m", norm: "-0.726m 0.423m 0.542m" },
                { name: "CHLOROPLAST", pos: "8.527m 0.008m 1.927m", norm: "-0.097m 0.980m 0.168m" },
                { name: "CHLOROPLAST", pos: "5.682m 1.705m -0.136m", norm: "0.609m 0.544m 0.576m" },
                { name: "GOLGI APPARATUS", pos: "5.250m -0.029m 1.277m", norm: "-0.765m 0.069m 0.639m" },
                { name: "MITOCHONDRIA", pos: "6.559m 0.130m 3.094m", norm: "0.304m 0.098m 0.947m" },
                { name: "WALL OF ADJACENT CELL", pos: "8.913m 0.851m 4.765m", norm: "0.477m 0.450m 0.754m" },
                { name: "PLASMA MEMBRANE", pos: "4.278m 0.974m -1.198m", norm: "-0.681m 0.147m -0.717m" },
                { name: "PEROXISOME", pos: "9.367m 0.096m 0.935m", norm: "0.728m 0.631m 0.266m" },
                { name: "CENTRAL VACUOLE", pos: "7.203m 0.730m 0.541m", norm: "-0.347m 0.836m -0.423m" }
            ],
            animal: [
                { name: "NUCLEOLUS", pos: "-0.390m 0.485m -0.380m", norm: "-0.974m 0.215m 0.064m" },
                { name: "NUCLEUS", pos: "-0.179m 0.778m -1.346m", norm: "0.135m 0.802m -0.581m" },
                { name: "LYSOSOMES", pos: "1.881m -0.014m -0.135m", norm: "-0.442m 0.528m -0.724m" },
                { name: "MITOCHONDRIA", pos: "-0.356m 0.128m 3.136m", norm: "0.440m 0.285m -0.851m" },
                { name: "CENTRIOLES", pos: "-1.222m 0.052m 2.373m", norm: "-0.505m 0.045m -0.861m" },
                { name: "ROUGH ENDOPLASMIC RETICULUM", pos: "-0.337m -0.005m 0.906m", norm: "0.145m 0.001m 0.989m" },
                { name: "SMOOTH ENDOPLASMIC RETICULUM", pos: "-0.958m 0.627m 2.052m", norm: "0.430m 0.227m 0.873m" },
                { name: "CHROMATIN", pos: "-0.941m 0.179m -0.221m", norm: "0.000m 0.999m 0.000m" },
                { name: "GOLGI APPARATUS", pos: "1.539m 0.049m 1.895m", norm: "0.687m -0.088m 0.721m" },
                { name: "CYTOPLASM", pos: "0.618m -0.088m 3.160m", norm: "0.103m 0.994m -0.007m" },
                { name: "PLASMA MEMBRANE", pos: "-1.611m -0.419m 3.476m", norm: "-0.778m -0.036m 0.626m" }
            ]
        };
    }

    activate(mode) {
        this.isActive = true;
        if (this.infoHud) this.infoHud.classList.remove('hidden');
        this.viewer.autoRotate = false;
        this.clearHotspots();
        this.injectHotspots(mode);
    }

    deactivate() {
        this.isActive = false;
        if (this.infoHud) this.infoHud.classList.add('hidden');
        window.speechSynthesis.cancel();
        this.clearHotspots();
    }

    /**
     * Injects the 3D hotspots with the specific structure requested
     */
    injectHotspots(mode) {
        const points = this.hotspots[mode] || [];
        points.forEach((point, index) => {
            // APPLYING YOUR REQUESTED CHANGES HERE
            const button = document.createElement('button');
            button.classList.add('Hotspot');
            button.slot = `hotspot-${index + 1}`;
            button.dataset.position = point.pos;
            button.dataset.normal = point.norm;

            // IMPORTANT: Ensuring the child div structure is correct for CSS
            button.innerHTML = `<div class="HotspotAnnotation">${point.name}</div>`;

            button.onclick = () => this.displayOrganelleData(point.name, mode);
            this.viewer.appendChild(button);
        });
    }

    clearHotspots() {
        const existing = this.viewer.querySelectorAll('.Hotspot');
        existing.forEach(h => h.remove());
    }

    displayOrganelleData(name, mode) {
        const description = this.cellData[mode][name] || "Structure analysis in progress...";
        const nameEl = document.getElementById('part-name');
        const descEl = document.getElementById('part-description');
        if (nameEl) nameEl.innerText = name;
        if (descEl) descEl.innerText = description;
        this.narrate(name, description);
    }

    narrate(title, text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${title}. ${text}`);
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    }
}