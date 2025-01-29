
  import React from 'react';
  import { Box, Heading, Text, Container, useColorModeValue } from '@chakra-ui/react';
  import './resume.css';
  import logo from './garima copy.png';
  import resumePDF from './garima_resume.pdf';
  
  function About() {
    // Directly using the color value in the Box component
    const bgcol = useColorModeValue('gray.10', 'gray.900'); // Background color based on the color mode
  
    return (
      <Box id="about" py={10} bg={bgcol}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={4}>About Me 👩🏻‍💻</Heading>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text fontSize="lg">
              Hi, I'm Garima Taneja, a pre-final year B.Tech Computer Science student at Amity University. I am a Maching Learning Cohort lead @Codess.Cafe and I am also an upcoming summer intern 2025 @Adobe . I plan on continuing my career as a software engineer / developer for the forseeable future. 
              I have worked on a variety of projects and have a varied techstack. 
              I am an avid reader and would love some fantasy fiction book recommendations. 
              I play table tennis and engage in other creative actitvities like painting ocasionallly.
              Well, that's me!  
            </Text>
            <div style={{ marginLeft: '20px' }}>
              <img 
                src={logo} 
                alt="Profile of Garima Taneja, Computer Science student" 
                style={{ width: '1000px', height: 'auto' }}
              />
            </div>
          </div>
          <br /> {/* Adds a line break for spacing */}
          <div className="resume-download">
            <a
              href={resumePDF}
              download="garima_resume.pdf"
              className="resume-link"
              style={{ color: 'blue' }}
            >
              Click here to download my Resume →
            </a>
          </div>
        </Container>
      </Box>
    );
  }
  
  export default About;  
