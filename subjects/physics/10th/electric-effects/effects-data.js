const experimentData = {
  title: "Effects of Electric Current",
  subtitle: "A Two-Part Study: Thermal and Electromagnetic Phenomena",
  parts: [
    {
      id: "heating-effect",
      name: "Part A: Heating Effect",
      theory: "The Heating Effect of electric current, also known as Joule Heating, occurs when electrical energy is converted into heat energy as current flows through a resistance...",
      apparatus: [
        "6V Battery or Power Supply",
        "Nichrome Wire (High resistance)",
        "Ammeter (0-5A)",
        "Plug Key / Switch",
        "Connecting Copper Wires",
        "Digital Thermometer",
        "Rheostat (to vary current)"
      ],
      procedure: [
        "Construct a series circuit using the battery, ammeter, rheostat, switch, and a small coil of Nichrome wire.",
        "Ensure the switch is open and record the initial room temperature of the Nichrome wire using the thermometer.",
        "Close the switch to allow a steady current of about 1A to flow through the circuit.",
        "Keep the current flowing for exactly 2 minutes (use a stopwatch).",
        "Open the switch and immediately record the final temperature of the Nichrome wire."
      ],
      precautions: [
        "Do not touch the Nichrome wire with bare hands while the current is flowing.",
        "Ensure the ammeter is connected in series with the correct polarity.",
        "The battery should be switched off immediately after taking readings."
      ],
      result: "The temperature of the Nichrome wire increased significantly, confirming electrical energy transforms into heat energy.",
      // FIXED: Added placeholder/valid URL and fixed quotes
      video: "https://www.youtube.com/embed/5F_fNAtvV9Q", 
      videoAuthor: "Home Revise",
      // FIXED: Direct link to the HTML5 simulation runner
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "Joule's Law of heating is given by the formula:",
          options: ["H = V / R", "H = I²Rt", "H = IR", "H = VIt²"],
          answer: 1
        }
      ]
    },
    {
      id: "magnetic-effect",
      name: "Part B: Magnetic Effect of Electric Current",
      theory: "The Magnetic Effect of Electric Current was discovered by Hans Christian Oersted in 1820...",
      apparatus: [
        "9 V Battery",
        "Thick Copper Wire",
        "Compass Needle",
        "Switch (Plug Key)",
        "Connecting Wires",
        "Cardboard Sheet"
      ],
      procedure: [
        "Make a simple electric circuit using a battery, switch and thick copper wire.",
        "Place a magnetic compass on a flat surface aligned in the North-South direction.",
        "Position the straight copper wire just above the compass needle.",
        "Close the switch and observe the deflection."
      ],
      precautions: [
        "Keep the compass away from other magnets.",
        "Do not keep the circuit ON for a long time to avoid battery discharge."
      ],
      result: "The compass needle deflects when current flows, proving a magnetic field is produced.",
      // FIXED: Added placeholder/valid URL and fixed quotes
      video: "https://www.youtube.com/embed/2bMSHVF30C4?si=KMoycEptqrhH3Isj",
      videoAuthor: "SymBios",
      // FIXED: Direct link to the HTML5 Magnets simulation runner
      simulation: "https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_en.html",
      simulationAuthor: "PhET Interactive Simulations",
      questions: [
        {
          question: "Who discovered the magnetic effect of electric current?",
          options: ["Isaac Newton", "Hans Christian Oersted", "Michael Faraday", "Albert Einstein"],
          answer: 1
        }
      ]
    }
  ]
};

