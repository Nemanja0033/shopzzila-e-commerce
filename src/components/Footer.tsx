import {  Github } from "lucide-react"

const Footer = () => {
    return(
        <div className="w-full flex-row mt-[100px] text-primary">
            <div className="w-full flex justify-center mb-3 gap-4">
                <p className="">Shopzzila 2024</p>
                <a href="https://github.com/Nemanja0033" className="flex"><Github />Nemanja Antonijevic</a>
            </div>
        </div>
    )
}

export default Footer