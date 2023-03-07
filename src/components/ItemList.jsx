import React from 'react'
import Data from  "../data.json"
import { ChakraProvider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Stack,  Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const ItemList = () => {
  return (
    <ChakraProvider>
    <div>
      {Data.map((prod)=>{
      return(
        
        <Card maxW='sm' key={prod.id}>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{prod.name}</Heading>
      <Text>
        stock : {prod.stock}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {prod.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        
      )
    })}</div>
    </ChakraProvider>
  )
  
}

export default ItemList