const experimentData = {
    title: "Dispersion of Light through a Prism",
    subtitle: "Interactive Virtual Physics Laboratory",
    parts: [{
        id: "prismdispersion",
        name: "Dispersion of White Light",
        theory: "When a beam of white light (like sunlight) passes through a glass prism, it splits into its constituent colors. This phenomenon is called dispersion. It occurs because white light is a mixture of different colors, each having a different wavelength. When entering the glass medium, each color travels at a slightly different speed, causing them to bend (refract) at different angles. Red light, having the longest wavelength, bends the least, while violet light, having the shortest wavelength, bends the most. This unequal bending produces a band of seven colors known as a spectrum, visible in the sequence VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red) from bottom to top.",
        apparatus: [
            "Glass Prism",
            "Drawing Board",
            "White Sheet of Paper",
            "Drawing Pins",
            "Cardboard with a narrow slit (to allow a thin beam of light)",
            "White Screen (or the paper itself)",
            "Pencil and Ruler"
        ],
        procedure: [
            "Fix a white sheet of paper on the drawing board using drawing pins.",
            "Place the glass prism resting on its triangular base in the middle of the paper and trace its outline.",
            "Set up the cardboard with the slit in front of a light source (or sunlight) to obtain a narrow beam of white light.",
            "Allow this narrow beam of light to fall on one of the rectangular glass faces of the prism at an angle.",
            "Place a white screen on the opposite side of the prism.",
            "Slowly rotate the prism until you see a clear band of colors forming on the screen.",
            "Observe the different colors and their sequence in the formed spectrum.",
            "Trace the incident ray, the outline of the prism, and mark the position of the red and violet colors on the paper."
        ],
        precautions: [
            "Use a very narrow slit to get a sharp and distinct spectrum.",
            "Perform the experiment in a dark room to ensure the colors on the screen are clearly visible.",
            "Ensure the glass prism is clean and free from fingerprints or smudges.",
            "Keep the light source steady and do not disturb the prism once the spectrum is obtained."
        ],
        result: "White light splits into a spectrum of seven colors (VIBGYOR) upon passing through a glass prism. The experiment demonstrates that violet light deviates the most and red light deviates the least from its original path.",
        video: "https://www.youtube.com/embed/jgSyGAXIEA0",
        simulation: "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html",
        questions: [{
                question: "The phenomenon of splitting of white light into its constituent colors is called:",
                options: [
                    "Reflection",
                    "Refraction",
                    "Dispersion",
                    "Scattering"
                ],
                answer: 2
            },
            {
                question: "Which color of light bends (deviates) the most when passing through a prism?",
                options: [
                    "Red",
                    "Green",
                    "Yellow",
                    "Violet"
                ],
                answer: 3
            },
            {
                question: "Which color of light bends (deviates) the least when passing through a prism?",
                options: [
                    "Red",
                    "Blue",
                    "Indigo",
                    "Violet"
                ],
                answer: 0
            },
            {
                question: "The band of colored components of a light beam is called its:",
                options: [
                    "Rainbow",
                    "Spectrum",
                    "Mirage",
                    "Halo"
                ],
                answer: 1
            },
            {
                question: "What is the correct sequence of colors in the spectrum from the base of the prism upwards?",
                options: [
                    "ROYGBIV",
                    "VIBGYOR",
                    "VIGBYOR",
                    "RBGVIYO"
                ],
                answer: 1
            },
            {
                question: "Why does dispersion occur in a glass prism?",
                options: [
                    "The prism absorbs some light and reflects the rest",
                    "Different colors of light travel at different speeds in the glass",
                    "The prism adds color to the pure white light",
                    "Due to total internal reflection inside the prism"
                ],
                answer: 1
            },
            {
                question: "Which color in the visible spectrum has the longest wavelength?",
                options: [
                    "Violet",
                    "Blue",
                    "Green",
                    "Red"
                ],
                answer: 3
            },
            {
                question: "How can you recombine a spectrum back into white light?",
                options: [
                    "By passing it through a convex lens",
                    "By reflecting it with a concave mirror",
                    "By passing it through an identical, inverted glass prism",
                    "By passing it through a rectangular glass slab"
                ],
                answer: 2
            },
            {
                question: "The refractive index of glass is maximum for which color of light?",
                options: [
                    "Red",
                    "Yellow",
                    "Green",
                    "Violet"
                ],
                answer: 3
            },
            {
                question: "A standard optical glass prism has:",
                options: [
                    "2 triangular bases and 3 rectangular lateral surfaces",
                    "3 triangular bases and 2 rectangular lateral surfaces",
                    "1 square base and 4 triangular surfaces",
                    "4 rectangular surfaces only"
                ],
                answer: 0
            }
        ]
    }]
};