import HabaneroRanchPhotograph from '../images/product-habanero-ranch.jpeg';
import HabaneroRanchPhotographWebp from '../images/product-habanero-ranch.webp';
import HabaneroRanchPackagingImage from '../images/packaging-habanero-ranch.png';
import HabaneroRanchPackagingImageWebp from '../images/packaging-habanero-ranch.webp';
import PbjPhotograph from '../images/product-pbj.jpg';
import PbjPhotographWebp from '../images/product-pbj.webp';
import ChiopotleCheddarPhotograph from '../images/product-chipotle-cheddar.jpeg';
import ChiopotleCheddarPhotographWebp from '../images/product-chipotle-cheddar.webp';
import ChipotleCheddarPackagingImage from '../images/packaging-chipotle-cheddar.png';
import ChipotleCheddarPackagingImageWebp from '../images/packaging-chipotle-cheddar.webp';
import ChocolateHazelnutEspressoPhotograph from '../images/product-chocolate-hazelnut-espresso.jpg';
import ChocolateHazelnutEspressoPhotographWebp from '../images/product-chocolate-hazelnut-espresso.webp';
import MalaLimePhotograph from '../images/product-mala-lime.jpeg';
import MalaLimePhotographWebp from '../images/product-mala-lime.webp';
import MalaLimePackagingImage from '../images/packaging-mala-lime.png';
import MalaLimePackagingImageWebp from '../images/packaging-mala-lime.webp';
import GoatCheeseChivePhotograph from '../images/product-goat-cheese-chive.jpeg';
import GoatCheeseChivePhotographWebp from '../images/product-goat-cheese-chive.webp';
import GoatCheeseChivePackagingImage from '../images/packaging-goat-cheese-chive.png';
import GoatCheeseChivePackagingImageWebp from '../images/packaging-goat-cheese-chive.webp';
import ItalianSausagePhotograph from '../images/product-italian-sausage.jpeg';
import ItalianSausagePhotographWebp from '../images/product-italian-sausage.webp';
import RosemaryLemonPepperPhotograph from '../images/product-rosemary-lemon-pepper.jpeg';
import RosemaryLemonPepperPhotographWebp from '../images/product-rosemary-lemon-pepper.webp';
import RosemaryLemonPepperPackagingImage from '../images/packaging-rosemary-lemon-pepper.png';
import RosemaryLemonPepperPackagingImageWebp from '../images/packaging-rosemary-lemon-pepper.webp';
import SichuanNoochPhotograph from '../images/product-sichuan-nooch.jpeg';
import SichuanNoochPhotographWebp from '../images/product-sichuan-nooch.webp';
import SichuanNoochPackagingImage from '../images/packaging-sichuan-nooch.png';
import SichuanNoochPackagingImageWebp from '../images/packaging-sichuan-nooch.webp';
import FurikakeDashiPhotograph from '../images/product-furikake-dashi.jpeg';
import FurikakeDashiPhotographWebp from '../images/product-furikake-dashi.webp';
import FurikakeDashiPackagingImage from '../images/packaging-furikake-dashi.png';
import FurikakeDashiPackagingImageWebp from '../images/packaging-furikake-dashi.webp';
import { RetailProduct, Product, CateringProduct } from '../types/product';

export const HABANERO_RANCH: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Hulless and crisp popcorn coated in creamy, zesty ranch seasoning with a habanero kick.',
  image: HabaneroRanchPhotograph,
  imageWebp: HabaneroRanchPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'BUTTERMILK POWDER',
    'ONION POWDER',
    'GARLIC POWDER',
    'SALT',
    'CANE SUGAR',
    'MSG',
    'GROUND HABANERO PEPPER',
    'DILL',
    'BLACK PEPPERCORN',
    'CHIVES',
    'PARSLEY',
  ],
  packagingImage: HabaneroRanchPackagingImage,
  packagingImageWebp: HabaneroRanchPackagingImageWebp,
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Habanero Ranch',
  weight: '1.7 OZ',
};

