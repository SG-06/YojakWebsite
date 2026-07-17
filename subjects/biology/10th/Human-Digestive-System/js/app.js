/**
 * BIO-CORE SYSTEM - CONSOLIDATED CONTROLLER
 */

class BioCoreController {
    constructor() {
        console.log("System Initializing...");
        
        // 1. Elements
        this.viewer = document.getElementById('main-viewer');
        this.bootScreen = document.getElementById('boot-screen');
        this.bootBar = document.getElementById('boot-bar');
        this.infoHud = document.getElementById('info-hud');
        this.specsHud = document.getElementById('specs-hud');
        
        // 2. State for Narrative Tour
        this.isTourPlaying = false;
        this.tourStep = 0;

        // 3. Tour Data (Sequential steps)
        this.tourSteps = [
            {
                title: "PHASE 1: INGESTION",
                text: "Food enters the esophagus and is moved by peristalsis into the stomach for initial processing.",
                orbit: "0deg 75deg 105%"
            },
            {
                title: "PHASE 2: STOMACH",
                text: "The stomach uses hydrochloric acid and pepsin enzymes to break food down into a liquid mixture called chyme.",
                orbit: "25deg 70deg 85%"
            },
            {
                title: "PHASE 3: SECRETION",
                text: "The liver produces bile while the pancreas releases digestive enzymes into the duodenum to process fats and sugars.",
                orbit: "-15deg 65deg 90%"
            },
            {
                title: "PHASE 4: ABSORPTION",
                text: "Inside the small intestine, nutrients are absorbed through the intestinal walls into the bloodstream.",
                orbit: "0deg 90deg 95%"
            },
            {
                title: "PHASE 5: RECLAMATION",
                text: "The large intestine recovers water and electrolytes from indigestible food matter, forming solid waste.",
                orbit: "180deg 75deg 110%"
            },
            {
                title: "PHASE 6: ELIMINATION",
                text: "Finally, waste is stored in the rectum before being expelled through the anus. The cycle is complete.",
                orbit: "0deg 100deg 120%"
            }
        ];

        // 4. Organ Data (For manual clicks)
        this.organData = {
            "LIVER": "Produces bile to digest fats and filters toxins from the blood.",
            "STOMACH": "Uses acid and enzymes to break down food into a liquid state.",
            "GALLBLADDER": "Stores and concentrates bile until it is needed for digestion.",
            "DUODENUM": "The first part of the small intestine; site of most chemical digestion.",
            "PANCREAS": "Secretes digestive enzymes and regulates blood sugar levels.",
            "JEJUNUM": "The middle section of the small intestine, specialized for absorption.",
            "ASCENDING COLON": "Part of the large intestine that absorbs water and electrolytes.",
            "TRANSVERSE COLON": "Crosses the abdomen, continuing the process of water absorption.",
            "DESCENDING COLON": "Stores waste that will eventually be emptied into the rectum.",
            "CECUM": "The entry pouch of the large intestine.",
            "APPENDIX": "A small pouch that may protect healthy gut bacteria.",
            "RECTUM": "Stores waste until it is ready to be expelled from the body.",
            "ANUS": "The final opening where waste leaves the digestive tract."
        };

        this.init();
    }

    init() {
        const hideLoading = () => {
            console.log("Loading Complete.");
            this.bootBar.style.width = '100%';
            setTimeout(() => {
                this.bootScreen.style.opacity = '0';
                setTimeout(() => { this.bootScreen.style.display = 'none'; }, 800);
            }, 500);
        };

        this.viewer.addEventListener('load', hideLoading);
        setTimeout(() => { if (this.bootScreen.style.display !== 'none') hideLoading(); }, 5000);
        
        this.viewer.addEventListener('progress', (e) => {
            this.bootBar.style.width = Math.floor(e.detail.totalProgress * 100) + '%';
        });

        this.setupEvents();
        this.setMode('free');
        this.startClock();
    }

