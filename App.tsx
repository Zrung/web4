
import React, { useState, useCallback } from 'react';
import { Screen, Product, CartItem, AppState } from './types';
import { PRODUCTS } from './constants';
import HomeScreen from './screens/HomeScreen';
import ListingScreen from './screens/ListingScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import SuccessScreen from './screens/SuccessScreen';
import ProfileScreen from './screens/ProfileScreen';
import DashboardScreen from './screens/DashboardScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentScreen: Screen.HOME,
    selectedProduct: null,
    cart: [],
    wishlist: [],
  });

  const navigateTo = useCallback((screen: Screen, product?: Product) => {
    setState(prev => ({
      ...prev,
      currentScreen: screen,
      selectedProduct: product || null
    }));
    window.scrollTo(0, 0);
  }, []);

  const addToCart = useCallback((product: Product, size: string, color: string) => {
    setState(prev => {
      const existing = prev.cart.find(item => 
        item.product.id === product.id && 
        item.selectedSize === size && 
        item.selectedColor === color
      );

      if (existing) {
        return {
          ...prev,
          cart: prev.cart.map(item => 
            item === existing ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }

      const newItem: CartItem = { product, quantity: 1, selectedSize: size, selectedColor: color };
      return { ...prev, cart: [...prev.cart, newItem] };
    });
  }, []);

  const updateQuantity = useCallback((index: number, delta: number) => {
    setState(prev => {
      const newCart = [...prev.cart];
      newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
      return { ...prev, cart: newCart };
    });
  }, []);

  const removeFromCart = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      cart: prev.cart.filter((_, i) => i !== index)
    }));
  }, []);

  const moveToWishlist = useCallback((index: number) => {
    setState(prev => {
      const itemToSave = prev.cart[index];
      return {
        ...prev,
        cart: prev.cart.filter((_, i) => i !== index),
        wishlist: [...prev.wishlist, itemToSave]
      };
    });
  }, []);

  const moveToCart = useCallback((index: number) => {
    setState(prev => {
      const itemToRestore = prev.wishlist[index];
      return {
        ...prev,
        wishlist: prev.wishlist.filter((_, i) => i !== index),
        cart: [...prev.cart, itemToRestore]
      };
    });
  }, []);

  const removeFromWishlist = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      wishlist: prev.wishlist.filter((_, i) => i !== index)
    }));
  }, []);

  const renderScreen = () => {
    switch (state.currentScreen) {
      case Screen.HOME:
        return <HomeScreen navigateTo={navigateTo} />;
      case Screen.LISTING:
        return <ListingScreen navigateTo={navigateTo} />;
      case Screen.DETAIL:
        return state.selectedProduct ? (
          <DetailScreen 
            product={state.selectedProduct} 
            navigateTo={navigateTo} 
            addToCart={addToCart} 
          />
        ) : <HomeScreen navigateTo={navigateTo} />;
      case Screen.CART:
        return (
          <CartScreen 
            cart={state.cart} 
            wishlist={state.wishlist}
            navigateTo={navigateTo} 
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            moveToWishlist={moveToWishlist}
            moveToCart={moveToCart}
            removeFromWishlist={removeFromWishlist}
          />
        );
      case Screen.CHECKOUT:
        return <CheckoutScreen cart={state.cart} navigateTo={navigateTo} />;
      case Screen.SUCCESS:
        return <SuccessScreen navigateTo={navigateTo} />;
      case Screen.PROFILE:
        return <ProfileScreen navigateTo={navigateTo} />;
      case Screen.DASHBOARD:
        return <DashboardScreen navigateTo={navigateTo} />;
      case Screen.ANALYTICS:
        return <AnalyticsScreen navigateTo={navigateTo} />;
      default:
        return <HomeScreen navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background-light shadow-2xl relative flex flex-col font-display">
      {renderScreen()}
    </div>
  );
};

export default App;
