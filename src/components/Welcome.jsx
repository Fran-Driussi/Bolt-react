import React from 'react';
import { Center, Box, Image} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
const Welcome = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000)
  }, [])
  return (
    
    <div >
      {loading ?(
        <Center>
        <Box boxSize="xl" 
       >

          <Image
            src="https://sothebys-com.brightspotcdn.com/3a/3d/1f286f6841e2bf0d90402eb9bbc1/063022-mfm-sneakers-084.jpg"
            alt="Shoes"
            
          />
        </Box>
      </Center>
      ):(
        <ChakraProvider>
          <div className='spinner'>
        <div className=' loader' > </div>
        </div>
      </ChakraProvider>
      )}
      
    </div>
    
  )
}

export default Welcome