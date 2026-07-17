const experimentData = {
    title: "Refraction Through a Glass Slab",
    subtitle: "Interactive Virtual Physics Laboratory",
    parts: [{
        id: "glassslab",
        name: "Lateral Shift in a Rectangular Glass Slab",
        theory: "When light passes from a rarer medium (air) to a denser medium (glass), it slows down and bends towards the normal. When it exits from the denser medium back into the rarer medium, it speeds up and bends away from the normal. In a rectangular glass slab, the opposite faces are parallel. Because the extent of bending at the first surface is exactly reversed at the second surface, the emergent ray is completely parallel to the incident ray. However, the light path is shifted to one side. This perpendicular distance between the original path of the incident ray and the emergent ray is known as lateral displacement.",
        apparatus: [
            "Rectangular Glass Slab",
            "Drawing Board",
            "White Sheet of Paper",
            "Drawing Pins",
            "Office Pins",
            "Protractor",
            "Ruler",
            "Pencil"
        ],
        procedure: [
            "Fix a white sheet of paper on a drawing board using drawing pins.",
            "Place the rectangular glass slab in the center of the paper and trace its boundary with a pencil.",
            "Remove the slab and draw a normal (perpendicular line) on one of the longer sides of the traced boundary.",
            "Draw an incident ray at an angle (e.g., 30° to 45°) to the normal.",
            "Place the glass slab back exactly onto its traced boundary.",
            "Fix two pins vertically on the line representing the incident ray.",
            "Look through the opposite side of the glass slab and fix two more pins such that they appear to be in a perfectly straight line with the images of the first two pins.",
            "Remove the slab and pins. Mark the pin positions and draw a line connecting the last two pins to represent the emergent ray.",
            "Draw a normal at the point of emergence. Extend the original incident ray forward using a dotted line to observe the lateral shift between the incident and emergent rays."
        ],
        precautions: [
            "The glass slab should be perfectly clean and free from scratches or air bubbles.",
            "The pins must be fixed perfectly vertical to the drawing board.",
            "The angle of incidence should preferably be taken between 30° and 60° for a clear lateral shift.",
            "Keep your eye level close to the plane of the paper while observing the pins to avoid parallax error."
        ],
        result: "The angle of incidence is found to be equal to the angle of emergence. The emergent ray is parallel to the incident ray, verifying the laws of refraction for parallel-sided media, and a distinct lateral shift is observed.",
        video: "https://www.youtube.com/embed/Pj1b1c_pCpk",
        simulation: "https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html",
        questions: [{
                question: "When a ray of light enters a glass slab from air, it bends:",
                options: [
                    "Away from the normal",
                    "Towards the normal",
                    "Perpendicular to the surface",
                    "Without any deviation"
                ],
                answer: 1
            },
            {
                question: "For a rectangular glass slab, the angle of incidence is equal to:",
                options: [
                    "The angle of refraction",
                    "The angle of deviation",
                    "The angle of emergence",
                    "The critical angle"
                ],
                answer: 2
            },
            {
                question: "The perpendicular distance between the original path of the incident ray and the emergent ray is called:",
                options: [
                    "Angle of deviation",
                    "Lateral displacement",
                    "Focal length",
                    "Refractive index"
                ],
                answer: 1
            },
            {
                question: "Lateral displacement increases with an increase in the:",
                options: [
                    "Thickness of the glass slab",
                    "Speed of light in a vacuum",
                    "Distance of the object",
                    "Temperature of the room"
                ],
                answer: 0
            },
            {
                question: "When light travels from the glass slab back into the air, it bends:",
                options: [
                    "Towards the normal",
                    "Away from the normal",
                    "At a 90-degree angle",
                    "In a circle"
                ],
                answer: 1
            },
            {
                question: "If the angle of incidence is 0° (striking the slab completely perpendicular), the ray will:",
                options: [
                    "Reflect back completely",
                    "Bend towards the normal",
                    "Bend away from the normal",
                    "Pass through undeviated"
                ],
                answer: 3
            },
            {
                question: "The refractive index of glass is ________ the refractive index of air.",
                options: [
                    "Greater than",
                    "Less than",
                    "Equal to",
                    "Unrelated to"
                ],
                answer: 0
            },
            {
                question: "Which color of visible light suffers the most lateral displacement through a glass slab?",
                options: [
                    "Red",
                    "Green",
                    "Yellow",
                    "Violet"
                ],
                answer: 3
            },
            {
                question: "What is the fundamental cause of refraction when light enters the glass slab?",
                options: [
                    "Change in light intensity",
                    "Change in the speed of light",
                    "Absorption of light",
                    "Total internal reflection"
                ],
                answer: 1
            },
            {
                question: "Because the emergent ray is completely parallel to the incident ray, the angle of deviation produced by the rectangular slab is:",
                options: [
                    "90°",
                    "45°",
                    "0°",
                    "180°"
                ],
                answer: 2
            }
        ]
    }]
};