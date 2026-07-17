const experimentData = {
  title: "Potentiometer - Comparing EMF",
  subtitle: "Comparing the Electromotive Force (EMF) of Leclanché and Daniel cells",
  parts: [
    {
      id: "emf-comparison",
      name: "EMF Comparison",
      theory: "A potentiometer works on the principle that when a constant current flows through a wire of uniform cross-section, the potential drop across any length of the wire is directly proportional to that length (V ∝ l). For comparing the EMF of two cells, E1/E2 = l1/l2, where l1 and l2 are the balancing lengths for the first and second cells respectively when the galvanometer shows no deflection. This method is superior to using a voltmeter because the potentiometer draws no current from the cell at the balance point, measuring the 'true' EMF.",
      apparatus: ["Potentiometer (10 wire or 4 wire)", "Leclanché Cell (E1)", "Daniel Cell (E2)", "Battery Eliminator", "Rheostat", "Galvanometer", "Two-way Key", "Jockey", "Ammeter"],
      procedure: [
        "Connect the positive terminal of the battery to the zero end (A) of the potentiometer.",
        "Connect the positive terminals of both cells (Leclanché and Daniel) to point A.",
        "Connect the negative terminals of the cells to the two outer terminals of a two-way key.",
        "Connect the common terminal of the two-way key to a galvanometer and then to a jockey.",
        "Close the primary circuit and adjust the rheostat for a constant current.",
        "Connect the Leclanché cell in the circuit using the two-way key and find the balancing length l1.",
        "Disconnect the Leclanché cell and connect the Daniel cell to find the balancing length l2.",
        "Calculate the ratio E1/E2 = l1/l2."
      ],
      precautions: [
        "The positive terminals of all cells and the battery must be connected to the same point A.",
        "The EMF of the main battery must be greater than the EMF of the individual cells.",
        "The jockey should not be rubbed on the wire.",
        "Current should be passed only while taking observations."
      ],
      result: "The ratio of the EMF of the Leclanché cell and Daniel cell was determined experimentally using the ratio of their balancing lengths.",
      video: "https://www.youtube.com/embed/GvogWA3-W1w?si=KBNd4VZknktsVD02&amp;start=8",
      videoAuthor: "amritacreate",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "What is the principle of a potentiometer?",
          options: ["V = IR", "V ∝ l", "E = mc^2", "P = V^2/R"],
          answer: 1
        },
        {
          question: "Why is a potentiometer preferred over a voltmeter for measuring EMF?",
          options: ["It is cheaper", "It is portable", "It draws no current at balance point", "It has low resistance"],
          answer: 2
        },
        {
          question: "If the balancing length for cell A is 250cm and cell B is 200cm, what is E1/E2?",
          options: ["1.25", "0.8", "1.0", "2.0"],
          answer: 0
        },
        {
          question: "What happens if the EMF of the driver battery is less than the EMF of the cell?",
          options: ["Null point at 0cm", "No null point on the wire", "Wire will melt", "Galvanometer will break"],
          answer: 1
        },
        {
          question: "Potential gradient is defined as:",
          options: ["Potential per unit length", "Potential per unit area", "Current per unit length", "Resistance per unit length"],
          answer: 0
        }
      ]
    }
  ]
};