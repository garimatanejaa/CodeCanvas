/*import React from 'react';
import { Box, Heading, SimpleGrid, Text, Container } from '@chakra-ui/react';

function Projects() {
  return (
    <Box id="projects" py={10}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={4}>My Projects</Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Project 1</Heading>
            <Text mt={4}>Description of project 1.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Project 2</Heading>
            <Text mt={4}>Description of project 2.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Data Visualisation Application</Heading>
            <Text mt={4}>Description of project 3.</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Projects;*/
import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, Text, Container, Skeleton, Link, Code, Flex, useColorModeValue } from '@chakra-ui/react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const bgcol= useColorModeValue('gray.10', 'gray.900');

  useEffect(() => {
    // Simulate fetching project data from an API
    setTimeout(() => {
      const dummyProjects = [
        { id: 1, title: 'Portfolio (this)', description: 'A visually appealing portfolio website showcasing your achievements and projects with an elegant design, allowing you to present your merits in an aesthetically pleasing manner.                                                                                                                                          ', link: 'https://garimacodes.vercel.app/', source: 'https://github.com/garimatanejaa/resumee', skills: ['React', 'Chakra UI', 'JavaScript'] },
        { id: 2, title: 'CO2 Emission Predictor', description: 'Extensive information on various cars and their corresponding CO2 emissions was collected and utilized in the analysis, a robust model was constructed to accurately predict CO2 emissions. ject sought to contribute to the comprehension and mitigation of environmental impacts associated with vehicle emissions.', link: 'https://co2emmission-garimataneja.streamlit.app/', source: 'https://github.com/garimatanejaa/co2emmission', skills: ['Python', 'Numpy', 'Seaborn','Pandas'] },
        { id: 3, title: 'Interactive Data Visualization Application', description: 'This Java-based application is designed to help users create and display various types of charts, including pie charts, bar charts, and line graphs. The project leverages JavaFX and a variety of JavaFX libraries to deliver a dynamic and interactive data visualization experience.', link: 'https://github.com/garimatanejaa/datavis/tree/main', source: 'https://github.com/garimatanejaa/datavis/tree/main', skills: ['Java','JavaFx'] },
      ];
      setProjects(dummyProjects);
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  return (
    <Box id="projects" py={10} bg={bgcol}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={4}>My Projects 🗒</Heading>
        {loading ? (
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            {[...Array(4)].map((_, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Skeleton height="20px" mb={4} />
                <Skeleton height="16px" />
                <Skeleton height="16px" mt={2} />
                <Skeleton height="16px" mt={2} />
                <Skeleton height="16px" mt={2} />
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
                  transition="0.3s ease-in-out"
                  position="relative"
                >
                  <Heading fontSize="xl">{project.title}</Heading>
                  <Text mt={4}>{project.description}</Text>
                  <Flex mt={2} alignItems="center">
                    <Box flex="1">
                      {project.skills.map((skill, index) => (
                        <Code key={index} colorScheme="blue" mr={2}>
                          {skill}
                        </Code>
                      ))}
                    </Box>
                    <Link href={project.source} color="blue.500">
                      View Source Code
                    </Link>
                  </Flex>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}

export default Projects;

