// import { useColorModeValue } from "@/components/ui/color-mode";

// Function to get status colors using your theme colors
export const getStatusColors = (status: string, colorMode: 'light' | 'dark') => {
  switch (status) {
    case 'completed':
      return {
        bg: colorMode === 'light' ? 'secondaryGreen.solid' : 'secondaryGreen.solid',
        color: 'white'
      };
    case 'in-progress':
      return {
        bg: colorMode === 'light' ? 'accent.solid' : 'accent.solid',
        color: 'white'
      };
    case 'planning':
      return {
        bg: colorMode === 'light' ? 'gray.500' : 'gray.400',
        color: 'white'
      };
    default:
      return {
        bg: 'gray.500',
        color: 'white'
      };
  }
};