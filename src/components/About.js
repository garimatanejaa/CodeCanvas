/*import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';
import './resume.css';
function About() {
    return (
      <Box id="about" py={10} bg="gray.50">
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={4}>About Me</Heading>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ marginRight: '20px' }}></div>
          <Text fontSize="lg">
          Hi! I am currently pursuing my Pre-Final year at Amity University, Noida, my academic journey has instilled a strong foundation in various fields. I hold a particular interest in Artificial Intelligence and Machine Learning, which fuels my passion for continuous learning and expanding my technical skillset. This drive extends beyond just AI – I possess a keen interest in learning new programming languages and have a strong fascination with the business world.
          </Text>
          </div>
          <div>
          <img src="./DSCF2578.JPG" alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      </div>
          <br /> {*//* Adds a line break for spacing *//*}
          <div className="resume-download">
                    <a
                      href="files/Resume_GarimaTaneja.pdf"
                      download="GarimaTaneja.pdf"
                      className="resume-link"
                    >
                      Click here to download my Resume ☞ 
                    </a>
                  </div>
        </Container>
      </Box>
    );
  }
  
  export default About;*/
  import React from 'react';
  import { Box, Heading, Text, Container, useColorModeValue } from '@chakra-ui/react';
  import './resume.css';
  import logo from './garima copy.jpg';
  
  function About() {
    // Directly using the color value in the Box component
    const bgcol = useColorModeValue('gray.10', 'gray.900'); // Background color based on the color mode
  
    return (
      <Box id="about" py={10} bg={bgcol}>
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={4}>About Me 👩🏻‍💻</Heading>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text fontSize="lg">
              Hi, I'm Garima Taneja, a pre-final year B.Tech Computer Science student at AMITY University. I was born in Delhi, India, and moved to the UAE shortly after. I completed most of my schooling there and finished high school in Noida, India. I have a strong passion for Machine Learning and front-end development, as well as a keen interest in finance. I am passionate about using technology as an enabler to empower organizations, communities, and individuals.
            </Text>
            <div style={{ marginLeft: '20px' }}>
              <img 
                src={logo} 
                alt="Profile of Garima Taneja, Computer Science student" 
                style={{ width: '500px', height: 'auto' }}
              />
            </div>
          </div>
          <br /> {/* Adds a line break for spacing */}
          <div className="resume-download">
            <a
              href="files/Resume_GarimaTaneja.pdf"
              download="GarimaTaneja.pdf"
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
