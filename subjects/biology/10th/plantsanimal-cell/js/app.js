/**
 * BIO-CORE CELL LAB - MASTER CONTROLLER
 */
import { FreeView } from './FreeView.js';
import { Identification } from './Identification.js';

class CellLabController {
    constructor() {
        // State Properties
        this.currentMode = null; 
        this.currentTheme = 'default';
        this.labStep = 0; // 0: specimen, 1: stain, 2: coverslip, 3: move to stage
        this.focusBlur = 25;
        this.knobRotation = 0;

        // Core Elements
        this.viewer = document.getElementById('main-viewer');
        this.bootScreen = document.getElementById('boot-screen');
        this.bootBar = document.getElementById('boot-bar');
        
        // Modules
        this.freeView = new FreeView(this.viewer, document.getElementById('specs-hud'));
        this.idView = new Identification(this.viewer, document.getElementById('info-hud'));

        this.init();
    }

    init() {
        console.log("🚀 Bio-Core System Initializing...");
        
        // 1. Set Initial Theme
        this.setTheme('default');

        // 2. Handle Boot Sequence
        if (document.readyState === 'complete') {
            this.prepareLab();
        } else {
            window.addEventListener('load', () => this.prepareLab());
        }

        // Failsafe to enter lab if loading hangs
        setTimeout(() => this.hideBootScreen(), 4000);
        
        this.setupEventListeners();
    }

    /** --- THEME ENGINE --- **/

    setTheme(theme) {
        this.currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        
        this.playSound(150);

        const colors = {
            default: '#f0f4f8',
            pink: '#fce4ec',
            dark: '#1a1a1a',
            night: '#050505'
        };

        if (this.viewer) {
            this.viewer.style.backgroundColor = colors[theme];
        }
    }

    /** --- UI SETUP & SAFETY --- **/

