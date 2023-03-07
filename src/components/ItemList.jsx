import React from 'react'
import Data from  "../data.json"

const ItemList = () => {
  return (
    <div>
      {Data.map((prod)=>{
      return(
        <div key={prod.id}>
          <h2>{prod.name}</h2>
          <p>{prod.precio}</p>
          <p>Stock: {prod.stock}</p>
        </div>
      )
    })}</div>
  )
}

export default ItemList