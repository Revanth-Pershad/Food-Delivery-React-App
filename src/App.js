import React, {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartShown] = useState(false);

  const cartIsHidden = () => {
    setCartShown(false);
  }

  const cartIsVisible = () => {
    setCartShown(true);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartIsHidden} />}
      <Header onShowCart = {cartIsVisible} />
      <main>
        <Meals />
      </main>
      
    </CartProvider>
  );
}

export default App;
