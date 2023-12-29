import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Button,
  useBreakpointValue,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import { experienceID } from './Experience';


const Navbar = () => {
  const mobileNav = useBreakpointValue({ base: true, md: false });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      width="100%"
      padding="2"
      position="fixed" // Add this line
      bg="white"
      zIndex={1000} 
    >
      <Box 
        as="button"  
        fontWeight="bold" 
        fontSize="20px" 
        paddingY="3" 
        paddingX="9"
        variant="link"
        onClick={scrollToTop}
      >
        Varuṇ
      </Box>

      {mobileNav ? (
        <Menu>
          <MenuButton as={Button} variant="link" size="lg">
            ☰
          </MenuButton>
          <MenuList>
            <MenuItem variant="link">Resume</MenuItem>
            <MenuItem variant="link">Experience</MenuItem>
            <MenuItem variant="link">Projects</MenuItem>
            <MenuItem variant="link">Contact</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing="20" flexWrap="wrap">
          <Spacer />
          <Button variant="link" >Resume</Button>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('experience');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Experience
          </Button>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('projects');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Projects
          </Button>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('contact');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Contact
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
