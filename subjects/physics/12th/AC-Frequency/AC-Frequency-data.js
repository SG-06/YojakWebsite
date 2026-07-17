const experimentData = {
  title: "AC Frequency using Sonometer",
  subtitle: "Determining the frequency of alternating current (AC) mains",
  parts: [
    {
      id: "ac-frequency",
      name: "AC Frequency",
      theory: "When an alternating current of frequency 'f' is passed through a sonometer wire stretched in a magnetic field (provided by a permanent magnet), the wire experiences a periodic force and vibrates. If the natural frequency of the wire matches the AC frequency, resonance occurs, and the amplitude of vibration becomes maximum. The frequency of the wire is given by f = (1 / 2l) * sqrt(T / m), where 'l' is the resonating length, 'T' is the tension (Mg), and 'm' is the mass per unit length of the wire. By plotting a graph between T and l², the frequency can be accurately determined.",
      apparatus: ["Sonometer", "Step-down Transformer (6V)", "Horseshoe Magnet", "Set of Weights", "Stretched Wire (Non-magnetic like Brass or Copper)", "Physical Balance", "Screw Gauge"],
      procedure: [
        "Place the sonometer on the table and stretch the wire over the pulleys.",
        "Place a permanent horseshoe magnet at the center of the wire.",
        "Connect the ends of the sonometer wire to the output of a step-down transformer.",
        "Apply a known tension T to the wire by hanging weights (M).",
        "Switch on the AC supply and adjust the distance between the two bridges (l) until the wire vibrates with maximum amplitude.",
        "Note the resonating length l. Repeat for different tensions T.",
        "Measure the mass and length of the wire to calculate m (mass per unit length).",
        "Calculate the frequency using the formula for each set of observations."
      ],
      precautions: [
        "The wire should be of uniform cross-section and non-magnetic.",
        "The bridges should be sharp to define the length l accurately.",
        "The transformer should be used to provide low voltage for safety.",
        "Ensure the magnet is placed such that the magnetic field is perpendicular to the wire."
      ],
      result: "The frequency of the AC mains was determined and found to be approximately 50 Hz (or 60 Hz depending on the region).",
      video: "https://www.youtube.com/embed/PjE8D09E6-E",
      videoAuthor: "Amrita University OLabs",
      simulation: "https://phet.colorado.edu/sims/html/generator/latest/generator_all.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "What is the standard frequency of AC mains in India?",
          options: ["60 Hz", "50 Hz", "100 Hz", "220 Hz"],
          answer: 1
        },
        {
          question: "In the resonance condition, the frequency of the wire is ______ the AC frequency.",
          options: ["Half of", "Double of", "Equal to", "Independent of"],
          answer: 2
        },
        {
          question: "How does the resonating length 'l' change if tension 'T' is increased?",
          options: ["Decreases", "Increases", "Stays same", "Becomes zero"],
          answer: 1
        },
        {
          question: "What is the unit of mass per unit length (m)?",
          options: ["kg", "kg/m", "kg/m^2", "g"],
          answer: 1
        },
        {
          question: "The sonometer wire used in this experiment must be:",
          options: ["Iron", "Steel", "Non-magnetic (e.g., Brass)", "Any metal"],
          answer: 2
        }
      ]
    }
  ]
};