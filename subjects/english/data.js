const englishLabData = {
  reading: {
    title: "Reading Skills",
    description: "Enhance your comprehension, analytical reading, and interpretation skills through directed analysis.",
    activities: [
      {
        id: "read1",
        title: "Reading Detective Lab",
        tag: "Activity 1",
        theory: "Active reading involves locating critical evidence within a passage, evaluating contextual definitions, and drawing analytical conclusions about the author's primary intent.",
        stimulator: {
          type: "readingDetective",
          title: "Reading Detective Lab",
          passages: [
            {
              id: "pass1",
              name: "Passage 1: The Deep Sea Ecosystem",
              text: "Deep-sea hydrothermal vents are unique geomorphological structures found along mid-ocean ridges. Emitting superheated water rich in minerals, these vents support complex ecosystems entirely independent of sunlight. Instead of utilizing photosynthesis, organisms here rely on chemosynthesis driven by specialized bacteria that oxidize toxic hydrogen sulfide. Giant tube worms, pale crabs, and resilient shrimp thrive in these extreme environments, displaying highly specific physiological adaptations. Scientists study these pristine zones to understand early life forms on Earth and model potential extraterrestrial biomes on icy moons. The staggering hydrostatic pressure and dynamic chemical output make deep exploration challenging, requiring advanced robotic submersibles. Discoveries continue to redefine the boundaries of biological endurance, proving life can bloom in complete darkness. As oceanic research deepens, these vents reveal secrets about global geochemical cycles and planetary evolutionary timelines. Marine biologists are working to map these deep locations accurately, though less than five percent of the world's ocean floor has been visually cataloged. Preserving these remote biological treasures from future deep-sea mining is an emerging concern for international conservationists. Each expedition returns with unclassified species, highlighting how much remains unmapped below our oceans.",
              mcqs: [
                { question: "What is the primary energy driver near hydrothermal vents?", options: ["Photosynthesis", "Chemosynthesis", "Thermoregulation", "Decomposition"], answer: 1 },
                { question: "Which compound do the specialized vent bacteria oxidize?", options: ["Oxygen", "Carbon dioxide", "Hydrogen sulfide", "Methane"], answer: 2 },
                { question: "Where are these unique vents geographically located?", options: ["Continental shelves", "Mid-ocean ridges", "Coastal estuaries", "Shallow coral reefs"], answer: 1 },
                { question: "What technology is required to explore these dynamic zones?", options: ["Satellites", "Scuba equipment", "Robotic submersibles", "Sonar buoys"], answer: 2 },
                { question: "Why do scientists study these extreme ecosystems?", options: ["To harvest oil reserves", "To chart surface shipping paths", "To model early life and extraterrestrial biomes", "To build deep underwater resorts"], answer: 2 },
                { question: "What describes the water emerging from the vents?", options: ["Freezing and fresh", "Superheated and mineral-rich", "Stagnant and alkaline", "Acidic and clear"], answer: 1 },
                { question: "Which animal is explicitly mentioned as thriving here?", options: ["Blue Whale", "Giant tube worm", "Clownfish", "Sea anemone"], answer: 1 },
                { question: "What percentage of the ocean floor has been visually cataloged?", options: ["Less than five percent", "Exactly ten percent", "Over half", "Twenty-five percent"], answer: 0 },
                { question: "What future commercial threat do conservationists fear?", options: ["Commercial fishing", "Deep-sea mining", "Eco-tourism", "Submarine racing"], answer: 1 },
                { question: "The word 'resilient' in the passage closest means?", options: ["Fragile", "Adaptable and tough", "Extinct", "Aggressive"], answer: 1 }
              ]
            },
            {
              id: "pass2",
              name: "Passage 2: The Renaissance Leap",
              text: "The Renaissance was a profound period of cultural, artistic, political, and scientific rebirth following the Middle Ages. Promoted actively by a surge in humanism, it emphasized human potential, classical philosophy, and direct observation of the natural world. Italy became the epicentre of this transformation, where wealthy merchant families like the Medici funded revolutionary artists and inventors. Leonardo da Vinci epitomized this era, bridging the gap between anatomical science and masterful fine arts seamlessly. Johannes Gutenberg’s development of the movable-type printing press accelerated this cultural shift by distributing literature across Europe. Before this innovation, books were painstakingly copied by hand, limiting literacy to elite religious and political circles. As information became accessible, traditional authority structures faced unprecedented scrutiny from an increasingly literate public sphere. Scientific inquiry blossomed as figures like Copernicus challenged geocentric cosmic models, shifting mankind's fundamental understanding of space. Art evolved rapidly through the application of linear perspective, giving two-dimensional surfaces an illusion of realistic depth. This intellectual awakening laid down the groundwork for modern democratic ideals, architectural techniques, and secular educational methodologies. Today, the enduring legacy of the Renaissance continues to influence global artistic parameters and philosophical frameworks.",
              mcqs: [
                { question: "What philosophical movement anchored the Renaissance?", options: ["Humanism", "Feudalism", "Skepticism", "Isolationism"], answer: 0 },
                { question: "Which nation served as the primary epicentre of the Renaissance?", options: ["France", "Italy", "England", "Germany"], answer: 1 },
                { question: "Who funded many of these historical artists in Italy?", options: ["Monastery monks", "Wealthy merchant families", "Foreign explorers", "Peasant guilds"], answer: 1 },
                { question: "Which individual bridged art and anatomical science?", options: ["Galileo", "Copernicus", "Leonardo da Vinci", "Gutenberg"], answer: 2 },
                { question: "What invention accelerated literature distribution across Europe?", options: ["The compass", "Movable-type printing press", "The steam engine", "Mechanical clocks"], answer: 1 },
                { question: "Who was literacy restricted to before the printing press?", options: ["Sailors and traders", "Elite religious and political circles", "Agricultural laborers", "Foreign ambassadors"], answer: 1 },
                { question: "Which astronomer challenged the geocentric model?", options: ["Newton", "Copernicus", "Aristotle", "Ptolemy"], answer: 1 },
                { question: "What artistic technique allowed for realistic visual depth?", options: ["Chiaroscuro", "Linear perspective", "Sfumato", "Fresco painting"], answer: 1 },
                { question: "How did accessible information impact traditional authority?", options: ["It strengthened it", "It brought unprecedented scrutiny", "It had no real effect", "It abolished governments immediately"], answer: 1 },
                { question: "The word 'epitomized' in the text closest means?", options: ["Perfectly represented", "Misunderstood", "Opposed", "Delayed"], answer: 0 }
              ]
            },
            {
              id: "pass3",
              name: "Passage 3: Ecosystem Engineers",
              text: "Ecosystem engineers are organisms that significantly modify, maintain, or destroy physical habitats, directly influencing regional biodiversity. Beavers are classic examples of allogenic engineers, altering landscapes by cutting trees and constructing massive wooden dams. These dams transform fast-flowing streams into expansive wetlands, creating essential habitats for various fish, amphibians, and waterfowl. The resulting calm waters filter out pollutants, trap sediments, and reduce downstream erosion during intense seasonal flooding. Conversely, autogenic engineers, such as reef-building corals, modify environments using their own physical biological structures as they grow. The complex calcified branches of coral reefs provide critical shelter, nursery grounds, and foraging zones for marine life. Without these biological modifications, many fragile species would completely lose their shelter and hunting strategies, triggering localized collapses. Human infrastructure development frequently disrupts these natural engineering cycles, leading to habitat fragmentation and diminished wildlife resilience. Conservation strategies now prioritize protecting these key species to preserve broader environmental health and ecological stability effectively. Recognizing the dual mechanics of allogenic and autogenic species helps scientists implement targeted restorative interventions in damaged territories. Ultimately, preserving balance requires a deep understanding of these intricate animal-led environmental transformations.",
              mcqs: [
                { question: "What defines an ecosystem engineer organism?", options: ["An animal that migrates", "An organism modifying physical habitats", "A predator at the food chain top", "A microscopic decomposer"], answer: 1 },
                { question: "Which animal is an example of an allogenic engineer?", options: ["The coral reef", "The beaver", "The blue whale", "The sea eagle"], answer: 1 },
                { question: "How do beaver dams alter swift stream systems?", options: ["They dry them up completely", "They transform them into wetlands", "They increase water speed", "They turn them into saltwater lakes"], answer: 1 },
                { question: "What benefit do beaver wetlands offer downstream?", options: ["They increase erosion", "They filter pollutants and trap sediments", "They cause severe flooding", "They raise water temperature"], answer: 1 },
                { question: "How do autogenic engineers modify ecosystems?", options: ["By moving sand manually", "Using their own physical structures", "By hunting secondary consumers", "By decomposing leaves"], answer: 1 },
                { question: "Which organism is a noted autogenic engineer?", options: ["Beaver", "Reef-building coral", "Earthworm", "Woodpecker"], answer: 1 },
                { question: "What happens to fragile species if these engineers vanish?", options: ["They grow larger", "They lose critical shelter and food channels", "They mutate quickly", "They turn into engineers themselves"], answer: 1 },
                { question: "What human factor frequently disrupts engineering cycles?", options: ["Organic farming", "Infrastructure development", "Solar energy plants", "Wildlife photography"], answer: 1 },
                { question: "Why do modern conservationists protect these specific species?", options: ["To extract natural materials", "To preserve broader environmental health", "To domesticate them for labor", "To attract tourism profits"], answer: 1 },
                { question: "The word 'fragmentation' in the text closest means?", options: ["Unification", "Breaking into isolated parts", "Healthy extension", "Coloration change"], answer: 1 }
              ]
            }
          ]
        },
        mcqs: []
      }
    ]
  },

  grammar: {
    title: "Grammar Lab",
    description: "Build exceptional sentence formulation skills by interacting with dynamic language models.",
    activities: [
      {
        id: "gram_missing",
        title: "Missing Clue Challenge",
        tag: "Simulator 1",
        theory: "Cohesive texts rely on precise structural transitions. Placing sentences contextualizes language flow accurately.",
        stimulator: {
          type: "missingClue",
          title: "Missing Clue Challenge",
          passage: [
            "The international space station orbits Earth at an incredible speed.",
            "__BLANK_1__",
            "Astronauts on board conduct pioneering microgravity experiments daily.",
            "__BLANK_2__",
            "This collaborative effort continues to expand global scientific knowledge."
          ],
          options: [
            "It travels at roughly 17,500 miles per hour.",
            "These studies help prepare humans for deep space journeys."
          ],
          answers: {
            BLANK_1: "It travels at roughly 17,500 miles per hour.",
            BLANK_2: "These studies help prepare humans for deep space journeys."
          }
        },
        mcqs: [
          { question: "What does text cohesion mean?", options: ["Using complex vocabulary", "How sentences link together clearly", "The total word length", "Writing without punctuation"], answer: 1 },
          { question: "Which word signals a cause-and-effect transition?", options: ["Suddenly", "Therefore", "Below", "Blue"], answer: 1 },
          { question: "Why are transition elements needed in paragraphs?", options: ["To confuse readers", "To guide thought logic smoothly", "To shorten sentences", "To remove descriptive nouns"], answer: 1 },
          { question: "Pronouns like 'It' or 'They' help avoid what?", options: ["Correct spelling", "Repetitive noun usage", "Action verbs", "Paragraph splits"], answer: 1 },
          { question: "A structural blank is best filled by evaluating:", options: ["Context before and after", "Only the text title", "The font styling", "Word count alone"], answer: 0 }
        ]
      },
      {
        id: "gram_figure",
        title: "Figure of Speech Detective",
        tag: "Simulator 2",
        theory: "Figures of speech add imagery and artistic flair. Recognizing them sharpens literary analysis.",
        stimulator: {
          type: "figureDetective",
          title: "Figure of Speech Detective",
          poem: `The ancient trees stood as tall as stone giants,\nThe fireplace roared and crackled its fierce defiance.\nThe silver moon was a glowing lantern up high,\nI have told you a million times not to sigh.\nPeter Piper picked a peck of pickled peppers today.`,
          options: ["Simile", "Metaphor", "Personification", "Alliteration", "Hyperbole", "Oxymoron", "Onomatopoeia"],
          correctAnswers: ["Simile", "Onomatopoeia", "Metaphor", "Hyperbole", "Alliteration"]
        },
        mcqs: [
          { question: "Which option represents a Simile configuration?", options: ["He is a lion", "The wind sang", "As brave as a lion", "Clap your hands"], answer: 2 },
          { question: "What defines a Metaphor?", options: ["Direct comparison using like/as", "Direct comparison without using like/as", "Exaggeration for humor", "Repeating vowel sounds"], answer: 1 },
          { question: "Identify the figure of speech: 'The waves danced.'", options: ["Hyperbole", "Personification", "Alliteration", "Simile"], answer: 1 },
          { question: "What does Alliteration depend on?", options: ["Rhyming words at the end", "Repeating initial consonant sounds", "Exaggerated facts", "Sound imitation words"], answer: 1 },
          { question: "Which is an example of Hyperbole?", options: ["The bag weighed a ton", "The cat sat", "Like a star", "Splash!"], answer: 0 }
        ]
      },
      {
        id: "gram_builder",
        title: "Sentence Builder",
        tag: "Simulator 3",
        theory: "Standard declarative configurations in English require a Subject-Verb-Object (S-V-O) progression.",
        stimulator: {
          type: "sentenceBuilder",
          title: "Sentence Builder",
          questions: [
            { words: ["The", "architect", "designed", "the", "skyscraper"], correct: "The architect designed the skyscraper" },
            { words: ["Scientists", "discovered", "a", "new", "planet"], correct: "Scientists discovered a new planet" },
            { words: ["The", "mechanic", "repaired", "the", "broken", "engine"], correct: "The mechanic repaired the broken engine" },
            { words: ["An", "author", "wrote", "a", "brilliant", "novel"], correct: "An author wrote a brilliant novel" },
            { words: ["The", "gardener", "watered", "the", "vibrant", "flowers"], correct: "The gardener watered the vibrant flowers" }
          ]
        },
        mcqs: [
          { question: "What is the standard word order structure in English?", options: ["Verb-Subject-Object", "Subject-Verb-Object", "Object-Subject-Verb", "Subject-Object-Verb"], answer: 1 },
          { question: "In 'The chef cooked dinner', what acts as the subject?", options: ["cooked", "dinner", "The chef", "freshly"], answer: 2 },
          { question: "What element receives the structural action of a verb?", options: ["Subject", "Object", "Adverb", "Conjunction"], answer: 1 },
          { question: "Identify the complete verb in 'She is writing a letter':", options: ["She", "is writing", "letter", "a"], answer: 1 },
          { question: "Which of the following is an incorrectly arranged sentence?", options: ["The dog chased the ball.", "Chased the cat a mouse.", "We ate delicious apples.", "The sun shines brightly."], answer: 1 }
        ]
      }
    ]
  },

  writing: {
    title: "Writing Skills",
    description: "Develop composition fluency across descriptive, transactional, and imaginative forms.",
    activities: [
      {
        id: "write_letter",
        title: "Letter Writing",
        tag: "Simulator 1",
        theory: "Formal and informal letters require proper styling, clear address blocks, polite greetings, and clear sign-offs.",
        stimulator: {
          type: "letterWriting",
          title: "Letter Writing Stimulator",
          prompt: "Write a formal letter to your local Municipal Commissioner highlighting the critical need for an automated recycling plant and trash bins in your residential sector."
        },
        mcqs: [
          { question: "What is the standard salutation for a formal business letter?", options: ["Hey there", "Dear Sir/Madam", "What's up", "Dearest Friend"], answer: 1 },
          { question: "Where is the sender's address typically positioned?", options: ["At the very bottom", "At the top of the structure", "Inside the body paragraph", "On the back of the page"], answer: 1 },
          { question: "What term describes the closing sign-off in formal correspondence?", options: ["With love", "Yours faithfully / sincerely", "Cheers", "See ya later"], answer: 1 },
          { question: "The main core message of a letter is contained in the:", options: ["Subject line", "Body paragraphs", "Subscription block", "Postscript"], answer: 1 },
          { question: "Why is a clear 'Subject' line required in formal letters?", options: ["To make it colorful", "To state the purpose of the letter quickly", "To list the references", "To name the sender"], answer: 1 }
        ]
      },
      {
        id: "write_picture",
        title: "Picture Composition",
        tag: "Simulator 2",
        theory: "Picture composition translates sensory visual data into an organized descriptive essay structure.",
        stimulator: {
          type: "pictureComp",
          title: "Picture Composition Stimulator",
          imageUrl: "./english1.jpeg",
          imagePrompt: "Futuristic clean city center with automated delivery robots and drones.",
          prompt: "Analyze the provided visual setting. Compose a 150-200 word analytical description detailing how technology blends into future environmental architectures."
        },
        mcqs: [
          { question: "What is the main goal of picture composition?", options: ["To ignore the visual cues", "To interpret and describe visual elements clearly", "To write a random song", "To practice calligraphy"], answer: 1 },
          { question: "Which words help enhance picture writing?", options: ["Abstract symbols", "Descriptive adjectives and spatial prepositions", "Numbers only", "Conjunctions alone"], answer: 1 },
          { question: "When analyzing a scene, what should you look for first?", options: ["The edge border", "The main focal point and background setting", "Spelling errors", "Page dimensions"], answer: 1 },
          { question: "Spatial terms like 'In the foreground' help to:", options: ["Confuse readers", "Organize elements within space clearly", "Shorten sentences", "Animate objects"], answer: 1 },
          { question: "A strong picture essay should blend observation with:", options: ["Logical analysis/interpretation", "Irrelevant storytelling", "Mathematical calculations", "Historical fiction names"], answer: 0 }
        ]
      },
      {
        id: "write_story",
        title: "Story Ending Challenge",
        tag: "Simulator 3",
        theory: "A narrative ending must resolve conflicts or establish meaningful lingering conclusions.",
        stimulator: {
          type: "storyEnding",
          title: "Story Ending Challenge",
          story: "The structural alarm system chimed softly, and the neon countdown numbers on the main control console suddenly froze at exactly 00:03. Dr. Evelyn stepped back, holding her breath, as the metallic containment unit gave a sharp, venting hiss. A brilliant cerulean glow spilled through the expanding crack, reflecting against the pristine laboratory tiles...",
          prompt: "Incorporate a twist resolution. Craft a concluding sequence to wrap up this tense sci-fi scenario."
        },
        mcqs: [
          { question: "What creates a satisfying story resolution?", options: ["Changing character names at the end", "Tying up or meaningfully handling major plot loops", "Leaving pages blank", "Adding equations"], answer: 1 },
          { question: "What is a 'cliffhanger' ending?", options: ["A complete happy ending", "An ending leaving characters in suspense", "A historical timeline chart", "A descriptive dictionary index"], answer: 1 },
          { question: "The term 'pacing' in a story finale refers to:", options: ["Word definitions", "The speed and tension of narrative delivery", "Page borders", "Font sizing rules"], answer: 1 },
          { question: "An effective story ending should match the setup's:", options: ["Tone and style", "Word count precisely", "Punctuation density", "Author biography"], answer: 0 },
          { question: "What does a plot twist provide?", options: ["An expected ending", "A surprising turn of events", "No resolution", "A new main character"], answer: 1 }
        ]
      },
      {
        id: "write_creative",
        title: "Creative Writing",
        tag: "Simulator 4",
        theory: "Creative writing explores non-linear ideas, metaphors, and perspectives to break conventional prose constraints.",
        stimulator: {
          type: "creativeWriting",
          title: "Creative Writing Stimulator",
          prompt: "Imagine that anthropomorphic colors have independent thoughts. Compose a dialogue debating dominance between 'Crimson' and 'Cobalt' during a stormy coastal sunset."
        },
        mcqs: [
          { question: "What element drives creative writing expression?", options: ["Strict business code structures", "Vivid imagination and figures of speech", "Omitting adjectives", "Using tabular data charts"], answer: 1 },
          { question: "Personification in creative writing means:", options: ["Spelling names backward", "Giving human attributes to abstract items/objects", "Writing in shorthand formatting", "Rhyming every word block"], answer: 1 },
          { question: "What does 'Show, Don't Tell' mean?", options: ["Include a large drawing", "Use descriptive actions/sensory terms instead of plain statements", "Speak out loud while typing", "Leave sentences unfinished"], answer: 1 },
          { question: "Dynamic character dialogue should be wrapped inside:", options: ["Brackets", "Speech marks / quotation marks", "Parentheses", "Mathematical symbols"], answer: 1 },
          { question: "The tone of a creative piece is defined as the:", options: ["Page count value", "Author's emotional stance or atmospheric mood", "Pen stroke weight", "Keyboard typing speed"], answer: 1 }
        ]
      }
    ]
  }
};