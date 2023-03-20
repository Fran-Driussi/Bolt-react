import {createContext,useState} from 'react';

export const CartContext = createContext();

const cartContext = ({children}) => {
    const [cart, setCart] = useState([])

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
  return (
    <CartContext.Provider value={{cart, setCart}}>
        {children}
        </CartContext.Provider>
  )
}

export default cartContext