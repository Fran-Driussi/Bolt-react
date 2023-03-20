import React from 'react'
import ItemDetail from './ItemDetail'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [products, setProducts] =useState([
    {
      "id": 1,
      "name": "Nike Air Force 1 low",
      "precio": "$155",
      "stock": 10,
      "category": "Nike",
      "image": "https://lh3.googleusercontent.com/TpnyCSeyEUnmQKT8dY4xdFM-k4Xd4UsX4AAHV8o1mgMqNppqeqafvf5Q1Vb_Jg_XHnGgSPcv9iAvh6P-WSJz5sE6QnDZzjjxrZgopuA",
      "description": "El Nike Air Force 1 Low Puerto Rico 2022 tiene una suela básica y amortiguación, lo que lo convierte en un par de zapatos ideales para usar todos los días. Presenta una base azul marino oscuro."
    },
    {
      "id": 2,
      "name": "Jordan 1 Retro High OG",
      "precio": "$100",
      "stock": 15,
      "category": "Otro",
      "image": "https://lh3.googleusercontent.com/P-MW1ge-7XLpTf55jspk-3c-qfWvzuvh2PMEVpgg-51tXj-Ka2TEI0Yrvg9naydM_v0Jfuy0joxxjszokBBikm9rZ33pr_-BtKboXo0",
      "description":"Familiares pero siempre frescas, las icónicas Air Jordan 1 están remasterizadas para la cultura actual de sneakerheads. Esta versión combina todo con cuero premium."
    },
    {
      "id": 3,
      "name": "Adidas yeezy 700 V3",
      "precio": "$1.000",
      "stock": 20,
      "category": "Otro",
      "image":"https://lh3.googleusercontent.com/4DE_t2vdlAp3uR4nPtYk5XUa_XRLulxmN9a81AYM0AAUgBB7qaMDHKd_uYJCdPNDLiT8Fptgm8X5JFqVse_QMXnedKy7vcnA0l3hKmM",
      "description":"Yeezy presenta una nueva variación del 700 con el Yeezy 700 V3 Azael. La tercera encarnación de las Yeezy 700 es uno de los diseños más sofisticados que Nosotros hemos visto."
    },
    {
      "id": 4,
      "name": "Crocs Classic Clog L4",
      "precio": "$133",
      "stock": 3,
      "category": "Otro",
      "image":"https://lh3.googleusercontent.com/njxMZ9sZhBgEKx-JrcqR0EkN-alvbQ3iqpGrNVAjU8lBtpWCtiksyBXdzK9pQG9-a0BXvRoSZ3yr0-l0Vx1FMoMTUWG80YQOsth5OL6g",
      "description":"El Crocs Classic Clog Lightning McQueen es una colaboración oficial con la franquicia Cars de Disney Pixar. Estos Lightning McQueen Crocs rinden homenaje al personaje principal de la película."
    },
    {
      "id": 5,
      "name": "Nike SB Dunk Low",
      "precio": "$840",
      "stock": 17,
      "category": "Nike",
      "image":"https://lh3.googleusercontent.com/LMksTOCuLUXpJayyqtNWBMviAP6MHVSD2xdV0F4-IVflhcbAu7MFSzx5m-JWAHqRaLjJXamUyQd5Kz9lStyOZZy7kBoRUZDYtWa5IVin",
      "description":"Nike Skateboarding se asoció con la legendaria banda de rock psicodélico Grateful Dead para lanzar el Nike SB Dunk Low Grateful Dead Bears Yellow, ahora disponible en StockX."
    },
    {
      "id": 6,
      "name": "Nike Air Force Off-White",
      "precio": "$4.000",
      "stock": 1,
      "category": "Nike",
      "image":"https://lh3.googleusercontent.com/jhch_NoDhkUH3pbThQKvja5QjpvfZ5EQLOpS0-nZDjSCVgIoNuL8zhgpi0ZipKJiCV1X3cJSqBr2tHz-8QAAR2oTRjQ9AKZcQT_tbKSm",
      "description":"Este Nike Air Force 1 Low se realizó en colaboración con el sello Off-White de Virgil Abloh. Como parte de la serie Ghosting, este par viene en un color negro limpio y vela."
    },
    
  ])
  const idFilter = products.filter((prod) => prod.id == id)
  return (
    <>
    <ItemDetail products={idFilter}/>
    </>
  )
}

export default ItemDetailContainer