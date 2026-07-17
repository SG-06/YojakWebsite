const experimentData = {
  title: "Potentiometer - Internal Resistance",
  subtitle: "Determining the internal resistance of a primary cell using a potentiometer",
  parts: [
    {
      id: "internal-resistance",
      name: "Internal Resistance",
      theory: "The internal resistance of a cell is the opposition offered by the electrolyte and electrodes to the flow of current inside the cell. When a cell is in an open circuit (no current drawn), the potentiometer balances at length l1 (EMF E). When the cell is shunted with a resistance R, current flows, and the potentiometer balances at a shorter length l2 (Terminal Voltage V). The internal resistance 'r' is calculated using the formula: r = R * [(l1 - l2) / l2]. This value depends on the distance between electrodes, their surface area, and the concentration of the electrolyte.",
      apparatus: ["Potentiometer", "Battery Eliminator", "Leclanché Cell", "Two Resistance Boxes", "Two One-way Keys", "Galvanometer", "Jockey", "Connecting Wires"],
      procedure: [
        "Connect the positive terminal of the driver battery and the test cell to the zero end (point A) of the potentiometer.",
        "Connect the negative terminal of the cell to a galvanometer and jockey through a key.",
        "Connect a resistance box (shunting box) in parallel with the cell through a second key.",
        "With the shunt key open, find the balancing length l1 for the EMF of the cell.",
        "Close the shunt key and take out a known resistance R from the shunt box.",
        "Find the new balancing length l2 for the terminal voltage of the cell.",
        "Calculate the internal resistance using the formula r = R(l1-l2)/l2.",
        "Repeat for different values of R."
      ],
      precautions: [
        "The EMF of the driver battery must be greater than that of the cell.",
        "All positive terminals must be connected to the same point A.",
        "The cell should not be kept short-circuited for long to avoid polarization.",
        "The balancing length should be measured from the zero end accurately."
      ],
      result: "The internal resistance of the given primary cell was successfully determined and found to vary slightly with the external resistance R.",
      video: "https://www.youtube.com/embed/PCGPGmtd3Ow?si=RikUjINNP7KF3llY&amp;start=8",
      videoAuthor: "amritacreate",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "What is the formula for internal resistance?",
          options: ["r = R(l2-l1)/l1", "r = R(l1-l2)/l2", "r = R(l1/l2)", "r = R(l2/l1)"],
          answer: 1
        },
        {
          question: "Internal resistance of a cell increases when:",
          options: ["Area of electrodes increases", "Distance between electrodes increases", "Temperature increases", "Concentration decreases"],
          answer: 1
        },
        {
          question: "What does the potentiometer measure when the shunt key is open?",
          options: ["Terminal Voltage", "Internal Resistance", "EMF", "Current"],
          answer: 2
        },
        {
          question: "If l1 = 100cm and l2 = 80cm and R = 4 ohms, what is r?",
          options: ["1 ohm", "0.5 ohm", "2 ohms", "4 ohms"],
          answer: 0
        },
        {
          question: "Why is the positive terminal always connected to point A?",
          options: ["To maintain high resistance", "To ensure a fall of potential along the wire", "To prevent battery drainage", "To increase sensitivity"],
          answer: 1
        }
      ]
    }
  ]
};