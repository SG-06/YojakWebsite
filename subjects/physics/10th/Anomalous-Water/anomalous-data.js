const experimentData = {
  title: "Anomalous Behaviour of Water",
  subtitle: "Thermal Expansion: Studying Density Variation using Hope's Apparatus",
  parts: [
    {
      id: "anomalous-expansion-study",
      name: "Complete Experiment",
      theory: "Generally, liquids expand on heating and contract on cooling. However, water shows a unique and 'anomalous' behavior. When water is cooled from room temperature, it contracts until it reaches 4°C. At 4°C, water has its maximum density and minimum volume. If cooled further from 4°C to 0°C, instead of contracting, water begins to expand. This increase in volume leads to a decrease in density. This property is crucial for the survival of aquatic life in cold climates. In frozen lakes, the 4°C water, being densest, remains at the bottom, while ice (which is less dense) forms at the top, acting as an insulator. This behavior can be experimentally demonstrated using Hope's Apparatus, which consists of a tall cylindrical vessel surrounded by a central trough containing a freezing mixture.",
      apparatus: [
        "Hope's Apparatus (cylindrical vessel with a central trough)",
        "Two Thermometers (T1 at the top, T2 at the bottom)",
        "Freezing Mixture (Crushed ice and common salt in 3:1 ratio)",
        "Water at room temperature",
        "Stopwatch",
        "Beaker"
      ],
      procedure: [
        "Take the Hope's Apparatus and fix two thermometers, one in the top bracket (T1) and one in the bottom bracket (T2).",
        "Fill the cylindrical vessel with water at room temperature.",
        "Note the initial readings of both thermometers; they should be nearly the same.",
        "Fill the central trough of the apparatus with a freezing mixture of crushed ice and salt.",
        "Start the stopwatch and record the temperatures of T1 and T2 every 2 minutes.",
        "Observe that the reading of the lower thermometer (T2) falls rapidly at first.",
        "When T2 reaches 4°C, it remains constant for a long time.",
        "Meanwhile, the upper thermometer (T1) begins to fall rapidly towards 0°C.",
        "Eventually, T1 reaches 0°C and ice may begin to form at the top, while T2 remains steady at 4°C.",
        "Plot a graph of Temperature (y-axis) vs. Time (x-axis) for both thermometers."
      ],
      precautions: [
        "The freezing mixture must be replenished regularly to maintain a low temperature in the trough.",
        "Thermometers should be highly sensitive for accurate readings.",
        "The apparatus should be kept undisturbed during the experiment.",
        "The ratio of ice to salt should be maintained at approximately 3:1 for the best results."
      ],
      result: "The experiment confirms the anomalous expansion of water. The lower thermometer reaching 4°C and staying steady proves that water is densest at this temperature. The upper thermometer reaching 0°C proves that cooler water (below 4°C) is less dense and rises to the top.",
      video: "https://www.youtube.com/embed/Qt8CotoJkUg?si=s1s1w8EryNoUOAu7",
      videoAuthor: "ERCJPP",
      simulation: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "At what temperature does water have its maximum density?",
          options: ["0°C", "100°C", "4°C", "-4°C"],
          answer: 2
        },
        {
          question: "What happens to the volume of water when it is cooled from 4°C to 0°C?",
          options: ["It decreases", "It increases", "It remains constant", "It first increases then decreases"],
          answer: 1
        },
        {
          question: "Which apparatus is used to demonstrate the anomalous behavior of water?",
          options: ["Newton's Apparatus", "Hope's Apparatus", "Calorimeter", "Hypsometer"],
          answer: 1
        },
        {
          question: "In Hope's Apparatus, the freezing mixture is placed:",
          options: ["At the bottom", "At the top", "In the central trough", "Inside the water"],
          answer: 2
        },
        {
          question: "Why does ice float on water?",
          options: ["It is colder than water", "It is more dense than water", "It is less dense than water", "It contains air bubbles only"],
          answer: 2
        },
        {
          question: "What is the ratio of ice to salt in a typical freezing mixture?",
          options: ["1:1", "10:1", "3:1", "1:3"],
          answer: 2
        },
        {
          question: "How does the anomalous expansion of water help aquatic life?",
          options: ["It keeps the whole lake at 0°C", "It allows the bottom of the lake to stay at 4°C", "It makes the water salty", "It prevents water from evaporating"],
          answer: 1
        },
        {
          question: "When water is heated from 0°C to 4°C, it:",
          options: ["Expands", "Contracts", "Boils", "Evaporates"],
          answer: 1
        },
        {
          question: "In Hope's Apparatus, which thermometer reaches 4°C first?",
          options: ["The top thermometer (T1)", "The bottom thermometer (T2)", "Both reach at the same time", "Neither reaches 4°C"],
          answer: 1
        },
        {
          question: "The density of water at 4°C is approximately:",
          options: ["1000 kg/m³", "1 kg/m³", "500 kg/m³", "0 kg/m³"],
          answer: 0
        }
      ]
    }
  ]
};