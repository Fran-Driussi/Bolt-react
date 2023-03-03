import React from 'react'

const CartWidget = ({numero}) => {
  return (
    <div>
      <span className="material-symbols-outlined">
        shopping_cart
      </span>
      <p>{numero}</p>
    </div>
  )
}

export default CartWidget