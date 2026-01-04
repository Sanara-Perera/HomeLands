/**
 * properties.js
 * Mock property data for the PrimeHomes application
 * Contains 7 sample properties with complete information:
 * - Basic details (type, price, bedrooms, location)
 * - Descriptions (short and long)
 * - Image galleries (8 images per property)
 * - Floor plans
 * 
 * Security Note: In production, this data would come from a secure backend API
 */


export const propertiesData = [
  {
    id: 1,
    type: 'house',
    price: 85000000,  // LKR 85 million
    bedrooms: 3,
    dateAdded: '2024-11-15',
    postcode: '11222',
    location: 'Colombo 7, Sri Lanka',
    shortDesc: 'Charming 3-bed colonial house with garden',
    longDesc: 'This beautiful colonial-style house features three spacious bedrooms, a modern kitchen, and a lovely rear garden. Perfect for families looking for character and space in a prime location. The property boasts original features including high ceilings, period architecture, and large windows. The modern kitchen is fully fitted with integrated appliances. Outside, the landscaped rear garden provides a tranquil space for relaxation and entertaining.',
    images: [
      "/PrimeHomes/images/image1.jpg",
      "/PrimeHomes/images/image2.jpg",
      "/PrimeHomes/images/image3.jpg",
      "/PrimeHomes/images/image4.jpg",
      "/PrimeHomes/images/image5.jpg",
      "/PrimeHomes/images/image6.jpg",
      "/PrimeHomes/images/image7.jpg",
      "/PrimeHomes/images/image8.jpg"
    ],
    floorPlan: "/PrimeHomes/images/image9.jpg"
  },
  {
    id: 2,
    type: 'flat',
    price: 55000000, // LKR 55 million
    bedrooms: 2,
    dateAdded: '2024-12-01',
    postcode: '00300',
    location: 'Kollupitiya, Colombo',
    shortDesc: 'Modern 2-bed apartment in vibrant Kollupitiya',
    longDesc: 'Contemporary two-bedroom flat in the heart of Kollupitiya. Features open-plan living, modern appliances, and excellent transport links. Ideal for young professionals seeking urban living at its finest. The apartment includes a spacious living area with floor-to-ceiling windows, a sleek kitchen with granite countertops, and two well-proportioned bedrooms. Located moments from shopping centers and main roads.',
    images: [
      "/PrimeHomes/images/image10.jpg",
      "/PrimeHomes/images/image11.jpg",
      "/PrimeHomes/images/image12.jpg",
      "/PrimeHomes/images/image13.jpg",
      "/PrimeHomes/images/image14.jpg",
      "/PrimeHomes/images/image15.jpg",
      "/PrimeHomes/images/image16.jpg",
    ],
    floorPlan: "/PrimeHomes/images/image17.jpg"
  },
  {
    id: 3,
    type: 'house',
    price: 145000000,  // LKR 145 million
    bedrooms: 5,
    dateAdded: '2024-10-20',
    postcode: '10120',
    location: 'Rajagiriya, Sri Lanka',
    shortDesc: 'Stunning 5-bed family home with parking',
    longDesc: 'Exceptional five-bedroom house offering spacious accommodation throughout. Features include a large kitchen/diner, separate living room, master suite, landscaped garden, and covered parking for two cars. The property has been extended to provide a magnificent open-plan kitchen/dining room with sliding doors leading to the garden. Upstairs, the master bedroom boasts an en-suite bathroom and built-in wardrobes. The remaining four bedrooms are all doubles.',
    images: [
      "/PrimeHomes/images/image18.jpg",
      "/PrimeHomes/images/image19.jpg",
      "/PrimeHomes/images/image20.jpg",
      "/PrimeHomes/images/image21.jpg",
      "/PrimeHomes/images/image22.jpg",
      "/PrimeHomes/images/image23.jpg",
      "/PrimeHomes/images/image24.jpg",
      "/PrimeHomes/images/image25.jpg"
    ],
    floorPlan: "/PrimeHomes/images/image26.jpg"
  },
  {
    id: 4,
    type: 'flat',
    price: 38000000,  // LKR 38 million
    bedrooms: 1,
    dateAdded: '2024-12-10',
    postcode: '00800',
    location: 'Borella, Colombo',
    shortDesc: 'Compact 1-bed flat near city centre',
    longDesc: 'Perfect starter home or investment opportunity. This well-maintained one-bedroom flat is located moments from Borella junction. Features modern bathroom, fitted kitchen, and is offered with clear title. The property comprises an entrance hall, open-plan living room/kitchen, one bedroom with built-in storage, and a contemporary bathroom. Ideally situated for access to Colombo Fort and city center.',
    images: [
      "/PrimeHomes/images/image27.jpg",
      "/PrimeHomes/images/image28.jpg",
      "/PrimeHomes/images/image29.jpg",
      "/PrimeHomes/images/image30.jpg",
      "/PrimeHomes/images/image31.jpg",
      "/PrimeHomes/images/image32.jpg",
      "/PrimeHomes/images/image33.jpg",
      "/PrimeHomes/images/image34.jpg"
    ],
    floorPlan: `${process.env.PUBLIC_URL}/images/image35.jpg`
  },
  {
    id: 5,
    type: 'house',
    price: 110000000,  // LKR 110 million
    bedrooms: 4,
    dateAdded: '2024-11-28',
    postcode: '10230',
    location: 'Nugegoda, Sri Lanka',
    shortDesc: 'Elegant 4-bed house with parking',
    longDesc: 'Beautifully presented four-bedroom house in a sought-after residential area. Accommodation comprises entrance hall, lounge, dining room, kitchen, four bedrooms, family bathroom, rear garden, and parking space. The property has been tastefully decorated throughout and features a recently refitted kitchen with granite worktops. The principal bedroom benefits from fitted wardrobes. The rear garden is mainly laid to lawn with a covered patio area.',
    images: [
      "/PrimeHomes/images/image36.jpg",
      "/PrimeHomes/images/image37.jpg",
      "/PrimeHomes/images/image38.jpg",
      "/PrimeHomes/images/image39.jpg",
      "/PrimeHomes/images/image40.jpg",
      "/PrimeHomes/images/image41.jpg",
      "/PrimeHomes/images/image42.jpg"
    ],
    floorPlan: "/PrimeHomes/images/image43.jpg"
  },
  {
    id: 6,
    type: 'flat',
    price: 72000000,  // LKR 72 million
    bedrooms: 3,
    dateAdded: '2024-11-05',
    postcode: '00400',
    location: 'Bambalapitiya, Colombo',
    shortDesc: 'Spacious 3-bed flat with balcony',
    longDesc: 'Impressive three-bedroom apartment situated on the fourth floor of a modern development. Benefits from a private balcony, communal gardens, security service, and covered parking. The accommodation includes a large reception room with access to the balcony, a modern fitted kitchen, master bedroom with en-suite shower room, two further bedrooms, and a family bathroom. The development offers 24-hour security, gymnasium facilities, and beautifully maintained communal areas.',
    images: [
      "/PrimeHomes/images/image44.jpg",
      "/PrimeHomes/images/image45.jpg",
      "/PrimeHomes/images/image46.jpg",
      "/PrimeHomes/images/image47.jpg",
      "/PrimeHomes/images/image48.jpg",
      "/PrimeHomes/images/image49.jpg",
      "/PrimeHomes/images/image50.jpg"
    ],
    floorPlan: "/PrimeHomes/images/image51.jpg"
  },
  {
    id: 7,
    type: 'house',
    price: 250000000,  // LKR 250 million
    bedrooms: 6,
    dateAdded: '2024-09-15',
    postcode: '11222',
    location: 'Cinnamon Gardens, Colombo',
    shortDesc: 'Luxurious 6-bed detached executive home',
    longDesc: 'Outstanding six-bedroom detached residence set in approximately 20 perches. This executive home offers exceptional living space including two reception rooms, study, luxury kitchen, master bedroom with en-suite and dressing room, five further bedrooms, family bathroom, double garage, and beautifully landscaped gardens. The property features air conditioning throughout, a home theater room, and wine storage. The kitchen is fitted with high-end appliances and includes a breakfast area. The landscaped gardens feature mature trees, a large patio area, and a gazebo.',
    images: [
      "/PrimeHomes/images/image52.jpg",
      "/PrimeHomes/images/image53.jpg",
      "/PrimeHomes/images/image54.jpg",
      "/PrimeHomes/images/image55.jpg",
      "/PrimeHomes/images/image56.jpg",
      "/PrimeHomes/images/image57.jpg",
      "/PrimeHomes/images/image58.jpg"
    ],
    floorPlan: "/PrimeHomes/images/image59.jpg"
  }
];