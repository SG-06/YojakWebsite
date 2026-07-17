const experimentData = {
  title: "Refraction through a Rectangular Glass Slab",
  subtitle: "Optics: Studying Lateral Shift and Snell's Law",
  parts: [
    {
      id: "glass-slab-study",
      name: "Complete Experiment",
      theory: "When a ray of light passes through a rectangular glass slab, it undergoes refraction at two surfaces. At the first surface (air-to-glass), the light bends towards the normal because it enters a denser medium. At the second surface (glass-to-air), the light bends away from the normal as it enters a rarer medium. Because the two refracting surfaces are parallel, the extent of bending at the first surface is equal and opposite to the bending at the second surface. Consequently, the emergent ray is parallel to the incident ray. However, the emergent ray is slightly shifted sideways from the original path of the incident ray. This perpendicular distance between the original path of the incident ray and the emergent ray is called Lateral Displacement or Lateral Shift. The shift depends on the thickness of the slab, the angle of incidence, and the refractive index of the glass.",
      apparatus: [
        "Rectangular Glass Slab",
        "Drawing Board",
        "White Paper Sheet",
        "Drawing Pins and Fixing Pins (All-pins)",
        "Protractor and Measuring Scale",
        "Sharp Pencil"
      ],
      procedure: [
        "Fix a white sheet of paper on the drawing board using drawing pins.",
        "Place the rectangular glass slab in the center of the paper and trace its boundary ABCD.",
        "Remove the slab and draw a normal line at a point O on the side AB.",
        "Draw an incident ray line making an angle 'i' (e.g., 30°) with the normal.",
        "Fix two pins (P1 and P2) vertically on this incident ray line, about 5cm apart.",
        "Place the glass slab back exactly on its boundary.",
        "Look through the opposite side (CD) of the slab and fix two more pins (P3 and P4) such that they appear to be in a straight line with the images of P1 and P2.",
        "Remove the slab and pins. Join the points P3 and P4 to draw the emergent ray.",
        "Join point O (where light entered) to point O' (where light exited) to show the refracted ray inside the slab.",
        "Extend the original incident ray forward using a dotted line. Observe that it is parallel to the emergent ray.",
        "Measure the perpendicular distance between the dotted incident path and the emergent ray; this is the Lateral Shift."
      ],
      precautions: [
        "The pins must be fixed perfectly vertical.",
        "The distance between the pins should be at least 5cm for better accuracy.",
        "The glass slab should not move from its boundary during the experiment.",
        "Use a sharp pencil to draw thin lines for more accurate measurements of angles."
      ],
      result: "The emergent ray was found to be parallel to the incident ray, confirming that the net deviation is zero. The lateral displacement was measured and found to be consistent for the given thickness of the slab.",
      video: "https://www.youtube.com/embed/t7kFpEvLtjM?si=kCGre6UIySTlF61P&amp;start=7", 
      videoAuthor: "7activestudio",
      simulation: "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "When light enters glass from air, it bends:",
          options: ["Away from the normal", "Towards the normal", "In a circular path", "It does not bend"],
          answer: 1
        },
        {
          question: "The perpendicular distance between the incident ray's path and the emergent ray is called:",
          options: ["Vertical shift", "Lateral displacement", "Refractive index", "Normal deviation"],
          answer: 1
        },
        {
          question: "What is the relationship between the angle of incidence (i) and angle of emergence (e) in a glass slab?",
          options: ["i > e", "i < e", "i = e", "i + e = 90"],
          answer: 2
        },
        {
          question: "If the thickness of the glass slab increases, the lateral shift will:",
          options: ["Decrease", "Increase", "Remain the same", "Become zero"],
          answer: 1
        },
        {
          question: "A ray of light falling normally (at 90°) on the surface of a glass slab will:",
          options: ["Bend towards the normal", "Bend away from the normal", "Pass undeviated", "Reflect back 180 degrees"],
          answer: 2
        },
        {
          question: "Lateral shift depends on which of the following?",
          options: ["Angle of incidence", "Thickness of the slab", "Refractive index of the glass", "All of the above"],
          answer: 3
        },
        {
          question: "Snell's Law is expressed by the formula:",
          options: ["sin i / sin r = constant", "sin r / sin i = constant", "i + r = 90", "i = r"],
          answer: 0
        },
        {
          question: "The speed of light in glass is _______ than the speed of light in air.",
          options: ["Higher", "Lower", "The same", "Zero"],
          answer: 1
        },
        {
          question: "The emergent ray and the incident ray are:",
          options: ["Perpendicular", "Parallel", "Converging", "Diverging"],
          answer: 1
        },
        {
          question: "Refraction occurs because light changes its _______ when entering a new medium.",
          options: ["Color", "Frequency", "Velocity", "Amplitude"],
          answer: 2
        }
      ]
    }
  ]
};