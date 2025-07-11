import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggler = () => {
    const { theme, toggleChange } = useTheme();

    return (
        <div>
            {theme == 'light' ? <MoonIcon className="hover:text-primary cursor-pointer" onClick={toggleChange} /> : <SunIcon className="hover:text-primary cursor-pointer" onClick={toggleChange} />}
        </div>
  )
}

export default ThemeToggler