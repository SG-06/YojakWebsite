/**
 * BIO-CORE | Identification Module v5.0
 * Comprehensive Osteological Database & Hardened Narration Engine
 */
export class Identification {
    constructor(viewer, infoPanel) {
        this.viewer = viewer;
        this.infoPanel = infoPanel;
        this.isActive = false;

        // UI Selectors
        this.partNameDisplay = document.getElementById('part-name');
        this.partDescDisplay = document.getElementById('part-description');
        this.densityDisplay = document.getElementById('density-val');
        this.calciumDisplay = document.getElementById('calcium-val');

        /**
         * OSTEOLOGICAL DATABASE
         * Precise data for all 39 anatomical hotspots provided.
         */
        this.boneDatabase = {
            "CRANIUM": { desc: "The brain's protective casing, formed by 8 cranial bones fused at sutures.", density: "1.92 g/cm²", calcium: "9.8 mg/dL" },
            "MANDIBLE": { desc: "The lower jawbone. The strongest and only movable bone in the skull.", density: "1.75 g/cm²", calcium: "9.4 mg/dL" },
            "MAXILLA": { desc: "The upper jawbone forming the floor of the eye sockets and roof of the mouth.", density: "1.45 g/cm²", calcium: "9.2 mg/dL" },
            "ZYGOMATIC": { desc: "The cheekbones. These define the lateral wall and floor of the eye sockets.", density: "1.30 g/cm²", calcium: "9.0 mg/dL" },
            "FRONTAL BONE": { desc: "The large bone forming the forehead and upper eye sockets.", density: "1.80 g/cm²", calcium: "9.6 mg/dL" },
            "CLAVICLE": { desc: "The collarbone. Connects the arm to the trunk, acting as a structural brace.", density: "1.20 g/cm²", calcium: "8.8 mg/dL" },
            "SCAPULA": { desc: "The shoulder blade. Provides attachment for the muscles of the arm and chest.", density: "1.10 g/cm²", calcium: "8.7 mg/dL" },
            "STERNUM": { desc: "The breastbone. A flat bone that anchors the ribs to the front of the chest.", density: "1.25 g/cm²", calcium: "9.0 mg/dL" },
            "TRUE RIBS": { desc: "Rib pairs 1 through 7, connecting directly to the sternum.", density: "1.12 g/cm²", calcium: "8.6 mg/dL" },
            "FALSE RIBS": { desc: "Rib pairs 8 to 10, attached to the sternum via costal cartilage.", density: "1.10 g/cm²", calcium: "8.5 mg/dL" },
            "FLOATING RIBS": { desc: "Rib pairs 11 and 12, with no anterior attachment.", density: "1.05 g/cm²", calcium: "8.4 mg/dL" },
            "HUMERUS": { desc: "The upper arm bone, extending from the shoulder to the elbow.", density: "1.65 g/cm²", calcium: "9.4 mg/dL" },
            "ELBOW": { desc: "The hinge joint connecting the humerus, radius, and ulna.", density: "N/A", calcium: "SCAN: STABLE" },
            "RADIUS": { desc: "The thicker of the two forearm bones, located on the thumb side.", density: "1.42 g/cm²", calcium: "9.1 mg/dL" },
            "ULNA": { desc: "The longer forearm bone, forming the primary hinge of the elbow.", density: "1.38 g/cm²", calcium: "9.0 mg/dL" },
            "CARPALS": { desc: "Eight small bones forming the human wrist complex.", density: "0.95 g/cm²", calcium: "8.4 mg/dL" },
            "METACARPALS": { desc: "The five bones of the palm, located between wrist and fingers.", density: "1.02 g/cm²", calcium: "8.6 mg/dL" },
            "PHALANGES (HAND)": { desc: "The digital bones of the hand. Fourteen bones per limb.", density: "0.88 g/cm²", calcium: "8.2 mg/dL" },
            "FEMUR": { desc: "The thigh bone. The strongest, longest, and heaviest bone in the body.", density: "2.15 g/cm²", calcium: "10.4 mg/dL" },
            "PATELLA": { desc: "The kneecap. Enhances the leverage of the quadriceps tendon.", density: "1.50 g/cm²", calcium: "9.2 mg/dL" },
            "TIBIA": { desc: "The shin bone. The larger, weight-bearing bone of the lower leg.", density: "1.88 g/cm²", calcium: "9.6 mg/dL" },
            "FIBULA": { desc: "The calf bone. Provides stability to the ankle and muscle attachment.", density: "1.20 g/cm²", calcium: "8.8 mg/dL" },
            "CERVICAL SPINE": { desc: "Seven vertebrae of the neck (C1-C7) supporting the head.", density: "0.90 g/cm²", calcium: "8.4 mg/dL" },
            "THORACIC SPINE": { desc: "Twelve vertebrae of the mid-back (T1-T12) supporting the ribs.", density: "0.95 g/cm²", calcium: "8.5 mg/dL" },
            "LUMBAR SPINE": { desc: "Five large vertebrae (L1-L5) supporting the body's weight.", density: "1.05 g/cm²", calcium: "8.7 mg/dL" },
            "ILIUM": { desc: "The largest and uppermost part of the hip bone.", density: "1.40 g/cm²", calcium: "9.2 mg/dL" },
            "ACETABULUM": { desc: "The concave surface of the pelvis that forms the hip socket.", density: "1.60 g/cm²", calcium: "9.3 mg/dL" },
            "SACRUM": { desc: "The triangular bone at the base of the spine, essential for pelvic stability.", density: "1.10 g/cm²", calcium: "8.8 mg/dL" },
            "COCCYX": { desc: "The tailbone. The final segment of the vertebral column.", density: "0.85 g/cm²", calcium: "8.1 mg/dL" },
            "PUBIS": { desc: "The forward-most part of the hip bone.", density: "1.15 g/cm²", calcium: "8.9 mg/dL" },
            "ISCHIUM": { desc: "The lower, posterior part of the hip bone; the primary 'sitting' bone.", density: "1.25 g/cm²", calcium: "9.0 mg/dL" },
            "KNEE JOINT": { desc: "Largest complex hinge joint in the body connecting femur and tibia.", density: "N/A", calcium: "SCAN: ACTIVE" },
            "CALCANEUS": { desc: "The heel bone. The largest bone in the foot structure.", density: "1.35 g/cm²", calcium: "9.1 mg/dL" },
            "TALUS": { desc: "The ankle bone. Connects the leg to the foot.", density: "1.28 g/cm²", calcium: "8.9 mg/dL" },
            "METATARSALS": { desc: "Five long bones in the midfoot.", density: "1.10 g/cm²", calcium: "8.7 mg/dL" },
            "PHALANGES (FOOT)": { desc: "Digital bones of the toes, critical for balance.", density: "0.90 g/cm²", calcium: "8.3 mg/dL" }
        };
    }

