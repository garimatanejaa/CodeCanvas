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
  const bgcol = useColorModeValue('gray.10', 'gray.900');

  useEffect(() => {
    // Simulate fetching project data from an API
    setTimeout(() => {
      const dummyProjects = [
        { id: 1, title: 'Portfolio (this)', description: 'A visually appealing portfolio website showcasing your achievements and projects with an elegant design, allowing you to present your merits in an aesthetically pleasing manner.', link: 'https://garimacodes.vercel.app/', source: 'https://github.com/garimatanejaa/resumee', skills: ['React', 'Chakra UI', 'JavaScript'] },
        { id: 2, title: 'CO2 Emission Predictor', description: 'Extensive information on various cars and their corresponding CO2 emissions was collected and utilized in the analysis, a robust model was constructed to accurately predict CO2 emissions. ject sought to contribute to the comprehension and mitigation of environmental impacts associated with vehicle emissions.', link: 'https://co2emmission-garimataneja.streamlit.app/', source: 'https://github.com/garimatanejaa/co2emmission', skills: ['Python', 'Numpy', 'Seaborn','Pandas'] },
        { id: 3, title: 'Interactive Data Visualization Application', description: 'This Java-based application is designed to help users create and display various types of charts, including pie charts, bar charts, and line graphs. The project leverages JavaFX and a variety of JavaFX libraries to deliver a dynamic and interactive data visualization experience.', link: 'https://github.com/garimatanejaa/datavis/tree/main', source: 'https://github.com/garimatanejaa/datavis/tree/main', skills: ['Java','JavaFx'] },
        { id: 4, title: 'Password Generator', description: 'A password generator that creates strong, unique passwords based on user preferences, enhancing security and preventing unauthorized access.', link: 'https://password-generator-henna-pi.vercel.app/', source: 'https://github.com/garimatanejaa/password-generator', skills: ['ReactJs','ChakraUI','HTML'] },
        { id: 5, title: 'InvoQuote Generator', description: 'A customizable React-based invoice generation system allowing small business owners to create and store detailed invoices easily.', link: 'https://invoice-generator-kappa-lake.vercel.app/', source: 'https://github.com/garimatanejaa/invoice-generator', skills: ['ReactJs','Bootstrap','HTML'] },
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
              <Box
                key={project.id}
                p={5}
                shadow="md"
                borderWidth="1px"
                _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
                transition="0.3s ease-in-out"
                position="relative"
                height="400px" // Ensure all boxes have the same height
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Heading fontSize="xl">{project.title}</Heading>
                  <Text mt={4}>{project.description}</Text>
                </Box>
                <Flex mt={2} alignItems="center" justifyContent="space-between">
                  <Box>
                    {project.skills.map((skill, index) => (
                      <Code key={index} colorScheme="blue" mr={2}>
                        {skill}
                      </Code>
                    ))}
                  </Box>
                  <Box>
                    <Link href={project.source} color="blue.500" mr={1}>
                       Source
                    </Link>
                    <Text as="span" mx={1}>|</Text>
                    <Link href={project.link} color="blue.500">
                      Project
                    </Link>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}

export default Projects;


