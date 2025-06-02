// src/hooks/useSwipeNavigation.ts
import { useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SwipeNavigationOptions {
  threshold?: number; // Minimum distance for a swipe to be recognized (pixels)
  velocity?: number; // Minimum velocity for a swipe to be recognized
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

  const handleTouchStart = useCallback((e: TouchEvent | React.TouchEvent) => {
    startX.current = (e instanceof TouchEvent ? e.touches[0].clientX : e.nativeEvent.touches[0].clientX);
    startTime.current = Date.now();
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent | React.TouchEvent) => {
    const endX = (e instanceof TouchEvent ? e.changedTouches[0].clientX : e.nativeEvent.changedTouches[0].clientX);
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
  }, [navigate, navItems, threshold, velocity]);

  const attachListeners = useCallback((element: HTMLElement | null) => {
    if (element) {
      element.addEventListener('touchstart', handleTouchStart as EventListener);
      element.addEventListener('touchend', handleTouchEnd as EventListener);
      // For desktop users who might click-drag (less common for "swipe" but good for full responsiveness)
      // element.addEventListener('mousedown', handleTouchStart as EventListener);
      // element.addEventListener('mouseup', handleTouchEnd as EventListener);
    }
    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart as EventListener);
        element.removeEventListener('touchend', handleTouchEnd as EventListener);
        // element.removeEventListener('mousedown', handleTouchStart as EventListener);
        // element.removeEventListener('mouseup', handleTouchEnd as EventListener);
      }
    };
  }, [handleTouchStart, handleTouchEnd]);

  return attachListeners;
};

// Nav items definition (can be imported or defined directly where hook is used)
export const mobileNavItems = [
  { path: '/', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact Me' },
];