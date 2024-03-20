
const images = [
  {
    src: 'https://images.unsplash.com/photo-1506104489822-562ca25152fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 1 description',
      hdSrc: 'https://images.unsplash.com/photo-1506104489822-562ca25152fe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Moraine Lake is, understandably, one of the most photographed locations in all of Canada. In this one visit alone I took 137 photos! I couldn’t help myself- the iridescent blue-green colour of the lake was captivating. Moraine Lake’s distinct colour is caused by the refraction of light coming off the rock flour deposited in the lake. Being glacially fed, Moraine Lake is at its bluest in June and July when the lake has reached its crest after the first heavy meltwater of the year.'
  },
 
    {
      src: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 2 description',
      hdSrc: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'The Ancient Bristlecone Pine Forest, located in the United States, is renowned for its extraordinary ancient trees, particularly the Bristlecone Pines (Pinus longaeva) which are some of the oldest living organisms on Earth. Situated within the White Mountains of California, this forest is characterized by its rugged terrain, high elevation, and harsh climatic conditions. The Bristlecone Pines, found in this forest, have adapted to survive in the harsh alpine environment, where strong winds, rocky soil, and extreme temperatures are common.'
    },
    {
      src: 'https://images.unsplash.com/photo-1501696088263-5696c92364bf?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 3 description',
      hdSrc: 'https://images.unsplash.com/photo-1501696088263-5696c92364bf?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Landmannalaugar, located in Iceland, is a breathtaking natural paradise renowned for its stunning and diverse landscapes. Nestled in the highlands of Icelands Fjallabak Nature Reserve, Landmannalaugar is characterized by its colorful rhyolite mountains, vast lava fields, bubbling hot springs, and rugged hiking trails. One of the most striking features of Landmannalaugar is its colorful mountains, which display a kaleidoscope of hues ranging from vibrant reds, oranges, yellows, and greens.'
    },
    {
      src: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 4 description',
      hdSrc: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Vestrahorn Mountain, located on the southeast coast of Iceland near the town of Höfn, is a dramatic and iconic landmark known for its stunning beauty and unique geological features. Rising dramatically from the black sand beaches of Stokksnes Peninsula, Vestrahorn is characterized by its jagged peaks, steep cliffs, and dramatic coastal scenery. The mountain is composed of several ridges and peaks, with the most prominent being Brunnhorn, which reaches a height of 454 meters (1,490 feet) above sea level.'
    },
    {
      src: 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 5 description',
      hdSrc: 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Natures Valley, located along the Garden Route in the Western Cape province of South Africa, is a pristine and picturesque coastal paradise renowned for its natural beauty and diverse ecosystems. Nestled between the Tsitsikamma Mountains and the Indian Ocean, Natures Valley boasts breathtaking scenery, golden beaches, lush forests, and abundant wildlife, making it a haven for outdoor enthusiasts and nature lovers alike. One of the highlights of Natures Valley is its expansive sandy beach, which stretches along the coastline for several kilometers.'
    },
    {
      src: 'https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 6 description',
      hdSrc: 'https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'The "Doorway to Heaven" is a natural rock formation located along the iconic Big Sur coastline in California. It is known for its stunning and dramatic appearance, resembling a doorway or archway carved into the rugged cliffs overlooking the Pacific Ocean. The Doorway to Heaven has become a popular photography spot and a symbol of the breathtaking beauty of the Big Sur region. erched high above the crashing waves and rocky shoreline, the Doorway to Heaven offers panoramic views of the Pacific Ocean, with its azure waters stretching to the horizon.'
    },
    {
      src: 'https://images.unsplash.com/photo-1513140491664-d3c3efbb4783?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 7 description',
      hdSrc: 'https://images.unsplash.com/photo-1513140491664-d3c3efbb4783?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'San Francisco is renowned for its distinctive skyline, characterized by the towering skyscrapers of the Financial District juxtaposed with the colorful Victorian houses of neighborhoods like Haight-Ashbury and Alamo Square. The citys most recognizable landmark, the Golden Gate Bridge, spans the entrance to San Francisco Bay, offering breathtaking views of the Pacific Ocean and the city skyline. The city is also famous for its steep hills, cable cars, and historic neighborhoods.'
    },
    {
      src: 'https://images.unsplash.com/photo-1527882179172-5111cd0192e4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 8 description',
      hdSrc: 'https://images.unsplash.com/photo-1527882179172-5111cd0192e4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Via Dil Lag, located in Flims, Switzerland, is a picturesque street nestled in the heart of this charming Swiss town. Flims, situated in the eastern part of Switzerland, is renowned for its stunning natural beauty, alpine landscapes, and outdoor recreational opportunities. The address "Via Dil Lag, 7018 Flims" suggests that this street is part of the urban fabric of Flims, a municipality in the district of Imboden in the canton of Graubünden. Flims is a popular destination for tourists and outdoor enthusiasts throughout the year, offering activities such as hiking, skiing, snowboarding, and mountain biking.'
    },
    {
      src: 'https://images.unsplash.com/photo-1488543882437-49f6f714ad05?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 9 description',
      hdSrc: 'https://images.unsplash.com/photo-1488543882437-49f6f714ad05?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Mühlebach is a small village located in the district of Goms in the canton of Valais (VS), Switzerland. Situated in the scenic Swiss Alps, Mühlebach is renowned for its traditional Swiss charm, stunning mountain vistas, and rich cultural heritage. As with many villages in Switzerland, Mühlebach features traditional wooden chalets adorned with colorful flowers, picturesque streets, and a tranquil atmosphere. The village is surrounded by breathtaking natural beauty, including towering peaks, lush green meadows, and pristine alpine streams.'
    },
    {
      src: 'https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 10 description',
      hdSrc: 'https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'The canyon is carved into the rugged landscape by the powerful forces of glacial meltwater, creating towering cliffs that rise dramatically on either side. The canyon walls are adorned with vibrant green moss and ferns, adding to the mystical and enchanting atmosphere of the surroundings. One of the highlights of Stakkholtsgjá is the hidden waterfall nestled within its depths. Visitors can hike along the canyon floor, surrounded by towering rock walls, until they reach the majestic waterfall cascading down from above. '
    },
    {
      src: 'https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 11 description',
      hdSrc: 'https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Neuschwanstein Castle, located in Schwangau, Germany, is a magnificent 19th-century Romanesque Revival palace nestled amidst the breathtaking landscapes of Bavaria. Often hailed as the epitome of fairy-tale castles, Neuschwanstein is renowned worldwide for its enchanting beauty, romantic architecture, and rich history. One of the most iconic features of Neuschwanstein Castle is its soaring main tower, which rises majestically above the surrounding landscape, providing a striking silhouette against the sky. '
    },
    {
      src: 'https://images.unsplash.com/photo-1607101435453-e6a1327f1c73?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 12 description',
      hdSrc: 'https://images.unsplash.com/photo-1607101435453-e6a1327f1c73?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Death Valley National Park, located in California, United States, is renowned for its stark beauty, extreme temperatures, and diverse landscapes. Spanning over 3.4 million acres, it is the largest national park in the contiguous United States and one of the hottest and driest places on earth. The parks name, "Death Valley, reflects its harsh and unforgiving environment, characterized by arid desert plains, towering mountain ranges, and vast salt flats. Despite its forbidding name, Death Valley is home to a surprising array of life, adapted to survive in the arid conditions.'
    },
    {
      src: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 13 description',
      hdSrc: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Drôme is a department located in the Auvergne-Rhône-Alpes region in southeastern France. Known for its stunning natural beauty, diverse landscapes, and rich cultural heritage, Drôme offers visitors a wide range of attractions and activities to explore. One of the highlights of Drôme is its picturesque countryside, characterized by rolling hills, lush vineyards, and charming medieval villages. The region is renowned for its scenic drives, with winding roads that meander through picturesque landscapes dotted with olive groves, lavender fields, and sunflower fields.'
    },
    {
      src: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 14 description',
      hdSrc: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Kalapana is a small coastal town located on the southeastern coast of the Big Island of Hawaii in the United States. It is renowned for its stunning natural beauty, rich cultural heritage, and unique geological features, including volcanic landscapes and black sand beaches. One of the most iconic features of Kalapana is its proximity to Kilauea, one of the worlds most active volcanoes. Visitors to the area can witness the dramatic volcanic activity, including lava flows and steam vents, which have shaped the landscape over centuries.'
    },
    {
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 15 description',
      hdSrc: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Skye, also known as the Isle of Skye, is the largest island in the Inner Hebrides archipelago off the northwest coast of Scotland. It is renowned for its rugged landscapes, picturesque coastline, and rich Gaelic heritage, making it a popular destination for outdoor enthusiasts, nature lovers, and history buffs alike. One of the most iconic features of Skye is its dramatic mountain scenery, including the Cuillin mountain range. The Cuillin mountains are known for their steep, jagged peaks, which offer challenging hiking and climbing opportunities for experienced mountaineers.'
    },
    {
      src: 'https://images.unsplash.com/photo-1497968021412-a86898ccbc4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 16 description',
      hdSrc: 'https://images.unsplash.com/photo-1497968021412-a86898ccbc4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Utö is a picturesque island located in the Stockholm archipelago of Sweden. With its stunning natural beauty, rich history, and vibrant local community, Utö is a popular destination for tourists and outdoor enthusiasts alike. One of the defining features of Utö is its rugged coastline, characterized by rocky cliffs, hidden coves, and pristine sandy beaches. Visitors can explore the islands scenic shoreline by hiking along coastal trails, swimming in the crystal-clear waters, or simply relaxing on the sandy shores while enjoying views of the surrounding archipelago.'
    },
    
  ];

// Define the gallery container
const galleryContainer = document.querySelector('.gallery-container');

// Add event listener to the gallery container
galleryContainer.addEventListener('click', handleImageClick);

// Function to handle image click
function handleImageClick(e) {
  if (e.target.tagName === 'IMG') {
    // Create modal and append it to the body
    const modal = createModal(e.target);
    document.body.appendChild(modal);
    modal.style.display = 'block';
  }
}

// Function to create modal
function createModal(image) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Create image element
  const img = document.createElement('img');
  img.src = image.dataset.hdSrc;
  img.alt = image.alt;

  // Create caption element
  const caption = document.createElement('p');
  caption.textContent = image.dataset.caption;

  // Append image and caption to modal
  modal.appendChild(img);
  modal.appendChild(caption);

  // Add event listener to close modal
  modal.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
      modal.style.display = 'none';
    }
  });

  return modal;
}

// Create the gallery dynamically
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  img.dataset.hdSrc = image.hdSrc;
  img.dataset.caption = image.caption;

  // Append image to gallery container
  galleryContainer.appendChild(img);
});
