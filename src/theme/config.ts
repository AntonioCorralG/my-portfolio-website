// src/theme/config.ts
import { defineConfig } from '@chakra-ui/react'; // Removed 'type ThemeConfig'

// Your specified colors (keep these constants for readability)
const BLUE_PRIMARY = '#2A52BF';
const ORANGE_ACCENT = '#BF472A';
const GREEN_SECONDARY = '#81BF2A';
const DARK_BG_ONE = '#1A1A1A';
const DARK_BG_TWO = '#38402E';

const PRIMARY_DARK_BACKGROUND = DARK_BG_ONE;

// Define the theme configuration
const config = defineConfig({
  // The 'theme' property holds all your other theme customizations
  theme: {
    semanticTokens: {
      colors: {
        // Semantic background colors
        bg: {
          DEFAULT: {
            value: { _light: '{colors.gray.100}', _dark: PRIMARY_DARK_BACKGROUND },
          },
          subtle: {
            value: { _light: '{colors.gray.200}', _dark: '{colors.gray.700}' },
          },
          section: {
             value: { _light: '{colors.gray.300}', _dark: DARK_BG_TWO },
          }
        },
        // Semantic foreground (text) colors
        fg: {
          DEFAULT: {
            value: { _light: '{colors.gray.800}', _dark: '{colors.whiteAlpha.900}' },
          },
          muted: {
            value: { _light: '{colors.gray.600}', _dark: '{colors.gray.400}' },
          },
        },
        // Semantic border colors
        border: {
          DEFAULT: {
            value: { _light: '{colors.gray.200}', _dark: '{colors.gray.600}' },
          },
        },

        // Your custom primary and accent colors
        primary: {
          DEFAULT: { value: { _light: BLUE_PRIMARY, _dark: BLUE_PRIMARY } },
          solid: { value: { _light: BLUE_PRIMARY, _dark: BLUE_PRIMARY } },
          muted: { value: { _light: '{colors.blue.100}', _dark: '{colors.blue.900}' } }
        },
        accent: {
          DEFAULT: { value: { _light: ORANGE_ACCENT, _dark: ORANGE_ACCENT } },
          solid: { value: { _light: ORANGE_ACCENT, _dark: ORANGE_ACCENT } },
          muted: { value: { _light: '{colors.red.100}', _dark: '{colors.red.900}' } }
        },
        secondaryGreen: {
          DEFAULT: { value: { _light: GREEN_SECONDARY, _dark: GREEN_SECONDARY } },
          solid: { value: { _light: GREEN_SECONDARY, _dark: GREEN_SECONDARY } },
          muted: { value: { _light: '{colors.green.100}', _dark: '{colors.green.900}' } }
        },

        // You can also override Chakra's default color palettes for specific shades if you need
        gray: {
          50: { value: { _light: '{colors.gray.50}', _dark: '#1A1A1A' } },
        }
      },
    },
    // You can add other standard theme properties here if needed,
    // e.g., fonts, breakpoints, components, spacing, etc.
    // components: { ... }, // This is where you'd add global component styles
    // fonts: { ... },      // This is where you'd define font families
  },
});

export default config;