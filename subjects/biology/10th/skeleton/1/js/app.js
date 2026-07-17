/**
 * BIO-CORE SKELETAL v5.0 - MASTER CONTROLLER
 * Hardened Architecture with Neural Audio Link & Dynamic Framing
 */
import { Identification } from './Identification.js';
import { FreeView } from './FreeView.js';
import { FemaleView } from './FemaleView.js';

class SkeletalCoreController {
    constructor() {
        console.log("BIO-CORE SKELETAL v5.0 | Neural Link Primed.");
        
        // 1. DOM Elements
        this.viewer = document.getElementById('main-viewer');
        this.refViewer = document.getElementById('female-viewer');
        this.bootScreen = document.getElementById('boot-screen');
        this.bootBar = document.getElementById('boot-bar');
        this.bootStatus = document.getElementById('boot-status');
        this.mainContainer = document.getElementById('vlab-main');
        this.femaleOverlay = document.getElementById('female-overlay');
        
        // 2. Sub-System Initialization
        this.idSystem = new Identification(this.viewer, document.getElementById('info-hud'));
        this.freeSystem = new FreeView(this.viewer, document.getElementById('info-hud'));
        this.femaleView = new FemaleView(); 
        
        // 3. Tour Sequential Data
        this.isTourPlaying = false;
        this.tourStep = 0;
        this.tourData = [
            { 
                title: "AXIAL SKELETON", 
                text: "The axial skeleton forms the central axis of the human body. It consists of eighty bones including the skull, the vertebral column, and the thoracic cage, providing vital protection for the brain, heart, and lungs.", 
                orbit: "0deg 75deg auto" 
            },
            { 
                title: "CRANIAL ARCHITECTURE", 
                text: "The human cranium is a complex structure of eight cranial bones and fourteen facial bones. These are joined by immovable joints called sutures, creating a high-impact shield for the central nervous system.", 
                orbit: "0deg 45deg auto" 
            },
            { 
                title: "THORACIC PROTECTION", 
                text: "The rib cage is composed of twelve pairs of ribs and the sternum. It is designed to expand and contract during respiration while maintaining a rigid shield for the heart and lungs.", 
                orbit: "20deg 80deg auto" 
            },
            { 
                title: "PELVIC FOUNDATION", 
                text: "The pelvic girdle is a basin-shaped complex that attaches the lower limbs to the axial skeleton. It transmits the weight of the upper body to the legs and supports the lower abdominal organs.", 
                orbit: "180deg 90deg auto" 
            },
            { 
                title: "BIPEDAL LEVERAGE", 
                text: "The lower extremities, led by the femur, are the primary weight-bearing structures. The femur is the strongest bone in the body, capable of supporting thirty times the weight of an adult.", 
                orbit: "0deg 110deg auto" 
            }
        ];

        this.init();
    }

    init() {
        // --- 1. Hardened Loading Sequence ---
        this.viewer.addEventListener('load', () => {
            this.bootBar.style.width = '100%';
            this.bootStatus.innerText = "LINK ESTABLISHED";
            setTimeout(() => {
                this.bootScreen.style.opacity = '0';
                setTimeout(() => this.bootScreen.style.display = 'none', 1000);
            }, 800);
        });

        this.viewer.addEventListener('progress', (e) => {
            const p = Math.floor(e.detail.totalProgress * 100);
            this.bootBar.style.width = p + '%';
            this.bootStatus.innerText = `FETCHING OSSEOUS DATA: ${p}%`;
        });

        // --- 2. Neural Audio Link (Unlock Audio on first click) ---
        const unlockAudio = () => {
            const silent = new SpeechSynthesisUtterance(" ");
            silent.volume = 0;
            window.speechSynthesis.speak(silent);
            console.log("Neural Audio Link: ACTIVE");
            window.removeEventListener('mousedown', unlockAudio);
        };
        window.addEventListener('mousedown', unlockAudio);

        this.setupEvents();
        this.setMode('free');
        this.startClock();
    }

    /**
     * Master Exposure Controller: Syncs all models and prevents wash-out
     */
    applyExposure(val) {
        this.viewer.exposure = val;
        if (this.refViewer) this.refViewer.exposure = val;
    }

