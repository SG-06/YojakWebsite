const experimentData = {
  title: "Multimeter Usage",
  subtitle: "Measuring voltage, checking continuity, and identifying components",
  parts: [
    {
      id: "multimeter-basics",
      name: "Usage & Identification",
      theory: "A Multimeter is a versatile electronic measuring instrument that combines several measurement functions (Voltmeter, Ammeter, and Ohmmeter) in one unit. It can measure AC and DC voltage, DC current, and resistance. It is also used for 'Continuity' tests to check if a circuit path is broken. Components like Diodes are identified by their one-way conduction, Capacitors by their initial charging behavior, and Transistors by checking the junctions between Base, Emitter, and Collector.",
      apparatus: ["Digital Multimeter (DMM)", "Resistors", "Capacitors", "Diodes/LEDs", "Transistors (NPN/PNP)", "Battery (9V)", "AC Power Outlet (under supervision)"],
      procedure: [
        "Voltage Measurement: Set the dial to V- (DC) or V~ (AC). Connect probes in parallel to the source.",
        "Continuity Test: Set the dial to the 'beep' or Diode symbol. Touch probes to both ends of a wire; a beep indicates a closed path.",
        "Resistor ID: Set to Ω mode. A reading indicates the resistance value. Compare with color code.",
        "Diode ID: In Diode mode, it shows a reading (forward drop) in one direction and '1' or 'OL' in the other.",
        "Capacitor ID: In Ω or Capacitance mode, a charging capacitor shows increasing resistance until it reaches infinity.",
        "Transistor ID: Use the hFE slot or Diode test to identify the Base terminal and whether it is NPN or PNP."
      ],
      precautions: [
        "Never measure resistance in a live circuit (turn power off).",
        "Select the correct range (AC/DC) before connecting probes to avoid blowing the fuse.",
        "Do not touch the metal tips of the probes while measuring high voltage.",
        "Ensure the black probe is in COM and the red probe is in the correct V/Ω port."
      ],
      result: "Learned to operate a multimeter for circuit troubleshooting and successfully identified various electronic components.",
      video: "https://www.youtube.com/embed/TdUK6RPdIrA?si=Ud8PLvb55yXNGKjS",
      videoAuthor: "Ratchets And Wrenches",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "Which port is the black probe always connected to?",
          options: ["V/Ω", "10A", "COM", "hFE"],
          answer: 2
        },
        {
          question: "To check if a wire is broken, the multimeter should be set to:",
          options: ["DC Voltage", "AC Voltage", "Continuity", "Resistance"],
          answer: 2
        },
        {
          question: "A diode will show a reading on a multimeter only when it is:",
          options: ["Forward Biased", "Reverse Biased", "Disconnected", "Heated"],
          answer: 0
        },
        {
          question: "To measure the voltage of a 9V battery, the dial should be set to:",
          options: ["200m V-", "20 V~", "20 V-", "750 V~"],
          answer: 2
        },
        {
          question: "What happens to the resistance reading when checking a healthy capacitor?",
          options: ["Remains zero", "Remains infinite", "Increases slowly", "Decreases"],
          answer: 2
        }
      ]
    }
  ]
};