    setupEvents() {
        // Exposure Logic
        const exposureSlider = document.getElementById('range-exposure');
        exposureSlider.oninput = (e) => { this.viewer.exposure = e.target.value; };

        // Theme Circles
        const mainContainer = document.getElementById('vlab-main');
        const themeCircles = document.querySelectorAll('.theme-circle');
        themeCircles.forEach(circle => {
            circle.onclick = () => {
                themeCircles.forEach(c => c.classList.remove('active'));
                circle.classList.add('active');
                mainContainer.className = `theme-${circle.dataset.theme}`;
                
                if (circle.dataset.theme === 'space' || circle.dataset.theme === 'grey') {
                    this.viewer.exposure = 1.8; exposureSlider.value = 1.8;
                } else {
                    this.viewer.exposure = 1.0; exposureSlider.value = 1.0;
                }
            };
        });

        // Mode Buttons
        document.getElementById('btn-freeview').onclick = () => this.setMode('free');
        document.getElementById('btn-identify').onclick = () => this.setMode('id');
        
        // SYSTEM OVERVIEW (Guided Tour)
        document.getElementById('btn-overview').onclick = () => this.playSystemOverview();
        
        // Label Toggle
        document.getElementById('btn-labels').onclick = (e) => {
            const active = e.target.classList.toggle('active');
            document.querySelectorAll('.HotspotAnnotation').forEach(el => {
                el.style.opacity = active ? "1" : "0";
            });
        };

        // Hotspot Manual Clicks
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.onclick = () => {
                this.isTourPlaying = false; // Stop tour if user clicks an organ manually
                this.handleSelection(hs.dataset.name);
            };
        });
    }

    setMode(mode) {
        this.isTourPlaying = false; 
        window.speechSynthesis.cancel();

        document.getElementById('btn-freeview').classList.toggle('active', mode === 'free');
        document.getElementById('btn-identify').classList.toggle('active', mode === 'id');
        this.infoHud.classList.toggle('hidden', mode === 'free');
        this.specsHud.classList.toggle('hidden', mode === 'id');
        this.viewer.autoRotate = (mode === 'free');
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.style.display = (mode === 'id') ? 'block' : 'none';
        });
    }

    // --- SYSTEM OVERVIEW LOGIC ---
    playSystemOverview() {
        this.setMode('id');
        this.isTourPlaying = true;
        this.tourStep = 0;
        this.executeTourStep();
    }

    executeTourStep() {
        if (!this.isTourPlaying || this.tourStep >= this.tourSteps.length) {
            if (this.isTourPlaying) {
                document.getElementById('part-name').innerText = "TOUR COMPLETE";
                document.getElementById('part-description').innerText = "System analysis finished.";
            }
            this.isTourPlaying = false;
            return;
        }

        const step = this.tourSteps[this.tourStep];

        // 1. Update text box
        document.getElementById('part-name').innerText = step.title;
        document.getElementById('part-description').innerText = step.text;

        // 2. Move Camera
        this.viewer.cameraOrbit = step.orbit;

        // 3. Narration with callback to next step
        this.narrate(step.title, step.text, () => {
            if (this.isTourPlaying) {
                this.tourStep++;
                setTimeout(() => this.executeTourStep(), 1000); // 1 second pause between steps
            }
        });
    }

    handleSelection(name) {
        const desc = this.organData[name] || "Analyzing biological structure...";
        document.getElementById('part-name').innerText = name;
        document.getElementById('part-description').innerText = desc;
        document.getElementById('ph-data').innerText = (Math.random() * (8 - 2) + 2).toFixed(1);
        this.narrate(name, desc);
    }

    narrate(name, text, onEndCallback = null) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${name}. ${text}`);
        utterance.rate = 0.95;
        
        if (onEndCallback) {
            utterance.onend = onEndCallback;
        }

        window.speechSynthesis.speak(utterance);
    }

    startClock() {
        setInterval(() => {
            const clock = document.getElementById('clock');
            if (clock) clock.innerText = new Date().toTimeString().split(' ')[0];
        }, 1000);
    }
}

// Start
window.addEventListener('DOMContentLoaded', () => { new BioCoreController(); });