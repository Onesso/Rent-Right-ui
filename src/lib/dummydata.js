// const listData = [

//   {
//     id: 1,
//     title: "A great Apartment Next to the Beach!",
//     images: [
//       "https://i.roamcdn.net/prop/brk/gallery-main-900w-watermark/a02c97e40c963a6b7b0fa6a15ab5ce6d/-/prod-property-core-backend-media-brk/7724075/7f28e6af-9c9a-4704-817b-926c3deb7977.jpg",
//     ],
//     bedroom: 2,
//     bathroom: 1,
//     price: 1000,
//     address: "456 Beach Road, Brighton",
//     latitude: 50.8205,
//     longitude: -0.1313,
//   },
//   {
//     id: 2,
//     title: "Luxury Villa with Sea View",
//     images: [
//       "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
//     ],
//     bedroom: 3,
//     bathroom: 2,
//     price: 2000,
//     address: "789 Ocean Drive, Bournemouth",
//     latitude: 50.7195,
//     longitude: -1.875,
//   },
//   {
//     id: 3,
//     title: "Cozy Cottage in the Mountains",
//     images: [
//       "https://images.pexels.com/photos/2802021/pexels-photo-2802021.jpeg",
//     ],
//     bedroom: 2,
//     bathroom: 1,
//     price: 800,
//     address: "123 Mountain Road, Snowdonia",
//     latitude: 52.938,
//     longitude: -3.88,
//   },
//   {
//     id: 4,
//     title: "Modern Studio in the City Center",
//     images: [
//       "https://images.pexels.com/photos/1661015/pexels-photo-1661015.jpeg",
//     ],
//     bedroom: 1,
//     bathroom: 1,
//     price: 1500,
//     address: "101 City Plaza, London",
//     latitude: 51.5074,
//     longitude: -0.1278,
//   },
//   {
//     id: 5,
//     title: "Spacious Family Home",
//     images: [
//       "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg",
//     ],
//     bedroom: 4,
//     bathroom: 3,
//     price: 2500,
//     address: "303 Family Lane, Manchester",
//     latitude: 53.4808,
//     longitude: -2.2426,
//   },
//   {
//     id: 6,
//     title: "Charming Apartment with Garden",
//     images: [
//       "https://images.pexels.com/photos/6788315/pexels-photo-6788315.jpeg",
//     ],
//     bedroom: 2,
//     bathroom: 1,
//     price: 1200,
//     address: "202 Green Street, Cambridge",
//     latitude: 52.2053,
//     longitude: 0.1218,
//   },
//   {
//     id: 7,
//     title: "Stylish Loft with Downtown Views",
//     images: [
//       "https://images.pexels.com/photos/1971786/pexels-photo-1971786.jpeg",
//     ],
//     bedroom: 1,
//     bathroom: 1,
//     price: 1700,
//     address: "404 Loft Avenue, Bristol",
//     latitude: 51.4545,
//     longitude: -2.5879,
//   },
//   {
//     id: 8,
//     title: "Beachfront Bungalow",
//     images: [
//       "https://images.pexels.com/photos/1695026/pexels-photo-1695026.jpeg",
//     ],
//     bedroom: 3,
//     bathroom: 2,
//     price: 2200,
//     address: "505 Beach Road, Blackpool",
//     latitude: 53.8175,
//     longitude: -3.0497,
//   },
//   {
//     id: 9,
//     title: "Elegant Apartment in Historic District",
//     images: [
//       "https://images.pexels.com/photos/1601135/pexels-photo-1601135.jpeg",
//     ],
//     bedroom: 2,
//     bathroom: 2,
//     price: 1900,
//     address: "606 Heritage Street, York",
//     latitude: 53.959,
//     longitude: -1.0815,
//   },
//   {
//     id: 10,
//     title: "Luxurious Penthouse with Rooftop",
//     images: [
//       "https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg",
//     ],
//     bedroom: 4,
//     bathroom: 3,
//     price: 3500,
//     address: "707 Skyline Drive, Liverpool",
//     latitude: 53.4084,
//     longitude: -2.9916,
//   },
//   {
//     id: 11,
//     title: "Quaint Studio Near University",
//     images: [
//       "https://images.pexels.com/photos/1931943/pexels-photo-1931943.jpeg",
//     ],
//     bedroom: 1,
//     bathroom: 1,
//     price: 900,
//     address: "808 Student Lane, Oxford",
//     latitude: 51.7548,
//     longitude: -1.254,
//   },
//   {
//     id: 12,
//     title: "Sunny Apartment with Balcony",
//     images: [
//       "https://images.pexels.com/photos/4204518/pexels-photo-4204518.jpeg",
//     ],
//     bedroom: 2,
//     bathroom: 1,
//     price: 1300,
//     address: "909 Sunshine Road, Brighton",
//     latitude: 50.8175,
//     longitude: -0.1332,
//   },
//   {
//     id: 13,
//     title: "Modern Family Home",
//     images: [
//       "https://images.pexels.com/photos/1197024/pexels-photo-1197024.jpeg",
//     ],
//     bedroom: 3,
//     bathroom: 2,
//     price: 2400,
//     address: "111 Modern Way, Sheffield",
//     latitude: 53.3811,
//     longitude: -1.4701,
//   },
//   {
//     id: 14,
//     title: "Chic Urban Apartment",
//     images: [
//       "https://images.pexels.com/photos/4200536/pexels-photo-4200536.jpeg",
//     ],
//     bedroom: 1,
//     bathroom: 1,
//     price: 1600,
//     address: "222 Urban Street, Edinburgh",
//     latitude: 55.9533,
//     longitude: -3.1883,
//   },
//   {
//     id: 15,
//     title: "Rural Retreat",
//     images: [
//       "https://images.pexels.com/photos/4616346/pexels-photo-4616346.jpeg",
//     ],
//     bedroom: 3,
//     bathroom: 2,
//     price: 1100,
//     address: "333 Country Road, Cotswolds",
//     latitude: 51.8359,
//     longitude: -1.859,
//   },
//   {
//     id: 16,
//     title: "Stylish Condo with Gym",
//     images: [
//       "https://images.pexels.com/photos/4171631/pexels-photo-4171631.jpeg",
//     ],
//     bedroom: 2,
//     bathroom: 2,
//     price: 1800,
//     address: "444 Fitness Avenue, London",
//     latitude: 51.5074,
//     longitude: -0.1278,
//   },
//   {
//     id: 17,
//     title: "Seaside Cottage",
//     images: [
//       "https://images.pexels.com/photos/1748888/pexels-photo-1748888.jpeg",
//     ],
//     bedroom: 2,
//     bathroom: 1,
//     price: 950,
//     address: "555 Coastal Lane, Cornwall",
//     latitude: 50.418,
//     longitude: -4.1427,
//   },
//   {
//     id: 18,
//     title: "Downtown Loft",
//     images: [
//       "https://images.pexels.com/photos/1868523/pexels-photo-1868523.jpeg",
//     ],
//     bedroom: 1,
//     bathroom: 1,
//     price: 1400,
//     address: "666 City Center, Leeds",
//     latitude: 53.8008,
//     longitude: -1.5491,
//   },
//   {
//     id: 19,
//     title: "Mountain Retreat",
//     images: [
//       "https://images.pexels.com/photos/4578828/pexels-photo-4578828.jpeg",
//     ],
//     bedroom: 3,
//     bathroom: 2,
//     price: 1200,
//     address: "777 Summit Road, Peak District",
//     latitude: 53.3552,
//     longitude: -1.669,
//   },
//   {
//     id: 20,
//     title: "Charming House with Yard",
//     images: [
//       "https://images.pexels.com/photos/4203222/pexels-photo-4203222.jpeg",
//     ],
//     bedroom: 4,
//     bathroom: 3,
//     price: 2100,
//     address: "888 Greenway Drive, Nottingham",
//     latitude: 52.9548,
//     longitude: -1.1572,
//   },
// ];

