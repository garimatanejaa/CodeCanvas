import React from 'react';
import { Box, Text,useColorModeValue } from '@chakra-ui/react';

function Footer() {
  const bgcol= useColorModeValue('gray.10', 'gray.900');
  return (
    <Box bg={bgcol}  py={4} textAlign="center">
      <Text>&copy; 2024 Garima Taneja. Made with ❤️.</Text>
    </Box>
  );
}

export default Footer;
