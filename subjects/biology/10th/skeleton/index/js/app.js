/**
 * BIO-CORE SKELETAL v5.0 - MASTER CONTROLLER
 * Handles mode switching, theme engine, and interactive logic.
 */
import { Identification } from './Identification.js';
import { FreeView } from './FreeView.js';
import { FemaleView } from './FemaleView.js'; 

class SkeletalCoreController {
    constructor() {
        console.log("BIO-CORE SKELETAL v5.0 System Online.");
        
        this.viewer = document.getElementById('main-viewer');
        this.refViewer = document.getElementById('female-viewer');
        this.bootScreen = document.getElementById('boot-screen');
        this.bootBar = document.getElementById('boot-bar');
        this.infoPanel = document.getElementById('info-hud');
        this.femaleOverlay = document.getElementById('female-overlay');
        this.mainContainer = document.getElementById('vlab-main');
        
        this.idSystem = new Identification(this.viewer, this.infoPanel);
        this.freeSystem = new FreeView(this.viewer, this.infoPanel);
        this.femaleView = new FemaleView(); 
        
        this.isTourPlaying = false;
        this.tourStep = 0;
        this.tourData = [
    { 
        title: "AXIAL SKELETON ANALYSIS", 
        text: "The axial system comprises 80 bones forming the central vertical axis of the body. This includes the skull, the vertebral column, and the thoracic cage. Its primary function is the protection of the central nervous system and the vital organs within the ventral cavity, while providing a core pivot for the musculoskeletal system.", 
        orbit: "0deg 75deg 110%" 
    },
    { 
        title: "CRANIAL ARCHITECTURE", 
        text: "The neurocranium consists of eight fused bones: the frontal, two parietal, two temporal, the occipital, sphenoid, and ethmoid bones. These are joined by dense fibrous joints known as sutures. Beyond protecting the cerebrum, the skull houses the sensory apparatus for vision, olfaction, and gustation, as well as the mandible—the only mobile bone of the skull, facilitating mastication.", 
        orbit: "0deg 45deg 60%" 
    },
    { 
        title: "THORACIC PROTECTIVE CAGE", 
        text: "The thoracic cage is composed of 12 pairs of ribs and the sternum. Ribs 1 through 7 are 'True Ribs,' connected directly to the sternum via costal cartilage. Ribs 8 through 10 are 'False Ribs,' and 11 and 12 are 'Floating Ribs' with no anterior attachment. This structure facilitates pulmonary respiration and shields the heart and lungs from mechanical trauma.", 
        orbit: "20deg 80deg 80%" 
    },
    { 
        title: "PELVIC GIRDLE & BIOMECHANICS", 
        text: "The pelvic girdle consists of two coxal bones, the sacrum, and the coccyx. Each coxal bone is a fusion of the ilium, ischium, and pubis. This basin-shaped structure transmits the weight of the upper body to the lower limbs. In this specimen, note the narrow sub-pubic angle and heart-shaped pelvic inlet, which are primary indicators of male skeletal morphology.", 
        orbit: "180deg 90deg 90%" 
    },
    { 
        title: "LOWER EXTREMITIES & REMODELING", 
        text: "The femur is the longest and strongest bone in the human body, articulating with the acetabulum to form the hip joint. Below the patella, the tibia and fibula provide leverage for movement. These long bones are active sites for hematopoiesis in the marrow and undergo constant osteoclastic and osteoblastic remodeling to maintain calcium homeostasis and structural integrity.", 
        orbit: "0deg 110deg 120%" 
    }
];


        this.init();
    }

    init() {
        this.viewer.addEventListener('load', () => {
            this.bootBar.style.width = '100%';
            setTimeout(() => {
                this.bootScreen.style.opacity = '0';
                setTimeout(() => this.bootScreen.style.display = 'none', 1000);
            }, 600);
        });

        this.setupEvents();
        this.setMode('free');
        this.startClock();
    }

    setupEvents() {
        document.getElementById('btn-freeview').onclick = () => this.setMode('free');
        document.getElementById('btn-identify').onclick = () => this.setMode('id');
        document.getElementById('btn-overview').onclick = () => this.playTour();

        document.getElementById('btn-female-ref').onclick = () => {
            this.setMode('free'); 
            this.femaleView.open();
        };
        document.getElementById('close-female-ref').onclick = () => {
            this.femaleView.close();
        };

        const exposureSlider = document.getElementById('range-exposure');
        exposureSlider.oninput = (e) => {
            const val = e.target.value;
            this.viewer.exposure = val;
            if (this.refViewer) this.refViewer.exposure = val;
        };

        document.getElementById('btn-labels').onclick = (e) => {
            const active = e.target.classList.toggle('active');
            e.target.innerText = active ? "ANNOTATIONS: ON" : "ANNOTATIONS: OFF";
            this.mainContainer.classList.toggle('annotations-off', !active);
        };

        document.querySelectorAll('.theme-circle').forEach(circle => {
            circle.onclick = () => {
                document.querySelectorAll('.theme-circle').forEach(c => c.classList.remove('active'));
                circle.classList.add('active');
                const theme = circle.dataset.theme;
                this.mainContainer.className = `theme-${theme}`;
                let expVal = (theme === 'space' || theme === 'grey') ? 0.7 : 0.4;
                this.viewer.exposure = expVal;
                exposureSlider.value = expVal;
                this.femaleView.syncLighting(theme);
            };
        });

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

    playTour() {
        this.setMode('id');
        this.isTourPlaying = true;
        this.tourStep = 0;
        this.executeTourStep();
    }

    // THE CORRECTED ASYNC TOUR LOGIC
    async executeTourStep() {
        if (!this.isTourPlaying || this.tourStep >= this.tourData.length) {
            if (this.isTourPlaying) {
                document.getElementById('part-name').innerText = "SCAN COMPLETE";
                document.getElementById('part-description').innerText = "System analysis finished.";
            }
            this.isTourPlaying = false;
            return;
        }

        const step = this.tourData[this.tourStep];
        document.getElementById('part-name').innerText = step.title;
        document.getElementById('part-description').innerText = step.text;
        this.viewer.cameraOrbit = step.orbit;

        // Wait for narration to finish
        await this.idSystem.narrate(step.title, step.text);
        
        // Wait 1.5 seconds after talking before moving next
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (this.isTourPlaying) {
            this.tourStep++;
            this.executeTourStep();
        }
    }

    startClock() {
        setInterval(() => {
            const clock = document.getElementById('clock');
            if (clock) clock.innerText = new Date().toTimeString().split(' ')[0];
        }, 1000);
    }
}

window.addEventListener('DOMContentLoaded', () => { 
    window.BioCore = new SkeletalCoreController(); 
});