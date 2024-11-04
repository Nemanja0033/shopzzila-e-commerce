import { MoonIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThemeToggler = () => {
    const [themeIcon, setThemeIcon] = useState(<MoonIcon />);

    const location = useLocation()

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    }, [location]);

    const applyDarkTheme = () => {
        document.body.style.backgroundColor = '#262626';
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#262626';
    
        const smNav = document.getElementById('sm-nav');
        if (smNav) {
            smNav.style.backgroundColor = '#262626';
        }
    
        setThemeIcon(<SunIcon className=" hover:text-primary" />);
        changeTextColor('white');
    };
    
    const applyLightTheme = () => {
        document.body.style.backgroundColor = 'white';
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'white';
    
        const smNav = document.getElementById('sm-nav');
        if (smNav) {
            smNav.style.backgroundColor = 'white';
        }
    
        setThemeIcon(<MoonIcon className=" hover:text-primary" />);
        changeTextColor('black');
    };
    

    const changeTextColor = (color: string) => {
        
        const elements = [
            ...document.getElementsByTagName('p'),
            ...document.getElementsByTagName('h1'),
            ...document.getElementsByTagName('h2'),
            ...document.getElementsByTagName('option'),
            ...document.getElementsByTagName('input'),
        ];
 
            elements.forEach((element) => {
            element.style.color = color;
        });
    };

    const toggler = () => {
        const body = document.body;

        if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark'); 
        } else {
            applyLightTheme();
            localStorage.setItem('theme', 'light'); 
        }
    };

    return (
        <div className="cursor-pointer hover{color-primary}" onClick={toggler}>
            {themeIcon}
        </div>
    );
};

export default ThemeToggler;
