import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './context/CartContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'


createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <CartProvider>
     <App />
  </CartProvider>
  </ThemeProvider>
)
