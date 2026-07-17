const experimentData = {
  title: "Meter Bridge - Specific Resistance",
  subtitle: "Finding the resistance of a given wire and calculating its specific resistance (resistivity)",
  parts: [
    {
      id: "meter-bridge",
      name: "Meter Bridge Experiment",
      theory: "A Meter Bridge (also called a slide wire bridge) is an apparatus used to find the unknown resistance of a conductor. It works on the principle of the Wheatstone Bridge. When the bridge is balanced, the ratio of the resistances in two arms is equal to the ratio of the resistances in the other two arms (P/Q = R/S). In a meter bridge, the wire has a uniform cross-section, so the resistance of the wire is proportional to its length. The formula used is X = R * (100 - l) / l, where X is the unknown resistance and R is the known resistance. Once X is found, the specific resistance (resistivity) is calculated using ρ = (X * π * d²) / (4 * L), where d is the diameter of the wire and L is its length.",
      apparatus: [
        "Meter Bridge",
        "Galvanometer",
        "Resistance Box (0-100 Ω)",
        "Jockey",
        "Leclanche Cell or Battery Eliminator",
        "Unknown Resistance Wire",
        "Screw Gauge",
        "Meter Scale",
        "Connecting Wires and Sandpaper"
      ],
      procedure: [
        "Clean the ends of the connecting wires with sandpaper to ensure good electrical contact.",
        "Connect the unknown resistance wire in the left gap and the resistance box in the right gap of the meter bridge.",
        "Connect the battery, key, and galvanometer with the jockey as shown in the standard circuit diagram.",
        "Take out a suitable resistance 'R' from the resistance box.",
        "Touch the jockey at the ends of the bridge wire (0 cm and 100 cm). The galvanometer should show deflections in opposite directions; if not, check the connections.",
        "Slide the jockey along the wire to find the 'null point' where the galvanometer shows zero deflection.",
        "Note the length 'l' from the zero end. Calculate the unknown resistance X using the formula.",
        "Measure the diameter of the wire using a screw gauge and the length of the wire using a meter scale to calculate resistivity."
      ],
      precautions: [
        "The connections should be neat, clean, and tight.",
        "The jockey should be moved gently over the bridge wire and not rubbed or dragged.",
        "The null point should ideally be obtained between 40 cm and 60 cm for higher accuracy.",
        "Current should be passed only while taking observations to avoid heating the wire."
      ],
      result: "The resistance of the given wire was determined, and the specific resistance (resistivity) of the material was calculated in Ohm-meters (Ωm).",
      video: "https://www.youtube.com/embed/JTvzP7HrMxU?si=AFvZFOdEKMIff9hB&amp;start=11",
      videoAuthor: "amritacreate",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations (General DC Circuit Lab)",
      questions: [
        {
          question: "The Meter Bridge works on which principle?",
          options: ["Ohm's Law", "Wheatstone Bridge", "Faraday's Law", "Joule's Heating"],
          answer: 1
        },
        {
          question: "Why is the bridge wire usually made of Manganin or Constantan?",
          options: ["They are very cheap", "They have a high temperature coefficient", "They have a low temperature coefficient of resistance", "They are highly magnetic"],
          answer: 2
        },
        {
          question: "If the null point is at 40cm, what is the ratio of the unknown resistance to the known resistance (X/R)?",
          options: ["40/60", "60/40", "40/100", "100/40"],
          answer: 0
        },
        {
          question: "What happens to the resistance of a wire if its length is doubled and area remains constant?",
          options: ["Halved", "Doubled", "Four times", "Remains same"],
          answer: 1
        },
        {
          question: "Specific resistance (resistivity) depends on:",
          options: ["Length of wire", "Area of wire", "Material of wire", "All of the above"],
          answer: 2
        }
      ]
    }
  ]
};