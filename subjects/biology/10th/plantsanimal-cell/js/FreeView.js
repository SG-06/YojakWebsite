/**
 * BIO-CORE - FREEVIEW MODULE
 * Handles 3D exploration and real-time biometric simulation.
 */
export class FreeView {
    constructor(viewer, specsHud) {
        this.viewer = viewer;
        this.specsHud = specsHud;
        this.isActive = false;
        this.statInterval = null;

        // Simulated biological status messages for the "Live Data" feed
        this.bioStats = [
            { label: "METABOLIC RATE", value: "OPTIMAL" },
            { label: "ATP SYNTHESIS", value: "ACTIVE" },
            { label: "MEMBRANE TENSION", value: "STABLE" },
            { label: "CYTOPLASMIC FLOW", value: "NORMAL" },
            { label: "PROTEIN FOLDING", value: "99.4%" },
            { label: "ION GRADIENT", value: "BALANCED" },
            { label: "OSMOTIC PRESSURE", value: "CONSTANT" },
            { label: "RIBOSOMAL OUTPUT", value: "PEAK" }
        ];
    }

    /**
     * Activates exploration mode
     */
    activate() {
        this.isActive = true;
        
        // Show the specs panel
        if (this.specsHud) {
            this.specsHud.classList.remove('hidden');
        }
        
        // Configure 3D Viewer for exploration
        if (this.viewer) {
            this.viewer.autoRotate = true;
            this.viewer.interactionPrompt = "auto";
            
            // Set camera to a cinematic overview position
            this.viewer.cameraOrbit = "45deg 75deg 100%";
        }
        
        // Start the "monitoring" simulation
        this.startStatSimulation();
    }

    /**
     * Deactivates exploration mode
     */
    deactivate() {
        this.isActive = false;
        
        // Hide UI and stop rotation
        if (this.specsHud) {
            this.specsHud.classList.add('hidden');
        }

        if (this.viewer) {
            this.viewer.autoRotate = false;
        }
        
        // Stop the data simulation
        if (this.statInterval) {
            clearInterval(this.statInterval);
            this.statInterval = null;
        }
    }

    /**
     * Periodically updates the HUD with "live" biological data
     */
    startStatSimulation() {
        const dataDisplay = document.getElementById('live-data');
        if (!dataDisplay) return;

        // Get the label in the same spec-group
        const labelDisplay = dataDisplay.previousElementSibling;

        if (this.statInterval) clearInterval(this.statInterval);

        this.statInterval = setInterval(() => {
            if (!this.isActive) return;

            // Pick a random biometric stat to display
            const randomStat = this.bioStats[Math.floor(Math.random() * this.bioStats.length)];

            // Subtle fade-out effect during value change
            dataDisplay.style.opacity = '0.3';
            
            setTimeout(() => {
                if (labelDisplay) labelDisplay.innerText = randomStat.label;
                dataDisplay.innerText = randomStat.value;
                dataDisplay.style.opacity = '1';
                
                // Randomly flicker the value for "digital realism"
                if (Math.random() > 0.8) {
                    this.flickerEffect(dataDisplay);
                }
            }, 200);

        }, 4000); // Update every 4 seconds
    }

    /**
     * Creates a high-tech flicker effect on the HUD text
     */
    flickerEffect(element) {
        const originalColor = element.style.color;
        element.style.color = "#fff";
        element.style.textShadow = "0 0 10px var(--medical-blue)";
        
        setTimeout(() => {
            element.style.color = originalColor;
            element.style.textShadow = "none";
        }, 100);
    }
}