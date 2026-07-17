const experimentData = {
  title: "Conversion of Galvanometer",
  subtitle: "Converting a galvanometer into an ammeter and a voltmeter of desired range",
  parts: [
    {
      id: "ammeter-conversion",
      name: "Part A: Ammeter Conversion",
      theory: "A galvanometer is converted into an ammeter by connecting a low resistance, called a shunt (S), in parallel with it. The shunt allows most of the current to bypass the galvanometer. The value of the shunt required to convert a galvanometer of resistance G and full-scale deflection current Ig into an ammeter of range I is given by: S = (Ig * G) / (I - Ig). The effective resistance of the converted ammeter is (G * S) / (G + S), which is very low.",
      apparatus: ["Galvanometer", "Battery Eliminator", "Resistance Box", "Shunt Wire", "Ammeter (for verification)", "Two Keys", "Connecting Wires"],
      procedure: [
        "Find the galvanometer resistance (G) and figure of merit (k) using the half-deflection method.",
        "Calculate the full-scale deflection current Ig = n * k, where n is the total number of divisions.",
        "Calculate the required shunt resistance S for the desired ammeter range I.",
        "Connect the calculated shunt resistance in parallel with the galvanometer.",
        "Connect this combination in series with a battery, a key, and a standard ammeter to verify the readings.",
        "Compare the converted ammeter reading with the standard ammeter."
      ],
      precautions: [
        "The shunt resistance should be calculated accurately.",
        "Use thick copper wires for connections to minimize extra resistance.",
        "The standard ammeter used for verification should be of high accuracy.",
        "Do not exceed the current range of the converted meter."
      ],
      result: "The galvanometer was successfully converted into an ammeter of the desired range, and its performance was verified.",
      video: "https://www.youtube.com/embed/zT15Uwqpeic?si=-P1c_dFPE-rkOXq9&amp;start=1",
      videoAuthor: "amritacreate",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "To convert a galvanometer into an ammeter, we connect:",
          options: ["High resistance in series", "Low resistance in parallel", "High resistance in parallel", "Low resistance in series"],
          answer: 1
        },
        {
          question: "The resistance of an ideal ammeter is:",
          options: ["Zero", "Infinite", "100 Ohms", "1 Ohm"],
          answer: 0
        },
        {
          question: "The formula for shunt resistance S is:",
          options: ["Ig*G / (I-Ig)", "I*G / (I-Ig)", "Ig*G / I", "(I-Ig) / Ig*G"],
          answer: 0
        },
        {
          question: "What is the purpose of a shunt?",
          options: ["To increase voltage", "To bypass excess current", "To increase galvanometer resistance", "To reduce sensitivity"],
          answer: 1
        },
        {
          question: "An ammeter is always connected in ________ with the circuit.",
          options: ["Parallel", "Series", "Bridge", "None"],
          answer: 1
        }
      ]
    },
    {
      id: "voltmeter-conversion",
      name: "Part B: Voltmeter Conversion",
      theory: "A galvanometer is converted into a voltmeter by connecting a high resistance (R) in series with it. This high resistance limits the current through the galvanometer so that even at maximum voltage (V), the current does not exceed Ig. The value of the series resistance R is given by: R = (V / Ig) - G. The effective resistance of the converted voltmeter is (G + R), which is very high.",
      apparatus: ["Galvanometer", "Battery Eliminator", "High Resistance Box", "Voltmeter (for verification)", "Key", "Connecting Wires"],
      procedure: [
        "Calculate the full-scale deflection current Ig of the galvanometer.",
        "Decide the range V of the voltmeter to be prepared.",
        "Calculate the required series resistance R using the formula R = (V / Ig) - G.",
        "Connect the calculated high resistance box in series with the galvanometer.",
        "Connect this combination in parallel with a standard voltmeter and a power source.",
        "Verify the readings of the converted voltmeter against the standard voltmeter."
      ],
      precautions: [
        "The series resistance R must be very high.",
        "Ensure all connections are tight.",
        "While verifying, do not apply a voltage higher than the designed range V.",
        "Note the deflection carefully to avoid parallax error."
      ],
      result: "The galvanometer was successfully converted into a voltmeter of the desired range.",
      video: "https://www.youtube.com/embed/pPQVH8s_UDU?si=L3FeeYxGYNjP5SQX&amp;start=1",
      videoAuthor: "amritacreate",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "To convert a galvanometer into a voltmeter, we connect:",
          options: ["Low resistance in parallel", "High resistance in parallel", "High resistance in series", "Low resistance in series"],
          answer: 2
        },
        {
          question: "The resistance of an ideal voltmeter is:",
          options: ["Zero", "Infinite", "1000 Ohms", "100 Ohms"],
          answer: 1
        },
        {
          question: "The series resistance R is calculated as:",
          options: ["V/Ig - G", "V/Ig + G", "Ig/V - G", "V*Ig - G"],
          answer: 0
        },
        {
          question: "A voltmeter is always connected in ________ with the circuit component.",
          options: ["Series", "Parallel", "Series-Parallel", "None"],
          answer: 1
        },
        {
          question: "Which of the following has the highest resistance?",
          options: ["Ammeter", "Galvanometer", "Voltmeter", "Shunt"],
          answer: 2
        }
      ]
    }
  ]
};