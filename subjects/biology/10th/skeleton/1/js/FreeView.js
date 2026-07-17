/**
 * BIO-CORE | FreeView Module v5.0
 * Handles cinematic architecture rotation and hardened passive data simulation.
 */
export class FreeView {
    constructor(viewer, infoPanel) {
        this.viewer = viewer;
        this.infoPanel = infoPanel;
        this.isActive = false;
        this.dataInterval = null;

        // UI Display Selectors
        this.densityDisplay = document.getElementById('density-val');
        this.calciumDisplay = document.getElementById('calcium-val');
        this.partNameDisplay = document.getElementById('part-name');
        this.partDescDisplay = document.getElementById('part-description');
    }

    /**
     * Activates Architecture Mode
     */
    activate() {
        this.isActive = true;
        
        // 1. Reveal HUD Panel
        this.infoPanel.classList.remove('hidden');
        
        // 2. Hardened Center-Frame Logic
        // We use 'auto' to ensure models of different scales remain centered and visible
        this.viewer.autoRotate = true;
        this.viewer.autoRotateDelay = 0;
        this.viewer.cameraOrbit = "0deg 75deg auto"; 
        this.viewer.cameraTarget = "auto auto auto"; 

        // 3. Mode Identification Text
        this.partNameDisplay.innerText = "SYSTEM ARCHITECTURE";
        this.partDescDisplay.innerText = "Passive scan active. Performing non-invasive structural verification and matrix integrity analysis.";

        // 4. Visual Clearance: Hide all hotspots for cinematic view
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.style.visibility = 'hidden';
        });

        // 5. Initiate Passive Biometric Loop
        this.startPassiveScan();
    }

    /**
     * Deactivates Architecture Mode
     */
    deactivate() {
        this.isActive = false;
        this.viewer.autoRotate = false;
        
        if (this.dataInterval) {
            clearInterval(this.dataInterval);
        }
    }

    /**
     * PASSIVE SCAN ENGINE
     * Simulates real-time biometric readings of a healthy skeletal system.
     */
    startPassiveScan() {
        if (this.dataInterval) clearInterval(this.dataInterval);

        this.dataInterval = setInterval(() => {
            if (!this.isActive) return;

            // Generate fluctuating benchmarks
            // Realistic Density: 1.15 - 1.95 g/cm2
            const randDensity = (1.1 + Math.random() * 0.8).toFixed(2);
            // Realistic Calcium: 8.8 - 10.4 mg/dL
            const randCalcium = (8.8 + Math.random() * 1.6).toFixed(1);

            // Clinical UI Feedback: The "Update Flicker"
            this.densityDisplay.style.opacity = '0.4';
            this.calciumDisplay.style.opacity = '0.4';

            setTimeout(() => {
                this.densityDisplay.innerText = `${randDensity} g/cm²`;
                this.calciumDisplay.innerText = `${randCalcium} mg/dL`;
                
                this.densityDisplay.style.opacity = '1';
                this.calciumDisplay.style.opacity = '1';
                
                // Randomly cycle secondary metric labels to simulate deep-scanning
                const labels = ["CALCIUM", "PHOSPHOR", "MINERAL", "MARROW"];
                const labelTarget = this.calciumDisplay.previousElementSibling;
                if (Math.random() > 0.7) {
                    labelTarget.innerText = labels[Math.floor(Math.random() * labels.length)];
                }
            }, 100);

        }, 4000); // 4-second pulse interval
    }
}