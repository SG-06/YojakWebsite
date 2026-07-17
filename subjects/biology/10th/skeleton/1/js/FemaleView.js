/**
 * BIO-CORE | FemaleView Module v5.0
 * Handles the full-screen comparative reference system.
 */
export class FemaleView {
    constructor() {
        // UI Selectors
        this.overlay = document.getElementById('female-overlay');
        this.viewer = document.getElementById('female-viewer');
        this.isActive = false;

        // Specialized clinical narration for comparative analysis
        this.refDescription = "Reference Mode Active. Analyzing adult female specimen. " + 
                             "Observe the increased width of the pelvic inlet and the " + 
                             "refined overall bone mass compared to the male counterpart. " +
                             "These adaptations facilitate childbirth and lower center-of-gravity stability.";
    }

    /**
     * Activates the Full-Screen Female Reference Overlay
     */
    open() {
        this.isActive = true;
        this.overlay.classList.remove('hidden');

        // 1. Hardened Center-Framing
        // Using auto ensures the large-scale female model fills the screen perfectly
        this.viewer.autoRotate = true;
        this.viewer.cameraOrbit = "0deg 75deg auto"; 
        this.viewer.cameraTarget = "auto auto auto"; 
        
        // 2. Anti-Glare Lighting
        // Set to 0.4 to prevent 'blown-out' white and show bone texture
        this.viewer.exposure = 0.4; 

        // 3. Comparative Narration
        this.narrate("SPECIMEN: FEMALE", this.refDescription);
    }

    /**
     * Closes the overlay and returns to the main lab
     */
    close() {
        this.isActive = false;
        this.overlay.classList.add('hidden');
        this.viewer.autoRotate = false;

        // Clear audio to prevent overlapping when returning to main lab
        window.speechSynthesis.cancel();
    }

    /**
     * Updates lighting based on the global lab theme
     * @param {string} theme - 'default', 'grey', 'pink', 'space'
     */
    syncLighting(theme) {
        if (!this.viewer) return;

        let expVal = 0.4; // Default Clinical
        if (theme === 'space' || theme === 'grey') {
            expVal = 0.7; // Slightly higher for black/dark environments
        } else if (theme === 'pink') {
            expVal = 0.35; // Lowered to emphasize the yellowish sepia filter in CSS
        }

        this.viewer.exposure = expVal;
    }

    /**
     * Hardened Voice Engine for Reference Mode
     */
    narrate(title, description) {
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();

        const utterance = new SpeechSynthesisUtterance(`${title}. ${description}`);
        
        // Slightly higher pitch for the Female Reference system voice
        utterance.rate = 0.95;
        utterance.pitch = 1.05; 
        utterance.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            utterance.voice = voices.find(v => v.lang.includes('en-GB')) || voices[0];
        }

        // Safety timeout for browser speech queue
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 50);
    }
}