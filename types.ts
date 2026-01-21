
export enum Screen {
  HOME = 'HOME',
  LISTING = 'LISTING',
  DETAIL = 'DETAIL',
  CART = 'CART',
  CHECKOUT = 'CHECKOUT',
  SUCCESS = 'SUCCESS',
  PROFILE = 'PROFILE',
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  variants?: string[];
  colors?: string[];
  reviewsCount: number;
  rating: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface AppState {
  currentScreen: Screen;
  selectedProduct: Product | null;
  cart: CartItem[];
  wishlist: CartItem[];
}
