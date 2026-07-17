const experimentData = {
  title: "Transistor Characteristics",
  subtitle: "Studying the common-emitter characteristics of an n-p-n transistor",
  parts: [
    {
      id: "input-char",
      name: "Part A: Input Characteristics",
      theory: "In a Common Emitter (CE) configuration, the emitter is common to both input and output circuits. Input characteristics involve the variation of base current (IB) with base-emitter voltage (VBE), keeping the collector-emitter voltage (VCE) constant. The input resistance (ri) is calculated as the ratio of change in VBE to the change in IB. The curve resembles that of a forward-biased diode, as the base-emitter junction is forward-biased.",
      apparatus: ["n-p-n Transistor (e.g., BC547)", "Two DC Power Supplies", "Microammeter (0-100µA)", "Milliammeter (0-50mA)", "Two Voltmeters", "Rheostats", "Connecting Wires"],
      procedure: [
        "Connect the circuit in CE configuration with the emitter grounded.",
        "Forward bias the base-emitter junction and reverse bias the collector-emitter junction.",
        "Keep VCE constant at a specific value (e.g., 2V or 5V).",
        "Vary VBE in small steps (0.1V) and record the corresponding base current IB.",
        "Repeat the process for another constant value of VCE.",
        "Plot the graph of IB versus VBE."
      ],
      precautions: [
        "Do not exceed the maximum power dissipation limits of the transistor.",
        "Always ensure the transistor terminals (E, B, C) are identified correctly.",
        "Check that IB is measured in microamperes and IC in milliamperes."
      ],
      result: "The input characteristic curve shows that base current increases exponentially with base-emitter voltage after the barrier voltage is overcome.",
      video: "https://www.youtube.com/embed/3jbTgOSRUGQ?si=Mpr03NT3vv0RXfFK&amp;start=1",
      videoAuthor: "amritacreate",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "In CE configuration, which terminal is common to input and output?",
          options: ["Base", "Collector", "Emitter", "None"],
          answer: 2
        },
        {
          question: "The input resistance of a transistor in CE mode is:",
          options: ["Very high", "Relatively low", "Infinite", "Zero"],
          answer: 1
        },
        {
          question: "Which junction is forward biased for a transistor to act as an amplifier?",
          options: ["Base-Emitter", "Collector-Base", "Both", "None"],
          answer: 0
        },
        {
          question: "Input characteristics are plotted between:",
          options: ["IC and VCE", "IB and VBE", "IC and VBE", "IB and VCE"],
          answer: 1
        },
        {
          question: "The unit of base current (IB) is usually:",
          options: ["Ampere", "Milliampere", "Microampere", "Kiloampere"],
          answer: 2
        }
      ]
    },
    {
      id: "output-char",
      name: "Part B: Output Characteristics",
      theory: "Output characteristics involve the variation of collector current (IC) with collector-emitter voltage (VCE), keeping the base current (IB) constant. The output resistance (ro) is calculated as the ratio of change in VCE to change in IC. The characteristics show three regions: Saturation (both junctions forward biased), Cut-off (both junctions reverse biased), and Active region (IB controls IC). In the active region, IC is almost independent of VCE.",
      apparatus: ["n-p-n Transistor", "Variable Power Supplies", "Milliammeter", "Microammeter", "Voltmeters", "Connecting Wires"],
      procedure: [
        "Set the base current IB to a fixed value (e.g., 20µA) using the input rheostat.",
        "Vary VCE in steps of 1V and record the corresponding collector current IC.",
        "Initially, IC increases rapidly, but soon becomes nearly constant.",
        "Repeat the procedure for different fixed values of IB (e.g., 40µA, 60µA).",
        "Plot the graph of IC versus VCE for each value of IB."
      ],
      precautions: [
        "Maintain a constant IB while varying VCE for a single curve.",
        "Ensure the transistor does not get overheated during the experiment.",
        "VCE should not be increased beyond the breakdown voltage."
      ],
      result: "The output characteristic curves were plotted, and the current gain (beta) was determined from the active region.",
      video: "https://www.youtube.com/embed/5D3O5X6T7eY",
      videoAuthor: "Amrita University OLabs",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "Current gain (beta) in CE configuration is the ratio of:",
          options: ["IC / IB", "IB / IC", "IC / IE", "IE / IB"],
          answer: 0
        },
        {
          question: "The region where the transistor is used as a switch 'OFF' is:",
          options: ["Active region", "Saturation region", "Cut-off region", "Breakdown region"],
          answer: 2
        },
        {
          question: "In the active region, the output current IC is:",
          options: ["Highly dependent on VCE", "Almost independent of VCE", "Zero", "Decreasing"],
          answer: 1
        },
        {
          question: "Saturation region occurs when:",
          options: ["VBE is zero", "VCE is very small", "VCE is very high", "IB is zero"],
          answer: 1
        },
        {
          question: "The output resistance of a transistor in CE mode is:",
          options: ["Very low", "Relatively high", "Zero", "Negative"],
          answer: 1
        }
      ]
    }
  ]
};