
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


  return (

    <>
    <ChakraProvider>
      <nav>
      <h2>Bolt</h2>
      <Breadcrumb separator='<'>
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
  </BreadcrumbItem>
</Breadcrumb>
      </nav>
      </ChakraProvider>

    </>

  )
}

export default NavBar