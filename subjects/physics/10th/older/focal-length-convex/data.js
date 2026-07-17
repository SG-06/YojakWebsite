
const experimentData = {
  title: "To Obtain the Focal Length of a Convex Lens",
  subtitle: "Interactive Virtual Physics Laboratory",

  parts: [
    {
      id: "lens",

      name: "Convex Lens Experiment",

      theory:
        "A convex lens is a transparent optical device that converges parallel rays of light to a point called the principal focus. The distance between the optical center of the lens and its principal focus is known as the focal length. The focal length of a convex lens can be determined by forming a sharp image of a distant object on a screen. Since the object is at a very large distance, the rays of light coming from it are considered parallel to the principal axis of the lens. These parallel rays converge at the principal focus after passing through the lens. By adjusting the position of the screen until a clear and sharp image is obtained, the distance between the lens and the screen becomes equal to the focal length of the lens. Thus, measuring this distance gives the focal length of the convex lens.",

      apparatus: [
        "Virtual convex lens",
        "Virtual optical bench",
        "Virtual illuminated object (candle/object arrow)",
        "Virtual screen",
        "Meter scale/ruler for measurement",
        "Lens holder and screen holder (virtual setup)",
        "Computer or mobile device with virtual lab software"
      ],

      procedure: [
        "Open the virtual lab simulation and select the convex lens experiment",
        "Place the convex lens on the virtual optical bench",
        "Position the illuminated object at a suitable distance from the lens",
        "Place the screen on the other side of the lens",
        "Adjust the position of the screen until a sharp image is obtained",
        "Record the object distance (u) and image distance (v)",
        "Repeat the experiment for different object positions",
        "Calculate the focal length using the lens formula",
        "Find the average value of the focal length from the observations",
        "Record the final focal length of the convex lens"
      ],

      precautions: [
        "Ensure that the object, lens, and screen are aligned along the same principal axis",
        "Obtain a sharp and well-focused image before taking measurements",
        "Record all readings carefully and accurately",
        "Avoid changing the lens position while taking observations",
        "Take multiple observations to reduce experimental errors",
        "Use the correct units for all measurements",
        "Verify that the virtual setup is properly calibrated before starting the experiment",
        "Calculate the average focal length from repeated observations for better accuracy"
      ],

      result:
        "The focal length of the given convex lens was determined successfully using the virtual lab simulation. The obtained focal length was found to be _____ cm.",

      video:
        "videovideoplayback.mp4",

      simulation:
        "https://phet.colorado.edu/en/simulations/geometric-optics",

      questions: [
        {
          question: "What is the focal length of a lens?",
          options: [
            "Diameter of the lens",
            "Distance between the optical center and principal focus",
            "Thickness of the lens",
            "Radius of curvature"
          ],
          answer: 1
        },

        {
          question: "Which type of lens converges parallel rays of light?",
          options: [
            "Concave lens",
            "Plane lens",
            "Convex lens",
            "Cylindrical lens"
          ],
          answer: 2
        },

        {
          question: "What is the SI unit of focal length?",
          options: [
            "Meter",
            "Second",
            "Newton",
            "Watt"
          ],
          answer: 0
        },

        {
          question: "What happens to parallel rays after passing through a convex lens?",
          options: [
            "They diverge",
            "They remain parallel",
            "They converge at the principal focus",
            "They are absorbed"
          ],
          answer: 2
        },

        {
          question: "Which instrument is used to obtain the image in this experiment?",
          options: [
            "Prism",
            "Screen",
            "Mirror",
            "Compass"
          ],
          answer: 1
        },

        {
          question: "What is the principal focus of a convex lens?",
          options: [
            "Point where parallel rays meet after refraction",
            "Center of the lens",
            "Edge of the lens",
            "Any point on the lens"
          ],
          answer: 0
        },

        {
          question: "For a distant object, the image is formed at:",
          options: [
            "Infinity",
            "Twice the focal length",
            "Principal focus",
            "Optical center"
          ],
          answer: 2
        },

        {
          question: "Which formula is used to calculate the focal length of a convex lens?",
          options: [
            "V = IR",
            "F = ma",
            "1/f = 1/u + 1/v",
            "p = mv"
          ],
          answer: 2
        },

        {
          question: "Why are multiple observations taken in the experiment?",
          options: [
            "To increase image size",
            "To reduce errors and improve accuracy",
            "To change the lens type",
            "To increase brightness"
          ],
          answer: 1
        },

        {
          question: "A convex lens is also known as a:",
          options: [
            "Diverging lens",
            "Converging lens",
            "Cylindrical lens",
            "Plane lens"
          ],
          answer: 1
        }
      ]
    }
  ]
};

window.experimentData = experimentData;

