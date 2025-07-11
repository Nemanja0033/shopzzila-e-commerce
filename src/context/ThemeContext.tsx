import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../types";


const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode}) => {
    const [ theme, setTheme] = useState<any>(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const toggleChange = () => {
        if(theme == 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme: any = localStorage.getItem('theme');
        document.querySelector('html')?.setAttribute("data-theme", localTheme);
    });

    return <ThemeContext.Provider value={{theme, toggleChange}}>
        { children }
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within CartProvider");
    return context;
};