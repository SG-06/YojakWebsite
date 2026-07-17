const experimentData = {
    title: "Image Formation by Convex Lens",
    subtitle: "Interactive Virtual Physics Laboratory",
    parts: [{
        id: "convexlens",
        name: "Convex Lens Image Formation",
        theory: "A convex lens converges light rays that travel parallel to its principal axis. The nature, position, and size of the image formed by a convex lens depend on the position of the object relative to the optical center and the principal focus (F) of the lens. When the object is placed anywhere from infinity up to the principal focus, the lens forms a real and inverted image. However, when the object is placed very close to the lens (between the principal focus and the optical center), the rays diverge, and a virtual, erect, and magnified image is formed on the same side as the object. This principle is widely used in magnifying glasses, microscopes, and cameras.",
        apparatus: [
            "Optical Bench",
            "Convex Lens",
            "Lens Holder",
            "Illuminated Object (e.g., candle or light box with crosswires)",
            "White Screen",
            "Meter Scale"
        ],
        procedure: [
            "Determine the rough focal length of the given convex lens by focusing a distant object (like a tree or window) on the screen and measuring the distance between the lens and the screen.",
            "Mount the convex lens in the lens holder and place it in the middle of the optical bench.",
            "Place the illuminated object at a distance greater than twice the focal length (> 2F) from the lens.",
            "Move the screen on the other side of the lens until a sharp, clear image of the object is formed.",
            "Record the object distance (u) and image distance (v), and note the nature and size of the image.",
            "Repeat the procedure by placing the object at exactly 2F, between F and 2F, and exactly at F, recording the observations for each.",
            "Finally, place the object between the optical center and F. Look through the lens from the other side to observe the virtual, erect, and magnified image (since no image will form on the screen)."
        ],
        precautions: [
            "The optical center of the lens, the object, and the center of the screen must all be at the same horizontal height.",
            "The lens, object, and screen should be kept strictly vertical.",
            "Perform the experiment in a well-shaded or dark room for better visibility of the image.",
            "Ensure there is no parallax error while recording the positions on the optical bench scale.",
            "Handle the lens carefully by its edges to avoid smudging the surfaces."
        ],
        result: "The experiment confirms that as the object is moved closer to the convex lens from infinity, the real image moves further away from the lens and increases in size. When the object crosses the focal point and is placed between F and the optical center, the image transitions from real and inverted to virtual, erect, and magnified.",
        video: "https://www.youtube.com/watch?v=kaCQBeLQ2WA",
        simulation: "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html",
        questions: [{
                question: "What type of image is formed by a convex lens when the object is placed at infinity?",
                options: [
                    "Real and magnified",
                    "Virtual and diminished",
                    "Real, inverted, and point-sized",
                    "Virtual, erect, and magnified"
                ],
                answer: 2
            },
            {
                question: "Where is the image formed when the object is placed exactly at 2F of a convex lens?",
                options: [
                    "At F",
                    "At 2F",
                    "Between F and 2F",
                    "Beyond 2F"
                ],
                answer: 1
            },
            {
                question: "What is the nature of the image when an object is placed between the optical center and the principal focus (F)?",
                options: [
                    "Real, inverted, diminished",
                    "Virtual, erect, magnified",
                    "Real, inverted, magnified",
                    "Virtual, erect, diminished"
                ],
                answer: 1
            },
            {
                question: "If an object is placed between F and 2F of a convex lens, the image formed is:",
                options: [
                    "Real and diminished",
                    "Virtual and magnified",
                    "Real, inverted, and magnified",
                    "Virtual and diminished"
                ],
                answer: 2
            },
            {
                question: "Which of the following describes the physical shape of a convex lens?",
                options: [
                    "Thinner at the center, thicker at the edges",
                    "Thicker at the center, thinner at the edges",
                    "Flat on both sides",
                    "Curved uniformly like a cylinder"
                ],
                answer: 1
            },
            {
                question: "When the object is placed at the principal focus (F) of a convex lens, where is the image formed?",
                options: [
                    "At F",
                    "At 2F",
                    "At infinity",
                    "Between F and the lens"
                ],
                answer: 2
            },
            {
                question: "What is the term used for the central point of a lens through which light passes without deviating?",
                options: [
                    "Pole",
                    "Center of curvature",
                    "Principal focus",
                    "Optical center"
                ],
                answer: 3
            },
            {
                question: "A real image formed by a single convex lens is always:",
                options: [
                    "Erect",
                    "Inverted",
                    "Magnified",
                    "Diminished"
                ],
                answer: 1
            },
            {
                question: "To use a convex lens as a simple magnifying glass, where should the object be placed?",
                options: [
                    "Beyond 2F",
                    "At 2F",
                    "Between F and 2F",
                    "Between the optical center and F"
                ],
                answer: 3
            },
            {
                question: "According to the Cartesian sign convention, the focal length of a convex lens is considered to be:",
                options: [
                    "Negative",
                    "Positive",
                    "Zero",
                    "Infinite"
                ],
                answer: 1
            }
        ]
    }]
};