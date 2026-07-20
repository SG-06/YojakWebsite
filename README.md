# 🎓 YOJAK Digital Learning Portal

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Netlify Status](https://img.shields.io/badge/netlify-deployed-success)

> **Sustainable development through action, knowledge, and high-tech digital experimentation.**

YOJAK is a comprehensive digital education platform designed to bridge the gap between theoretical learning and practical application. Tailored for Maharashtra State Board (HSC) students and general science enthusiasts, the platform provides an interactive ecosystem comprising structured study materials and immersive virtual laboratory simulations.

---

## 📖 Ideology & Interface

**The Problem:** Students often lack access to physical laboratories and structured, easy-to-revise study materials, limiting their practical understanding of core scientific concepts. 
**The Solution:** A dual-interface web application that splits learning into two distinct, highly focused modules:
1.  **Theoretical Foundation:** Structured, board-aligned notes and revision tools.
2.  **Practical Application:** Browser-based interactive physics, chemistry, biology, and language simulations.

The user interface is designed to be lightweight, distraction-free, and accessible even on low-bandwidth networks, ensuring equitable access to digital education.

---

## ✨ Key Features

### 📚 1. E Resources (Theory & Revision)
Curated theoretical modules focused on **Std 8, 9, and 10** (Maths and Science - HSC Board).
*   **Revision Notes:** Crisp, syllabus-aligned chapter summaries.
*   **Flashcards:** Interactive UI for active recall and memorization.
*   **Q&A Bank:** Comprehensive question-and-answer sets for exam preparation.

### 🧪 2. Virtual Labs (vLabs)
Interactive digital experimentation across **Physics, Chemistry, Biology, and English**. Each lab is structured to mimic a real-world scientific process.

**Example Experiment:** *Thermodynamics: Thread Cutting Through Ice (Regelation)*
Every virtual lab module includes:
*   **Theory:** The underlying scientific principles.
*   **Apparatus:** Digital representation of required tools.
*   **Procedure:** Step-by-step instructions.
*   **Simulation:** Interactive, physics-based UI allowing users to manipulate variables (e.g., applying pressure to ice).
*   **Self Evaluation:** Quizzes to test comprehension post-experiment.

---

## 💻 Ideal Tech Stack


*   **Frontend:** HTML, CSS and JS for building the interactive interfaces.
*   **Animations/Simulations:** HTML5 Canvas, [Framer Motion](https://www.framer.com/motion/), or Physics engines for the Virtual Labs.
*   **Styling:** Tailwind CSS for responsive, mobile-first design.
*   **Backend / Content Delivery:** Static JSON data layers for notes and Q&A.
*   **Hosting:** Netlify.

---

## 📂 Project Structure

```text
📦 yojak-website
 ┣ 📂 public
 ┃ ┣ 📂 assets (images, icons)
 ┃ ┗ 📜 index.html
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 eResources (Flashcards, NotesUI)
 ┃ ┃ ┗ 📂 vLabs (SimulationCanvas, Sidebar)
 ┃ ┣ 📂 data (JSON files for Q&A and Theory content)
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.jsx
 ┃ ┃ ┣ 📜 TheoryHub.jsx
 ┃ ┃ ┗ 📜 VirtualLab.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┗ 📜 index.css
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 👥 Contributors

Developed by the YOJAK Center for Research and Strategic Planning team:

Prem Sonawane

Swarup Gade

Atharva Mor

Chehak Bansal

Pradip Nimbale

Siddhant Motghare

Abhay Tarnalle

Nishit Kapashi

Sushant Nagare

Parth Mane

Chahek Bansal

Vasistha Gupta

Arpita Allibadi

Ojasvi Bhavsar
