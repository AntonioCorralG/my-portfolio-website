import React from 'react'; // Removed useEffect if no longer needed for attaching listeners
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { useSwipeNavigation, mobileNavItems } from '@/hooks/useSwipeNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Correctly destructure the returned handlers from useSwipeNavigation
  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation(mobileNavItems);


  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="bg.DEFAULT" color="fg.DEFAULT">
      <Header />
      <Box
        as="main"
        flex="1"
        p={{ base: 4, md: 8 }}
        maxW="container.xl"
        mx="auto"
        width="100%"
        overflowX="hidden"
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;