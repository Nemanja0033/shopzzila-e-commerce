import { MoonIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggler = () => {
    const [themeIcon, setThemeIcon] = useState(<MoonIcon />);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    }, []);

    const applyDarkTheme = () => {
        document.body.style.backgroundColor = '#262626';
        document.getElementsByTagName('nav')[0].style.backgroundColor = '#262626';
        setThemeIcon(<SunIcon />);
        changeTextColor('white');
    };

    const applyLightTheme = () => {
        document.body.style.backgroundColor = 'white';
        document.getElementsByTagName('nav')[0].style.backgroundColor = 'white';
        setThemeIcon(<MoonIcon />);
        changeTextColor('black');
    };

    const changeTextColor = (color: string) => {
        const elements = [
            ...document.getElementsByTagName('p'),
            ...document.getElementsByTagName('h1'),
            ...document.getElementsByTagName('h2'),
            ...document.getElementsByTagName('option'),
            ...document.getElementsByTagName('span'),
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
