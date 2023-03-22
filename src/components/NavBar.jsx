
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
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



  return (

    <>
      <ChakraProvider>
        <Container maxW="150rem" bg="gray.400" color=""  >
          <Flex alignItems="center"  gap="5">
            <Link to={"/"}>
              <Avatar
                size="lg"
                src="https://cdn-icons-png.flaticon.com/512/5/5115.png"
              />
            </Link>
            <Box p="10" w="300px" h="100">
              <Heading size="md" >
                <Link to={"/"}>Bolt</Link>
              </Heading>
            </Box>
            
            
            
            <Box > 
              <Menu >
                <Link to={"/catalogue"}>
                  <MenuButton
                    as={Button}
                    borderRadius='3xl'
                    _expanded={{ bg: 'gray.200' }}
                    size="lg"
                    color="black"
                    colorScheme=""
                    m="5"
                    className='nav-bar'
                  >
                    Catalogue
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  borderRadius='3xl'
                  _expanded={{ bg: 'gray.200' }}
                  size="lg"
                  color="black"
                  colorScheme=""
                  rightIcon={<ChevronDownIcon />}
                  m="5"
                  className='nav-bar'
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
              <Menu>
                <Link to={"/contact"}>
                  <MenuButton
                    as={Button}
                    borderRadius='3xl'
                    _expanded={{ bg: 'gray.200' }}
                    size="lg"
                    color="black"
                    colorScheme=""
                    m="5"
                    className='nav-bar'
                  >
                    Contact
                  </MenuButton>
                </Link>
              </Menu>
            </Box>
            
            
              <Box p="6" >  
                <Link to={"/cart"}>
                  <CartWidget  />
                </Link>
              </Box>
              </Flex>


          
        </Container>

      </ChakraProvider>

    </>

  )
}

export default NavBar