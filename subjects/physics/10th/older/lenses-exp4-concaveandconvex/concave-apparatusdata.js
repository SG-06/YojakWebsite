const experimentData = {
    title: "Comparing Convex and Concave Lenses",
    subtitle: "Interactive Virtual Physics Laboratory",
    parts: [{
        id: "lenscomparison",
        name: "Bending of Light by Lenses",
        theory: "Lenses refract (bend) light differently based on their shape. A convex lens is thicker at the center and thinner at the edges; it is known as a converging lens because it bends parallel light rays inward so they intersect at a single point called the real principal focus. A concave lens is thinner at the center and thicker at the edges; it is known as a diverging lens because it spreads parallel light rays outward, making them appear as though they are originating from a single point behind the lens called the virtual principal focus. Understanding these differences is fundamental to optics and the correction of vision defects.",
        apparatus: [
            "Convex Lens",
            "Concave Lens",
            "Laser Ray Box (producing multiple parallel beams)",
            "White Sheet of Paper",
            "Protractor and Ruler",
            "Pencil"
        ],
        procedure: [
            "Place a white sheet of paper on a flat table.",
            "Position the laser ray box so it produces three to five parallel light beams across the paper.",
            "Place the convex lens in the path of the parallel beams.",
            "Observe how the beams bend towards the principal axis and converge at a single point (the real focus). Use a pencil to trace these rays.",
            "Remove the convex lens and replace it with the concave lens in the exact same position.",
            "Observe how the parallel beams bend away from the principal axis (diverge).",
            "Trace the diverging rays and use a ruler to extend the diverging lines backward until they meet at a point (the virtual focus).",
            "Compare the traced ray diagrams of both lenses to observe their distinct light-bending properties."
        ],
        precautions: [
            "Do not look directly into the laser beams of the ray box to prevent eye damage.",
            "Ensure the lenses are clean and free of fingerprints for clear light transmission.",
            "Keep the ray box and the lenses strictly on the same horizontal plane.",
            "Ensure the incident light beams are perfectly parallel before inserting the lens."
        ],
        result: "The experiment demonstrates that a convex lens converges parallel light rays to a real focus, while a concave lens diverges parallel light rays, making them appear to originate from a virtual focus.",
        video: "https://www.youtube.com/embed/z5B4n2m5H88",
        simulation: "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html",
        questions: [{
                question: "What effect does a convex lens have on a beam of parallel light rays?",
                options: [
                    "It diverges them",
                    "It converges them",
                    "It reflects them back",
                    "It absorbs them"
                ],
                answer: 1
            },
            {
                question: "What effect does a concave lens have on a beam of parallel light rays?",
                options: [
                    "It converges them",
                    "It reflects them",
                    "It diverges them",
                    "It polarizes them"
                ],
                answer: 2
            },
            {
                question: "Which type of lens is thicker at the center and thinner at the edges?",
                options: [
                    "Plano-concave lens",
                    "Concave lens",
                    "Convex lens",
                    "Cylindrical lens"
                ],
                answer: 2
            },
            {
                question: "Which type of lens is thinner at the center and thicker at the edges?",
                options: [
                    "Convex lens",
                    "Concave lens",
                    "Biconvex lens",
                    "Plano-convex lens"
                ],
                answer: 1
            },
            {
                question: "The point where parallel rays actually meet after passing through a convex lens is called the:",
                options: [
                    "Optical center",
                    "Virtual focus",
                    "Center of curvature",
                    "Real focus"
                ],
                answer: 3
            },
            {
                question: "For a concave lens, the principal focus is considered:",
                options: [
                    "Virtual",
                    "Real",
                    "Infinite",
                    "Zero"
                ],
                answer: 0
            },
            {
                question: "Another name for a concave lens is:",
                options: [
                    "Converging lens",
                    "Diverging lens",
                    "Magnifying glass",
                    "Prism"
                ],
                answer: 1
            },
            {
                question: "What happens to a ray of light that passes directly through the optical center of a convex or concave lens?",
                options: [
                    "It bends towards the focus",
                    "It passes through undeviated",
                    "It reflects back",
                    "It refracts at a 90-degree angle"
                ],
                answer: 1
            },
            {
                question: "If you want to magnify an object (like reading small print), which lens is typically used?",
                options: [
                    "Concave lens",
                    "Convex lens",
                    "Bifocal lens",
                    "Diverging lens"
                ],
                answer: 1
            },
            {
                question: "In standard Cartesian sign convention, the focal length of a concave lens is taken as:",
                options: [
                    "Positive",
                    "Negative",
                    "Zero",
                    "Infinity"
                ],
                answer: 1
            }
        ]
    }]
};