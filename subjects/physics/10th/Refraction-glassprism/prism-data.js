const experimentData = {
  title: "Refraction Through a Glass Prism",
  subtitle: "Study of Angle of Deviation and Ray Tracing",
  parts: [
    {
      id: "glass-prism-refraction",
      name: "Complete Experiment",
      theory: "Refraction is the bending of light as it passes from one medium to another of different optical density. A glass prism is a transparent object with two triangular ends and three rectangular sides. When a ray of light enters the prism, it bends towards the normal (air to glass) and when it exits, it bends away from the normal (glass to air). The angle between the incident ray and the emergent ray is called the Angle of Deviation (δ). The relationship between the angle of incidence (i), angle of emergence (e), angle of the prism (A), and angle of deviation (δ) is given by the formula: i + e = A + δ. As the angle of incidence increases, the angle of deviation first decreases to a minimum value (Dm) and then increases.",
      apparatus: [
        "Glass Prism",
        "Drawing Board",
        "White Paper Sheet",
        "Drawing Pins (Board pins)",
        "Fixing Pins (Needle pins)",
        "Protractor",
        "Measuring Scale and Pencil"
      ],
      procedure: [
        "Fix a white sheet of paper on the drawing board using drawing pins.",
        "Place the glass prism on the paper and trace its boundary ABC.",
        "Remove the prism and draw a normal line at a point on the face AB.",
        "Draw an incident ray at a specific angle (e.g., 30 degrees) to the normal.",
        "Fix two pins (P1 and P2) vertically on the incident ray line, about 5cm apart.",
        "Place the prism back on the boundary and look at the images of P1 and P2 from the other face (AC).",
        "Fix two more pins (P3 and P4) such that they appear to be in a straight line with the images of P1 and P2.",
        "Remove the prism and pins. Draw the emergent ray by joining the points where P3 and P4 were placed.",
        "Extend the incident ray forward and the emergent ray backward. Measure the angle between them; this is the Angle of Deviation (δ).",
        "Repeat the experiment for different angles of incidence (35, 40, 45, 50 degrees) and plot a graph of 'i' vs 'δ'."
      ],
      precautions: [
        "The pins must be fixed vertically and should be at least 5 cm apart for better accuracy.",
        "A sharp pencil should be used for drawing the boundary and rays.",
        "The boundary of the prism should not shift during the experiment.",
        "The angle of incidence should generally be between 30 and 60 degrees."
      ],
      result: "The path of light through the glass prism was traced. The graph of angle of incidence (i) versus angle of deviation (δ) shows a characteristic 'U' shape, and the angle of minimum deviation was determined.",
      video: "https://www.youtube.com/embed/-nuM-Ujd2lE?si=aCGLxh4Koy4REwQo", 
      videoAuthor: "Make Me Scientific",
      simulation: "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "What happens to a ray of light when it enters a glass prism from air?",
          options: ["It bends away from the normal", "It bends towards the normal", "It passes undeviated", "It reflects back completely"],
          answer: 1
        },
        {
          question: "The angle between the incident ray and the emergent ray is called:",
          options: ["Angle of Refraction", "Angle of Prism", "Angle of Deviation", "Angle of Reflection"],
          answer: 2
        },
        {
          question: "Which of the following is the correct relation for a prism?",
          options: ["i + A = e + δ", "i + e = A + δ", "i + δ = A + e", "i - e = A - δ"],
          answer: 1
        },
        {
          question: "As the angle of incidence increases, the angle of deviation:",
          options: ["Increases continuously", "Decreases continuously", "First increases then decreases", "First decreases then increases"],
          answer: 3
        },
        {
          question: "In the position of minimum deviation, which of the following is true?",
          options: ["i = e", "i > e", "i < e", "i + e = 90"],
          answer: 0
        },
        {
          question: "A glass prism has how many rectangular lateral surfaces?",
          options: ["2", "3", "4", "5"],
          answer: 1
        },
        {
          question: "Which color of white light deviates the most through a prism?",
          options: ["Red", "Yellow", "Green", "Violet"],
          answer: 3
        },
        {
          question: "The ratio of the speed of light in vacuum to the speed of light in the prism is called:",
          options: ["Refractive Index", "Magnification", "Power", "Dispersion"],
          answer: 0
        },
        {
          question: "Why do we keep a distance of at least 5cm between the pins?",
          options: ["To save space", "For better accuracy in defining the ray direction", "To make the pins look bigger", "It is not necessary"],
          answer: 1
        },
        {
          question: "The phenomenon of splitting white light into seven colors through a prism is called:",
          options: ["Refraction", "Reflection", "Dispersion", "Total Internal Reflection"],
          answer: 2
        }
      ]
    }
  ]
};