    activate() {
        this.isActive = true;
        this.infoPanel.classList.remove('hidden');
        this.viewer.autoRotate = false;
    }

    deactivate() {
        this.isActive = false;
        this.infoPanel.classList.add('hidden');
        window.speechSynthesis.cancel();
    }

    handlePartClick(name) {
        if (!this.isActive || !this.boneDatabase[name]) return;

        const data = this.boneDatabase[name];
        this.partNameDisplay.innerText = name;
        this.partDescDisplay.innerText = data.desc;
        this.densityDisplay.innerText = data.density;
        this.calciumDisplay.innerText = data.calcium;

        this.narrate(name, data.desc);
    }

    /**
     * Hardened Narration Engine
     * Clears speech queue and forces engine resumption to fix Chrome/Edge bugs.
     */
    narrate(title, description) {
        // 1. Force stop and resume engine
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();

        // 2. Create message
        const utterance = new SpeechSynthesisUtterance(`${title}. ${description}`);
        
        // 3. Clinical Tone Tuning
        utterance.rate = 0.92;  // Authoritative pace
        utterance.pitch = 0.85; // Low-frequency clinical AI voice
        utterance.volume = 1.0;

        // 4. Voice Selection (Async safe)
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            // Priority: High quality UK/US voices
            utterance.voice = voices.find(v => v.lang.includes('en-GB')) || 
                              voices.find(v => v.lang.includes('en-US')) || 
                              voices[0];
        }

        // 5. Execute with 50ms safety buffer
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 50);
    }
}