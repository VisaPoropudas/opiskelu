import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => { 
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider
            value={{    theme, 
                        toggleTheme: () => setTheme(theme === "light" ? "black" : "light")
            }}>
            {children}
        </ThemeContext.Provider>
    )    
};

export const useTheme = () => useContext(ThemeContext);

