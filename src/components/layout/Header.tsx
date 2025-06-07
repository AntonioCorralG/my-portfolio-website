import React from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  Text, 
  Button, 
  Container,
  IconButton,
  useBreakpointValue 
} from '@chakra-ui/react';
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode';
import { FaBars } from 'react-icons/fa';
import { motion } from "framer-motion";

// Motion components  
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive, onClick }) => {
  const primaryColor = useColorModeValue('primary.solid', 'primary.solid');
  const textMuted = useColorModeValue('gray.600', 'gray.400');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      size="sm"
      color={isActive ? primaryColor : textMuted}
      fontWeight={isActive ? '600' : '400'}
      fontSize="sm"
      px={3}
      py={2}
      borderRadius="lg"
      position="relative"
      onClick={onClick}
      _hover={{ 
        color: primaryColor,
        bg: hoverBg,
      }}
      _after={isActive ? {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20px',
        height: '2px',
        bg: primaryColor,
        borderRadius: 'full'
      } : {}}
      transition="all 0.2s ease"
      whiteSpace="nowrap"
    >
      {label}
    </Button>
  );
};

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;
  
  const primaryColor = useColorModeValue('primary.solid', 'primary.solid');
  const headerBg = useColorModeValue('white/80', 'gray.900/80');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const inactiveColor = useColorModeValue('gray.700', 'gray.300');
  const menuBg = useColorModeValue('white', 'gray.800');
  const menuHoverBg = useColorModeValue('gray.50', 'gray.700');


  const navItems = [
    { path: '/', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MotionBox
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg={headerBg}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <MotionFlex
          align="center"
          justify="space-between"
          h="16"
          gap={4}
        >
          {/* Logo/Brand */}
          <Text
            as={RouterLink}
            to="/"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="800"
            color={primaryColor}
            textDecoration="none"
            _hover={{ 
              transform: 'scale(1.05)',
              color: primaryColor
            }}
            transition="all 0.2s ease"
            flexShrink={0}
          >
            Gonzalo Corral
          </Text>

          {/* Desktop Navigation */}
          {!isMobile && (
            <HStack gap={1} flex="1" justify="center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  label={item.label}
                  isActive={activePath === item.path}
                />
              ))}
            </HStack>
          )}

          {/* Right Section */}
          <HStack flexShrink={0}>
            <ColorModeButton />
            
            {/* Mobile Menu */}
            {isMobile && (
              <MenuRoot>
                <MenuTrigger asChild>
                  <IconButton
                    variant="ghost"
                    size="sm"
                    aria-label="Open navigation menu"
                    _hover={{ 
                      bg: hoverBg, 
                    }}
                  >
                    <FaBars />
                  </IconButton>
                </MenuTrigger>
                <MenuContent
                  bg={menuBg}
                  border="1px solid"
                  borderColor={borderColor}
                  boxShadow="lg"
                  minW="200px"
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      asChild
                      color={activePath === item.path ? primaryColor : inactiveColor}
                      fontWeight={activePath === item.path ? '600' : '400'}
                      _hover={{ 
                        bg:menuHoverBg,
                        color: primaryColor
                      }}
                      _focus={{ 
                        bg: menuHoverBg,
                      }}
                      value={item.path}
                    >
                      <Text
                        as={RouterLink}
                        to={item.path}
                        display="block"
                        w="100%"
                        px={3}
                        py={2}

                      >
                        {item.label}
                      </Text>
                    </MenuItem>
                  ))}
                </MenuContent>
              </MenuRoot>
            )}
          </HStack>
        </MotionFlex>
      </Container>
    </MotionBox>
  );
};

export default Header;