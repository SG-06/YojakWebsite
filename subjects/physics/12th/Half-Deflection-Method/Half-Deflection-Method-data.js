const experimentData = {
  title: "Half-Deflection Method",
  subtitle: "Finding the resistance of a galvanometer and its figure of merit",
  parts: [
    {
      id: "half-deflection",
      name: "Galvanometer Resistance",
      theory: "The resistance of a galvanometer (G) can be found by the half-deflection method. When a high resistance R is connected in series, the galvanometer shows a deflection θ. When a shunt resistance S is connected in parallel, and adjusted so the deflection becomes θ/2, the galvanometer resistance is given by G = (R * S) / (R - S). The Figure of Merit (k) is the current required to produce a deflection of one scale division, calculated as k = E / [(R + G) * θ].",
      apparatus: ["Moving Coil Galvanometer", "Battery/Cell", "High Resistance Box (up to 10k Ω)", "Low Resistance Box (Shunt)", "Two One-way Keys", "Connecting Wires"],
      procedure: [
        "Connect the battery, a high resistance box (R), and the galvanometer in series with a key (K1).",
        "Connect the shunt resistance box (S) in parallel with the galvanometer through a second key (K2).",
        "Close K1 and adjust R to get a large even deflection θ (e.g., 30 divisions).",
        "Close K2 and adjust S until the galvanometer deflection becomes exactly θ/2 (half-deflection).",
        "Note the values of R and S and calculate G using the formula.",
        "Calculate the Figure of Merit using the battery EMF (E), R, G, and θ."
      ],
      precautions: [
        "The series resistance R should be very high to prevent damage to the galvanometer.",
        "The battery should have a constant EMF.",
        "The deflection θ should be within the scale limits and preferably an even number.",
        "Connections should be cleaned for low contact resistance."
      ],
      result: "The resistance of the galvanometer was determined using the half-deflection method and its figure of merit was calculated in Ampere/division.",
      video: "https://www.youtube.com/embed/k7uqfBeLNKo?si=fiZv_E8VADXTb-AI",
      videoAuthor: "LabInApp",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "What is the formula for Galvanometer resistance (G)?",
          options: ["RS/(R+S)", "RS/(R-S)", "(R-S)/RS", "R+S"],
          answer: 1
        },
        {
          question: "What is Figure of Merit (k)?",
          options: ["Voltage per division", "Current per division", "Resistance per division", "Total current"],
          answer: 1
        },
        {
          question: "What happens to the total resistance of the circuit when the shunt is connected?",
          options: ["Increases", "Decreases", "Remains same", "Becomes infinite"],
          answer: 1
        },
        {
          question: "In this experiment, why must R be very large?",
          options: ["To increase sensitivity", "To keep the current small and safe", "To reduce battery life", "To increase G"],
          answer: 1
        },
        {
          question: "The unit of Figure of Merit is:",
          options: ["Ohm", "Ampere/division", "Volt/division", "No unit"],
          answer: 1
        }
      ]
    }
  ]
};