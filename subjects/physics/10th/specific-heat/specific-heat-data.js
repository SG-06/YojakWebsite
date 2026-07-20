const experimentData = {
  title: "Activity: Measuring Specific Heat Capacity",
  subtitle: "Heat: Determining the heat absorption capacity of different solids",
  parts: [
    {
      id: "specific-heat-study",
      name: "Method of Mixtures",
      theory: "Specific heat capacity is the amount of heat energy required to raise the temperature of a unit mass of a substance by one degree Celsius (or Kelvin). According to the principle of calorimetry (Method of Mixtures), when a hot solid is placed in a colder liquid, the heat lost by the hot solid is equal to the heat gained by the liquid and the calorimeter, provided no heat is lost to the surroundings. The formula used is Q = mcΔT, where 'm' is mass, 'c' is specific heat, and 'ΔT' is the change in temperature.",
      apparatus: [
        "Calorimeter with Stirrer and Insulating Jacket",
        "Thermometer (0°C to 100°C)",
        "Solid sample (Lead shots, Copper, or Iron cylinder)",
        "Physical Balance and Weight Box",
        "Steam Heater or Boiling Water Bath",
        "Cold Water",
        "Thread and Tripod Stand"
      ],
      procedure: [
        "Measure the mass of the empty, clean calorimeter with the stirrer.",
        "Fill the calorimeter two-thirds with cold water and measure the mass again to find the mass of the water.",
        "Record the initial temperature of the water and calorimeter.",
        "Suspend the solid sample in boiling water or a steam heater until it reaches a steady high temperature (approx. 100°C).",
        "Quickly transfer the hot solid into the calorimeter, ensuring no water splashes out.",
        "Stir the water gently and record the highest temperature reached by the mixture.",
        "Calculate the heat lost by the solid and equated it to the heat gained by the water and calorimeter to find the specific heat capacity 'c'."
      ],
      precautions: [
        "The transfer of the hot solid to the calorimeter must be as quick as possible to minimize heat loss to the air.",
        "The calorimeter should be well-insulated (usually placed in a wooden box with cotton wool).",
        "The water should be stirred continuously to ensure uniform temperature.",
        "Avoid using too much water; the solid must be fully submerged, but the water should not overflow."
      ],
      result: "The specific heat capacity of the given solid is determined. Different materials show different specific heats, explaining why some substances heat up faster than others.",
      video: "https://www.youtube.com/embed/TqJFIBODrjM?si=RdJIkGrkglXr05hn", 
      videoAuthor: "FuseSchool - Global Education",
      simulation: "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "The amount of heat required to raise the temperature of 1kg of a substance by 1°C is called:",
          options: ["Latent Heat", "Specific Heat Capacity", "Thermal Conductivity", "Heat of Fusion"],
          answer: 1
        },
        {
          question: "Which substance has the highest specific heat capacity among the following?",
          options: ["Iron", "Copper", "Water", "Mercury"],
          answer: 2
        },
        {
          question: "What is the SI unit of Specific Heat Capacity?",
          options: ["Joule/kg", "Joule/°C", "Joule/(kg·K)", "Calories/gram"],
          answer: 2
        },
        {
          question: "In the method of mixtures, we assume that:",
          options: ["Heat is gained from air", "Heat lost = Heat gained", "Temperature remains constant", "Mass increases"],
          answer: 1
        },
        {
          question: "Why is water used as a coolant in car radiators?",
          options: ["It is cheap", "It has low specific heat", "It has very high specific heat", "It freezes easily"],
          answer: 2
        },
        {
          question: "If a substance has high specific heat, it will:",
          options: ["Heat up very quickly", "Heat up slowly", "Never get hot", "Always stay at 0°C"],
          answer: 1
        },
        {
          question: "The 'm' in the formula Q = mcΔT stands for:",
          options: ["Melting point", "Meters", "Mass", "Momentum"],
          answer: 2
        },
        {
          question: "Calorimeters are usually made of copper because:",
          options: ["Copper is a good insulator", "Copper has low specific heat and is a good conductor", "Copper is cheap", "Copper does not rust"],
          answer: 1
        },
        {
          question: "A high specific heat value means the substance is:",
          options: ["A good heat reservoir", "A poor heat reservoir", "Always a gas", "Always a solid"],
          answer: 0
        },
        {
          question: "What happens to the temperature of a substance during a phase change?",
          options: ["It increases", "It decreases", "It remains constant", "It doubles"],
          answer: 2
        }
      ]
    }
  ]
};