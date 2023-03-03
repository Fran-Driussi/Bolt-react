
import CartWidget from './CartWidget'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'


const NavBar = () => {
  const [carrito, setCarrito]= useState(0)

  const restar =() =>{
  if (carrito < 1){
    alert("No hay mas productos")
  }
  else{
    
      setCarrito (carrito - 1);
    
  }
}

const onAdd = ()=>{
  alert("Agregado al carrito")
}
  return (

    <>
    <ChakraProvider>
      <nav>
      <h2>Bolt</h2>
      <Breadcrumb separator='-'>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem className='nav'>
  <BreadcrumbLink><CartWidget numero={carrito} /></BreadcrumbLink>
  <button onClick={()=> setCarrito(carrito + 1)}>Sumar producto </button>
          <button onClick={restar}>Eliminar producto</button>
          <button onClick={onAdd}>Agregar al carrito</button>
  </BreadcrumbItem>
</Breadcrumb>
      </nav>
      </ChakraProvider>

    </>

  )
}

export default NavBar