// export const singlePostData = {
//   id: 1,
//   title: "A great Apartment Next to the Beach!",
//   price: 1000,
//   images: [
//     "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   ],
//   bedRooms: 2,
//   bathroom: 1,
//   size: 861,
//   latitude: 50.8205,
//   longitude: -0.1313,
//   city: "London",
//   address: "456 Beach Road, Brighton",
//   school: "250m away",
//   bus: "100m away",
//   restaurant: "50m away",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// };

// export const userData = {
//   id: "1",
//   name: "Yusuf Koroglu",
//   img: "https://media.licdn.com/dms/image/v2/D4D35AQGmT4FP6dxzFQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1669987952817?e=1729177200&v=beta&t=jtmrCe8dR50Se34FYr1jTPEHMT9sVANivUeiXsJ52fM",
// };

// export default listData;

const listData = [
  {
    id: 1,
    title: "A great Apartment Next to the Beach!",
    images: [
      "https://i.roamcdn.net/prop/brk/gallery-main-900w-watermark/a02c97e40c963a6b7b0fa6a15ab5ce6d/-/prod-property-core-backend-media-brk/7724075/7f28e6af-9c9a-4704-817b-926c3deb7977.jpg",
    ],
    bedroom: 2,
    bathroom: 1,
    price: 1000,
    address: "456 Beach Road, Karen",
    latitude: -1.3192,
    longitude: 36.7128,
  },
  {
    id: 2,
    title: "Luxury Villa with Sea View",
    images: [
      "https://images.https://ihttps://i.pinimg.com/736x/81/58/09/8158095e6494c5360c0a1989a1b115d4.jpg.pinimg.com/736x/a1/ed/01/a1ed017f321ed9b0941ba01b81f339c8.jpg.com/photos/1640777/pexels-photo-1640777.jpeg",
    ],
    bedroom: 3,
    bathroom: 2,
    price: 2000,
    address: "789 Riverside Drive, Lavington",
    latitude: -1.2708,
    longitude: 36.7756,
  },
  {
    id: 3,
    title: "Cozy Cottage in the Mountains",
    images: [
      "https://images.pexels.https://i.pinimg.com/736x/a1/ed/01/a1ed017f321ed9b0941ba01b81f339c8.jpg/photos/2802021/pexels-photo-2802021.jpeg",
    ],
    bedroom: 2,
    bathroom: 1,
    price: 800,
    address: "123 Mountain Road, Ngong Hills",
    latitude: -1.3667,
    longitude: 36.6500,
  },
  {
    id: 4,
    title: "Modern Studio in the City Center",
    images: [
      "https://images.pexels.com/photos/https://i.pinimg.com/736x/e2/e6/a7/e2e6a7478a28f96594cd99bf8c8b0eda.jpg/pexels-photo-1661015.jpeg",
    ],
    bedroom: 1,
    bathroom: 1,
    price: 1500,
    address: "101 City Plaza, Westlands",
    latitude: -1.2584,
    longitude: 36.8079,
  },
  {
    id: 5,
    title: "Spacious Family Home",
    images: [
      "https://images.pexels.com/photos/https://i.pinimg.com/736x/46/28/6c/46286c497cb041bdff6b30bf31dd73b9.jpg/pexels-photo-1571462.jpeg",
    ],
    bedroom: 4,
    bathroom: 3,
    price: 2500,
    address: "303 Family Lane, Runda",
    latitude: -1.2167,
    longitude: 36.8167,
  },
  {
    id: 6,
    title: "Charming Apartment with Garden",
    images: [
      "https://images.pexels.com/photos/6788315/pexels-photo-6788315.jpeg",
    ],
    bedroom: 2,
    bathroom: 1,
    price: 1200,
    address: "202 Green Street, Kilimani",
    latitude: -1.3000,
    longitude: 36.7833,
  },
  {
    id: 7,
    title: "Stylish Loft with Downtown Views",
    images: [
      "https://images.pexels.com/photos/1971786/pexels-photo-1971786.jpeg",
    ],
    bedroom: 1,
    bathroom: 1,
    price: 1700,
    address: "404 Loft Avenue, Upper Hill",
    latitude: -1.2833,
    longitude: 36.8167,
  },
  {
    id: 8,
    title: "Beachfront Bungalow",
    images: [
      "https://images.pexels.com/photos/1695026/pexels-photo-1695026.jpeg",
    ],
    bedroom: 3,
    bathroom: 2,
    price: 2200,
    address: "505 Beach Road, Mombasa Road",
    latitude: -1.3167,
    longitude: 36.8333,
  },
  {
    id: 9,
    title: "Elegant Apartment in Historic District",
    images: [
      "https://images.pexels.com/photos/1601135/pexels-photo-1601135.jpeg",
    ],
    bedroom: 2,
    bathroom: 2,
    price: 1900,
    address: "606 Heritage Street, Kileleshwa",
    latitude: -1.3000,
    longitude: 36.7833,
  },
  {
    id: 10,
    title: "Luxurious Penthouse with Rooftop",
    images: [
      "https://images.pexels.com/photos/2482809/pexels-photo-2482809.jpeg",
    ],
    bedroom: 4,
    bathroom: 3,
    price: 3500,
    address: "707 Skyline Drive, Gigiri",
    latitude: -1.2333,
    longitude: 36.8167,
  },
  {
    id: 11,
    title: "Quaint Studio Near University",
    images: [
      "https://images.pexels.com/photos/1931943/pexels-photo-1931943.jpeg",
    ],
    bedroom: 1,
    bathroom: 1,
    price: 900,
    address: "808 Student Lane, South C",
    latitude: -1.3167,
    longitude: 36.8333,
  },
  {
    id: 12,
    title: "Sunny Apartment with Balcony",
    images: [
      "https://images.pexels.com/photos/4204518/pexels-photo-4204518.jpeg",
    ],
    bedroom: 2,
    bathroom: 1,
    price: 1300,
    address: "909 Sunshine Road, Langata",
    latitude: -1.3500,
    longitude: 36.8167,
  },
  {
    id: 13,
    title: "Modern Family Home",
    images: [
      "https://images.pexels.com/photos/1197024/pexels-photo-1197024.jpeg",
    ],
    bedroom: 3,
    bathroom: 2,
    price: 2400,
    address: "111 Modern Way, Parklands",
    latitude: -1.2667,
    longitude: 36.8167,
  },
  {
    id: 14,
    title: "Chic Urban Apartment",
    images: [
      "https://images.pexels.com/photos/4200536/pexels-photo-4200536.jpeg",
    ],
    bedroom: 1,
    bathroom: 1,
    price: 1600,
    address: "222 Urban Street, Hurlingham",
    latitude: -1.3000,
    longitude: 36.8000,
  },
  {
    id: 15,
    title: "Rural Retreat",
    images: [
      "https://images.pexels.com/photos/4616346/pexels-photo-4616346.jpeg",
    ],
    bedroom: 3,
    bathroom: 2,
    price: 1100,
    address: "333 Country Road, Limuru",
    latitude: -1.1000,
    longitude: 36.6500,
  },
  {
    id: 16,
    title: "Stylish Condo with Gym",
    images: [
      "https://images.pexels.com/photos/4171631/pexels-photo-4171631.jpeg",
    ],
    bedroom: 2,
    bathroom: 2,
    price: 1800,
    address: "444 Fitness Avenue, Thika Road",
    latitude: -1.0500,
    longitude: 37.0833,
  },
  {
    id: 17,
    title: "Seaside Cottage",
    images: [
      "https://images.pexels.com/photos/1748888/pexels-photo-1748888.jpeg",
    ],
    bedroom: 2,
    bathroom: 1,
    price: 950,
    address: "555 Coastal Lane, Athi River",
    latitude: -1.4500,
    longitude: 36.9833,
  },
  {
    id: 18,
    title: "Downtown Loft",
    images: [
      "https://images.pexels.com/photos/1868523/pexels-photo-1868523.jpeg",
    ],
    bedroom: 1,
    bathroom: 1,
    price: 1400,
    address: "666 City Center, CBD",
    latitude: -1.2833,
    longitude: 36.8167,
  },
  {
    id: 19,
    title: "Mountain Retreat",
    images: [
      "https://images.pexels.com/photos/4578828/pexels-photo-4578828.jpeg",
    ],
    bedroom: 3,
    bathroom: 2,
    price: 1200,
    address: "777 Summit Road, Kiambu",
    latitude: -1.1667,
    longitude: 36.8333,
  },
  {
    id: 20,
    title: "Charming House with Yard",
    images: [
      "https://images.pexels.com/photos/4203222/pexels-photo-4203222.jpeg",
    ],
    bedroom: 4,
    bathroom: 3,
    price: 2100,
    address: "888 Greenway Drive, Ruaka",
    latitude: -1.2000,
    longitude: 36.8167,
  },
];

export const singlePostData = {
  id: 1,
  title: "A great Apartment Next to the Beach!",
  price: 1000,
  images: [
    "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  bedRooms: 2,
  bathroom: 1,
  size: 861,
  latitude: -1.3192,
  longitude: 36.7128,
  city: "Nairobi",
  address: "456 Beach Road, Karen",
  school: "250m away",
  bus: "100m away",
  restaurant: "50m away",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const userData = {
  id: "1",
  name: "Yusuf Koroglu",
  img: "https://media.licdn.com/dms/image/v2/D4D35AQGmT4FP6dxzFQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1669987952817?e=1729177200&v=beta&t=jtmrCe8dR50Se34FYr1jTPEHMT9sVANivUeiXsJ52fM",
};

export default listData;