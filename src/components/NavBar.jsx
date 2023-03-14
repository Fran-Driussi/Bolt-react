
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


const NavBar = () => {
  const [carrito, setCarrito]= useState(0)


  return (

    <>
    <ChakraProvider>
    <Container maxW="150rem" bg="gray.400" color="">
        <Flex alignItems="center" gap="2">
        <Link to={"/"}>
          <Avatar
            size="xl"
            src="https://cdn-icons-png.flaticon.com/512/5/5115.png"
          />
          </Link>
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>Bolt</Link>
            </Heading>
          </Box>
          
          <Box>
          <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'inline' }}
                  size="lg"
                  variant="outline"
                  colorScheme=""
                  m="5"
                >
                  Catalogue
                </MenuButton>
              </Link>
            </Menu>
              <Menu>
              <MenuButton
                as={Button}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'inline' }}
                size="lg"
                variant="outline"
                colorScheme=""
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categories
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Nike"}`}>
                  <MenuItem>Nike</MenuItem>
                </Link>
                <Link to={`/category/${"Otro"}`}>
                  <MenuItem>Otro</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer>
          <Box p="10"  h="100">
              <CartWidget />
          </Box>
          </Spacer>
          
          
        </Flex>
      </Container>
    
      </ChakraProvider>

    </>

  )
}

export default NavBar