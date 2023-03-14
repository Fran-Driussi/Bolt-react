import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({}) => {

  const {category} = useParams();
  const [products, setProducts] =useState([
    {
      "id": 1,
      "name": "Nike Air Force 1 low",
      "precio": "$155",
      "stock": 10,
      "image": "https://lh3.googleusercontent.com/s9evJcZ_yvEp2dj8Cmpy2QoS-mFVxbFArl-ErvZ5jq-KpdLLP08CBF3e2AmhCmCUhUvE9VVr4YCYjmzVsGhoKslJWkJfOwc_kiPVmYM"
    },
    {
      "id": 2,
      "name": "Jordan 1 Retro High OG",
      "precio": "$100",
      "stock": 15,
      "image": "https://lh3.googleusercontent.com/P-MW1ge-7XLpTf55jspk-3c-qfWvzuvh2PMEVpgg-51tXj-Ka2TEI0Yrvg9naydM_v0Jfuy0joxxjszokBBikm9rZ33pr_-BtKboXo0"
    },
    {
      "id": 3,
      "name": "Adidas yeezy 700 V3",
      "precio": "$1.000",
      "stock": 20,
      "image":"https://lh3.googleusercontent.com/4DE_t2vdlAp3uR4nPtYk5XUa_XRLulxmN9a81AYM0AAUgBB7qaMDHKd_uYJCdPNDLiT8Fptgm8X5JFqVse_QMXnedKy7vcnA0l3hKmM"
    },
    {
      "id": 4,
      "name": "Crocs Classic Clog L4",
      "precio": "$133",
      "stock": 3,
      "image":"https://lh3.googleusercontent.com/njxMZ9sZhBgEKx-JrcqR0EkN-alvbQ3iqpGrNVAjU8lBtpWCtiksyBXdzK9pQG9-a0BXvRoSZ3yr0-l0Vx1FMoMTUWG80YQOsth5OL6g"
    },
    {
      "id": 5,
      "name": "Nike SB Dunk Low",
      "precio": "$840",
      "stock": 17,
      "image":"https://lh3.googleusercontent.com/LMksTOCuLUXpJayyqtNWBMviAP6MHVSD2xdV0F4-IVflhcbAu7MFSzx5m-JWAHqRaLjJXamUyQd5Kz9lStyOZZy7kBoRUZDYtWa5IVin"
    },
    {
      "id": 6,
      "name": "Nike Air Force Off-White",
      "precio": "$4.000",
      "stock": 1,
      "image":"https://lh3.googleusercontent.com/jhch_NoDhkUH3pbThQKvja5QjpvfZ5EQLOpS0-nZDjSCVgIoNuL8zhgpi0ZipKJiCV1X3cJSqBr2tHz-8QAAR2oTRjQ9AKZcQT_tbKSm"
    },
    
  ])
  const catFilter = products.filter((prod) => prod.category === category);

 
  
  return (
    <>
    {category? <ItemList products={catFilter}/> : <ItemList products={products}/>}
  
  </>
  )
}
export default ItemListContainer