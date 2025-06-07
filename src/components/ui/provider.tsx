import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme/system"; // Import the `system` object from your theme config

import {
  ColorModeProvider} from "./color-mode"
import type { ThemeProviderProps } from "next-themes";

export function Provider(props: ThemeProviderProps) {
  return (
    // Pass the `system` object to ChakraProvider's `value` prop
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
