const experimentData = {
  title: "Effects of Electric Current",
  subtitle: "Interactive Virtual Physics Laboratory",
  parts: [
    {
      id: "heating",
      name: "Part A : Heating Effect",
      theory: "The heating effect of electric current, also known as Joule Heating, occurs when an electric current passes through a conductor with resistance. As electrons move through the wire, they collide with the atoms of the conductor. During these collisions, some of the electrical energy is converted into heat energy. The amount of heat produced depends on the resistance of the wire, the square of the current, and the time for which the current flows (H = I²Rt). Nichrome is used in this experiment because it has high resistance and a high melting point, allowing it to become red hot without melting. Common applications include electric irons, toasters, and room heaters.",
      apparatus: ["Battery Pack (9V)", "Nichrome Wire", "Safety Switch", "Connecting Copper Wires", "Small LED Bulb", "Ammeter"],
      procedure: [
        "Create a simple circuit by connecting the battery to the switch using copper wires.",
        "Insert a piece of nichrome wire into the circuit loop.",
        "Turn ON the switch and let the current flow for 30-60 seconds.",
        "Carefully observe the nichrome wire; it may begin to glow or produce visible heat waves.",
        "Switch OFF the circuit and wait for the wire to cool down."
      ],
      precautions: [
        "Do not touch the nichrome wire while the switch is ON.",
        "Disconnect the circuit immediately if the battery becomes excessively hot.",
        "Always use a switch to prevent continuous drainage of the battery.",
        "Ensure all connections are tight to avoid sparks."
      ],
      result: "The conversion of electrical energy into heat energy was successfully demonstrated using a high-resistance nichrome wire.",
      video: "https://www.youtube.com/embed/jBFiuQ85QxY?si=ekAW5CY8dquZMECo",
      videoAuthor: "eGogy",
      simulation: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "Which material is most commonly used for heating elements due to its high resistance?",
          options: ["Copper", "Nichrome", "Silver", "Aluminum"],
          answer: 1
        },
        {
          question: "According to Joule's Law (H=I²Rt), if the current is doubled, the heat produced becomes:",
          options: ["Double", "Half", "Four times", "Remains same"],
          answer: 2
        },
        {
          question: "Which energy transformation takes place in the heating effect?",
          options: ["Chemical to Light", "Electrical to Heat", "Mechanical to Electrical", "Heat to Sound"],
          answer: 1
        },
        {
          question: "What is the SI unit of electrical resistance?",
          options: ["Volt", "Ampere", "Ohm", "Watt"],
          answer: 2
        },
        {
          question: "Which safety device works on the heating effect of electric current?",
          options: ["Electric Fuse", "Electric Motor", "Generator", "Transformer"],
          answer: 0
        }
      ]
    },
    {  id: "magnetic",
      name: "Part B : Magnetic Effect",
      theory: "In 1820, Hans Christian Oersted discovered that a current-carrying conductor produces a magnetic field around it. This is known as the Magnetic Effect of Electric Current. When wire is wrapped around a soft iron core (like a nail) and current is passed through it, it creates a temporary magnet called an Electromagnet. The strength of this magnetic field can be increased by: 1. Increasing the amount of current, 2. Increasing the number of turns in the coil, or 3. Using a soft iron core. The direction of the magnetic field can be determined using the Right-Hand Thumb Rule. Electromagnets are used in electric bells, cranes for lifting scrap metal, and MRI machines.",
      apparatus: ["Iron Nail (6 inches)", "Insulated Copper Wire", "Battery (9V)", "Switch", "Steel Paper Clips", "Magnetic Compass"],
      procedure: [
        "Wind the insulated copper wire tightly around the iron nail to form a coil.",
        "Scrape the insulation off the ends of the wire and connect them to the battery via a switch.",
        "Place a magnetic compass near the wire and turn the switch ON to see the needle deflect.",
        "Bring paper clips near the nail and observe how they are attracted while the current is flowing.",
        "Turn the switch OFF and observe the clips falling off as the magnetism disappears."
      ],
      precautions: [
        "Do not keep the switch ON for too long as the battery will drain very quickly.",
        "Use insulated wire to prevent short circuits and mild burns.",
        "Ensure the wire ends are properly cleaned for good electrical contact."
      ],
      result: "The experiment proves that an electric current creates a magnetic field, turning a simple iron nail into a temporary electromagnet.",
       video: "https://www.youtube.com/embed/txmKr69jGBk", 
      videoAuthor: "Science Buddies",
      simulation: "https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "Who discovered the magnetic effect of electric current?",
          options: ["Isaac Newton", "Hans Christian Oersted", "Thomas Edison", "Albert Einstein"],
          answer: 1
        },
        {
          question: "How can we increase the strength of an electromagnet?",
          options: ["Decrease current", "Decrease number of turns", "Increase number of turns", "Use a plastic core"],
          answer: 2
        },
        {
          question: "Which of these is a temporary magnet created by electricity?",
          options: ["Bar Magnet", "Horseshoe Magnet", "Electromagnet", "Lodestone"],
          answer: 2
        },
        {
          question: "A compass needle deflects near a current-carrying wire because of:",
          options: ["Gravitational field", "Electric field", "Magnetic field", "Air pressure"],
          answer: 2
        },
        {
          question: "Which device uses an electromagnet to function?",
          options: ["Electric Kettle", "Electric Bell", "Flashlight", "Electric Toaster"],
          answer: 1
        }
      ]
    }
  ]
};
    