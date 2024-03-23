import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true) // Set initial mode to true (dark mode)

  // Load the theme from localStorage when the component mounts
  useEffect(() => {
    setIsDarkMode(false)
  }, [])

  return <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
