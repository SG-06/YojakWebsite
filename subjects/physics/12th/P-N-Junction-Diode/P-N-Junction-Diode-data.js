const experimentData = {
  title: "P-N Junction Diode",
  subtitle: "Studying I-V characteristics in Forward and Reverse Bias",
  parts: [
    {
      id: "forward-bias",
      name: "Part A: Forward Bias",
      theory: "In forward biasing, the p-type is connected to the positive terminal and the n-type to the negative terminal of the battery. This reduces the height of the potential barrier and the width of the depletion layer. As a result, a majority carrier current flows across the junction. Initially, the current increases very slowly with voltage. Once the applied voltage exceeds the 'Knee Voltage' (approx. 0.7V for Silicon), the current increases exponentially.",
      apparatus: ["P-N Junction Diode (Silicon)", "Battery (0-5V)", "Voltmeter (0-5V)", "Milliammeter (0-50mA)", "Rheostat", "Connecting Wires"],
      procedure: [
        "Connect the p-terminal of the diode to the positive terminal of the battery via a milliammeter.",
        "Connect the n-terminal to the negative terminal of the battery.",
        "Connect a voltmeter in parallel across the diode to measure the voltage (Vf).",
        "Slowly increase the voltage using the rheostat in small steps of 0.1V.",
        "Note the corresponding current (If) in the milliammeter for each step.",
        "Plot a graph between Vf and If; the curve obtained is the forward characteristic."
      ],
      precautions: [
        "The forward current should not exceed the maximum safe limit specified for the diode.",
        "Connections should be tight and clean.",
        "The voltmeter and ammeter should be connected with correct polarity."
      ],
      result: "The forward characteristic curve shows that current remains nearly zero until the knee voltage is reached, after which it increases rapidly.",
      video: "https://www.youtube.com/embed/KIgqVude4yY?si=z2SKYGR6lyukyeIG&amp;start=1",
      videoAuthor: "Learn Physics with RK TOMAR",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "In forward bias, the depletion layer:",
          options: ["Widens", "Narrows", "Disappears", "Remains constant"],
          answer: 1
        },
        {
          question: "What is the typical knee voltage for a Silicon diode?",
          options: ["0.1 V", "0.3 V", "0.7 V", "1.1 V"],
          answer: 2
        },
        {
          question: "Which terminal is connected to the p-type in forward biasing?",
          options: ["Positive", "Negative", "Ground", "Neutral"],
          answer: 0
        },
        {
          question: "The current in forward bias is due to:",
          options: ["Minority carriers", "Majority carriers", "Only electrons", "Only holes"],
          answer: 1
        },
        {
          question: "Forward resistance of a diode is usually:",
          options: ["Very high", "Infinite", "Very low", "Zero"],
          answer: 2
        }
      ]
    },
    {
      id: "reverse-bias",
      name: "Part B: Reverse Bias",
      theory: "In reverse biasing, the p-type is connected to the negative terminal and the n-type to the positive terminal. This increases the potential barrier and the width of the depletion layer. Practically no current flows through the junction due to majority carriers. However, a very small current (in microamperes) flows due to minority carriers, called the reverse saturation current. If the voltage is increased significantly, the junction breaks down, and current increases sharply.",
      apparatus: ["P-N Junction Diode", "High Voltage Battery (0-50V)", "Voltmeter (0-50V)", "Microammeter (0-100µA)", "Rheostat", "Connecting Wires"],
      procedure: [
        "Connect the p-terminal of the diode to the negative terminal of the battery.",
        "Connect the n-terminal to the positive terminal via a microammeter.",
        "Connect a voltmeter in parallel across the diode.",
        "Increase the reverse voltage in steps of 2V or 5V.",
        "Note the very small current readings in the microammeter.",
        "Note the voltage at which current increases suddenly (Breakdown voltage)."
      ],
      precautions: [
        "Use a microammeter instead of a milliammeter as reverse current is very small.",
        "Do not exceed the breakdown voltage for a standard diode to prevent damage.",
        "Always start with the voltage at zero."
      ],
      result: "The reverse characteristic curve shows a very small constant current followed by a sharp increase at the breakdown voltage.",
      video: "https://www.youtube.com/embed/KIgqVude4yY?si=z2SKYGR6lyukyeIG&amp;start=1",
      videoAuthor: "Learn Physics with RK TOMAR",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "In reverse bias, the depletion layer:",
          options: ["Widens", "Narrows", "Remains same", "Becomes zero"],
          answer: 0
        },
        {
          question: "The current flowing in reverse bias is called:",
          options: ["Majority current", "Peak current", "Reverse saturation current", "Forward current"],
          answer: 2
        },
        {
          question: "Which meter is used to measure reverse current?",
          options: ["Ammeter", "Milliammeter", "Microammeter", "Galvanometer"],
          answer: 2
        },
        {
          question: "What happens at the breakdown voltage?",
          options: ["Current stops", "Diode melts", "Current increases sharply", "Resistance becomes infinite"],
          answer: 2
        },
        {
          question: "An ideal diode in reverse bias acts as:",
          options: ["Perfect conductor", "Open switch", "Closed switch", "Resistor"],
          answer: 1
        }
      ]
    }
  ]
};