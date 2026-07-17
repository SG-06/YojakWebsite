/**
 * BIO-CORE | Identification Module v5.0
 * Comprehensive Osteological Database & Narration Engine
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
         * Comprehensive data for all 39 anatomical hotspots.
         */
        this.boneDatabase = {
            "CRANIUM": {
                desc: "The protective structure of the brain. Formed by 8 cranial bones fused at sutures to ensure maximum neurological protection.",
                density: "1.92 g/cm²", calcium: "9.8 mg/dL"
            },
            "MANDIBLE": {
                desc: "The lower jawbone. The largest, strongest, and only movable bone in the human skull.",
                density: "1.75 g/cm²", calcium: "9.4 mg/dL"
            },
            "MAXILLA": {
                desc: "The upper jawbone. Forms the upper floor of the orbital cavity and the roof of the oral cavity.",
                density: "1.45 g/cm²", calcium: "9.2 mg/dL"
            },
            "ZYGOMATIC": {
                desc: "The cheekbone. Articulates with the maxilla, the temporal bone, the sphenoid bone, and the frontal bone.",
                density: "1.30 g/cm²", calcium: "9.0 mg/dL"
            },
            "FRONTAL BONE": {
                desc: "Forms the forehead and the superior portion of the eye sockets.",
                density: "1.80 g/cm²", calcium: "9.6 mg/dL"
            },
            "CLAVICLE": {
                desc: "The collarbone. Acts as a structural strut connecting the upper limb to the trunk of the body.",
                density: "1.15 g/cm²", calcium: "8.8 mg/dL"
            },
            "SCAPULA": {
                desc: "The shoulder blade. A flat, triangular bone providing the foundation for the shoulder's range of motion.",
                density: "1.08 g/cm²", calcium: "8.7 mg/dL"
            },
            "STERNUM": {
                desc: "The breastbone. A long flat bone in the center of the chest that connects to the ribs via cartilage.",
                density: "1.25 g/cm²", calcium: "9.0 mg/dL"
            },
            "TRUE RIBS": {
                desc: "Rib pairs 1 through 7. These attach directly to the sternum through costal cartilages.",
                density: "1.12 g/cm²", calcium: "8.6 mg/dL"
            },
            "FALSE RIBS": {
                desc: "Rib pairs 8, 9, and 10. These attach to the sternum indirectly via the cartilage of the rib above them.",
                density: "1.10 g/cm²", calcium: "8.5 mg/dL"
            },
            "FLOATING RIBS": {
                desc: "Rib pairs 11 and 12. These have no anterior attachment to the sternum.",
                density: "1.05 g/cm²", calcium: "8.4 mg/dL"
            },
            "HUMERUS": {
                desc: "The long bone of the upper arm, extending from the shoulder to the elbow.",
                density: "1.65 g/cm²", calcium: "9.4 mg/dL"
            },
            "ELBOW": {
                desc: "The hinge joint formed by the distal end of the humerus and the proximal ends of the radius and ulna.",
                density: "N/A", calcium: "JOINT SCAN: OPTIMAL"
            },
            "RADIUS": {
                desc: "The forearm bone on the thumb side. Pivots to allow for wrist rotation.",
                density: "1.42 g/cm²", calcium: "9.1 mg/dL"
            },
            "ULNA": {
                desc: "The forearm bone on the pinky side. Forms the primary hinge of the elbow joint.",
                density: "1.38 g/cm²", calcium: "9.0 mg/dL"
            },
            "CARPALS": {
                desc: "The eight small bones that make up the wrist (carpus).",
                density: "0.95 g/cm²", calcium: "8.4 mg/dL"
            },
            "METACARPALS": {
                desc: "The five long bones of the hand, located between the wrist and the fingers.",
                density: "1.02 g/cm²", calcium: "8.6 mg/dL"
            },
            "PHALANGES (HAND)": {
                desc: "The bones of the fingers. Each finger has three, while the thumb has two.",
                density: "0.88 g/cm²", calcium: "8.2 mg/dL"
            },
            "FEMUR": {
                desc: "The thigh bone. The longest, heaviest, and strongest bone in the human body.",
                density: "2.15 g/cm²", calcium: "10.4 mg/dL"
            },
            "PATELLA": {
                desc: "The kneecap. A thick, circular-triangular bone which articulates with the femur.",
                density: "1.50 g/cm²", calcium: "9.2 mg/dL"
            },
            "TIBIA": {
                desc: "The shin bone. The second largest bone in the body, bearing most of the lower body's weight.",
                density: "1.88 g/cm²", calcium: "9.6 mg/dL"
            },
            "FIBULA": {
                desc: "The calf bone. Located on the lateral side of the tibia; it serves primarily for muscle attachment.",
                density: "1.20 g/cm²", calcium: "8.8 mg/dL"
            },
            "CERVICAL SPINE": {
                desc: "The seven vertebrae of the neck (C1-C7). Designed for maximum flexibility and head support.",
                density: "0.90 g/cm²", calcium: "8.4 mg/dL"
            },
            "THORACIC SPINE": {
                desc: "The twelve vertebrae of the middle back (T1-T12). Each provides an attachment point for a pair of ribs.",
                density: "0.95 g/cm²", calcium: "8.5 mg/dL"
            },
            "LUMBAR SPINE": {
                desc: "The five largest vertebrae of the lower back (L1-L5), designed for weight-bearing and stability.",
                density: "1.05 g/cm²", calcium: "8.7 mg/dL"
            },
            "ILIUM": {
                desc: "The largest and uppermost bone of the pelvis, forming the prominent 'hip bone' structure.",
                density: "1.40 g/cm²", calcium: "9.2 mg/dL"
            },
            "ACETABULUM": {
                desc: "The socket of the hip bone into which the head of the femur fits.",
                density: "1.60 g/cm²", calcium: "9.3 mg/dL"
            },
            "SACRUM": {
                desc: "A large, triangular bone at the base of the spine, providing a strong foundation for the pelvis.",
                density: "1.10 g/cm²", calcium: "8.8 mg/dL"
            },
            "COCCYX": {
                desc: "The tailbone. A small, triangular structure at the very end of the vertebral column.",
                density: "0.85 g/cm²", calcium: "8.1 mg/dL"
            },
            "PUBIS": {
                desc: "The ventral and anterior bone of the pelvic girdle.",
                density: "1.15 g/cm²", calcium: "8.9 mg/dL"
            },
            "ISCHIUM": {
                desc: "The lower and back part of the hip bone, forming the primary 'sitting' bone.",
                density: "1.25 g/cm²", calcium: "9.0 mg/dL"
            },
            "KNEE JOINT": {
                desc: "The complex hinge connecting the femur, tibia, and patella. It is the largest joint in the body.",
                density: "N/A", calcium: "SYNOVIAL: ACTIVE"
            },
            "CALCANEUS": {
                desc: "The heel bone. The largest bone of the foot, providing a strong lever for calf muscles.",
                density: "1.35 g/cm²", calcium: "9.1 mg/dL"
            },
            "TALUS": {
                desc: "The ankle bone. It forms the lower part of the ankle joint and transmits body weight to the foot.",
                density: "1.28 g/cm²", calcium: "8.9 mg/dL"
            },
            "METATARSALS": {
                desc: "The five long bones in the midfoot, connecting the ankle bones to the toes.",
                density: "1.10 g/cm²", calcium: "8.7 mg/dL"
            },
            "PHALANGES (FOOT)": {
                desc: "The bones of the toes. Essential for balance and propulsion during locomotion.",
                density: "0.90 g/cm²", calcium: "8.3 mg/dL"
            }
        };
    }

    activate() {
        this.isActive = true;
        this.infoPanel.classList.remove('hidden');
        this.viewer.autoRotate = false;
        
        // Show hotspots
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.style.display = 'block';
            hs.style.opacity = '1';
        });
    }

    deactivate() {
        this.isActive = false;
        this.infoPanel.classList.add('hidden');
        window.speechSynthesis.cancel();
        
        // Hide hotspots
        document.querySelectorAll('.Hotspot').forEach(hs => {
            hs.style.display = 'none';
        });
    }

    handlePartClick(name) {
        if (!this.isActive || !this.boneDatabase[name]) return;

        const data = this.boneDatabase[name];
        
        // Update UI
        this.partNameDisplay.innerText = name;
        this.partDescDisplay.innerText = data.desc;
        
        // FIX: Resets scroll position to top when a new bone is selected
        this.partDescDisplay.scrollTop = 0;

        this.densityDisplay.innerText = data.density;
        this.calciumDisplay.innerText = data.calcium;

        // Perform clinical narration
        this.narrate(name, data.desc);
    }
    
    narrate(title, description) {
        return new Promise((resolve) => {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(`${title}. ${description}`);
            utterance.rate = 0.95;
            utterance.pitch = 0.85; 
            utterance.volume = 1.0;

            // RESOLVE the promise when the speech actually finishes
            utterance.onend = () => {
                resolve();
            };

            // Also resolve on error so the tour doesn't get stuck if speech fails
            utterance.onerror = () => {
                resolve();
            };

            window.speechSynthesis.speak(utterance);
        });
    }
}