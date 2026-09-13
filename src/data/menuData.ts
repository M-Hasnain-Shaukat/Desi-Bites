export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'Desi' | 'Fast Food' | 'Italian' | 'Chinese' | 'Drinks';
  description: string;
  price: number; // in PKR
  image: string;
  spicyLevel: 0 | 1 | 2 | 3;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  prepTime?: string;
  ingredients?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  // 1. DESI CATEGORY (5 User-Uploaded Images)
  {
    id: 'desi-1',
    name: 'Special Chicken Karahi',
    urduName: 'چکن کڑاہی',
    category: 'Desi',
    description: 'Tender chicken braised in a traditional wok with fresh tomatoes, ginger matchsticks, garlic, crushed black pepper, and green chilies.',
    price: 1850,
    image: '/images/desi-1.webp',
    spicyLevel: 2,
    isChefSpecial: true,
    isPopular: true,
    prepTime: '25-30 mins',
    ingredients: ['Fresh Chicken', 'Roma Tomatoes', 'Ginger', 'Garlic', 'Green Chilies', 'Desi Ghee', 'Special Spices']
  },
  {
    id: 'desi-2',
    name: 'Shahi Chicken Biryani',
    urduName: 'شاہی چکن بریانی',
    category: 'Desi',
    description: 'Aromatic long-grain basmati rice layered with spiced chicken, caramelized golden onions, saffron, mint, and whole fragrant spices.',
    price: 650,
    image: '/images/desi-2.webp',
    spicyLevel: 2,
    isPopular: true,
    prepTime: '20 mins',
    ingredients: ['Aged Basmati Rice', 'Marinated Chicken', 'Saffron', 'Browned Onions', 'Fresh Mint', 'Cardamom', 'Cinnamon']
  },
  {
    id: 'desi-3',
    name: 'Mutton Peshawari Handi',
    urduName: 'پشاوری مٹن ہانڈی',
    category: 'Desi',
    description: 'Boneless tender mutton simmered in a clay handi with rich cream, roasted cumin, cracked coriander, and velvety gravy.',
    price: 2450,
    image: '/images/desi-3.webp',
    spicyLevel: 1,
    isChefSpecial: true,
    prepTime: '35 mins',
    ingredients: ['Prime Mutton', 'Fresh Yogurt', 'Double Cream', 'Coriander Seeds', 'Cumin', 'White Pepper']
  },
  {
    id: 'desi-4',
    name: 'Charcoal Seekh Kebabs',
    urduName: 'سیخ کباب',
    category: 'Desi',
    description: 'Minced beef infused with aromatic herbs, onions, and ground spices, skewered and char-grilled over natural coals.',
    price: 850,
    image: '/images/desi-4.webp',
    spicyLevel: 2,
    isPopular: true,
    prepTime: '20 mins',
    ingredients: ['Prime Minced Beef', 'Onions', 'Coriander', 'Green Chilies', 'Garam Masala', 'Smoked Butter']
  },
  {
    id: 'desi-5',
    name: 'Tandoori Garlic Roghani Naan',
    urduName: 'روغنی نان',
    category: 'Desi',
    description: 'Pillowy tandoor-baked flatbread brushed with clarified butter, roasted garlic, and toasted sesame seeds.',
    price: 180,
    image: '/images/desi-5.webp',
    spicyLevel: 0,
    isVegetarian: true,
    prepTime: '10 mins',
    ingredients: ['Fine Flour', 'Milk', 'Desi Ghee', 'Garlic', 'White Sesame Seeds']
  },

  // 2. FAST FOOD CATEGORY (5 User-Uploaded Images)
  {
    id: 'ff-1',
    name: 'Desi Crunch Zinger Burger',
    category: 'Fast Food',
    description: 'Whole chicken thigh marinated in house spice blend, double-dredged for extra crunch, topped with slaw and spicy garlic mayo.',
    price: 780,
    image: '/images/fast-1.webp',
    spicyLevel: 2,
    isPopular: true,
    prepTime: '15 mins',
    ingredients: ['Crispy Chicken Fillet', 'Brioche Bun', 'Iceberg Slaw', 'Chilli Garlic Sauce', 'Cheddar Melt']
  },
  {
    id: 'ff-2',
    name: 'Smash Beef Truffle Burger',
    category: 'Fast Food',
    description: 'Double smashed beef patties with caramelized crust, melted American cheese, pickled gherkins, and house secret relish.',
    price: 1050,
    image: '/images/fast-2.webp',
    spicyLevel: 1,
    isChefSpecial: true,
    prepTime: '15 mins',
    ingredients: ['Angus Beef Patties', 'American Cheese', 'Brioche Bun', 'Caramelized Onions', 'House Relish']
  },
  {
    id: 'ff-3',
    name: 'Loaded Tikka Masala Fries',
    category: 'Fast Food',
    description: 'Crispy skin-on potato fries smothered with smoked chicken tikka chunks, melted mozzarella, jalapeños, and spiced garlic dip.',
    price: 650,
    image: '/images/fast-3.webp',
    spicyLevel: 2,
    prepTime: '12 mins',
    ingredients: ['Potato Fries', 'Smoked Tikka', 'Liquid Cheese', 'Jalapeños', 'Chipotle Crema']
  },
  {
    id: 'ff-4',
    name: 'Crispy Peri-Peri Wings (8 Pcs)',
    category: 'Fast Food',
    description: 'Jumbo wings fried to golden perfection and tossed in tangy, flame-roasted peri-peri glaze with ranch dip.',
    price: 720,
    image: '/images/fast-4.webp',
    spicyLevel: 3,
    prepTime: '15 mins',
    ingredients: ['Chicken Wings', 'Peri-Peri Glaze', 'Lemon Zest', 'Ranch Sauce', 'Herbs']
  },
  {
    id: 'ff-5',
    name: 'Artisan Grilled Chicken Wrap',
    category: 'Fast Food',
    description: 'Flame-grilled herb chicken strips wrapped in a warm tortilla with crunchy greens, tomatoes, and tangy tahini dressing.',
    price: 690,
    image: '/images/fast-5.webp',
    spicyLevel: 1,
    prepTime: '12 mins',
    ingredients: ['Grilled Chicken Breast', 'Flour Tortilla', 'Cucumber', 'Tomato', 'Garlic Tahini']
  },

  // 3. ITALIAN CATEGORY (5 User-Uploaded Images)
  {
    id: 'it-1',
    name: 'Artisanal Woodfired Margherita',
    category: 'Italian',
    description: 'San Marzano tomato sauce, fresh buffalo mozzarella, fragrant sweet basil leaves, and cold-pressed extra virgin olive oil.',
    price: 1350,
    image: '/images/italian-1.webp',
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    prepTime: '18 mins',
    ingredients: ['Sourdough Base', 'San Marzano Tomatoes', 'Fior di Latte Mozzarella', 'Fresh Basil', 'EVOO']
  },
  {
    id: 'it-2',
    name: 'Creamy Chicken Fettuccine Alfredo',
    category: 'Italian',
    description: 'Al dente fettuccine ribbon pasta tossed in rich parmesan butter cream sauce with sliced herb-marinated grilled chicken breast.',
    price: 1250,
    image: '/images/italian-2.webp',
    spicyLevel: 0,
    isChefSpecial: true,
    prepTime: '20 mins',
    ingredients: ['Fresh Fettuccine', 'Aged Parmesan Reggiano', 'Double Cream', 'Herb Chicken', 'Garlic Butter']
  },
  {
    id: 'it-3',
    name: 'Spicy Penne all’Arrabbiata',
    category: 'Italian',
    description: 'Tuscan penne pasta simmered in fiery garlic tomato sauce with Calabrian red chili flakes, black olives, and fresh parsley.',
    price: 1050,
    image: '/images/italian-3.webp',
    spicyLevel: 2,
    isVegetarian: true,
    prepTime: '15 mins',
    ingredients: ['Durum Penne', 'Crushed Tomatoes', 'Chili Flakes', 'Kalamata Olives', 'Garlic', 'Parsley']
  },
  {
    id: 'it-4',
    name: 'Classic Baked Beef Lasagna',
    category: 'Italian',
    description: 'Slow-simmered beef ragù layered between tender egg pasta sheets, velvety béchamel sauce, and bubbling golden mozzarella.',
    price: 1450,
    image: '/images/italian-4.webp',
    spicyLevel: 0,
    isPopular: true,
    prepTime: '25 mins',
    ingredients: ['Egg Pasta Sheets', 'Slow-cooked Beef Ragù', 'Béchamel', 'Mozzarella', 'Parmesan']
  },
  {
    id: 'it-5',
    name: 'Cheesy Garlic Pull-Apart Bread',
    category: 'Italian',
    description: 'Toasted country baguette loaded with roasted garlic herb butter and melted provolone & mozzarella cheese.',
    price: 490,
    image: '/images/italian-5.webp',
    spicyLevel: 0,
    isVegetarian: true,
    prepTime: '10 mins',
    ingredients: ['Rustic Baguette', 'Roasted Garlic', 'Parsley Butter', 'Mozzarella', 'Parmesan']
  },

  // 4. CHINESE CATEGORY (5 User-Uploaded Images)
  {
    id: 'ch-1',
    name: 'Classic Chicken Manchurian',
    category: 'Chinese',
    description: 'Crispy diced chicken glazed in a savory, tangy red sauce with ginger, garlic, green chilies, and scallions. Served with steamed rice.',
    price: 1150,
    image: '/images/chinese-1.webp',
    spicyLevel: 2,
    isPopular: true,
    prepTime: '20 mins',
    ingredients: ['Chicken Breast Cubes', 'Tangy Tomato-Soy Sauce', 'Ginger', 'Green Onions', 'Garlic']
  },
  {
    id: 'ch-2',
    name: 'Szechuan Chicken Chow Mein',
    category: 'Chinese',
    description: 'Wok-tossed egg noodles with shredded chicken, crisp bell peppers, cabbage, bean sprouts, and spicy Szechuan chili paste.',
    price: 980,
    image: '/images/chinese-2.webp',
    spicyLevel: 2,
    prepTime: '15 mins',
    ingredients: ['Wok Noodles', 'Julienned Chicken', 'Cabbage', 'Bell Peppers', 'Soy Sauce', 'Szechuan Chili']
  },
  {
    id: 'ch-3',
    name: 'Kung Pao Cashew Chicken',
    category: 'Chinese',
    description: 'Tender chicken cubes stir-fried with dry red chilies, roasted cashew nuts, scallions, and sweet-spicy dark soy reduction.',
    price: 1220,
    image: '/images/chinese-3.webp',
    spicyLevel: 2,
    isChefSpecial: true,
    prepTime: '20 mins',
    ingredients: ['Chicken Breast', 'Toasted Cashews', 'Dry Red Peppers', 'Soy Sauce', 'Rice Vinegar']
  },
  {
    id: 'ch-4',
    name: 'Authentic Hot & Sour Soup',
    category: 'Chinese',
    description: 'Silky comforting broth with shredded chicken, bamboo shoots, wood ear mushrooms, egg ribbons, and balanced vinegar-chili kick.',
    price: 520,
    image: '/images/chinese-4.webp',
    spicyLevel: 1,
    prepTime: '12 mins',
    ingredients: ['Chicken Broth', 'Shredded Chicken', 'Black Mushrooms', 'Tofu', 'White Pepper', 'Chili Oil']
  },
  {
    id: 'ch-5',
    name: 'Crispy Chilli Dry Chicken',
    category: 'Chinese',
    description: 'Wok-seared crispy sliced chicken tossed with fresh ginger slices, green chilies, onions, and spicy dark sauce without heavy gravy.',
    price: 1180,
    image: '/images/chinese-5.webp',
    spicyLevel: 3,
    prepTime: '18 mins',
    ingredients: ['Chicken Strips', 'Slit Green Chilies', 'Fresh Ginger', 'Onions', 'Light Soy', 'Sesame Oil']
  },

  // 5. DRINKS CATEGORY (5 User-Uploaded Images)
  {
    id: 'dr-1',
    name: 'Royal Mango Lassi',
    category: 'Drinks',
    description: 'Creamy blended yogurt drink made with pure Chaunsa mango pulp, saffron strands, and crushed green pistachios.',
    price: 450,
    image: '/images/drinks-1.webp',
    spicyLevel: 0,
    isVegetarian: true,
    isPopular: true,
    prepTime: '5 mins',
    ingredients: ['Chaunsa Mango Pulp', 'Fresh Yogurt', 'Whole Milk', 'Saffron', 'Pistachio Crumble']
  },
  {
    id: 'dr-2',
    name: 'Iced Mint Margarita',
    category: 'Drinks',
    description: 'Refreshing blended mocktail with fresh garden mint leaves, fresh lemon juice, sparkling soda, and black Himalayan rock salt.',
    price: 380,
    image: '/images/drinks-2.webp',
    spicyLevel: 0,
    isVegetarian: true,
    prepTime: '5 mins',
    ingredients: ['Fresh Mint', 'Lemon Juice', 'Sugar Syrup', 'Kala Namak', 'Sparkling Soda', 'Crushed Ice']
  },
  {
    id: 'dr-3',
    name: 'Chilled Peach Sparkler',
    category: 'Drinks',
    description: 'Subtly sweet white peach nectar infused with fresh rosemary sprigs and effervescent botanical club soda.',
    price: 420,
    image: '/images/drinks-3.webp',
    spicyLevel: 0,
    isVegetarian: true,
    prepTime: '5 mins',
    ingredients: ['Peach Purée', 'Fresh Rosemary', 'Lemon', 'Soda', 'Ice']
  },
  {
    id: 'dr-4',
    name: 'Cardamom Shahi Karak Chai',
    category: 'Drinks',
    description: 'Slow-simmered rich black tea brewed with whole green cardamom pods, cinnamon bark, evaporated milk, and caramelized sugar.',
    price: 220,
    image: '/images/drinks-4.webp',
    spicyLevel: 0,
    isVegetarian: true,
    prepTime: '8 mins',
    ingredients: ['Strong Tea Leaves', 'Green Cardamom', 'Full Cream Milk', 'Cinnamon Stick']
  },
  {
    id: 'dr-5',
    name: 'Fresh Mint Lemonade',
    category: 'Drinks',
    description: 'Freshly squeezed citrus lemons infused with crushed spearmint, cane syrup, and cracked Himalayan rock salt over ice.',
    price: 320,
    image: '/images/drinks-5.webp',
    spicyLevel: 0,
    isVegetarian: true,
    prepTime: '5 mins',
    ingredients: ['Fresh Lemons', 'Spearmint', 'Purified Water', 'Rock Salt', 'Ice']
  }
];

export const CATEGORIES: MenuItem['category'][] = [
  'Desi',
  'Fast Food',
  'Italian',
  'Chinese',
  'Drinks'
];

export type MenuCategory = (typeof CATEGORIES)[number];

export const RESTAURANT_INFO = {
  name: 'Desi Bites',
  address: '14-C/1, MM Alam Road, Gulberg III, Lahore, Pakistan',
  phone: '+92 42 3578 9922',
  phone2: '+92 300 1234 567',
  whatsapp: '+92 300 1234 567',
  email: 'hospitality@desibites.pk',
  ordersEmail: 'orders@desibites.pk',
  hours: {
    weekdays: '12:00 PM – 12:00 AM',
    saturday: '12:00 PM – 01:00 AM',
    sunday: '11:30 AM – 12:00 AM',
  }
};
