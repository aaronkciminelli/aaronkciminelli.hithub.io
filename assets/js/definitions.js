var definitions = {
    // ... definition examples
    //verbs are actions

    'verb': ['sketching', 'investigating', 'speaking', 'imagining', 'laughing', 'thinking', 'crying', 
    'jumping', 'creating', 'photographing', 'listening', 'dancing', 'studying', 'working', 'observing', 
    'running', 'hiking', 'writing', 'building', 'cooking', 'traveling', 'gardening', 'swimming', 'exploring', 
    'sculpting', 'arguing', 'painting', 'singing', 'reading', 'playing'],

    //adjectives describe nouns
    'adjective': ['bright', 'grouchy', 'delicious', 'gloomy', 'excited', 'graceful', 'fearless', 'humorous',
     'icy', 'joyful', 'kind', 'lively', 'majestic', 'nervous', 'obnoxious', 'pleasant', 'quaint', 'radiant', 
     'shiny', 'tense', 'unusual', 'vast', 'wise', 'xerophilous', 'youthful', 'zesty', 'adorable', 'brave', 
     'curious', 'dramatic', 'Enigmatic', 'Opulent', 'Mesmerizing', 'Pristine', 'Ethereal', 'Magnificent', 
     'Captivating', 'Mysterious', 'Nostalgic', 'Innovative', 'Dramatic', 'Serene', 'Energetic', 'Soothing', 
     'Harmonious', 'Vibrant', 'Playful', 'Intriguing', 'Vivacious', 'Elegant', 'Impeccable', 'Provocative', 
     'Exquisite', 'Bold', 'Effervescent', 'Rustic', 'Whimsical', 'Dynamic', 'Transcendent', 'Radiant'],

    //nouns are people, places, or things
    'noun': ['feather', 'table', 'chair', 'thingamabob', 'dog', 'car', 'city', 'park', 'pencil', 'house', 
    'street', 'cat', 'whatchamacallit', 'shirt', 'bottle', 'tree', 'shoe', 'phone', 'school', 'lake', 'zombie', 
    'flower', 'bed', 'goblin', 'hat', 'sandwich', 'bat', 'garden', 'bus', 'train'],

    //materials are what things are made of
    'material': ['ceramics','metal','calligraphy','wood', '3D models', 'collage', 'oil paints', 'vector shapes', 
    'photography','tempera','theater stage','digital art','textiles','fabric and ribbons','pixel art',
    'found objects','graphite','modeling clay','pastels','mixed media','paper mache','acrylic paints',
    'glass','ink','clay','watercolor','watercolors','charcoal'],

    //abstract nouns are ideas
    'abstract noun': ['dream', 'wisdom', 'friendship', 'passion', 'harmony', 'memory', 'rhythm', 'whisper', 'silence', 
    'discovery', 'freedom', 'joy', 'love', 'hope', 'peace', 'fear', 'trust', 'pride', 'knowledge', 'patience', 'courage', 
    'loyalty', 'gratitude', 'anger', 'kindness', 'doubt', 'faith', 'inspiration', 'happiness', 'ambition'],

    //natrual phenomena are things that occur in nature
    'natural phenomena or geographical features': ['eclipse', 'sunset', 'ocean', 'canyon', 'mountain', 'galaxy', 'horizon', 'rainbow', 
    'waterfall', 'volcano', 'river', 'forest', 'desert', 'glacier', 'island', 'tundra', 'marsh', 'aurora', 'tsunami', 'earthquake', 
    'delta', 'prairie', 'cliff', 'plateau', 'fjord', 'geyser', 'archipelago', 'cave', 'dune', 'isthmus'],

    //man made objects are things that are made by people
    'Man Made Objects': ['compass', 'guitar', 'lantern', 'puzzle', 'skyscraper', 'watch', 'bicycle', 'book', 'computer', 'bridge', 'airplane', 
    'statue', 'telescope', 'paintbrush', 'television', 'microwave', 'cellphone', 'automobile', 'sewing machine', 'printer', 'clock', 'refrigerator', 
    'calculator', 'furniture', 'pen', 'stereo', 'oven', 'necklace', 'quilt'],

    //living things are animals and plants
    'living things': ['butterfly', 'elephant', 'daisy', 'falcon', 'oak tree', 'dolphin', 'anaconda', 'maple tree', 'kangaroo', 'rose', 'bald eagle', 
    'cactus', 'orangutan', 'tulip', 'panda', 'pine tree', 'chimpanzee', 'orchid', 'penguin', 'redwood tree', 'shark', 'daffodil', 'tiger', 'eucalyptus tree', 
    'blue whale', 'sunflower', 'gorilla', 'olive tree', 'koala', 'octopus'], 

    //collective nouns are groups of things
    'collective nouns': ['symphony (for example: a group of musicians)','orchard (for example: a group of fruit trees)',
        'harvest (collection of crops)', 'pack (for example: a group of wolves)','flock (for example: a group of birds)',
        'school (for example: a group of fish)','swarm (for example: a group of bees)','herd (for example: a group of cattle)',
        'pride (for example: a group of lions)','pod (for example: a group of whales or dolphins)',
        'colony (for example: a group of ants)','troop (for example: a group of monkeys)','bouquet (for example: a group of flowers)',
        'library (collection of books)','fleet (for example: a group of ships)','squadron (for example: a group of planes)',
        'army (for example: a group of soldiers)','choir (for example: a group of singers)','jury (for example: a group of jurors)',
        'class (for example: a group of students)','team (for example: a group of athletes)','audience (for example: a group of viewers)',
        'cast (for example: a group of actors)','galaxy (for example: a group of stars)','panel (for example: a group of experts)',
        'parliament (for example: a group of owls)','litter (for example: a group of puppies or kittens)',
        'clowder (for example: a group of cats)','cluster (for example: a group of stars)','staff (for example: a group of employees)'
    ],
    //metaphorical complex nouns are abstract ideas represented by a concrete object
    'metaphorical Complex Nouns': [
        'shadow (symbol of darkness or concealment)','journey (process or progress in life)','elixir (solution or cure-all)',
        'crossroads (decision point)','mirage (illusion)','beacon (guiding light or hope)','knot (complex problem)','maze (complex path or puzzle)',
        'fountain (source of abundance)','shield (protection)','anchor (source of stability)','oasis (safe or peaceful refuge)','phoenix (symbol of rebirth)',
        'prism (medium that refracts or transforms)','key (solution or answer)','seed (origin or potential)','labyrinth (complicated situation)','tower (strength or isolation)',
        'web (complex network or trap)','echo (residual or repeating effect)','torch (enlightenment or leadership)','storm (crisis or emotional upheaval)',
        'veil (cover, separation, or mystery)','wave (sudden increase or powerful change)','thorn (difficulty or pain)','flame (passion or life)',
        'fortress (security or isolation)','bridge (connection or transition)','thread (connection or continuity)','puzzle (problem or enigma)'
    ], 

   //setting is the place where the story takes place
    'setting': ['Grand Ballroom', 'Rain-soaked Alley', 'Castle', 'Cliffside Village', 'Forest Scene', 'Futuristic Metropolis', 'Deserted Island', 'Celestial Galaxy', 'Urban Street', 
    'Ancient Library', 'Apartment', 'Outer Space', 'Enchanted Forest', 'Tranquil Lake', 'Dance Studio', 'Underwater Scene', 'Carnival', 'Jungle Scene', 'Moonlit Beach', 'Ancient Temple', 
    'Rooftop Garden', 'Amphitheater', 'Post-apocalyptic Wasteland', 'Mansion', 'Lost City Under the Sea', 'Sunflower Field', 'Rustic Village', 'Park', 'Coastline', 'Mystical Cave'],


    //theme is the main idea of the story
    'theme': ['pioneering', 'extraterrestrial', 'exploration', 'affection', 'technology', 'harmony', 'love', 'futuristic', 'enchantment', 'journey',
     'mythology', 'fantasy', 'wonder', 'innovation', 'imagination', 'nature', 'quest', 'romance', 'magic', 'passion', 'infatuation', 'curiosity',
     'wilderness', 'cosmos', 'legend', 'cyberspace', 'surrealism', 'adventure', 'dreams', 'science'],

     //Abstract concepts are ideas that are not physical objects
    'abstract concept': ['Balance', 'Belonging', 'Courage', 'Creativity', 'Freedom', 'Imagination', 'Justice', 'Joy', 'Curiosity', 'Transformation', 'Hope', 
    'Beauty', 'Gratitude', 'Compassion', 'Peace', 'Love', 'Resilience', 'Wisdom', 'Integrity', 'Unity', 'Empowerment', 'Forgiveness', 'Serenity', 'Empathy', 
    'Purpose', 'Abundance', 'Harmony', 'Truth', 'Authenticity', 'Enlightenment'],

    //historical periods are time periods in the past
    'historical period': ['Renaissance Italy', 'Ming Dynasty', 'Ancient Greece', 'Ancient Maya', 'the 80s', 'Jazz Age', 'Medieval period', 'Victorian era', 
    'Byzantine Empire', 'Edo period (Japan)', 'Wild West', 'Ancient Egypt', 'Roaring Twenties', 'Ancient Rome', 'Art Deco period', 'Renaissance', 'Baroque era', 
    'Prehistoric era', 'Spanish Inquisition', 'Art Nouveau period', 'Edwardian era', 'American Revolution', 'Middle Ages', 'Ancient China', 'World War II era', 
    'Ancient Persia', 'Age of Enlightenment', 'Industrial Revolution', 'Golden Age of Piracy', 'Viking Age'],

    //number is a quantity
    'number': ['Multitude', 'Sufficient', 'Handful', 'Excessive', 'Countless', 'Sparse', 'Many', 'Several', 'Finite', 'Myriad', 'Abundant', 'Few', 'Multiple', 
    'Dozens', 'Scarce', 'Three', 'Limited', 'Plenty', 'Copious', 'Millions', 'Scant', 'Infinite', 'Hundreds', 'Thousands', 'Number', 'Plentiful', 'Couple', 
    'Numerous', 'Ample', 'Generous'], 

    //emotion is a feeling
    'emotion': ['Frustration', 'Jealousy', 'Inspiration', 'Boredom', 'Excitement', 'Regret', 'Joy', 'Anger', 'Sympathy', 'Guilt', 'Hope', 'Fear', 'Curiosity', 
    'Surprise', 'Anxiety', 'Love', 'Relief', 'Loneliness', 'Awe', 'Desire', 'Enthusiasm', 'Disgust', 'Contentment', 'Gratitude', 'Serenity', 'Embarrassment', 'Happiness', 
    'Sadness', 'Pride', 'Confusion'],

    //art movement is a style of art
    'art style': ['Neo-Dada', 'Kinetic Art', 'Realism', 'Video Art', 'Cubism', 'Arte Povera', 'Abstract Expressionism', 'Surrealism', 'Constructivism', 
    'Performance Art', 'Post-Impressionism', 'Minimalism', 'Conceptual Art', 'Neoclassicism', 'Fauvism', 'Impressionism', 'Op Art', 'Romanticism', 'Harlem Renaissance', 
    'Suprematism', 'Land Art', 'Photorealism', 'Art Nouveau', 'Symbolism', 'Street Art', 'Fluxus', 'Dadaism', 'Pop Art', 'Naïve Art', 'Art Deco', 'Orphism', 'Post-Modernism', 
    'Primitivism', 'Neo-Expressionism', 'Realism', 'Neo-Impressionism', 'Baroque', 'Renaissance', 'Modernism', 'Abstract', 'Expressionism', 'De Stijl', 'Pointillism', 'Bauhaus', 
    'Futurism'],

    //artist is a person who creates art
    'artist': ['Kandinsky', 'Magritte', 'O\'Keeffe', 'Hockney', 'Frida Kahlo', 'Velázquez', 'Monet', 'Da Vinci', 'Caravaggio', 'Botticelli', 'Hokusai', 'Michelangelo', 
    'Rothko', 'Pollock', 'Klimt', 'Picasso', 'Banksy', 'Warhol', 'Goya', 'Matisse', 'Cézanne', 'Haring', 'Vermeer', 'Dali', 'Seurat', 'Turner', 'Rembrandt', 'Van Gogh', 
    'Escher', 'Renoir', ], 

    //decade is a period of ten years
    'decade': ['1150s', '1330s - 1220s BC', '2000s', '1190s', '410s BC', '1350s', '3300s - 3200s BC', '500s AD', '1800s', '1530s', '1990s', '20s BC - 10s BC', '1970s', 
    '1960s', '1980s', '800s AD', '1920s', '200s BC', '1500s', '1930s', '1600s', '1850s', '1950s', '1940s', '1870', '1400s', '2010s', '2500s BC', '1900s', '1770s'],

    // artifact is an object made by a human being, typically an item of cultural or historical interest
    'artifact': ['Artifact', 'Pharaonic artifact', 'Ancient goblet', 'Roman artifact', 'Sumerian artifact', 'Egyptian artifact', 'Ancient helm', 'Ancient statuette', 
    'Historic manuscript', 'Norse artifact', 'Ancient seal', 'Greek artifact', 'Medieval artifact', 'Ancient vase', 'Ancient weapon', 'Prehistoric artifact', 'Archaeological artifact', 
    'Ancient hieroglyph', 'Ancient pottery', 'Ancient text', 'Ancient inscription', 'Celtic artifact', 'Prehistoric tool', 'Ancient jewelry', 'Aztec artifact', 'Ancient scroll case', 
    'Prehistoric fossil', 'Cursed artifact', 'Ancient coin', 'Ancient tablet', 'Babylonian artifact'],

    //idea is a thought or suggestion as to a possible course of action
    'idea': ['Stewardship', 'Opportunity', 'Adaptability', 'Responsibility', 'Revolution', 'Mindset', 'Synergy', 'Integrity', 'Excellence', 'Gratitude', 'Ambition', 'Sustainability', 
    'Optimism', 'Progress', 'Diversity', 'Exploration', 'Renewal', 'Transparency', 'Initiative', 'Vitality', 'Evolution', 'Positivity', 'Enlightenment', 'Authenticity', 'Vision', 'Justice', 
    'Mindfulness', 'Inclusivity', 'Resilience', 'Cooperation'],

    //historical event is a significant event in history
    'historical event': ['The Live Aid Concerts for Famine Relief in Ethiopia', 'The Launch of Voyager 1 and its Golden Record into Space', 'The Discovery of America', 
    'The First Walk on the Moon during the Apollo 11 Mission', 'The Fall of the Berlin Wall', 'The Successful Climb of Mount Everest by Sir Edmund Hillary and Tenzing Norgay', 
    'The American Civil War', 'The French Revolution', 'The First Flight by the Wright Brothers', 'The Signing of the Armistice ending World War I', 'The Russian Revolution', 
    'The Renaissance', 'The Invention of the Printing Press', 'The Black Death', 'The Crusades', 'World War II', 'The Building of the Great Wall of China', 'The Signing of the Magna Carta', 
    'The Publication of the First Comic Book', 'The Fall of the Roman Empire', 'The Planting of the "Peace Tree" by John Lennon and Yoko Ono', 'The Battle of Waterloo', 'The Boston Tea Party', 
    'The Signing of the Declaration of Independence', 'The Unveiling of the Rainbow Flag at the Gay Freedom Day Parade in 1978', 'The Release of the First Animated Feature Film (Snow White and the Seven Dwarfs)', 
    'The Industrial Revolution', 'The Moon Landing', 'The Coronation of Queen Elizabeth II', 'The First Hot Air Balloon Flight by the Montgolfier Brothers'],

    //historical figure is a famous person in history
    'historical figure': ['Marco Polo', 'Jane Austen', 'Charles Darwin', 'Beethoven', 'Martin Luther King Jr.', 'Rosa Parks', 'Nelson Mandela', 'Isaac Newton', 'William Shakespeare', 
    'Genghis Khan', 'Socrates', 'Abraham Lincoln', 'Confucius', 'Julius Caesar', 'Steven Hawking', 'Albert Einstein', 'Galileo Galilei', 'Leonardo da Vinci', 'Thomas Edison', 'Alexander the Great', 
    'Florence Nightingale', 'Pablo Picasso', 'George Washington', 'Napoleon Bonaparte', 'Mother Teresa', 'Cleopatra', 'Winston Churchill', 'Mahatma Gandhi', 'Vincent van Gogh', 'Marie Curie'],

    //historical period is a period of time in history
    'historical period': ['Renaissance Italy', 'Ming Dynasty', 'Ancient Greece', 'Ancient Maya', 'the 80s', 'Jazz Age', 'Medieval period', 'Victorian era', 'Byzantine Empire', 'Edo period (Japan)', 
    'Wild West', 'Ancient Egypt', 'Roaring Twenties', 'Ancient Rome', 'Art Deco period', 'Renaissance', 'Baroque era', 'Prehistoric era', 'Spanish Inquisition', 'Art Nouveau period', 'Edwardian era', 
    'American Revolution', 'Middle Ages', 'Ancient China', 'World War II era', 'Ancient Persia', 'Age of Enlightenment', 'Industrial Revolution', 'Golden Age of Piracy', 'Viking Age'],

    //environment is the surroundings or conditions in which a person, animal, or plant lives or operates
    'environment': ['Prairie', 'Moorland', 'Suburbs', 'Marsh', 'Mountain', 'Meadow', 'Ocean', 'Desert', 'Glacier', 'Swamp', 'Countryside', 'Wetland', 'Island', 'Cave', 'Jungle', 'Rainforest', 
    'Lake', 'City', 'Mangrove', 'River', 'Savannah', 'Volcano', 'Beach', 'Forest', 'Oasis', 'Arctic', 'Tundra', 'Grassland', 'Waterfall', 'Coral Reef'],

    //cartoon character is a person depicted in an animated cartoon
    'cartoon character': ['Aladdin', 'Ariel (The Little Mermaid)', 'Bart Simpson', 'Belle (Beauty and the Beast)', 'Bugs Bunny', 'Cinderella', 'Daffy Duck', 'Donald Duck', 'Fred Flintstone', 
    'Goofy', 'Homer Simpson', 'Jerry (from Tom and Jerry)', 'Lisa Simpson', 'Maggie Simpson', 'Marge Simpson', 'Mickey Mouse', 'Olive Oyl', 'Patrick Star', 'Pluto', 'Popeye', 'Porky Pig', 
    'Road Runner', 'Scooby-Doo', 'Shaggy Rogers', 'Simba (The Lion King)', 'Snow White', 'SpongeBob SquarePants', 'Tom (from Tom and Jerry)', 'Wile E. Coyote', 'Wilma Flintstone'],

    //character is a person in a novel, play, or movie
    'character': ['Psychic', 'Astronaut', 'Robotics engineer', 'Bard', 'Superhero', 'Shaman', 'Villain', 'Mythological creature', 'Space explorer', 'Princess', 'Mermaid', 'Witch', 'Cyborg', 
    'Time traveler', 'Pirate captain', 'Alien zookeeper', 'Sorcerer', 'Ghost', 'Wizard', 'Mad scientist', 'Detective', 'Fairy', 'Spy', 'Werewolf', 'Mythical beast', 'Steampunk inventor', 
    'Vampire', 'Robot', 'Ninja', 'Monster hunter'],

    //colors
    'color': ['Yellow + Green + Brown', 'White', 'Brown', 'Yellow', 'Blue + Gray + White', 'Red + Yellow + Black', 'Blue + Green + Gray', 'Blue', 'Red', 'Red + Green + White', 'Gray', 
    'Blue + White + Gray', 'Green + Gray + White', 'Green + Orange + Brown', 'Green', 'Black', 'Purple', 'Blue + Yellow + Green', 'Red + Orange + Yellow', 'Pink', 'Red + Blue + Yellow', 
    'Purple + Pink + White', 'Orange', 'Orange + Brown + Black', 'Yellow + Pink + Gray', 'Red + Purple + Pink', 'Blue + Yellow + Gray', 'Blue + Green + Purple', 'Purple + Pink + Gray', 
    'Red + Black + White'], 




};

window.myApp = window.myApp || {}; // Keep existing myApp object, or create a new one if it doesn't exist
window.myApp.definitions = definitions; // Append definitions to myApp object