import React from 'react';
import { Box, Container, Heading, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react';

const researchPapers = [
  {
    title: 'The Mathematics Behind Secure Data Exchange Platforms Using Zero-Knowledge Proofs and Quantum Cryptography',
    description: 'This research investigates the application of Zero-Knowledge Proofs and Quantum Cryptography to design a hypothetical high-security data exchange platform. It covers the fundamentals of cryptography, ZKPs, and QC, highlighting their applications in data security. It then examines how these two techniques can be used together to achieve secure data exchange. ',
    link: 'https://drive.google.com/file/d/1J08QMbJDqFdr3kDWiz8onQ1IuGMvJxcP/view?usp=sharing',
  },
  /*{
    title: 'Title of Research Paper 2',
    description: 'Short description of research paper 2.',
    link: 'http://example.com/research-paper-2',
  }*/
  // Add more research papers as needed
];

function Paper({ loading = false }) {
  const bgcol= useColorModeValue('gray.10', 'gray.900');

  return (
    <Box id="papers" py={10} bg={bgcol}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={4} >
          Research Papers 📄
        </Heading>
        <VStack spacing={4} align="start">
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            researchPapers.map((paper, index) => (
              <Box key={index} w="100%">
                <Heading as="h3" size="md">
                  <Link href={paper.link} isExternal>
                    {paper.title}
                  </Link>
                </Heading>
                <Text mt={2}>{paper.description}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default Paper;



