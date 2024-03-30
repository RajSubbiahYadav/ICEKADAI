import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { system } from './styles/Themes'
import { AnimatePresence } from 'framer-motion'
import FaqsPage from './pages/FaqsPage'
import PrivacyPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeaturesPage from './pages/FeaturesPage'


function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <GlobalStyles />
      <ThemeProvider theme={system}>
        <AnimatePresence>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<FeaturesPage />} />
              <Route path="/mysteries" element={<FaqsPage />} />
              <Route path="/contact-us" element={<PrivacyPage />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  )
}

export default App
