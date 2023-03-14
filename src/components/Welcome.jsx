import React from 'react';
import { Center, Box, Image } from "@chakra-ui/react";
const Welcome = () => {
  return (
    <div >
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://sothebys-com.brightspotcdn.com/3a/3d/1f286f6841e2bf0d90402eb9bbc1/063022-mfm-sneakers-084.jpg"
            alt="Shoes"
          />
        </Box>
      </Center>
    </div>
  )
}

export default Welcome