    setupEventListeners() {
        const bindClick = (id, action) => {
            const el = document.getElementById(id);
            if (el) el.onclick = action;
        };

        document.querySelectorAll('.tool').forEach(tool => {
            tool.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.id);
            });
        });

        const slide = document.getElementById('glass-slide');
        if(slide) slide.addEventListener('drop', (e) => this.handleSlideDrop(e));

        const stage = document.getElementById('micro-stage');
        if(stage) stage.addEventListener('drop', (e) => this.handleStageDrop(e));

        bindClick('btn-freeview', () => this.setAnalysisMode('free'));
        bindClick('btn-identify', () => this.setAnalysisMode('id'));
        bindClick('btn-analyze', () => this.startAnalysis());

        window.addEventListener('wheel', (e) => {
            const focusScreen = document.getElementById('focus-screen');
            if (focusScreen && focusScreen.classList.contains('active')) {
                this.handleFocusing(e.deltaY);
            }
        });
    }

    /** --- LAB PHASE LOGIC --- **/

    prepareLab() {
        if(this.bootBar) this.bootBar.style.width = '100%';
        setTimeout(() => this.hideBootScreen(), 500);
    }

    hideBootScreen() {
        if (this.bootScreen && this.bootScreen.style.display !== 'none') {
            this.bootScreen.style.opacity = '0';
            setTimeout(() => this.bootScreen.style.display = 'none', 1000);
        }
    }

    startLab(mode) {
        this.currentMode = mode;
        this.labStep = 0; 
        document.getElementById('selection-screen').classList.remove('active');
        document.getElementById('lab-workspace').classList.add('active');

        const blob = document.getElementById('sample-blob');
        const stain = document.getElementById('stain-overlay');

        if (mode === 'plant') {
            blob.style.backgroundColor = '#d7bde2';
            stain.style.backgroundColor = 'rgba(211, 84, 0, 0.6)';
            this.narrate("Plant lab active. Apply the onion epidermis to the slide.");
        } else {
            blob.style.backgroundColor = '#fdfefe';
            stain.style.backgroundColor = 'rgba(41, 128, 185, 0.6)';
            this.narrate("Animal lab active. Apply the buccal swab specimen.");
        }
    }

    handleSlideDrop(e) {
        const toolId = e.dataTransfer.getData('text/plain');
        
        if (toolId === 'tool-sample' && this.labStep === 0) {
            document.getElementById('sample-blob').style.display = 'block';
            this.updateTask("APPLY STAIN", 1);
            this.playSound(400);
        } 
        else if (toolId === 'tool-stain' && this.labStep === 1) {
            document.getElementById('stain-overlay').style.display = 'block';
            this.updateTask("PLACE COVERSLIP", 2);
            this.playSound(600);
        } 
        else if (toolId === 'tool-slip' && this.labStep === 2) {
            document.getElementById('coverslip-rect').style.display = 'block';
            this.updateTask("MOVE TO STAGE", 3);
            this.makeSlideDraggable();
            this.playSound(800);
        }
    }

    updateTask(text, step) {
        this.labStep = step;
        const taskEl = document.getElementById('current-task');
        if(taskEl) taskEl.innerText = text;
        if (step === 3) {
            const stage = document.getElementById('micro-stage');
            if(stage) stage.style.opacity = "1";
        }
    }

    makeSlideDraggable() {
        const slide = document.getElementById('glass-slide');
        if(slide) {
            slide.setAttribute('draggable', 'true');
            slide.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', 'prepared-slide');
            });
        }
    }

    handleStageDrop(e) {
        const data = e.dataTransfer.getData('text/plain');
        if (data === 'prepared-slide' && this.labStep === 3) {
            this.goToMicroscope();
        }
    }

    /** --- MICROSCOPE PHASE --- **/

    goToMicroscope() {
        document.getElementById('lab-workspace').classList.remove('active');
        document.getElementById('focus-screen').classList.add('active');
        
        const microImg = document.getElementById('micro-view-img');
        const url = this.currentMode === 'plant' 
            ? 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-onion-cells-light-micrograph-marek-mis.jpg'
            : 'https://micro.magnet.fsu.edu/cells/animals/images/humanepithelium.jpg';
        
        if(microImg) microImg.style.backgroundImage = `url('${url}')`;
        this.narrate("Slide docked. Adjust focal knob to resolve structures.");
    }

    handleFocusing(deltaY) {
        this.knobRotation += deltaY * 0.2;
        const knob = document.getElementById('focus-knob');
        if(knob) knob.style.transform = `rotate(${this.knobRotation}deg)`;

        this.focusBlur -= Math.abs(deltaY) * 0.02;
        if (this.focusBlur < 0) this.focusBlur = 0;

        const zoom = 1.4 - (this.focusBlur / 25) * 0.3;
        const microImg = document.getElementById('micro-view-img');
        if(microImg) {
            microImg.style.filter = `blur(${this.focusBlur}px)`;
            microImg.style.transform = `scale(${zoom})`;
        }

        if (this.focusBlur <= 0.5) {
            const btn = document.getElementById('btn-analyze');
            if(btn) btn.classList.remove('hidden');
        }
    }

    /** --- 3D ANALYSIS PHASE --- **/

    startAnalysis() {
        const eyepiece = document.querySelector('.eyepiece');
        const loader = document.getElementById('model-loader');
        const creditPlant = document.getElementById('credit-plant');
        const creditAnimal = document.getElementById('credit-animal');

        eyepiece.classList.add('zooming-in');
        this.playSound(1200);

        setTimeout(() => {
            const modelPath = this.currentMode === 'plant' 
                ? 'plant_cell__biology.glb' 
                : 'animal_cell_2.0_-_annotated_in_english.glb';

            document.getElementById('focus-screen').classList.remove('active');
            document.getElementById('analysis-screen').classList.add('active');

            // Show model loader
            if (loader) loader.classList.remove('hidden');

            // Toggle specific credits
            if (this.currentMode === 'plant') {
                creditPlant.classList.remove('hidden');
                creditAnimal.classList.add('hidden');
            } else {
                creditAnimal.classList.remove('hidden');
                creditPlant.classList.add('hidden');
            }

            if(this.viewer) {
                this.viewer.src = modelPath;
                
                // Hide loader only when 3D model is actually ready
                this.viewer.addEventListener('load', () => {
                    setTimeout(() => {
                        if (loader) loader.classList.add('hidden');
                    }, 800);
                }, { once: true });
            }

            this.setAnalysisMode('free');
            this.narrate(`${this.currentMode} cell identified. Analysis online.`);
            eyepiece.classList.remove('zooming-in');
        }, 1200); 
    }

    setAnalysisMode(mode) {
        const freeBtn = document.getElementById('btn-freeview');
        const idBtn = document.getElementById('btn-identify');

        if (mode === 'free') {
            this.idView.deactivate();
            this.freeView.activate();
            if(freeBtn) freeBtn.classList.add('active');
            if(idBtn) idBtn.classList.remove('active');
        } else {
            this.freeView.deactivate();
            this.idView.activate(this.currentMode);
            if(freeBtn) freeBtn.classList.remove('active');
            if(idBtn) idBtn.classList.add('active');
        }
    }

    /** --- UTILS --- **/

    narrate(text) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utter);
    }

    playSound(freq) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
            osc.stop(ctx.currentTime + 0.5);
        } catch(e) {}
    }
}

// Global initialization
window.lab = new CellLabController();