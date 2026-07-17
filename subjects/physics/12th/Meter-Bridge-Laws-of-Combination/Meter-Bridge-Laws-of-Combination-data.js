const experimentData = {
  title: "Meter Bridge - Laws of Combination",
  subtitle: "Verifying the laws of resistance in series and parallel combinations",
  parts: [
    {
      id: "series",
      name: "Part A: Series Combination",
      theory: "When two resistors are connected in series, the equivalent resistance Rs is equal to the sum of their individual resistances (Rs = R1 + R2). In this experiment, we first find the individual resistances R1 and R2 using a Meter Bridge. Then, we connect them end-to-end in the left gap of the bridge to find the combined resistance experimentally. The experiment is based on the Wheatstone Bridge principle P/Q = R/S. If the experimental value of Rs matches the theoretical sum, the law of series combination is verified.",
      apparatus: ["Meter Bridge", "Galvanometer", "Two Resistance Wires (R1 and R2)", "Resistance Box", "Jockey", "Battery Eliminator", "Plug Key", "Connecting Wires"],
      procedure: [
        "Connect the first wire R1 in the left gap and find its resistance using the null point method.",
        "Repeat the process for the second wire R2.",
        "Connect R1 and R2 in series (one after another) and place the combination in the left gap.",
        "Take a suitable resistance R from the resistance box in the right gap.",
        "Find the null point length 'l' where the galvanometer shows zero deflection.",
        "Calculate the experimental series resistance using Rs = R * (100 - l) / l.",
        "Compare the experimental value with the theoretical sum Rs = R1 + R2."
      ],
      precautions: [
        "Ensure all connections are tight and the insulation is removed from wire ends.",
        "Do not slide the jockey roughly along the bridge wire.",
        "The null point should be in the middle of the bridge (between 40cm and 60cm).",
        "Disconnect the battery when not taking readings to prevent heating."
      ],
      result: "The Law of Series Combination (Rs = R1 + R2) is verified as the experimental and theoretical values are found to be equal within limits of error.",
      video: "https://www.youtube.com/embed/RCzqNOFenP4?si=XLxtaf7S9VlPawSg&amp;start=62",
      videoAuthor: "A2Z practical",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "What is the formula for two resistors in series?",
          options: ["R1 * R2", "R1 + R2", "1/R1 + 1/R2", "(R1+R2)/R1R2"],
          answer: 1
        },
        {
          question: "In series combination, which physical quantity remains the same through all resistors?",
          options: ["Voltage", "Resistance", "Current", "Power"],
          answer: 2
        },
        {
          question: "If R1 = 2 ohms and R2 = 3 ohms are in series, what is the total resistance?",
          options: ["1 ohm", "6 ohms", "5 ohms", "1.5 ohms"],
          answer: 2
        },
        {
          question: "The sensitivity of a meter bridge is highest when the null point is at:",
          options: ["10 cm", "90 cm", "50 cm", "0 cm"],
          answer: 2
        },
        {
          question: "What happens to the total resistance when more resistors are added in series?",
          options: ["Decreases", "Increases", "Stays same", "Becomes zero"],
          answer: 1
        }
      ]
    },
    {
      id: "parallel",
      name: "Part B: Parallel Combination",
      theory: "When two resistors R1 and R2 are connected in parallel, the reciprocal of the equivalent resistance Rp is equal to the sum of the reciprocals of individual resistances (1/Rp = 1/R1 + 1/R2). Experimentally, the two wires are connected across the same two points in the left gap of the Meter Bridge. The bridge balancing condition is used to find Rp. The law is verified if the experimental Rp matches the theoretical value calculated by (R1 * R2) / (R1 + R2).",
      apparatus: ["Meter Bridge", "Galvanometer", "Two Resistance Wires", "Resistance Box", "Jockey", "Battery Eliminator", "Plug Key"],
      procedure: [
        "Determine the individual resistances R1 and R2 using the meter bridge.",
        "Connect both wires R1 and R2 together across the left gap (side by side).",
        "Select a low resistance value from the resistance box in the right gap.",
        "Find the null point 'l' on the bridge wire.",
        "Calculate the experimental parallel resistance Rp = R * (100 - l) / l.",
        "Calculate the theoretical value using Rp = (R1 * R2) / (R1 + R2) and compare."
      ],
      precautions: [
        "Keep the resistance in the box low as parallel resistance is always smaller than individual resistances.",
        "Clean the wire joints thoroughly to ensure low contact resistance.",
        "Ensure the jockey touches the wire vertically."
      ],
      result: "The Law of Parallel Combination (1/Rp = 1/R1 + 1/R2) is verified through experimental observation.",
      video: "https://www.youtube.com/embed/SshMh_N6B8c",
      videoAuthor: "Amrita University OLabs",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "What is the equivalent resistance of two equal resistors 'R' in parallel?",
          options: ["2R", "R/2", "R", "R squared"],
          answer: 1
        },
        {
          question: "In parallel combination, what remains constant across all resistors?",
          options: ["Current", "Power", "Voltage", "Heat"],
          answer: 2
        },
        {
          question: "If R1 = 10 ohms and R2 = 10 ohms are in parallel, the total resistance is:",
          options: ["20 ohms", "100 ohms", "5 ohms", "0 ohms"],
          answer: 2
        },
        {
          question: "Parallel combination is used in home wiring to ensure:",
          options: ["Higher current in all bulbs", "Independent operation of devices", "Higher total resistance", "Low voltage"],
          answer: 1
        },
        {
          question: "The equivalent resistance in parallel is always:",
          options: ["Greater than largest resistor", "Smaller than smallest resistor", "Equal to sum", "Average of resistors"],
          answer: 1
        }
      ]
    }
  ]
};