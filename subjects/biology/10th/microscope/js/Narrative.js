/**
 * Narrative Module - Guided Digestive Tour
 */
export class Narrative {
    constructor(viewer, partName, partDesc) {
        this.viewer = viewer;
        this.partName = partName;
        this.partDesc = partDesc;
        this.isPlaying = false;
        this.currentStep = 0;

        // The sequence of digestion
        this.steps = [
            {
                title: "STEP 1: INGESTION",
                text: "Food enters the system and travels through the esophagus to the stomach.",
                orbit: "0deg 80deg 110%"
            },
            {
                title: "STEP 2: CHEMICAL BREAKDOWN",
                text: "In the stomach, powerful gastric acids and enzymes break food into a liquid called chyme.",
                orbit: "20deg 75deg 90%"
            },
            {
                title: "STEP 3: ENZYME INFUSION",
                text: "The liver and pancreas secrete bile and enzymes into the duodenum to neutralize acid and process fats.",
                orbit: "-20deg 70deg 95%"
            },
            {
                title: "STEP 4: ABSORPTION",
                text: "The small intestine uses millions of microscopic villi to absorb nutrients into the bloodstream.",
                orbit: "0deg 90deg 100%"
            },
            {
                title: "STEP 5: RECLAMATION",
                text: "The large intestine recovers water and electrolytes, processing indigestible matter into waste.",
                orbit: "180deg 80deg 110%"
            },
            {
                title: "STEP 6: ELIMINATION",
                text: "Finally, waste is stored in the rectum before being expelled through the anus.",
                orbit: "0deg 100deg 120%"
            }
        ];
    }

    start() {
        if (this.isPlaying) {
            window.speechSynthesis.cancel();
        }
        this.isPlaying = true;
        this.currentStep = 0;
        this.playStep();
    }

    playStep() {
        if (this.currentStep >= this.steps.length) {
            this.partName.innerText = "TOUR COMPLETE";
            this.partDesc.innerText = "You have completed the full digestive system analysis.";
            this.isPlaying = false;
            return;
        }

        const step = this.steps[this.currentStep];

        // 1. Update Visuals
        this.partName.innerText = step.title;
        this.partDesc.innerText = step.text;
        
        // 2. Move Camera to relevant area
        this.viewer.cameraOrbit = step.orbit;

        // 3. AI Voice
        const utterance = new SpeechSynthesisUtterance(step.text);
        utterance.rate = 0.9;
        
        // When the voice finishes this sentence, move to the next step
        utterance.onend = () => {
            if (this.isPlaying) {
                this.currentStep++;
                setTimeout(() => this.playStep(), 1000); // 1 sec pause between steps
            }
        };

        window.speechSynthesis.speak(utterance);
    }

    stop() {
        this.isPlaying = false;
        window.speechSynthesis.cancel();
    }
}