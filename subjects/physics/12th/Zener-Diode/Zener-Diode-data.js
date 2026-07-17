const experimentData = {
  title: "Zener Diode",
  subtitle: "Drawing the characteristic curve and determining reverse breakdown voltage",
  parts: [
    {
      id: "zener-characteristics",
      name: "Zener Diode Characteristics",
      theory: "A Zener diode is a heavily doped semiconductor diode designed to operate in the reverse breakdown region. When the reverse voltage reaches a specific value known as the Zener Voltage (Vz), the current increases sharply while the voltage across the diode remains constant. This unique property makes it useful as a voltage regulator. There are two types of breakdown: Zener breakdown (due to high electric field) and Avalanche breakdown (due to collision ionization).",
      apparatus: ["Zener Diode", "Variable DC Power Supply", "Voltmeter", "Milliammeter", "Series Resistor (to limit current)", "Connecting Wires"],
      procedure: [
        "Connect the Zener diode in reverse bias (n-terminal to positive, p-terminal to negative).",
        "Connect a milliammeter and a series resistor in the circuit.",
        "Connect a voltmeter across the Zener diode to measure Zener voltage.",
        "Gradually increase the supply voltage from zero.",
        "Initially, the current is negligible. As the voltage reaches Vz, note the sudden increase in current.",
        "Record several readings of voltage and current beyond the breakdown point.",
        "Plot the I-V graph in the third quadrant."
      ],
      precautions: [
        "A series resistor must be used to prevent the Zener diode from burning out due to excessive current.",
        "Readings should be taken quickly to avoid heating of the diode.",
        "Polarity of the power supply must be checked carefully for reverse biasing."
      ],
      result: "The I-V characteristic curve was plotted and the Zener breakdown voltage was found to be the point where voltage becomes constant.",
      video: "https://www.youtube.com/embed/k-rMxiBqp30?si=xEA7_HMLbN2TlJr8&amp;start=1",
      videoAuthor: "R K Mishra- Conceptual Physics India",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "Zener diode is always used in:",
          options: ["Forward bias", "Reverse bias", "Zero bias", "None"],
          answer: 1
        },
        {
          question: "The primary use of a Zener diode is as a:",
          options: ["Amplifier", "Rectifier", "Voltage Regulator", "Oscillator"],
          answer: 2
        },
        {
          question: "What happens to the voltage across a Zener diode after breakdown?",
          options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
          answer: 2
        },
        {
          question: "Zener breakdown occurs in junctions that are:",
          options: ["Lightly doped", "Heavily doped", "Intrinsic", "Un-doped"],
          answer: 1
        },
        {
          question: "A Zener diode has _____ breakdown voltage.",
          options: ["Variable", "Sharp", "Very high", "Zero"],
          answer: 1
        }
      ]
    }
  ]
};