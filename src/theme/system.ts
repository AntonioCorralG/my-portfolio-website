// src/theme/system.ts
import { createSystem, defaultConfig } from '@chakra-ui/react';
import config from './config'; // Your theme config with semantic tokens
// You can import and merge other theme parts here if you want to use the
// older extendTheme approach for parts not covered by semantic tokens,
// but for colors, semanticTokens is the way to go in v3.

export const system = createSystem(defaultConfig, config);