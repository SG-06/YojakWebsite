/**
 * Identification Module - Human Digestive System
 */
export class Identification {
    constructor(viewer, infoHud) {
        this.viewer = viewer;
        this.infoHud = infoHud;
        this.isActive = false;

        this.partNameDisplay = document.getElementById('part-name');
        this.partDescDisplay = document.getElementById('part-description');
        this.phDisplay = document.getElementById('ph-data');

        this.descriptions = {
            "LIVER": { ph: "8.0", desc: "The liver produces bile and filters toxins from the blood." },
            "STOMACH": { ph: "2.0", desc: "Uses acid and enzymes to turn food into a liquid called chyme." },
            "GALLBLADDER": { ph: "7.5", desc: "A small pouch that stores bile for fat digestion." },
            "DUODENUM": { ph: "6.0", desc: "The first part of the small intestine where most chemical digestion occurs." },
            "PANCREAS": { ph: "8.0", desc: "Produces enzymes and hormones like insulin." },
            "ASCENDING COLON": { ph: "6.8", desc: "The start of the large intestine where water is reabsorbed." },
            "CECUM": { ph: "6.5", desc: "A pouch that connects the small and large intestines." },
            "APPENDIX": { ph: "7.0", desc: "A small organ that helps maintain healthy gut bacteria." },
            "JEJUNUM": { ph: "7.0", desc: "The primary site for nutrient absorption in the small intestine." },
            "TRANSVERSE COLON": { ph: "6.9", desc: "The part of the colon that crosses the upper abdomen." },
            "DESCENDING COLON": { ph: "7.0", desc: "Transports waste down to the rectum." },
            "RECTUM": { ph: "7.0", desc: "The final storage area for waste before elimination." },
            "ANUS": { ph: "N/A", desc: "The exit point of the digestive system." }
        };
    }

    activate() {
        this.isActive = true;
        this.infoHud.classList.remove('hidden');
        this.viewer.autoRotate = false;
        // Show hotspots
        document.querySelectorAll('.Hotspot').forEach(hs => hs.style.display = 'block');
    }

    deactivate() {
        this.isActive = false;
        this.infoHud.classList.add('hidden');
        window.speechSynthesis.cancel();
        // Hide hotspots
        document.querySelectorAll('.Hotspot').forEach(hs => hs.style.display = 'none');
    }

    handlePartClick(name) {
        if (!this.isActive || !this.descriptions[name]) return;

        const data = this.descriptions[name];
        this.partNameDisplay.innerText = name;
        this.partDescDisplay.innerText = data.desc;
        this.phDisplay.innerText = data.ph;

        this.narrate(name, data.desc);
    }

    narrate(title, description) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${title}. ${description}`);
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    }
}