export const PBJ: Product = {
  allergens: ['PEANUTS', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in peanut butter and strawberry jam. A vegan-friendly blast of sweet and salty nostalgia.',
  image: PbjPhotograph,
  imageWebp: PbjPhotographWebp,
  ingredients: [
    'STRAWBERRY JAM',
    'PEANUT BUTTER',
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NATURALLY REFINED ORGANIC COCONUT OIL',
    'CANE SUGAR',
    'BAKING POWDER',
    'SALT',
    'CRYSTALLIZED LEMON',
  ],
  priceCatering: 12.0,
  subtitle: 'Craft Popcorn',
  title: 'PB&J',
  weight: '3.7 OZ',
};

export const CHIPOTLE_CHEDDAR: RetailProduct = {
  allergens: ['MILK'],
  description:
    'The perfect combination of smoky chipotle, tangy cheddar, and zesty lime.',
  image: ChiopotleCheddarPhotograph,
  imageWebp: ChiopotleCheddarPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'CHEDDAR CHEESE POWDER',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'GROUND CHIPOTLE PEPPER',
    'MSG',
    'CANE SUGAR',
    'CRYSTALLIZED LIME',
    'BLACK PEPPERCORN',
  ],
  packagingImage: ChipotleCheddarPackagingImage,
  packagingImageWebp: ChipotleCheddarPackagingImageWebp,
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Chipotle Cheddar',
  weight: '1.7 OZ',
};

export const GOAT_CHEESE_CHIVE: RetailProduct = {
  allergens: ['MILK'],
  description:
    'Creamy, tangy goat milk popcorn with abundant chives for a delicate, herbal finish.',
  image: GoatCheeseChivePhotograph,
  imageWebp: GoatCheeseChivePhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'GOAT MILK POWDER',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'MSG',
    'CANE SUGAR',
    'CHIVES',
    'BLACK PEPPERCORN',
  ],
  packagingImage: GoatCheeseChivePackagingImage,
  packagingImageWebp: GoatCheeseChivePackagingImageWebp,
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Goat Cheese Chive',
  weight: '1.7 OZ',
};

export const FURIKAKE_DASHI: RetailProduct = {
  allergens: ['MILK', 'SESAME', 'TUNA'],
  description:
    'A tastefully savory umami bomb featuring nori furikake, bonito stock, and shichimi togarashi.',
  image: FurikakeDashiPhotograph,
  imageWebp: FurikakeDashiPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NORI KOMI FURIKAKE',
    'SALT',
    'BONITO SOUP STOCK',
    'MSG',
    'SHICHIMI TOGARASHI',
    'ONION POWDER',
    'CANE SUGAR',
  ],
  packagingImage: FurikakeDashiPackagingImage,
  packagingImageWebp: FurikakeDashiPackagingImageWebp,
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Furikake Dashi',
  weight: '1.7 OZ',
};

export const ROSEMARY_LEMON_PEPPER: CateringProduct = {
  allergens: [],
  description:
    'Herbaceous and citrus-forward popcorn balanced with freshly ground black pepper. This variety is only available in unmarked packaging.',
  image: RosemaryLemonPepperPhotograph,
  imageWebp: RosemaryLemonPepperPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'EXTRA VIRGIN OLIVE OIL',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'CANE SUGAR',
    'CRYSTALLIZED LEMON',
    'ROSEMARY',
    'BLACK PEPPERCORN',
  ],
  packagingImage: RosemaryLemonPepperPackagingImage,
  packagingImageWebp: RosemaryLemonPepperPackagingImageWebp,
  priceCatering: 7.0,
  subtitle: 'Craft Popcorn',
  title: 'Rosemary Lemon Pepper',
  weight: '1.7 OZ',
};

