/**
 * BIO-CORE | FreeView Module v5.0
 * Handles cinematic architecture rotation and passive data simulation.
 */
export class FreeView {
    constructor(viewer, infoPanel) {
        this.viewer = viewer;
        this.infoPanel = infoPanel;
        this.isActive = false;
        this.dataInterval = null;

        // UI Selectors for the Data Feed
        this.densityDisplay = document.getElementById('density-val');
        this.calciumDisplay = document.getElementById('calcium-val');
        this.partNameDisplay = document.getElementById('part-name');
        this.partDescDisplay = document.getElementById('part-description');
    }

    /**
     * Activates FreeView (Architecture) Mode
     */
  activate() {
    this.isActive = true;
    this.infoPanel.classList.remove('hidden');
    
    this.viewer.autoRotate = true;
    // USE AUTO FOR BOTH ORBIT AND TARGET
    this.viewer.cameraOrbit = "0deg 75deg auto"; 
    this.viewer.cameraTarget = "auto auto auto"; 
    
        // 3. Update HUD Text
        this.partNameDisplay.innerText = "SYSTEM ARCHITECTURE";
        this.partDescDisplay.innerText = "Architecture mode active. Performing full-frame structural analysis and bone matrix verification.";

        // 4. Clean View: Hide all 39 hotspots
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.style.display = 'none';
        });

        // 5. Start the Biometric Data Feed
        this.startPassiveScan();
    }

    /**
     * Deactivates FreeView Mode
     */
    deactivate() {
        this.isActive = false;
        this.viewer.autoRotate = false;
        
        // Clean up memory
        if (this.dataInterval) {
            clearInterval(this.dataInterval);
        }
    }

    /**
     * PASSIVE SCAN ENGINE
     * Simulates live biometric readings of a healthy adult skeleton.
     */
    startPassiveScan() {
        if (this.dataInterval) clearInterval(this.dataInterval);

        this.dataInterval = setInterval(() => {
            if (!this.isActive) return;

            // Generate realistic fluctuating osteological benchmarks
            // Standard bone density for adults: 1.0 - 2.0 g/cm2
            const randDensity = (1.1 + Math.random() * 0.8).toFixed(2);
            // Standard serum calcium: 8.5 - 10.5 mg/dL
            const randCalcium = (8.6 + Math.random() * 1.6).toFixed(1);

            // Visual UI Feedback: Small "update" flicker
            this.densityDisplay.style.opacity = '0.4';
            this.calciumDisplay.style.opacity = '0.4';

            setTimeout(() => {
                this.densityDisplay.innerText = `${randDensity} g/cm²`;
                this.calciumDisplay.innerText = `${randCalcium} mg/dL`;
                
                this.densityDisplay.style.opacity = '1';
                this.calciumDisplay.style.opacity = '1';
                
                // Randomize the "Calcium Index" label occasionally to show different metrics
                const labels = ["CALCIUM", "MARROW", "MINERAL", "PHOSPHOR"];
                const labelTarget = this.calciumDisplay.previousElementSibling;
                if (Math.random() > 0.8) {
                    labelTarget.innerText = labels[Math.floor(Math.random() * labels.length)];
                }
            }, 150);

        }, 3000); // Pulse data every 3 seconds
    }
}