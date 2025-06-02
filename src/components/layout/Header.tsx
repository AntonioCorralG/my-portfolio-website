import React from 'react';
import { Box, Flex, HStack, Text, Button } from '@chakra-ui/react'; // Removed useColorModeValue here
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode'; // <-- IMPORT useColorModeValue from YOUR file

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive }) => {
  const activeColor = useColorModeValue('primary.solid', 'primary.solid');
  const inactiveColor = useColorModeValue('fg.muted', 'fg.muted');

  return (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      color={isActive ? activeColor : inactiveColor}
      fontWeight={isActive ? 'bold' : 'normal'}
      fontSize={isActive ? 'xl' : 'md'}
      _hover={{ color: activeColor, textDecoration: 'underline' }}
    >
      {label}
    </Button>
  );
};

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const navItems = [
    { path: '/', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Me' },
  ];

  return (
    <Box as="header" width="100%" px={{ base: 4, md: 8 }} py="4" borderBottom="1px" borderColor="border.DEFAULT" bg="bg.DEFAULT" position="sticky" top="0" zIndex="sticky">
      <Flex align="center" justify="space-between" maxW="container.xl" mx="auto">
        {/* <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="primary.solid" as={RouterLink} to="/">
          Your Name
        </Text> */}

        <HStack as="nav" spacing={{ base: 4, md: 8 }} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              label={item.label}
              isActive={activePath === item.path}
            />
          ))}
          <ColorModeButton />
        </HStack>

        <Text fontSize={{ base: '2xl', md: '0' }} fontWeight="bold" color="fg.DEFAULT" display={{ base: 'block', md: 'none' }} isTruncated>
          {navItems.find(item => item.path === activePath)?.label || 'Portfolio'}
        </Text>

        <Box display={{ base: 'block', md: 'none' }}>
          <ColorModeButton />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;