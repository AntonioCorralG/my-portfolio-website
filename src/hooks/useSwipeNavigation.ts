// src/hooks/useSwipeNavigation.ts
import { useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SwipeNavigationOptions {
  threshold?: number;
  velocity?: number;
}

export const useSwipeNavigation = (navItems: { path: string; label: string }[], options?: SwipeNavigationOptions) => {
  const { threshold = 50, velocity = 0.3 } = options || {};
  const location = useLocation();
  const navigate = useNavigate();
  const startX = useRef(0);
  const startTime = useRef(0);
  const currentPathIndex = useRef(navItems.findIndex(item => item.path === location.pathname));

  useEffect(() => {
    // Update the current path index whenever the location changes
    currentPathIndex.current = navItems.findIndex(item => item.path === location.pathname);
  }, [location.pathname, navItems]);

  // These handlers will now be called directly by React's onTouchStart/End.
  // Their type is React.TouchEvent<HTMLDivElement> because they are attached to a div.
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.nativeEvent.touches[0].clientX;
    startTime.current = Date.now();
  }, []); // Dependencies are stable

  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.nativeEvent.changedTouches[0].clientX;
    const endTime = Date.now();

    const deltaX = endX - startX.current;
    const deltaTime = endTime - startTime.current;
    const calculatedVelocity = Math.abs(deltaX / deltaTime);

    if (Math.abs(deltaX) > threshold && calculatedVelocity > velocity) {
      // Swipe detected
      if (deltaX > 0) { // Swiped right (show previous page)
        const prevIndex = currentPathIndex.current - 1;
        if (prevIndex >= 0) {
          navigate(navItems[prevIndex].path);
        }
      } else { // Swiped left (show next page)
        const nextIndex = currentPathIndex.current + 1;
        if (nextIndex < navItems.length) {
          navigate(navItems[nextIndex].path);
        }
      }
    }
  }, [navigate, navItems, threshold, velocity]); // Add all relevant dependencies

  // Explicitly return the handlers
  return { handleTouchStart, handleTouchEnd };
};

export const mobileNavItems = [
  { path: '/', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact Me' },
];