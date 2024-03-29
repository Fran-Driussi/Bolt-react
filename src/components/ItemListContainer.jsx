import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from "firebase/firestore"

const ItemListContainer = ({}) => {

  const {Categoria} = useParams();
  const [products, setProducts] =useState([])
    

useEffect(()=>{
  const db = getFirestore();
  const itemsCollection = collection(db, "zapatillas");
  getDocs(itemsCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=> doc.data())
    setProducts(docs);
    
  })

}, [])
  
const catFilter= products.filter((prod)=> prod.Categoria === Categoria)

  return (
    <>
      {Categoria? <ItemList products={catFilter}/> :   <ItemList products={products}/>}
  
  </>
  )
}
export default ItemListContainer