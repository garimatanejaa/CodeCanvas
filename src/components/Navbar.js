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
import { Flex, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
    <Flex py={4} justify="center" align="center" bg={colorMode === 'dark' ? 'gray.800' : 'white'}>
      <Flex align="center">
        <a href="#about" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>About</Text>
        </a>
        <a href="#projects" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>Projects</Text>
        </a>
        <a href="#paper"  style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>Research Paper</Text>
        </a>
        <a href="#achievements" style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>Achievements</Text>
        </a>
        <a href="#contact"  style={{ textDecoration: 'none', margin: '0 10px' }}>
          <Text _hover={{ textDecoration: 'underline' }}>Socials</Text>
        </a>
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
    </div>
  );
}

export default Navbar;