export const CHOCOLATE_HAZELNUT_ESPRESSO: Product = {
  allergens: ['TREE NUTS (HAZELNUTS)', 'MILK', 'SOY'],
  description:
    'Large and crunchy popcorn smothered in chocolate hazelnut spread. A blast of rich chocolate perfectly balanced with hazelnut and espresso. This variety is only available in unmarked packaging.',
  image: ChocolateHazelnutEspressoPhotograph,
  imageWebp: ChocolateHazelnutEspressoPhotographWebp,
  ingredients: [
    'HAZELNUT SPREAD WITH COCOA (SUGAR, PALM OIL, HAZELNUTS, SKIM MILK, COCOA, LECITHIN, VANILLIN)',
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NATURALLY REFINED ORGANIC COCONUT OIL',
    'CANE SUGAR',
    'BAKING POWDER',
    'SALT',
    'ESPRESSO POWDER',
  ],
  priceCatering: 12.0,
  subtitle: 'Craft Popcorn',
  title: 'Chocolate Hazelnut Espresso',
  weight: '2.8 OZ',
};

export const MALA_LIME: RetailProduct = {
  allergens: [],
  description:
    'Taking inspiration from San Francisco’s incredible landscape of Sichuan cuisine and Mexican chili-lime seasoning, this popcorn blasts your senses with fiery Sichuan chili pepper, numbing Sichuan peppercorn, and tangy lime.',
  image: MalaLimePhotograph,
  imageWebp: MalaLimePhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'GRANULATED GARLIC',
    'SICHUAN CHILI PEPPER',
    'ONION POWDER',
    'SALT',
    'SICHUAN PEPPERCORN',
    'CANE SUGAR',
    'CRYSTALLIZED LIME',
  ],
  packagingImage: MalaLimePackagingImage,
  packagingImageWebp: MalaLimePackagingImageWebp,
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Málà Lime',
  weight: '1.7 OZ',
};

export const ITALIAN_SAUSAGE: Product = {
  allergens: [],
  description:
    'The finest herbs and spices available capture the delicious flavors of my Sicilian grandmother’s signature Italian sausage pasta.',
  image: ItalianSausagePhotograph,
  imageWebp: ItalianSausagePhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'FENNEL SEED',
    'EXTRA VIRGIN OLIVE OIL',
    'CANE SUGAR',
    'TOMATO POWDER',
    'CRUSHED RED PEPPER',
    'PAPRIKA',
    'SMOKED PAPRIKA',
    'BASIL',
    'BLACK PEPPERCORN',
    'OREGANO',
  ],
  priceCatering: 7.0,
  subtitle: 'Craft Popcorn',
  title: 'Italian Sausage',
  weight: '1.7 OZ',
};

export const SICHUAN_NOOCH: RetailProduct = {
  allergens: [],
  description:
    'Toasted Sichuan peppercorn and nutritional yeast shine in this exceptionally tingly, tangy, and funky popcorn.',
  image: SichuanNoochPhotograph,
  imageWebp: SichuanNoochPhotographWebp,
  ingredients: [
    'NON-GMO POPCORN',
    'CANOLA OIL',
    'NUTRITIONAL YEAST',
    'GRANULATED GARLIC',
    'ONION POWDER',
    'SALT',
    'SICHUAN PEPPERCORN',
    'MSG',
    'CANE SUGAR',
    'CRYSTALLIZED LIME',
  ],
  packagingImage: SichuanNoochPackagingImage,
  packagingImageWebp: SichuanNoochPackagingImageWebp,
  priceCatering: 7.0,
  priceMsrp: 7.0,
  priceRetailer: 4.5,
  subtitle: 'Craft Popcorn',
  title: 'Sichuan Nooch',
  weight: '1.7 OZ',
};

export const CATERING_PRODUCTS: CateringProduct[] = [
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
];

export const PRODUCTS: Product[] = [
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
  MALA_LIME,
  ROSEMARY_LEMON_PEPPER,
  ITALIAN_SAUSAGE,
  PBJ,
  CHOCOLATE_HAZELNUT_ESPRESSO,
];

export const RETAIL_PRODUCTS: RetailProduct[] = [
  CHIPOTLE_CHEDDAR,
  FURIKAKE_DASHI,
  GOAT_CHEESE_CHIVE,
  HABANERO_RANCH,
  SICHUAN_NOOCH,
];
