import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme/system"; // Import the `system` object from your theme config

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function Provider(props: ColorModeProviderProps) {
  return (
    // Pass the `system` object to ChakraProvider's `value` prop
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
