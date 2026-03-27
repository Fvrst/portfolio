import { useEffect } from 'react'
import { themes, ACTIVE_THEME } from '../themes'

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const theme = themes[ACTIVE_THEME]
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      if (key.startsWith('--')) {
        root.style.setProperty(key, value)
      }
    })
  }, [])

  return children
}

export default ThemeProvider
