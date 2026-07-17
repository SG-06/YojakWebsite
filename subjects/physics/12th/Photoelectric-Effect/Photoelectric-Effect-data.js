const experimentData = {
  title: "Photoelectric Effect",
  subtitle: "Studying the effect of intensity and frequency on stopping potential",
  parts: [
    {
      id: "intensity-effect",
      name: "Part A: Effect of Intensity",
      theory: "The photoelectric effect is the emission of electrons from a metal surface when light of sufficient frequency hits it. According to Einstein's photoelectric equation, the maximum kinetic energy of electrons depends on the frequency of light, not intensity. However, the number of photoelectrons emitted per second (photocurrent) is directly proportional to the intensity of incident light, provided the frequency is above the threshold frequency.",
      apparatus: ["Photoelectric Cell", "Light Source", "Variable Power Supply", "Sensitive Microammeter", "Voltmeter", "Filters (Coloured Glass)", "Optical Bench"],
      procedure: [
        "Keep the frequency of incident light constant by using a specific filter.",
        "Adjust the distance of the light source from the cell to vary intensity.",
        "Set the collector potential to a fixed positive value.",
        "Measure the photocurrent (I) for different intensities (by changing distance d, where Intensity ∝ 1/d²).",
        "Plot a graph between Intensity and Photocurrent."
      ],
      precautions: [
        "The experiment should be performed in a dark room to avoid stray light.",
        "The surface of the photocell should be clean.",
        "Ensure the frequency is above the threshold frequency for the given metal."
      ],
      result: "The photocurrent is found to be directly proportional to the intensity of the incident light.",
      video: "https://www.youtube.com/embed/H-FyOpURPXI?si=1XEoiwuA8FX72XoC&amp;start=1",
      videoAuthor: "Science ABC",
      simulation: "https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "With increase in intensity of light, the photocurrent:",
          options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
          answer: 0
        },
        {
          question: "Intensity of light depends on:",
          options: ["Frequency", "Wavelength", "Number of photons", "Speed of light"],
          answer: 2
        },
        {
          question: "If intensity is doubled, the stopping potential:",
          options: ["Doubles", "Halves", "Remains same", "Four times"],
          answer: 2
        },
        {
          question: "The photoelectric effect demonstrates the _______ nature of light.",
          options: ["Wave", "Particle", "Magnetic", "Gravitational"],
          answer: 1
        },
        {
          question: "Maximum kinetic energy of photoelectrons depends on:",
          options: ["Intensity", "Frequency", "Time of exposure", "Surface area"],
          answer: 1
        }
      ]
    },
    {
      id: "frequency-effect",
      name: "Part B: Frequency & Stopping Potential",
      theory: "Einstein's Equation states: hν = Φ + Kmax. The stopping potential (V0) is the negative potential applied to the collector at which the photocurrent becomes zero. It is related to the maximum kinetic energy by Kmax = eV0. Thus, eV0 = hν - hν0. This shows that stopping potential increases linearly with the frequency (ν) of incident light. The slope of the V0 vs ν graph gives the value of h/e, allowing the calculation of Planck's constant (h).",
      apparatus: ["Photoelectric Cell", "Monochromatic Light Sources (different colors/filters)", "Variable DC Supply (Negative)", "Microammeter", "Voltmeter"],
      procedure: [
        "Select a light source of a specific frequency (e.g., Blue light).",
        "Apply a negative (retarding) potential to the collector.",
        "Increase the negative potential until the photocurrent drops to zero. Note this as V0.",
        "Repeat the process for different frequencies (different colors like Green, Yellow, Red).",
        "Plot a graph between frequency (ν) and stopping potential (V0)."
      ],
      precautions: [
        "Determine the null point of the microammeter accurately.",
        "Use high-quality monochromatic filters to ensure single-frequency light.",
        "The negative potential should be increased in very small steps."
      ],
      result: "The stopping potential is found to increase linearly with the frequency of incident light, confirming Einstein's photoelectric equation.",
      video: "https://www.youtube.com/embed/S2pT-B_9i-M",
      videoAuthor: "Physics Classroom",
      simulation: "https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "The minimum frequency required to eject electrons is called:",
          options: ["Max frequency", "Threshold frequency", "Resonant frequency", "Stopping frequency"],
          answer: 1
        },
        {
          question: "The slope of the graph between stopping potential and frequency is:",
          options: ["h", "e", "h/e", "e/h"],
          answer: 2
        },
        {
          question: "Stopping potential is a measure of:",
          options: ["Max velocity", "Max kinetic energy", "Min energy", "Charge"],
          answer: 1
        },
        {
          question: "If frequency is less than threshold frequency, photocurrent is:",
          options: ["Maximum", "Minimum", "Zero", "Negative"],
          answer: 2
        },
        {
          question: "Planck's constant value is approximately:",
          options: ["6.63 x 10^-34 Js", "3 x 10^8 ms", "1.6 x 10^-19 C", "9.1 x 10^-31 kg"],
          answer: 0
        }
      ]
    }
  ]
};