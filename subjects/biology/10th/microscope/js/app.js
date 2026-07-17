/**
 * Microscope Lab - Core System Controller
 * Consolidated "Game Engine" Version
 */

class LabController {
    constructor() {
        // 1. DOM Elements
        this.viewer = document.getElementById('main-viewer');
        this.bootBar = document.getElementById('boot-bar');
        this.bootScreen = document.getElementById('boot-screen');
        this.infoHud = document.getElementById('info-hud');
        this.specsHud = document.getElementById('specs-hud');
        this.liveData = document.getElementById('live-data');
        this.partName = document.getElementById('part-name');
        this.partDesc = document.getElementById('part-description');
        
        // 2. Specimen Data (Hotspots coordinates from your snippet)
        this.hotspots = [
            { id: 1, name: "OCULAR LENS", pos: "-1.27m 30.42m -5.69m", norm: "-0.99m -0.06m -0.06m" },
            { id: 2, name: "EYE PIECE TUBE", pos: "-1.16m 25.63m -1.45m", norm: "-0.88m -0.33m -0.33m" },
            { id: 3, name: "NOSE PIECE", pos: "2.90m 17.36m 5.30m", norm: "0.39m 0.87m -0.27m" },
            { id: 4, name: "OBJECTIVE LENS", pos: "-2.59m 16.21m 6.77m", norm: "-0.43m 0.56m 0.70m" },
            { id: 5, name: "BASE", pos: "1.38m 3.41m 6.27m", norm: "0m 0.98m 0.17m" },
            { id: 6, name: "STAGE CLIPS", pos: "-3.07m 10.72m 0.23m", norm: "0m 0.99m 0.04m" },
            { id: 7, name: "STAGE", pos: "3.60m 10.39m 6.36m", norm: "0.51m 0m 0.85m" },
            { id: 8, name: "DIAPHRAGM", pos: "4.39m 9.30m 2.30m", norm: "0.95m 0m 0.29m" },
            { id: 9, name: "ILLUMINATOR", pos: "-1.63m 6.60m 2.39m", norm: "-0.94m 0.25m -0.18m" },
            { id: 10, name: "COARSE FOCUS", pos: "6.46m 9.05m -6.30m", norm: "0.99m 0.01m -0.10m" },
            { id: 11, name: "ARM", pos: "2.00m 17.54m -6.73m", norm: "1m 0m 0m" }
        ];

        // 3. Technical Descriptions for HUD & Voice Narration
        this.descriptions = {
            "OCULAR LENS": "The lens at the top that you look through. It provides a secondary magnification of 10x.",
            "EYE PIECE TUBE": "Structural tube connecting the ocular lens to the objective turret.",
            "NOSE PIECE": "Rotating turret holding multiple objective lenses for rapid magnification switching.",
            "OBJECTIVE LENS": "The primary optical lenses ranging from low to high power magnification.",
            "BASE": "The weighted foundation of the microscope providing maximum stability during observation.",
            "STAGE CLIPS": "Precision metal holders used to lock the specimen slide into a fixed position.",
            "STAGE": "The mechanical platform where the specimen slide is placed for structural analysis.",
            "DIAPHRAGM": "Adjustable aperture used to control the intensity and angle of light hitting the specimen.",
            "ILLUMINATOR": "A high-intensity light source that provides upward illumination through the specimen.",
            "COARSE FOCUS": "Large adjustment dial used for rapid vertical stage movement to achieve general focus.",
            "ARM": "The structural backbone used for carrying the instrument and supporting the optical head."
        };

        this.init();
    }

    init() {
window.speechSynthesis.getVoices();
        // Handle Boot/Loading sequence
        this.viewer.addEventListener('progress', (e) => {
            const p = Math.floor(e.detail.totalProgress * 100);
            this.bootBar.style.width = p + '%';
            if (p === 100) {
                setTimeout(() => {
                    this.bootScreen.style.opacity = 0;
                    this.playSound('toggle');
                    setTimeout(() => this.bootScreen.style.display = 'none', 800);
                }, 500);
            }
        });

        this.injectHotspots();
        this.setupEvents();
        this.setMode('free'); 
        this.startSim();
    }

    injectHotspots() {
        this.hotspots.forEach(hs => {
            const b = document.createElement('button');
            b.className = 'Hotspot';
            b.slot = `hotspot-${hs.id}`;
            b.dataset.position = hs.pos;
            b.dataset.normal = hs.norm;
            b.innerHTML = `<div class="HotspotAnnotation">${hs.name}</div>`;
            
            b.onclick = () => this.handlePartSelection(hs.name);
            
            this.viewer.appendChild(b);
        });
    }

