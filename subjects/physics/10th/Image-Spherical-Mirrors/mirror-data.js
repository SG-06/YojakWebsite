const experimentData = {
  title: "Image Formation by Spherical Mirrors",
  subtitle: "Comprehensive Study: Concave and Convex Mirror Characteristics",
  parts: [
    {
      id: "mirror-image-study",
      name: "Complete Experiment",
      theory: "Spherical mirrors are part of a reflecting spherical surface. There are two types: Concave and Convex. A Concave mirror is a converging mirror where the reflecting surface curves inwards. It can form both real and virtual images depending on the object's position. For objects beyond the focus (F), the image is real and inverted. For objects between the focus and the pole (P), the image is virtual, erect, and magnified. A Convex mirror is a diverging mirror where the reflecting surface curves outwards. Unlike concave mirrors, a convex mirror always forms a virtual, erect, and diminished image, regardless of the object's position. The Mirror Formula 1/f = 1/v + 1/u relates the focal length (f), image distance (v), and object distance (u). According to the sign convention, the focal length of a concave mirror is negative, while that of a convex mirror is positive.",
      apparatus: [
        "Concave Mirror and Convex Mirror",
        "Mirror Holder/Stand",
        "Illuminated Object (Candle or LED)",
        "White Screen",
        "Meter Scale or Optical Bench",
        "Chalk to mark positions (P, F, C)"
      ],
      procedure: [
        "Find the approximate focal length (f) of the concave mirror by focusing a distant object on a screen.",
        "Place the concave mirror on its stand and mark the positions of the Pole (P), Focus (F), and Center of Curvature (C) on the bench.",
        "Case 1 (Concave - Beyond C): Place the object beyond C. Move the screen to find a real, inverted, and diminished image between F and C.",
        "Case 2 (Concave - At C): Place the object at C. Find the image on the screen at C. Observe it is real, inverted, and the same size.",
        "Case 3 (Concave - Between C and F): Place the object between C and F. Find the image beyond C. It will be real, inverted, and magnified.",
        "Case 4 (Concave - At F): Place the object at F. Observe that the reflected rays are parallel, forming an image at infinity.",
        "Case 5 (Concave - Between F and P): Place the object very close to the mirror. Observe that no image forms on the screen. Look into the mirror to see a virtual, erect, and magnified image.",
        "Case 6 (Convex Mirror): Replace the concave mirror with a convex mirror. Place the object at any distance. Observe that the image is always virtual, erect, and diminished, seen only inside the mirror."
      ],
      precautions: [
        "The center of the mirror, the object, and the screen should be aligned along the same horizontal line.",
        "To find a real image, the screen must not block the light falling from the object onto the mirror.",
        "The mirror must be clean to ensure a sharp reflection.",
        "Perform the experiment in a dark room for better visibility of images on the screen."
      ],
      result: "The characteristics of images formed by concave mirrors vary with object distance, while convex mirrors consistently produce virtual, erect, and diminished images. The findings align with the ray diagrams for spherical mirrors.",
      video: "https://www.youtube.com/embed/ges6mv0bbac?si=vT7ggnmQsUcP7Erl&amp;start=7", 
      videoAuthor: "7activestudio",
      simulation: "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html",
      simulationAuthor: "PhET Interactive Simulations, University of Colorado Boulder",
      questions: [
        {
          question: "Which mirror is used by dentists to see an enlarged image of teeth?",
          options: ["Convex Mirror", "Concave Mirror", "Plane Mirror", "Bifocal Mirror"],
          answer: 1
        },
        {
          question: "When an object is placed at the Center of Curvature (C) of a concave mirror, the image is formed at:",
          options: ["Focus (F)", "Infinity", "Center of Curvature (C)", "Behind the mirror"],
          answer: 2
        },
        {
          question: "The image formed by a convex mirror is always:",
          options: ["Real and Inverted", "Virtual, Erect and Magnified", "Virtual, Erect and Diminished", "Real and Magnified"],
          answer: 2
        },
        {
          question: "For a concave mirror, if the object is between F and P, the image is:",
          options: ["Behind the mirror, virtual and magnified", "At C, real and same size", "At infinity, real", "Between F and C, real and diminished"],
          answer: 0
        },
        {
          question: "Which of the following represents the correct Mirror Formula?",
          options: ["1/f = 1/v - 1/u", "1/f = 1/v + 1/u", "f = u + v", "1/f = u / v"],
          answer: 1
        },
        {
          question: "The focal length of a concave mirror is considered _______ as per sign convention.",
          options: ["Positive", "Negative", "Zero", "Variable"],
          answer: 1
        },
        {
          question: "A full-length image of a distant tall building can definitely be seen by using:",
          options: ["A concave mirror", "A convex mirror", "A plane mirror", "Both concave and plane mirrors"],
          answer: 1
        },
        {
          question: "The point on the reflecting surface of a spherical mirror is called the:",
          options: ["Focus", "Center of Curvature", "Pole", "Aperture"],
          answer: 2
        },
        {
          question: "When the object is at infinity, the image formed by a concave mirror is at:",
          options: ["C", "F", "P", "Between F and C"],
          answer: 1
        },
        {
          question: "Magnification (m) produced by a rear-view mirror fitted in vehicles:",
          options: ["Is less than 1", "Is more than 1", "Is equal to 1", "Can be more or less than 1"],
          answer: 0
        }
      ]
    }
  ]
};