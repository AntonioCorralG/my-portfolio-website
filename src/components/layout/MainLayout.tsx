import React, { useRef, useEffect } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react'; // Import useBreakpointValue
import Header from './Header';
import Footer from './Footer';
import { useSwipeNavigation, mobileNavItems } from '@/hooks/useSwipeNavigation'; // Import the hook and nav items

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false }); // Determine if on mobile breakpoint

  const attachSwipeListeners = useSwipeNavigation(mobileNavItems);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    if (isMobile) { // Only attach swipe listeners on mobile
      cleanup = attachSwipeListeners(mainContentRef.current);
    }
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [isMobile, attachSwipeListeners]);

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
        ref={mainContentRef} // Attach ref for swipe detection
        overflowX="hidden" // Prevent horizontal scrollbar during swipe
        onTouchStart={isMobile ? (e) => mainContentRef.current?.dispatchEvent(new TouchEvent('touchstart', e.nativeEvent)) : undefined}
        onTouchEnd={isMobile ? (e) => mainContentRef.current?.dispatchEvent(new TouchEvent('touchend', e.nativeEvent)) : undefined}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;