    handlePartSelection(name) {
        // 1. Update Text
        this.partName.innerText = name;
        this.partDesc.innerText = this.descriptions[name];

        // 2. Play Click Sound
        this.playSound('click');

        // 3. Trigger AI Voice Narration
        this.narrate(name, this.descriptions[name]);
    }

    setupEvents() {
        document.getElementById('btn-freeview').onclick = () => this.setMode('free');
        document.getElementById('btn-identify').onclick = () => this.setMode('id');
        
        document.getElementById('range-exposure').oninput = (e) => {
            this.viewer.exposure = e.target.value;
        };

        document.getElementById('btn-lamp').onclick = (e) => {
            const isActive = e.target.classList.toggle('active');
            this.viewer.exposure = isActive ? 1.2 : 0.3;
            e.target.innerText = isActive ? "SYSTEM LIGHT: ON" : "SYSTEM LIGHT: OFF";
            this.playSound('click');
        };

const overviewBtn = document.getElementById('btn-overview');
        if (overviewBtn) {
            overviewBtn.onclick = () => this.playSystemOverview();
        }
        
        // ...
    }

  
   playSystemOverview() {
        console.log("Starting Microscope Overview...");
        
        // 1. Force the UI into Analysis Mode
        this.setMode('id');

        // 2. Update the HUD Text
        this.partName.innerText = "MICROSCOPE OVERVIEW";
        this.partDesc.innerText = "Initializing full structural analysis of the optical microscope. Systems check: Optimal.";
        
        // 3. The Correct Microscope Script
        const script = "Welcome to the Microscope Lab Core System. This compound optical microscope " +
                       "utilizes a dual-lens system to achieve high magnification. Light travels from the " +
                       "illuminator through the diaphragm, passing through the specimen on the stage. " +
                       "The objective lenses provide the primary magnification, while the ocular lens " +
                       "at the top allows for final observation. Use the focus knobs to calibrate " +
                       "image clarity for cellular analysis.";

        // 4. Trigger Narration
        this.narrate("Microscope Overview", script);

        // 5. Visual Feedback
        this.infoHud.style.backgroundColor = "rgba(0, 113, 227, 0.15)";
        setTimeout(() => {
            this.infoHud.style.backgroundColor = "transparent";
        }, 1000);
    }

      // Standardized Narration Method
    narrate(title, text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        utterance.rate = 0.95; 
        utterance.pitch = 0.9; 
        
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Google UK English'));
        if (preferredVoice) utterance.voice = preferredVoice;

        window.speechSynthesis.speak(utterance);
    }

    setMode(mode) {
        this.playSound('toggle');
        
        // Button States
        document.getElementById('btn-freeview').classList.toggle('active', mode === 'free');
        document.getElementById('btn-identify').classList.toggle('active', mode === 'id');

        // HUD Visibility
        this.infoHud.classList.toggle('hidden', mode === 'free');
        this.specsHud.classList.toggle('hidden', mode === 'id');

        // Viewer Behavior
        this.viewer.autoRotate = (mode === 'free');
        if (mode === 'free') {
            this.viewer.cameraOrbit = "45deg 75deg 80%";
            window.speechSynthesis.cancel(); // Stop talking if switching to free view
        }
        
        this.viewer.setAttribute('data-mode', mode);
    }

    narrate(title, description) {
        window.speechSynthesis.cancel(); // Stop any current talking
        
        const textToSpeak = `${title}. ${description}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        utterance.rate = 0.9;  // Slightly slower for high-tech feel
        utterance.pitch = 0.8; // Deeper voice
        utterance.volume = 1.0;

        window.speechSynthesis.speak(utterance);
    }

    playSound(type) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type === 'toggle' ? 'sine' : 'square';
        osc.frequency.setValueAtTime(type === 'toggle' ? 440 : 880, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }

    startSim() {
        // System Data Flicker
        const stats = ["CALIBRATING...", "OPTIMAL", "SCANNING...", "ACTIVE", "STABLE", "SYNCED"];
        setInterval(() => {
            if(this.liveData) {
                this.liveData.innerText = stats[Math.floor(Math.random() * stats.length)];
            }
        }, 3000);

        // Real-time Clock
        setInterval(() => {
            const clockEl = document.getElementById('clock');
            if(clockEl) {
                clockEl.innerText = new Date().toTimeString().split(' ')[0];
            }
        }, 1000);
    }
}

// Initialize Application
new LabController();