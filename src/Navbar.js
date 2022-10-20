import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';


 const Navbar = ({ toggleColorFlag }) => {
  return (
    <Flex align="center" boxShadow="base" p="2" mb="2">  
    <Box   p="2" >
      <Heading display="flex" alignItems="center"   size="lg" >Secure N Safe - Support </Heading>
    </Box>
    <Spacer />
    <Box>
      <ColorModeSwitcher toggleColorFlag={toggleColorFlag} />
      {/* <ColorModeSwitcher /> */}
    </Box>
  </Flex>
  )
}

export default Navbar