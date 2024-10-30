"use client"
import React, { createContext, useState, useContext } from 'react';

// Tentukan tema
const themes = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#333333",
    color: "#ffffff",
  },
  blueSoft: {
    backgroundColor: "#d0e8f2",
    color: "#004080",
  },
};

// Buat konteks
const ThemeContext = createContext();

// ThemeProvider untuk membungkus aplikasi
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook untuk penggunaan tema
export const useTheme = () => useContext(ThemeContext);