const experimentData = {
  title: "Image Formation by a Convex Lens",
  subtitle: "Optics: Studying Real and Virtual Images at Various Object Positions",
  parts: [
    {
      id: "lens-image-formation",
      name: "Complete Experiment",
      theory: "A convex lens is known as a converging lens. The nature, position, and size of the image formed by it depend on the distance of the object from the optical center. There are two main types of images: Real and Virtual. A Real image is formed when light rays actually intersect after refraction; it is always inverted and can be caught on a screen. A Virtual image is formed when rays appear to diverge from a point; it is always erect and cannot be caught on a screen. As an object moves from infinity toward the lens, the real image moves away from the lens and increases in size. A critical transition occurs at the Principal Focus (F). When the object is placed beyond F, the image is real and inverted. However, when the object is placed between the Focus (F) and the Optical Center (O), the rays never meet on the other side, and the lens acts as a magnifying glass, producing a virtual, erect, and magnified image on the same side as the object.",
      apparatus: [
        "Convex Lens (known focal length)",
        "Lens Holder",
        "Optical Bench or Meter Scale",
        "Illuminated Object (Candle or LED 'O' object)",
        "White Screen",
        "Pencil and Notebook"
      ],
      procedure: [
        "Mount the convex lens on the holder and place it at the center of the optical bench.",
        "Determine the focal length (f) of the lens using the distant object method.",
        "Case 1 (Object at Infinity): Point the lens at a distant tree and catch the sharp point image on the screen at the focus.",
        "Case 2 (Object beyond 2F): Place the object far beyond twice the focal length. Move the screen on the other side to find a sharp, diminished, and inverted image.",
        "Case 3 (Object at 2F): Place the object exactly at a distance of 2f. Find the image on the screen at 2f on the other side. Observe it is the same size as the object.",
        "Case 4 (Object between F and 2F): Move the object closer. The image moves beyond 2f and becomes magnified.",
        "Case 5 (Object at F): Place the object at the focus. Observe that the rays become parallel and the image is formed at infinity.",
        "Case 6 (Object between O and F): Move the object very close to the lens. Notice that no image can be caught on the screen. Look through the lens from the other side to see a giant, erect, virtual image."
      ],
      precautions: [
        "The object, lens, and screen must be aligned along the same horizontal principal axis.",
        "Perform the experiment in a partially darkened room to see the images clearly on the screen.",
        "For the virtual image case, do not look at the sun through the lens.",
        "Ensure the lens is clean to avoid distorted images."
      ],
      result: "The study confirms that a convex lens forms real and inverted images for all object positions beyond the focus, and a virtual, erect, magnified image when the object is within the focal length.",
      video: "https://www.youtube.com/embed/kaCQBeLQ2WA?si=CmOdzth0BYA_fPSf&amp;start=7", 
      videoAuthor: "Professor Phi",
      simulation: "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "For which object position is the image formed by a convex lens virtual and erect?",
          options: ["At 2F", "Between O and F", "At F", "Beyond 2F"],
          answer: 1
        },
        {
          question: "When an object is placed at 2F, the image is formed at:",
          options: ["F", "Between F and 2F", "2F", "Infinity"],
          answer: 2
        },
        {
          question: "If the object is moved closer to a convex lens (but stays beyond F), the real image:",
          options: ["Moves closer to the lens", "Moves away from the lens", "Stays at the same place", "Disappears"],
          answer: 1
        },
        {
          question: "A real image is always ________ relative to the object.",
          options: ["Erect", "Inverted", "Sideways", "Blurred"],
          answer: 1
        },
        {
          question: "What is the size of the image when the object is at infinity?",
          options: ["Highly magnified", "Same size", "Point-sized", "Enlarged"],
          answer: 2
        },
        {
          question: "A convex lens acts as a simple magnifying glass when the object is:",
          options: ["At infinity", "At 2F", "Inside the focal length", "At F"],
          answer: 2
        },
        {
          question: "Which of the following cannot be caught on a screen?",
          options: ["Real image", "Virtual image", "Inverted image", "Diminished image"],
          answer: 1
        },
        {
          question: "If an object is 10cm from a lens with focal length 20cm, the image is:",
          options: ["Real and diminished", "Real and magnified", "Virtual and magnified", "At infinity"],
          answer: 2
        },
        {
          question: "At which position is the image the same size as the object?",
          options: ["F", "2F", "Optical Center", "Infinity"],
          answer: 1
        },
        {
          question: "The point at the center of the lens through which light passes undeviated is:",
          options: ["Principal Focus", "Optical Center", "Center of Curvature", "Aperture"],
          answer: 1
        }
      ]
    }
  ]
};