/**
 * YOJAK Virtual Lab - Main Logic
 */

// Global State
let vantaInstance = null;
let currentThemeIndex = 0; 
const themes = ['default', 'net', 'cells', 'waves', 'clouds', 'fog', 'dots'];

let currentSubject = 'physics'; // Default starting subject
const selectedClasses = {
    physics: '10th',
    chemistry: '10th',
    biology: '10th'
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Theme Switcher
    const bgToggle = document.getElementById('bgToggle');
    if (bgToggle) {
        bgToggle.addEventListener('click', () => {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            changeBg(themes[currentThemeIndex]);
        });
    }

    // 2. Setup All Listeners & Initial Render
    setupEventListeners();
    renderExperiments(); 
});

/**
 * Handles 3D Background Transitions
 */
function changeBg(type) {
    if (vantaInstance) {
        vantaInstance.destroy();
        vantaInstance = null;
    }

    if (type === 'default') return; 

    const common = {
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xffffff 
    };

    try {
        switch (type) {
            case 'net': vantaInstance = VANTA.NET({ ...common, color: 0x6d5df6 }); break;
            case 'cells': vantaInstance = VANTA.CELLS({ ...common, color1: 0x6d5df6, color2: 0x3b82f6 }); break;
            case 'waves': vantaInstance = VANTA.WAVES({ ...common, color: 0x2563eb }); break;
            case 'clouds': vantaInstance = VANTA.CLOUDS({ ...common }); break;
            case 'fog': vantaInstance = VANTA.FOG({ ...common, highlightColor: 0x6d5df6, midColor: 0x3b82f6 }); break;
            case 'dots': 
    vantaInstance = VANTA.WAVES({
        ...common,
        color: 0x5b0f1f,     // The exact Maroon from your login page
        shininess: 40.00,    // High shininess for that "silk" look
        waveHeight: 20.00,   // Height of the waves
        waveSpeed: 0.80,     // Smooth movement
        zoom: 0.75           // Zooms out slightly to show more detail
    });
    break;
        }
    } catch (e) { console.error("Background Error:", e); }
}

/**
 * Handles Tab Switching, Class Selection, and Search
 */
function setupEventListeners() {
    // 1. Subject Tab Switching
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.tab;
            currentSubject = target;

            // UI: Update Active Button
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // UI: Hide all tab contents first
            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
                content.style.display = "none"; // Hard force hide
            });
            
            // UI: Show selected tab content
            const activeContent = document.getElementById(target);
            if (activeContent) {
                activeContent.classList.add("active");
                activeContent.style.display = "block"; // Hard force show
            }

            // Data: Only render list if it's not the English lab (which is static HTML)
            if (target !== 'english') {
                renderExperiments();
            }
        });
    });

    // 2. Class Selector (Grade) Logic
    document.querySelectorAll(".class-selector").forEach(selector => {
        const subject = selector.dataset.subject;
        const buttons = selector.querySelectorAll(".class-btn");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                selectedClasses[subject] = btn.dataset.class;
                
                // Update UI for buttons
                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Re-render the list for that specific grade
                renderExperiments();
            });
        });
    });

    // 3. Real-time Search Box
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll(".experiment-card");

            cards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const desc = card.querySelector("p").textContent.toLowerCase();
                
                if (title.includes(term) || desc.includes(term)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
}

/**
 * Injects Experiment Cards into the HTML based on data.js
 */
function renderExperiments() {
    // Safety check: Don't render for English (static) or if container is missing
    if (currentSubject === 'english') return;

    const listContainer = document.getElementById(`${currentSubject}-list`);
    if (!listContainer) return;

    const activeClass = selectedClasses[currentSubject];
    
    // Check if data.js is loaded and subject exists
    if (typeof experimentsData === 'undefined' || !experimentsData[currentSubject]) {
        console.error("Missing Data for: " + currentSubject);
        return;
    }

    const experiments = experimentsData[currentSubject][activeClass] || [];

    // Clear existing cards
    listContainer.innerHTML = "";

    // If no experiments exist for this grade yet
    if (experiments.length === 0) {
        listContainer.innerHTML = `
            <div class="coming-soon animate-card">
                <div style="font-size: 3.5rem; margin-bottom: 15px;">⏳</div>
                <h3 style="margin-bottom: 10px;">Coming Soon!</h3>
                <p>Experiments for ${currentSubject} ${activeClass} are currently being developed.</p>
            </div>
        `;
        return;
    }

    // Create and Inject Cards
    experiments.forEach((exp, index) => {
        const card = document.createElement("div");
        card.className = "experiment-card animate-card";
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div>
                <h3>${exp.title}</h3>
                <p>${exp.desc}</p>
            </div>
            <a href="${exp.link}" class="start-btn">Start →</a>
        `;
        listContainer.appendChild(card);
    });
}