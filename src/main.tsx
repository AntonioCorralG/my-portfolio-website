import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import './index.css'
import Demo from './App.tsx'
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ColorModeButton } from "@/components/ui/color-mode"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
            <ColorModeButton />
        <Demo />
      </ColorModeProvider>
    </Provider>
  </StrictMode>,
)
