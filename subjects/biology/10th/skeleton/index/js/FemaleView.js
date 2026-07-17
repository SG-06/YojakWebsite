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

        // Reference descriptions for narration
        this.refDescription = "Reference Mode Active. Analyzing adult female specimen. " + 
                             "Observe the increased width of the pelvic inlet and the " + 
                             "slighter overall bone mass compared to the male counterpart.";
    }

    /**
     * Activates the Full-Screen Female Reference Overlay
     */
    open() {
        this.isActive = true;
        this.overlay.classList.remove('hidden');

        this.viewer.autoRotate = true;
        
        // Offset the camera slightly to the right (20%) so the model is visible 
        // next to the comparison card
        this.viewer.cameraOrbit = "20deg 75deg 115%"; 
        this.viewer.cameraTarget = "0m 0.1m 0m"; 

        this.viewer.exposure = 0.35; 
        this.narrate("SPECIMEN: FEMALE", this.refDescription);
    }

    /**
     * Closes the overlay and returns to the main lab
     */
    close() {
        this.isActive = false;
        this.overlay.classList.add('hidden');
        this.viewer.autoRotate = false;

        // Stop any ongoing narration
        window.speechSynthesis.cancel();
    }

    /**
     * Updates lighting based on the theme selected in the main lab
     * @param {string} theme - 'default', 'grey', 'pink', 'space'
     */
    syncLighting(theme) {
        if (!this.viewer) return;

        let expVal = 0.35; // Default clinical
        if (theme === 'space' || theme === 'grey') {
            expVal = 0.6; // Brighter for dark themes
        } else if (theme === 'pink') {
            expVal = 0.3; // Lower to enhance the yellowish warm-scan effect
        }

        this.viewer.exposure = expVal;
    }

    /**
     * Specialized Female AI Narration
     */
    narrate(title, description) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${title}. ${description}`);
        
        // Use a slightly higher pitch for the female reference sub-system
        utterance.rate = 1.0;
        utterance.pitch = 1.1; 
        utterance.volume = 1.0;

        window.speechSynthesis.speak(utterance);
    }
}