import {  Github } from "lucide-react"

const Footer = () => {
    return(
        <div className="w-full flex-row mt-[100px]">
            <div className="w-full flex justify-center mt-3 gap-4">
                <p className="text-gray-400">Shopzzila 2024</p>
                <a href="https://github.com/Nemanja0033" className="text-gray-400 flex"><Github />Nemanja Antonijevic</a>
            </div>
        </div>
    )
}

export default Footer