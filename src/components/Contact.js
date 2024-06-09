import React from 'react';
import { Box, Heading, Text, Container, useColorModeValue, Link } from '@chakra-ui/react';

function Contact() {
  const bgcol = useColorModeValue('gray.10', 'gray.900');
  return (
    <Box id="My_Space" py={8} bg={bgcol}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={4}>Let's Connect 🤝🏻</Heading>
        <Text fontSize="lg" mt={3}>
          LinkedIn: {' '}
          <Link
            href="https://www.linkedin.com/in/garima-taneja"
            color="blue.500"
            _hover={{ textDecoration: 'underline' }}
            isExternal
            aria-label="Garima Taneja LinkedIn profile"
          >
            @Garima Taneja
          </Link>
        </Text>
        <Text fontSize="lg" mt={3}>
          GitHub: {' '}
          <Link
            href="https://github.com/garimatanejaa"
            color="blue.500"
            _hover={{ textDecoration: 'underline' }}
            isExternal
            aria-label="Garima Taneja GitHub profile"
          >
            @garimatanejaa
          </Link>
        </Text>
        <Text fontSize="lg" mt={3}>
          Medium: {' '}
          <Link
            href="https://medium.com/@garimacodes"
            color="blue.500"
            _hover={{ textDecoration: 'underline' }}
            isExternal
            aria-label="Garima Taneja Medium profile"
          >
            @garimacodes
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Contact;

