import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {
  Button
} from "@chakra-ui/react";

const CartWidget = () => {
  const {cart, setCart}= useContext(CartContext);

const cantidad = cart.reduce((acc, curr) =>{
  return acc + curr.cantidad
}, 0)

  return (
    <div >
      <Button variant="outline" colorScheme="" size="lg"  >
      <span className="material-symbols-outlined">
        shopping_cart
      </span>
      <span>{cantidad}</span>
      </Button>
    </div>
  )
}

export default CartWidget