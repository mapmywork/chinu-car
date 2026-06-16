// Premium travel data for Professional Cab Service

export const SERVICES = [
  {
    id: 'car-rental',
    title: 'Car Rental',
    description: 'Reliable local, outstation, and one-way premium cab services across Rajasthan.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600',
    tag: 'Best Rates'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    description: 'Reservations for handpicked Budget, Deluxe, and Luxury Heritage Hotels.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600',
    tag: 'Best Deals'
  },
  {
    id: 'tour-packages',
    title: 'Rajasthan Tour Packages',
    description: 'Tailor-made tour itineraries covering major historical cities and desert safaris.',
    image: 'https://www.yoyotripsindia.com/images/state/TqLMzEVH2z/Rajasthan-vacation-packages-banner-4.jpg',
    tag: 'Customized'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Transfers',
    description: 'Punctual pickup and drop services from Jodhpur, Jaipur, and Udaipur airports.',
    image: 'https://images.bhaskarassets.com/web2images/1884/2026/05/06/bengairport-1_1778054493.jpg',
    tag: '24/7 Servicess'
  },
  {
    id: 'family-tours',
    title: 'Family Tours',
    description: 'Safe, comfortable, and memorable group travel experiences with curated family activities.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600',
    tag: 'Highly Safe'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Executive transportation solutions and event fleet management with dedicated support.',
    image: 'https://www.skiltravel.com/public/uploads/blog/1f8a0e92c42d4fa06c253218f4811ce7.webp',
    tag: 'Premium Exec'
  }
];

export const FLEET = [
  {
    id: 'dzire',
    name: 'Swift Dzire',
    type: 'Premium Sedan',
    capacity: '4+1 Seater',
    luggage: '2 Bags',
    ac: 'Fully Air Conditioned',
    pricePerKm: '₹11/km',
    idealFor: 'Couples / Small Families / Business Trips',
    features: ['Comfortable Seating', 'Ample Legroom', 'Clean & Sanitized', 'Music System'],
    image: 'https://imgd.aeplcdn.com/1056x594/n/cqtvk9b_1794595.jpg?q=80'
  },
  {
    id: 'crysta',
    name: 'Toyota Innova Crysta',
    type: 'Premium SUV',
    capacity: '6+1 Seater',
    luggage: '4 Bags',
    ac: 'Dual Zone Climate Control',
    pricePerKm: '₹17/km',
    idealFor: 'Family Travel / Outstation Tours / Group Trips',
    features: ['Plush Leather Seats', 'Captain Seats (Middle Row)', 'Superior Safety', 'Dual Airbags'],
    image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-3.png?isig=0&q=80'
  },
  {
    id: 'urbania',
    name: 'Force Urbania',
    type: 'Luxury Cruiser & Van',
    capacity: '9-17 Seater',
    luggage: '10+ Bags',
    ac: 'Individual Air Vents & Climate Control',
    pricePerKm: '₹25/km',
    idealFor: 'Large Groups / Luxury Family Tours / Destination Weddings',
    features: ['Reclining Premium Seats', 'Spacious Headroom & Aisle', 'LED Passenger Screens', 'USB Charging Ports'],
    image: 'https://i0.wp.com/khivraj.com/wp-content/uploads/2025/05/Urbania-SWB.png?fit=438%2C226&ssl=1'
  }
];

export const DESTINATIONS = [
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    tagline: 'Blue City Experience',
    description: 'Explore the grand Mehrangarh Fort, Umaid Bhawan Palace, and vibrant blue-painted lanes of the old city.',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514',
    popularAttractions: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan', 'Clock Tower']
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    tagline: 'Desert Safari',
    description: 'Experience camel safaris, luxury desert camping, sunset over golden dunes, and the living Golden Fort.',
    image: 'https://media.istockphoto.com/id/465538873/photo/scenic-jaisalmer-fort-with-a-sunset.jpg?s=612x612&w=0&k=20&c=gCMQyVskovprPeNxTI9D_euUGIvrHZtrAifbzNqlh4Q=',
    popularAttractions: ['Golden Fort', 'Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake']
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'City of Lakes',
    description: 'Cruising Lake Pichola, visiting royal heritage palaces, and exploring the romance of the Venice of the East.',
    image: 'https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY=',
    popularAttractions: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Fateh Sagar Lake']
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'Pink City Heritage',
    description: 'Step into the historic capital filled with pink sandstone facades, ancient observatories, and majestic fort hills.',
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=800',
    popularAttractions: ['Hawa Mahal', 'Amer Fort', 'City Palace', 'Jantar Mantar']
  },
  {
    id: 'mount-abu',
    name: 'Mount Abu',
    tagline: 'Hill Station Escape',
    description: 'Escape to the only hill station of Rajasthan, surrounded by green forests, serene lakes, and carved Dilwara temples.',
    image: 'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/Toad%20Rock%20View%20Point.jpg',
    popularAttractions: ['Nakki Lake', 'Dilwara Temples', 'Sunset Point', 'Guru Shikhar']
  },
  {
    id: 'ranthambore',
    name: 'Ranthambore',
    tagline: 'Wildlife Adventure',
    description: 'Unleash your adventurous side with open-jeep tiger safaris in the legendary ancient ruins of Ranthambore.',
    image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=800',
    popularAttractions: ['National Park', 'Ranthambore Fort', 'Trinetra Ganesha Temple', 'Padam Talao']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Amit Sharma',
    city: 'New Delhi',
    rating: 5,
    text: 'Dhan Singh and his drivers are absolute professionals. The Innova was spotless, and the Jodhpur-Jaisalmer trip went incredibly smoothly. Highly recommended!',
    service: 'Cab Booking'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    city: 'London, UK',
    rating: 5,
    text: 'We booked a 7-day Rajasthan tour package (Jaipur-Udaipur-Jodhpur). The organization, hotel recommendations, and especially the driver\'s local expertise made it the trip of a lifetime.',
    service: 'Rajasthan Tour Packages'
  },
  {
    id: 3,
    name: 'Vikramaditya Rao',
    city: 'Bengaluru',
    rating: 5,
    text: 'Extremely punctual airport transfer service. I regularly book their corporate travel plans when visiting Jodhpur. Top class luxury service and transparent billing.',
    service: 'Corporate Travel'
  },
  {
    id: 4,
    name: 'Priyanka & Family',
    city: 'Mumbai',
    rating: 5,
    text: 'They helped us book the Deluxe Hotel Aarunya Royal and customized a family itinerary. Everything from comfort to food was exceptional. Extremely safe for families.',
    service: 'Hotel & Family Tour'
  },
  {
    id: 5,
    name: 'Rajesh Mehra',
    city: 'Ahmedabad',
    rating: 5,
    text: 'A flawless experience. We booked a round trip to Udaipur. Driver was polite, drove safely, and knew the best scenic points and local food outlets. Worth every rupee.',
    service: 'Car Rental'
  }
];

export const CONTACT_INFO = {
  name: 'Professional Cab Service',
  owner: 'Dhan Singh',
  phones: ['+91 7300113212', '+91 9351616369'],
  cleanPhones: ['+917300113212', '+919351616369'],
  email: 'cabserviceprofessional@gmail.com',
  address: 'C/o Hotel Aarunya Royal, Near Veetrag City, DPS Circle, Jodhpur, Rajasthan - 342014, India'
};
