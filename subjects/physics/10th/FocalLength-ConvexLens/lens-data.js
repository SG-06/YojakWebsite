const experimentData = {
  title: "Focal Length of a Convex Lens",
  subtitle: "Comprehensive Study: Distant Object & u-v Methods",
  parts: [
    {
      id: "convex-lens-complete",
      name: "Complete Experiment",
      theory: "A convex lens is a converging lens that is thicker in the middle than at the edges. When parallel rays of light from a distant object (at infinity) pass through it, they converge at a single point called the Principal Focus. The distance from the optical center to this point is the focal length (f). For objects placed at finite distances, the relationship between the object distance (u), image distance (v), and focal length (f) is given by the Lens Formula: 1/f = 1/v - 1/u. According to Cartesian sign conventions, 'u' is taken as negative (object on the left), while 'v' is positive for real images formed on the right side of the lens. The focal length of a convex lens is always positive. The ability of the lens to converge light is measured as Power (P = 1/f in meters), expressed in Dioptres.",
      apparatus: [
        "Convex Lens and Lens Holder",
        "Optical Bench (with meter scale)",
        "White Screen",
        "Two Metallic Needles (Object and Image needles)",
        "A Distant Object (Tree or Window)",
        "Spirit Level"
      ],
      procedure: [
        "First, determine the 'rough' focal length by focusing a distant object (like a tree) onto a white screen. Measure the distance between the lens and the screen.",
        "Place the convex lens on the optical bench and level it using a spirit level.",
        "Set the object needle at a distance 'u' from the lens (ensure 'u' is greater than the rough focal length).",
        "Observe the inverted image of the needle from the opposite side of the lens.",
        "Place the image needle on the opposite side and move it back and forth until its tip coincides with the tip of the inverted image.",
        "Remove 'parallax' by moving your eye sideways; the image and image-needle must move together without any relative shift.",
        "Note the positions of the lens, object needle, and image needle to calculate 'u' and 'v'.",
        "Repeat the process for 5 different values of 'u' and calculate the average focal length using the formula 1/f = 1/v - 1/u."
      ],
      precautions: [
        "The tips of the needles and the optical center of the lens must lie on the same horizontal line.",
        "Parallax must be completely removed to ensure accurate image positioning.",
        "The object distance 'u' should never be less than the focal length if a real image is required on the bench.",
        "The lens should be clean and placed exactly vertical in its holder."
      ],
      result: "The focal length of the given convex lens was determined using both the Distant Object method and the u-v method, and the results were found to be consistent.",
      video: "https://www.youtube.com/embed/EEosqJPAtIo?si=fYVfEFxCrUxcKO1a",
      videoAuthor: "Amrita Crea",
      simulation: "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "A convex lens is generally referred to as a:",
          options: ["Diverging lens", "Converging lens", "Bipolar lens", "Reflecting lens"],
          answer: 1
        },
        {
          question: "When an object is at infinity, where is the image formed?",
          options: ["At 2F", "Between F and 2F", "At the Principal Focus (F)", "At the Optical Center"],
          answer: 2
        },
        {
          question: "Which of the following represents the correct Lens Formula?",
          options: ["1/f = 1/v + 1/u", "1/f = 1/v - 1/u", "f = u + v", "1/f = u / v"],
          answer: 1
        },
        {
          question: "According to the Cartesian sign convention, the focal length of a convex lens is:",
          options: ["Always Negative", "Always Positive", "Zero", "Variable"],
          answer: 1
        },
        {
          question: "In the u-v method, what is 'Parallax'?",
          options: ["The thickness of the lens", "Apparent relative shift between the image and the needle", "The color of the light", "The distance from the lens"],
          answer: 1
        },
        {
          question: "If an object is placed at 2F, the image will be formed at:",
          options: ["F", "Infinity", "2F on the other side", "Between O and F"],
          answer: 2
        },
        {
          question: "The SI unit for the Power of a lens is:",
          options: ["Meter", "Dioptre", "Watt", "Candela"],
          answer: 1
        },
        {
          question: "A ray of light passing through the optical center of a lens will:",
          options: ["Pass undeviated", "Pass through the Focus", "Become parallel to the axis", "Reflect back"],
          answer: 0
        },
        {
          question: "If an object is placed very close to the lens (u < f), the image formed is:",
          options: ["Real and Inverted", "Virtual, Erect and Magnified", "Real and Diminished", "At Infinity"],
          answer: 1
        },
        {
          question: "What happens to the image brightness if the lower half of the lens is covered with black paper?",
          options: ["Half the image disappears", "The image becomes less bright", "The image becomes blurred", "The focal length changes"],
          answer: 1
        }
      ]
    }
  ]
};