    setupEvents() {
        // Mode Selectors
        document.getElementById('btn-freeview').onclick = () => this.setMode('free');
        document.getElementById('btn-identify').onclick = () => this.setMode('id');
        document.getElementById('btn-overview').onclick = () => this.playTour();

        // Female Specimen Overlay
        document.getElementById('btn-female-ref').onclick = () => {
            this.setMode('free'); 
            this.femaleView.open();
        };
        document.getElementById('close-female-ref').onclick = () => {
            this.femaleView.close();
        };

        // Visual Sliders
        const exposureSlider = document.getElementById('range-exposure');
        exposureSlider.oninput = (e) => this.applyExposure(e.target.value);

        // Annotation Toggle (Class-based for performance)
        document.getElementById('btn-labels').onclick = (e) => {
            const active = e.target.classList.toggle('active');
            e.target.innerText = active ? "ANNOTATIONS: ON" : "ANNOTATIONS: OFF";
            if (active) this.mainContainer.classList.remove('annotations-off');
            else this.mainContainer.classList.add('annotations-off');
        };

        // Theme Engine (Triggers the Yellowish Bone Filter in CSS)
        document.querySelectorAll('.theme-circle').forEach(circle => {
            circle.onclick = () => {
                document.querySelectorAll('.theme-circle').forEach(c => c.classList.remove('active'));
                circle.classList.add('active');
                
                const theme = circle.dataset.theme;
                this.mainContainer.className = `theme-${theme}`;

                // Fine-tune lighting to prevent "too white" look
                let expVal = 0.5; 
                if (theme === 'space' || theme === 'grey') expVal = 0.8; 
                else if (theme === 'pink') expVal = 0.35; // Lowered to pop the yellowish tint
                
                this.applyExposure(expVal);
                exposureSlider.value = expVal;
                this.femaleView.syncLighting(theme);
            };
        });

        // Hotspot Registration
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.onclick = () => {
                this.isTourPlaying = false; 
                this.idSystem.handlePartClick(hs.dataset.name);
            };
        });
    }

    setMode(mode) {
        this.isTourPlaying = false;
        this.femaleView.close(); 
        window.speechSynthesis.cancel();

        document.getElementById('btn-freeview').classList.toggle('active', mode === 'free');
        document.getElementById('btn-identify').classList.toggle('active', mode === 'id');

        if (mode === 'free') {
            this.idSystem.deactivate();
            this.freeSystem.activate();
        } else {
            this.freeSystem.deactivate();
            this.idSystem.activate();
        }
    }

    /**
     * SYSTEM TOUR: Hardened Logic with Speech-Synced Transitions
     */
    playTour() {
        this.setMode('id');
        this.isTourPlaying = true;
        this.tourStep = 0;
        this.executeTourStep();
    }

    executeTourStep() {
        if (!this.isTourPlaying || this.tourStep >= this.tourData.length) {
            if (this.isTourPlaying) {
                document.getElementById('part-name').innerText = "TOUR COMPLETE";
                document.getElementById('part-description').innerText = "System analysis finished. Manual control restored.";
                this.idSystem.narrate("System Status", "Analysis complete. All structures verified.");
            }
            this.isTourPlaying = false;
            return;
        }

        const step = this.tourData[this.tourStep];
        document.getElementById('part-name').innerText = step.title;
        document.getElementById('part-description').innerText = step.text;

        // Force 'auto' target to keep small/large models in center
        this.viewer.cameraOrbit = step.orbit;
        this.viewer.cameraTarget = "auto auto auto";

        this.idSystem.narrate(step.title, step.text);
        
        // Timing logic: Wait based on text length (approx 75ms per character)
        const delay = Math.max(step.text.length * 75, 4000); 
        setTimeout(() => {
            if (this.isTourPlaying) {
                this.tourStep++;
                this.executeTourStep();
            }
        }, delay);
    }

    startClock() {
        setInterval(() => {
            const clock = document.getElementById('clock');
            if (clock) clock.innerText = new Date().toTimeString().split(' ')[0];
        }, 1000);
    }
}

// System Launch
window.addEventListener('DOMContentLoaded', () => { 
    window.BioCore = new SkeletalCoreController(); 
});