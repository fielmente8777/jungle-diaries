export type GalleryCategory = "all" | "amaltas" | "destinn";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "amaltas" | "destinn";
  categoryLabel: string;
  property: string;
  tag: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Destinn
  {
    id: "destinn-pool-sunset",
    src: "/destinn/banner2.webp",
    alt: "Destinn Dhela Retreat rooftop infinity pool and sunset over the forest",
    title: "Rooftop Infinity Pool at Sunset",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Pool & Sunset",
  },
  // 2. Amaltas
  {
    id: "amaltas-dusk-pool",
    src: "/amaltas/dining-image.jpg",
    alt: "Amaltas Villa illuminated pool terrace and verandas at twilight",
    title: "Pool Terrace & Verandas at Dusk",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Pool & Terrace",
  },
  // 3. Destinn
  {
    id: "destinn-exterior-day",
    src: "/destinn/exterior.webp",
    alt: "Destinn Dhela Retreat building and surrounding landscapes",
    title: "Retreat Facade & Lush Grounds",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Exterior",
  },
  // 4. Amaltas
  {
    id: "amaltas-tiger-safari",
    src: "/amaltas/tiger-safari.jpg",
    alt: "Bengal tiger crossing safari track in front of gypsies in Corbett",
    title: "Bengal Tiger on Corbett Safari Track",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Wildlife Safari",
  },
  // 5. Amaltas
  {
    id: "amaltas-villa-grounds",
    src: "/amaltas/image1.jpg",
    alt: "Amaltas Villa private lawn, manicured garden and outdoor seating",
    title: "Villa Lawns & Forest Serenity",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Lawns & Garden",
  },
  // 5. Destinn
  {
    id: "destinn-room-1",
    src: "/destinn/room1.webp",
    alt: "Spacious guest room with warm wood textures and private balcony doors",
    title: "Forest View Deluxe Bedroom",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Rooms",
  },
  // 6. Amaltas
  {
    id: "amaltas-bijrani-room",
    src: "/amaltas/b-room1.jpg",
    alt: "Bijrani Room spacious interior with king bed and balcony access",
    title: "Bijrani Room — Forest Elegance",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 7. Destinn
  {
    id: "destinn-pool-view",
    src: "/destinn/pool.webp",
    alt: "Infinity swimming pool overlooking the Corbett mountain range",
    title: "Rooftop Pool & Mountain Views",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Pool",
  },
  // 8. Amaltas
  {
    id: "amaltas-poolside-sun",
    src: "/amaltas/image2.jpg",
    alt: "Sunlit swimming pool surrounded by nature at Amaltas Villa",
    title: "Serene Private Swimming Pool",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Pool",
  },
  // 9. Destinn
  {
    id: "destinn-restaurant",
    src: "/destinn/restaurant.webp",
    alt: "Sir Jim's Dining restaurant interior and seating arrangements",
    title: "Sir Jim's Dining Experience",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Dining",
  },
  // 10. Amaltas
  // {
  //   id: "amaltas-dining-room",
  //   src: "/amaltas/dining.png",
  //   alt: "Spacious long timber dining room set for twelve guests",
  //   title: "Dining Room for Twelve",
  //   category: "amaltas",
  //   categoryLabel: "Amaltas Villa",
  //   property: "Amaltas Villa",
  //   tag: "Dining",
  // },
  // // 11. Destinn
  // {
  //   id: "destinn-building-twilight",
  //   src: "/destinn/banner5.webp",
  //   alt: "Destinn Dhela Retreat architectural facade illuminated at twilight",
  //   title: "Twilight Architecture",
  //   category: "destinn",
  //   categoryLabel: "Destinn Dhela Retreat",
  //   property: "Destinn Dhela Retreat",
  //   tag: "Exterior",
  // },
  // 12. Amaltas
  {
    id: "amaltas-villa-facade",
    src: "/amaltas/image3.jpg",
    alt: "Architectural facade of Amaltas Villa set amidst mango orchards",
    title: "Boutique Stone & Timber Villa",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Architecture",
  },
  // 13. Destinn
  {
    id: "destinn-room-2",
    src: "/destinn/room2.webp",
    alt: "Comfortable and serene room interior at Destinn Dhela",
    title: "Elegantly Crafted Bedroom",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Rooms",
  },
  // 14. Amaltas
  {
    id: "amaltas-durgadevi-room",
    src: "/amaltas/du-room1.jpg",
    alt: "Durgadevi Room with large picture window looking out to the forest",
    title: "Durgadevi Room — Jungle Vista",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 15. Destinn
  {
    id: "destinn-garden-walk",
    src: "/destinn/garden.webp",
    alt: "Lush garden pathway with tropical trees and manicured lawn",
    title: "Verdant Garden Promenade",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Gardens",
  },
  // 16. Amaltas
  {
    id: "amaltas-garden-sanctuary",
    src: "/amaltas/image4.jpg",
    alt: "Quiet open spaces and forest breeze on the grounds of Amaltas Villa",
    title: "Peaceful Forest Sanctuary",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Outdoors",
  },
  // 17. Destinn
  {
    id: "destinn-rooftop-grill",
    src: "/destinn/rooftop.webp",
    alt: "Jim's Sky Grill and open terrace with expansive skies",
    title: "Jim's Sky Grill & Rooftop Lounge",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Rooftop",
  },
  // 18. Amaltas
  // {
  //   id: "amaltas-poolside-twilight",
  //   src: "/amaltas/couple-escape.png",
  //   alt: "Warm candlelit evenings and poolside ambience",
  //   title: "Romantic Evenings by the Water",
  //   category: "amaltas",
  //   categoryLabel: "Amaltas Villa",
  //   property: "Amaltas Villa",
  //   tag: "Experiences",
  // },
  // 19. Destinn
  {
    id: "destinn-interior-lounge",
    src: "/destinn/interior.webp",
    alt: "Lounge and reception sitting area with contemporary decor",
    title: "Contemporary Lounge & Living",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Interiors",
  },
  // 20. Amaltas
  // {
  //   id: "amaltas-nature-walk",
  //   src: "/amaltas/experience1.png",
  //   alt: "Naturalist guided morning birdwatching walk in Corbett",
  //   title: "Naturalist-Guided Forest Walks",
  //   category: "amaltas",
  //   categoryLabel: "Amaltas Villa",
  //   property: "Amaltas Villa",
  //   tag: "Experiences",
  // },
  // 21. Destinn
  {
    id: "destinn-reception",
    src: "/destinn/reception.webp",
    alt: "Warm welcoming reception desk and hospitality foyer",
    title: "Welcome Lobby & Hospitality",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Interiors",
  },
  // 22. Amaltas
  {
    id: "amaltas-jhirna-room",
    src: "/amaltas/j-room1.jpeg",
    alt: "Jhirna Room with warm ambient lighting and quiet bedroom design",
    title: "Jhirna Room — Intimate Comfort",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 23. Destinn
  {
    id: "destinn-food-spread",
    src: "/destinn/food.webp",
    alt: "Authentic gourmet dining served fresh at Destinn Dhela",
    title: "Culinary Highlights & Delicacies",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Dining",
  },
  // 24. Amaltas
  // {
  //   id: "amaltas-alfresco-dining",
  //   src: "/amaltas/experience2.png",
  //   alt: "Outdoor tea and refreshments in the orchard garden",
  //   title: "Alfresco Garden Breakfast & High Tea",
  //   category: "amaltas",
  //   categoryLabel: "Amaltas Villa",
  //   property: "Amaltas Villa",
  //   tag: "Dining",
  // },
  // 25. Destinn
  {
    id: "destinn-corbett-view",
    src: "/destinn/view.webp",
    alt: "Picturesque view of Corbett forest from Destinn Dhela",
    title: "Vistas of the Corbett Canopy",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Vistas",
  },
  // 26. Amaltas
  // {
  //   id: "amaltas-bonfire",
  //   src: "/amaltas/experience3.png",
  //   alt: "Guests gathered around an open winter bonfire under starry skies",
  //   title: "Winter Bonfires under the Stars",
  //   category: "amaltas",
  //   categoryLabel: "Amaltas Villa",
  //   property: "Amaltas Villa",
  //   tag: "Experiences",
  // },
  // 27. Destinn
  {
    id: "destinn-bathroom",
    src: "/destinn/bathroom.webp",
    alt: "Modern ensuite bathroom with glass shower and luxury fittings",
    title: "Modern Ensuite Bathrooms",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Amenities",
  },
  // 28. Amaltas
  {
    id: "amaltas-sitabani-room",
    src: "/amaltas/s-room1.jpeg",
    alt: "Sitabani Room tailored for quiet couples retreat",
    title: "Sitabani Room — Quiet Solitude",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 29. Destinn
  {
    id: "destinn-sports",
    src: "/destinn/sports.webp",
    alt: "Recreational indoor activities and games room",
    title: "Indoor Recreation & Game Space",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Activities",
  },
  // 30. Amaltas
  // {
  //   id: "amaltas-stargazing",
  //   src: "/amaltas/experience4.png",
  //   alt: "Clear Corbett night skies ideal for celestial stargazing",
  //   title: "Stargazing from the Terrace",
  //   category: "amaltas",
  //   categoryLabel: "Amaltas Villa",
  //   property: "Amaltas Villa",
  //   tag: "Experiences",
  // },
  // 31. Destinn
  {
    id: "destinn-front-facade",
    src: "/destinn/banner1.webp",
    alt: "Sunlit view of Destinn Dhela Retreat facade and entrance",
    title: "Sunlit Courtyard & Arrival",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Exterior",
  },
  // 32. Amaltas
  {
    id: "amaltas-architectural-details",
    src: "/amaltas/gallery-s1.jpg",
    alt: "Handcrafted stone masonry and wooden finishes of Amaltas Villa",
    title: "Natural Materials & Craftsmanship",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Architecture",
  },
  // 33. Destinn
  {
    id: "destinn-courtyard",
    src: "/destinn/banner3.webp",
    alt: "Open terraces and green surroundings at the retreat",
    title: "Retreat Terrace & Open Greenery",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Exterior",
  },
  // 34. Amaltas
  {
    id: "amaltas-bijrani-lounge",
    src: "/amaltas/b-room2.jpg",
    alt: "Sitting nook and cozy wood furnishing inside Bijrani Room",
    title: "Bijrani Room Sitting Nook",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 35. Destinn
  {
    id: "destinn-dusk-facade",
    src: "/destinn/banner4.webp",
    alt: "Destinn Dhela illuminated against the evening sky",
    title: "Evening Lights & Tranquility",
    category: "destinn",
    categoryLabel: "Destinn Dhela Retreat",
    property: "Destinn Dhela Retreat",
    tag: "Exterior",
  },
  // 36. Amaltas
  {
    id: "amaltas-durgadevi-decor",
    src: "/amaltas/du-room2.jpg",
    alt: "Tasteful earthy interiors and plush linen in Durgadevi Room",
    title: "Durgadevi Room Interior Accents",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 37. Amaltas
  {
    id: "amaltas-jhirna-view",
    src: "/amaltas/j-room2.jpeg",
    alt: "Jhirna Room private balcony overlooking natural foliage",
    title: "Jhirna Room Private Outlook",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 38. Amaltas
  {
    id: "amaltas-sitabani-cozy",
    src: "/amaltas/s-room2.jpeg",
    alt: "Natural light and comfort inside Sitabani Room",
    title: "Sitabani Room Natural Light",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 39. Amaltas
  {
    id: "amaltas-bedroom-detail",
    src: "/amaltas/gallery-s3.jpg",
    alt: "Refined details and soft textures inside the villa bedrooms",
    title: "Unrushed Comfort & Soft Linens",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Rooms",
  },
  // 40. Amaltas
  {
    id: "amaltas-paved-patio",
    src: "/amaltas/gallery-s4.jpg",
    alt: "Sunny paved courtyard patio surrounded by flowering trees",
    title: "Courtyard Sun Patio",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Outdoors",
  },
  // 41. Amaltas
  {
    id: "amaltas-canopy-view",
    src: "/amaltas/gallery-s5.jpg",
    alt: "Unobstructed views of the Corbett forest canopy",
    title: "Corbett Forest Canopy Panorama",
    category: "amaltas",
    categoryLabel: "Amaltas Villa",
    property: "Amaltas Villa",
    tag: "Vistas",
  },
];
