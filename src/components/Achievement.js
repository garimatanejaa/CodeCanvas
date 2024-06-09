import React from 'react';
import { Box, UnorderedList, ListItem, Container, Heading, useColorModeValue } from '@chakra-ui/react';

function Achievement() {
  // Correct application of useColorModeValue to determine background color
  const bgcol = useColorModeValue('gray.10', 'gray.900');

  return (
    <Box id="My_Space" py={10} bg={bgcol}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={4}>Achievements 🏆</Heading>
        <UnorderedList>
          <ListItem>AWS Gen AI Scholarship - Qualified - May 2024</ListItem>
          <ListItem>Google Girl Hackathon - Qualified round 1 - June 2023</ListItem>
          <ListItem>Women Who Code + LINUX Foundation Scholar - December 2022</ListItem>
          <ListItem>Received 100% Scholarship from IBM Quantum for a foundational course on Quantum Computing worth $1000 - September 2022</ListItem>
          <ListItem>Merit-Based Scholar - AMITY University - September 2022</ListItem>
          <ListItem>Secured 1st position at CSIR CCMB Govt of India research paper contest - January 2021</ListItem>
          {/* Add more achievements as needed */}
        </UnorderedList>
      </Container>
    </Box>
  );
}

export default Achievement;
