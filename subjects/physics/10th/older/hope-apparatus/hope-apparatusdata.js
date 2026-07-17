const experimentData = {

  title: "Anomalous Behaviour of Water",

  subtitle: "Interactive Virtual Physics Laboratory",

  parts: [

    {
      id: "anomalouswater",

      name: "Hope's Apparatus",

      theory:
      "Most substances contract on cooling and expand on heating. Water, however, behaves differently between 0°C and 4°C. When water is cooled from room temperature to 4°C, it contracts and its density increases. But when cooled below 4°C, it expands and its density decreases. This unusual property is known as the anomalous behaviour of water. Hope's apparatus is used to demonstrate that water attains maximum density at 4°C. This property is important in nature because it prevents lakes and ponds from freezing completely during winter.",

      apparatus: [
        "Hope's Apparatus",
        "Water",
        "Freezing Mixture (Ice and Salt)",
        "Upper Thermometer",
        "Lower Thermometer",
        "Stand"
      ],

      procedure: [
        "Fill Hope's apparatus completely with water.",
        "Insert the upper and lower thermometers into their respective positions.",
        "Place a freezing mixture around the central trough of the apparatus.",
        "Observe the temperature readings at regular intervals.",
        "Note that the lower thermometer reaches 4°C first.",
        "Continue observing as the upper thermometer approaches 0°C.",
        "Record the temperature changes and compare the readings."
      ],

      precautions: [
        "Ensure the apparatus is completely filled with water.",
        "Read thermometers carefully without parallax error.",
        "Use sufficient freezing mixture around the central trough.",
        "Do not disturb the apparatus during observation.",
        "Record temperature readings at regular intervals."
      ],

      result:
      "Water attains maximum density at 4°C. Below 4°C, water expands instead of contracting, demonstrating its anomalous behaviour.",

      video:
      "https://www.youtube.com/embed/UjF6e8k7N6g",

      simulation:
      "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html",

      questions: [

        {
          question:
          "At what temperature does water have maximum density?",

          options: [
            "0°C",
            "2°C",
            "4°C",
            "10°C"
          ],

          answer: 2
        },

        {
          question:
          "What is the unusual property of water below 4°C?",

          options: [
            "It contracts",
            "It evaporates",
            "It expands",
            "It becomes heavier"
          ],

          answer: 2
        }
      ]
    }
  ]
};
