/**
 * Identification Module
 * Manages part analysis, HUD updates, and Voice Narration
 */

export class Identification {
    constructor(viewer, infoHud) {
        this.viewer = viewer;
        this.infoHud = infoHud;
        this.isActive = false;

        this.partNameDisplay = document.getElementById('part-name');
        this.partDescDisplay = document.getElementById('part-description');

        // Professional descriptions for the AI Narration
        this.descriptions = {
            "OCULAR LENS": "The ocular lens, or eyepiece, is the primary point of observation. It typically provides a 10x magnification of the virtual specimen.",
            "EYE PIECE TUBE": "The tube holds the eyepiece in place and ensures the focal length between the ocular and objective lenses is maintained.",
            "NOSE PIECE": "The rotating nosepiece allows the user to switch between different objective lenses to change magnification levels instantly.",
            "OBJECTIVE LENS": "Objective lenses are the primary magnifying components. They collect light from the specimen to generate the initial image.",
            "BASE": "The base is the heavy foundation of the microscope, providing stability and housing the electrical components for the illuminator.",
            "STAGE CLIPS": "Precision metal clips used to lock the specimen slide into a fixed position for high-magnification scanning.",
            "STAGE": "The mechanical stage is the platform where the specimen is placed. It can be adjusted for precise horizontal and vertical positioning.",
            "DIAPHRAGM": "The diaphragm controls the diameter of the light beam reaching the specimen, allowing for contrast and depth-of-field adjustment.",
            "ILLUMINATOR": "A high-intensity light source that shines upward through the condenser to illuminate the specimen from below.",
            "COARSE FOCUS": "The coarse adjustment knob moves the stage rapidly to bring the specimen into general focus.",
            "ARM": "The structural backbone of the instrument, used for support and safe transport of the microscope."
        };
    }

    /**
     * Triggered when mode switches to Identification
     */
    activate() {
        this.isActive = true;
        this.infoHud.classList.remove('hidden');
        
        // Stop rotation to allow precise clicking
        this.viewer.autoRotate = false;
        this.viewer.setAttribute('data-mode', 'id');
    }

    /**
     * Triggered when mode switches to Free View
     */
    deactivate() {
        this.isActive = false;
        this.infoHud.classList.add('hidden');
        window.speechSynthesis.cancel(); // Stop talking if we switch modes
    }

    /**
     * Handles clicking on a glowing 3D node
     */
    handlePartClick(name) {
        if (!this.isActive) return;

        // 1. Update UI Text
        this.partNameDisplay.innerText = name;
        this.partDescDisplay.innerText = this.descriptions[name] || "Analyzing structural data...";

        // 2. Visual Feedback (HUD Pulse)
        this.infoHud.style.borderLeftColor = "#fff";
        setTimeout(() => this.infoHud.style.borderLeftColor = "var(--accent)", 300);

        // 3. Trigger Voice Narration
        this.narrate(name, this.descriptions[name]);
    }

    /**
     * AI Voice Narration System
     */
    narrate(title, description) {
        // Stop any current talking
        window.speechSynthesis.cancel();

        const fullText = `${title}. ${description}`;
        const utterance = new SpeechSynthesisUtterance(fullText);

        // Tech-style voice settings
        utterance.rate = 0.95; // Slightly slower for clarity
        utterance.pitch = 0.8; // Deeper, "System Voice" feel
        utterance.volume = 1.0;

        // Optional: Find a specific robotic voice if available on the system
        const voices = window.speechSynthesis.getVoices();
        const techVoice = voices.find(v => v.name.includes('Google UK English Male') || v.name.includes('Male'));
        if (techVoice) utterance.voice = techVoice;

        window.speechSynthesis.speak(utterance);
    }
}