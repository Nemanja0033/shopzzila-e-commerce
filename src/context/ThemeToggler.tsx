import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

const ThemeToggler = () => {

    const [themeIcon, setThemeIcon] = useState(<MoonIcon />)

    const toggler = () => {
        const body =  document.body;

        if(body.style.backgroundColor === 'white'){
            body.style.backgroundColor = '#262626';
            setThemeIcon(<SunIcon />)
        }
        else {
            body.style.backgroundColor = 'white';
            setThemeIcon(<MoonIcon />)
        }
    }

    return(
        <div className="cursor-pointer" onClick={toggler}>
            {themeIcon}
        </div>
    )
    
}

export default ThemeToggler
