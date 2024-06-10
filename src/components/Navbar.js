/*import React from 'react';
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex py={4} justify="center" align="center" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
      <Flex align="center">
        <Link to="/About" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>About</Text>
        </Link>
        <Link to="/Projects" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>Projects</Text>
        </Link>
        <Link to="/Achievement" style={{ textDecoration: 'none', margin: '0 10px' }}>
  <Text _hover={{ textDecoration: 'underline' }}>Achievements</Text>
</Link>
        <Link to="/Contact"  style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>Contact</Text>
        </Link>
      </Flex>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle Dark Mode"
        ml={2}
      />
    </Flex>
  );
}

export default Navbar;*/
// Navbar.js
import React from 'react';
import { 
  Flex, 
  Text, 
  IconButton, 
  useColorMode, 
  useDisclosure, 
  Stack, 
  Box 
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex 
        py={4} 
        justify="space-between" 
        align="center" 
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        px={4}
      >
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={isOpen ? <FaTimes /> : <FaBars />}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Box>
        <Flex 
          flex="1" 
          justify="center" 
          align="center"
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            mt={{ base: 4, md: 0 }}
          >
            <a href="#about" style={{ textDecoration: 'none', margin: '0 10px' }}>
              <Text _hover={{ textDecoration: 'underline' }}>About</Text>
            </a>
            <a href="#projects" style={{ textDecoration: 'none', margin: '0 10px' }}>
              <Text _hover={{ textDecoration: 'underline' }}>Projects</Text>
            </a>
            <a href="#paper" style={{ textDecoration: 'none', margin: '0 10px' }}>
              <Text _hover={{ textDecoration: 'underline' }}>Research Paper</Text>
            </a>
            <a href="#achievements" style={{ textDecoration: 'none', margin: '0 10px' }}>
              <Text _hover={{ textDecoration: 'underline' }}>Achievements</Text>
            </a>
            <a href="#contact" style={{ textDecoration: 'none', margin: '0 10px' }}>
              <Text _hover={{ textDecoration: 'underline' }}>Socials</Text>
            </a>
          </Flex>
        </Flex>
        <IconButton
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle Dark Mode"
          ml={2}
        />
      </Flex>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '0' }} />
    </Box>
  );
}

export default Navbar;





