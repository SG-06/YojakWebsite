const experimentData = {

  title: "Effects of Electric Current",

  subtitle: "Interactive Virtual Physics Laboratory",

  parts: [

    {
      id: "heating",

      name: "Part A : Heating Effect",

      theory:
      "When electric current flows through a conductor, heat energy is produced due to resistance. Nichrome wire becomes hot because it has high resistance.",

      apparatus: [
        "Battery",
        "Nichrome Wire",
        "Switch",
        "Connecting Wires",
        "Bulb"
      ],

      procedure: [
        "Connect battery, switch and nichrome wire.",
        "Turn ON the switch.",
        "Observe the wire heating.",
        "Observe bulb glowing."
      ],

      precautions: [
        "Do not touch heated wire.",
        "Switch OFF after experiment.",
        "Ensure proper connections."
      ],

      result:
      "Heating effect of electric current is observed due to resistance of the conductor.",

      video:
      "https://www.youtube.com/embed/1CwVq5h2h2A",

      simulation:
      "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",

      questions: [

        {
          question:
          "Which wire is used in heating effect experiment?",

          options: [
            "Nichrome Wire",
            "Plastic Wire",
            "Rubber Wire",
            "Wooden Wire"
          ],

          answer: 0
        },

        {
          question:
          "Why does nichrome wire become hot?",

          options: [
            "High Resistance",
            "Low Resistance",
            "No Current",
            "Magnetism"
          ],

          answer: 0
        }
      ]
    },

    {
      id: "magnetic",

      name: "Part B : Magnetic Effect",

      theory:
      "Electric current flowing through a wire creates magnetic field around it. Coil wrapped around iron nail behaves like electromagnet.",

      apparatus: [
        "Battery",
        "Iron Nail",
        "Copper Wire",
        "Switch"
      ],

      procedure: [
        "Wrap wire around iron nail.",
        "Connect coil to battery.",
        "Bring paper clips near nail.",
        "Observe magnetic attraction."
      ],

      precautions: [
        "Avoid short circuit.",
        "Disconnect after experiment."
      ],

      result:
      "Magnetic field is produced around a current carrying conductor.",

      video:
      "https://www.youtube.com/embed/4RHK1tpTh7g",

      simulation:
      "https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_en.html",

      questions: [

        {
          question:
          "What is produced around current carrying conductor?",

          options: [
            "Magnetic Field",
            "Sound",
            "Light",
            "Water"
          ],

          answer: 0
        }
      ]
    }
  ]
};