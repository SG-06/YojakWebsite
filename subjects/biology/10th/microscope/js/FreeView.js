/**
 * FreeView Module
 * Manages cinematic rotation and technical data simulation
 */

export class FreeView {
    constructor(viewer, specsHud) {
        this.viewer = viewer;
        this.specsHud = specsHud;
        this.isActive = false;
        this.dataInterval = null;

        // Technical data to cycle through for the "Scanning" effect
        this.techStats = [
            { label: "RESOLUTION", value: "200nm" },
            { label: "WAVELENGTH", value: "550nm" },
            { label: "APERTURE", value: "0.65 N.A" },
            { label: "CONTRAST", value: "DYNAMIC" },
            { label: "VOLTAGE", value: "220V / 50Hz" }
        ];
    }

    /**
     * Called when the user enters Free View mode
     */
    activate() {
        this.isActive = true;
        this.specsHud.classList.remove('hidden');

        // Cinematic Settings
        this.viewer.autoRotate = true;
        this.viewer.cameraOrbit = "45deg 75deg 80%";
        this.viewer.fieldOfView = "30deg"; // Zoomed look for cinematic feel

        // Start cycling technical "Live" data
        this.startDataSimulation();
    }

    /**
     * Called when switching away to Identification mode
     */
    deactivate() {
        this.isActive = false;
        this.specsHud.classList.add('hidden');
        this.viewer.autoRotate = false;
        
        clearInterval(this.dataInterval);
    }

    /**
     * Simulates real-time hardware scanning data
     */
    startDataSimulation() {
        if (this.dataInterval) clearInterval(this.dataInterval);

        // Periodically update a "System Sensor" value to look active
        this.dataInterval = setInterval(() => {
            if (!this.isActive) return;

            // Find the bottom spec value to flicker/update
            const specValues = this.specsHud.querySelectorAll('.spec-value');
            const target = specValues[specValues.length - 1]; // Let's update the last one (Optics)
            
            const randomStat = this.techStats[Math.floor(Math.random() * this.techStats.length)];
            
            // Glitch effect transition
            target.style.opacity = '0.5';
            setTimeout(() => {
                target.innerText = randomStat.value;
                target.previousElementSibling.innerText = randomStat.label;
                target.style.opacity = '1';
            }, 100);

        }, 4000);
    }
}