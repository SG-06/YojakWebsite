/**
 * FreeView Module - Human Digestive System
 */
export class FreeView {
    constructor(viewer, specsHud) {
        this.viewer = viewer;
        this.specsHud = specsHud;
        this.isActive = false;
        this.dataInterval = null;

        // Medical stats to cycle through
        this.bioStats = [
            { label: "BIOME STATUS", value: "HEALTHY" },
            { label: "PERISTALSIS", value: "ACTIVE" },
            { label: "BLOOD FLOW", value: "OPTIMAL" },
            { label: "ENZYME LEVEL", value: "STABLE" },
            { label: "HYDRATION", value: "92%" }
        ];
    }

    activate() {
        this.isActive = true;
        this.specsHud.classList.remove('hidden');
        this.viewer.autoRotate = true;
        this.viewer.cameraOrbit = "0deg 75deg 105%";
        this.startDataSimulation();
    }

    deactivate() {
        this.isActive = false;
        this.specsHud.classList.add('hidden');
        this.viewer.autoRotate = false;
        clearInterval(this.dataInterval);
    }

    startDataSimulation() {
        if (this.dataInterval) clearInterval(this.dataInterval);
        this.dataInterval = setInterval(() => {
            if (!this.isActive) return;

            const target = document.getElementById('live-data');
            const label = target.previousElementSibling;
            const randomStat = this.bioStats[Math.floor(Math.random() * this.bioStats.length)];
            
            target.style.opacity = '0.5';
            setTimeout(() => {
                target.innerText = randomStat.value;
                label.innerText = randomStat.label;
                target.style.opacity = '1';
            }, 100);
        }, 3000);
    }
}