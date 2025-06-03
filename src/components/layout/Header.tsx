import React from 'react';
import { Box, Flex, HStack, Text, Button, useBreakpointValue } from '@chakra-ui/react'; // Import useBreakpointValue
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive }) => {
  const activeColor = useColorModeValue('primary.solid', 'primary.solid');
  const inactiveColor = useColorModeValue('fg.muted', 'fg.muted'); // Keep inactive muted

  const fontSize = useBreakpointValue({
    base: isActive ? 'lg' : 'sm', // On mobile, active is 'lg', inactive is 'sm'
    md: isActive ? 'xl' : 'md',  // On desktop, active is 'xl', inactive is 'md'
  });

  return (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      color={isActive ? activeColor : inactiveColor}
      fontWeight={isActive ? 'bold' : 'normal'}
      fontSize={fontSize} // Use the responsive font size
      _hover={{ color: activeColor, textDecoration: 'underline' }}
      whiteSpace="nowrap" // Prevent wrapping for short labels
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

  // Determine if it's a mobile view
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="header" width="100%" px={{ base: 4, md: 8 }} py="4" borderBottom="1px" borderColor="border.DEFAULT" bg="bg.DEFAULT" position="sticky" top="0" zIndex="sticky">
      <Flex align="center" justify="space-between" maxW="container.xl" mx="auto"
        // Adjust flex direction based on mobile/desktop
        direction={{ base: 'column', md: 'row' }}
      >
        {/* Mobile: Big Title, Desktop: Your Name (Logo) */}
        <Text
          fontSize={{ base: '2xl', md: '2xl' }} // Keep 2xl on mobile, also 2xl on desktop
          fontWeight="bold"
          color="primary.solid"
          as={RouterLink} to="/"
          mb={{ base: 2, md: 0 }} // Add margin bottom on mobile for spacing
          display={{ base: 'block', md: 'block' }} // Always display
        >
          {isMobile ? navItems.find(item => item.path === activePath)?.label || 'Portfolio' : 'Gonzalo Corral'}
        </Text>

        {/* Mobile Navigation: horizontal scroll for smaller links */}
        <HStack as="nav" spacing={{ base: 1, md: 8 }} // Smaller spacing on mobile
          display="flex" // Always display the nav bar
          overflowX="auto" // Allow horizontal scrolling if links overflow
          pb={{ base: 2, md: 0 }} // Padding bottom on mobile for scroll indicator
          width="100%" // Take full width on mobile
          justify={{ base: 'center', md: 'flex-end' }} // Center nav links on mobile
          flexShrink={0} // Don't shrink the nav links
          px={{ base: 2, md: 0 }} // Add padding for scrolling
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              label={item.label}
              isActive={activePath === item.path}
            />
          ))}
          {/* Color mode button outside of the scrolling nav for mobile */}
          {!isMobile && <ColorModeButton />} {/* Show on desktop only for now */}
        </HStack>

        {/* Mobile Color Mode Button (separate from nav for layout flexibility) */}
        {isMobile && (
          <Box mt={2}> {/* Add margin top for spacing */}
            <ColorModeButton />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;