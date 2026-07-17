const experimentData = {
  title: "Tangent Galvanometer",
  subtitle: "Determining the reduction factor and Earth's horizontal magnetic field (Bh)",
  parts: [
    {
      id: "reduction-factor",
      name: "Reduction Factor & Bh",
      theory: "A Tangent Galvanometer works on the Tangent Law, which states that when a magnetic needle is placed in two mutually perpendicular magnetic fields B and Bh, it comes to rest making an angle θ such that B = Bh tan θ. The magnetic field produced by a circular coil of n turns and radius r carrying current I is B = (μ₀nI)/(2r). Combining these, I = K tan θ, where K = (2rBh)/(μ₀n) is the reduction factor of the galvanometer. By finding K and knowing the dimensions of the coil, the horizontal component of Earth's magnetic field (Bh) can be calculated.",
      apparatus: ["Tangent Galvanometer", "Battery Eliminator", "Ammeter", "Rheostat", "Commutator", "Plug Key", "Connecting Wires"],
      procedure: [
        "Align the plane of the coil in the magnetic meridian (parallel to the magnetic needle).",
        "Rotate the compass box so the pointer reads 0-0.",
        "Connect the circuit such that the commutator can reverse the current through the coil.",
        "Adjust the rheostat to get a deflection of around 45 degrees.",
        "Note the deflections θ1 and θ2. Reverse the current and note θ3 and θ4.",
        "Calculate the mean deflection θ = (θ1+θ2+θ3+θ4)/4.",
        "Repeat for different values of current I.",
        "Plot a graph between I and tan θ to find the reduction factor K."
      ],
      precautions: [
        "The galvanometer must be placed away from other magnetic materials or instruments.",
        "The plane of the coil must be strictly in the magnetic meridian.",
        "The deflection should ideally be kept between 30 and 60 degrees for maximum accuracy.",
        "All connections must be tight and the commutator must work smoothly."
      ],
      result: "The reduction factor K was determined from the I vs tan θ graph, and the horizontal component of Earth's magnetic field was calculated.",
      video: src="https://www.youtube.com/embed/wIuAnP9xfxw?si=e11m1US0ET7kU_7S&amp;start=1",
      videoAuthor: "Amrita Vlab",
      simulation: "https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "Tangent Galvanometer works on the principle of:",
          options: ["Oersted Law", "Tangent Law", "Coulomb's Law", "Ampere's Law"],
          answer: 1
        },
        {
          question: "For maximum sensitivity, the deflection should be around:",
          options: ["0 degrees", "90 degrees", "45 degrees", "30 degrees"],
          answer: 2
        },
        {
          question: "What is the purpose of the commutator in this experiment?",
          options: ["To increase current", "To reverse current direction", "To measure resistance", "To protect the needle"],
          answer: 1
        },
        {
          question: "If the number of turns in the coil is increased, the reduction factor K:",
          options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
          answer: 1
        },
        {
          question: "The plane of the coil is kept in the magnetic meridian to ensure:",
          options: ["B is parallel to Bh", "B is perpendicular to Bh", "B is zero", "Bh is zero"],
          answer: 1
        }
      ]
    }
  ]
};