const experimentData = {
  title: "Cooling Curve of Hot Water",
  subtitle: "Thermal Physics: Investigating Newton's Law of Cooling",
  parts: [
    {
      id: "cooling-curve-study",
      name: "Complete Experiment",
      theory: "Newton's Law of Cooling states that the rate of loss of heat from a body is directly proportional to the difference in the temperature of the body and its surroundings, provided the temperature difference is small and the nature of the radiating surface remains the same. Mathematically, it is expressed as dQ/dt = -k(T - Ts), where 'T' is the temperature of the body and 'Ts' is the temperature of the surroundings. As the temperature of the hot water approaches the room temperature, the rate of cooling slows down. A plot of temperature against time results in an exponential decay curve known as the Cooling Curve. This experiment helps determine the relationship between temperature gradient and time and allows for the verification of the cooling constant 'k' for a given surface.",
      apparatus: [
        "Newton's Law of Cooling Apparatus (Copper Calorimeter)",
        "Double-walled enclosure (to maintain constant surrounding temperature)",
        "Thermometer (0°C to 110°C)",
        "Stopwatch",
        "Glass Stirrer",
        "Clamp Stand",
        "Electric Kettle or Bunsen Burner (to heat water)",
        "Graduated Cylinder"
      ],
      procedure: [
        "Fill the space between the double walls of the enclosure with water at room temperature.",
        "Heat water in a separate beaker to about 80°C.",
        "Pour about 150ml of the hot water into the copper calorimeter.",
        "Insert the thermometer and the stirrer into the calorimeter through the lid.",
        "Place the calorimeter inside the double-walled enclosure.",
        "Note the initial temperature of the water. Start the stopwatch when the temperature reaches a specific value (e.g., 70°C).",
        "Continuously stir the water to maintain a uniform temperature.",
        "Record the thermometer reading every 1 minute for the first 10 minutes, and then every 2 minutes for the next 20 minutes.",
        "Note the constant temperature of the water in the enclosure (surrounding temperature, Ts).",
        "Plot a graph with Time (t) on the x-axis and Temperature (T) on the y-axis."
      ],
      precautions: [
        "The surrounding temperature must remain constant throughout the experiment.",
        "Stirring should be gentle but continuous to ensure uniform temperature distribution.",
        "The thermometer bulb must be fully immersed in the water and should not touch the calorimeter walls.",
        "Avoid parallax error while reading the thermometer and the stopwatch."
      ],
      result: "The Cooling Curve was plotted, showing a rapid decrease in temperature initially, followed by a slower decrease as the temperature approached the surroundings. This verifies that the rate of cooling depends on the temperature difference between the body and its environment.",
      video: "https://www.youtube.com/embed/lEKMG7WfMOs?si=dLW876luryitbGgy", 
      videoAuthor: "ERCJPP",
      simulation: "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "Newton's Law of Cooling is valid for:",
          options: ["Any temperature difference", "Small temperature differences", "Only very high temperatures", "Vacuum only"],
          answer: 1
        },
        {
          question: "The rate of cooling depends on the:",
          options: ["Mass of the liquid", "Nature of the surface", "Temperature difference with surroundings", "All of the above"],
          answer: 3
        },
        {
          question: "The shape of the temperature-time graph for a cooling body is a/an:",
          options: ["Straight line", "Parabola", "Exponential curve", "Hyperbola"],
          answer: 2
        },
        {
          question: "What happens to the rate of cooling as the body's temperature approaches room temperature?",
          options: ["It increases", "It decreases", "It remains constant", "It stops immediately"],
          answer: 1
        },
        {
          question: "In the formula dQ/dt = -k(T - Ts), what does 'Ts' represent?",
          options: ["Temperature of the boiling water", "Time taken for cooling", "Surrounding temperature", "Specific heat"],
          answer: 2
        },
        {
          question: "Why is the calorimeter usually made of copper?",
          options: ["It is a poor conductor", "It has a high specific heat", "It is a good conductor with low specific heat", "It is cheap"],
          answer: 2
        },
        {
          question: "Stirring the water during the experiment is necessary to:",
          options: ["Speed up cooling", "Maintain uniform temperature", "Keep the water clean", "Prevent evaporation"],
          answer: 1
        },
        {
          question: "Which of the following surfaces cools the fastest?",
          options: ["Polished silver surface", "White painted surface", "Dull black surface", "Yellow surface"],
          answer: 2
        },
        {
          question: "If you plot log(T - Ts) vs Time, the resulting graph will be a:",
          options: ["Circle", "Straight line", "Curved line", "Zig-zag line"],
          answer: 1
        },
        {
          question: "Which mode of heat transfer is primarily responsible for the cooling in this experiment?",
          options: ["Conduction", "Convection and Radiation", "Only Sublimation", "Nuclear fission"],
          answer: 1
        }
      ]
    }
  ]
};