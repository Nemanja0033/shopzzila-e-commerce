import { GithubIcon } from "lucide-react";

const Footer = () => {
    return (
        <><div className="flex flex-col md:flex-row w-full md:justify-evenly p-6 mt-32 shadow-sm">
            <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 mb-6 md:mb-0 md:w-1/3 px-4">
                <h1 className="font-semibold text-2xl mb-3 text-center md:text-left">Shopzzila®</h1>
                <p className="text-gray-500 text-center md:text-left leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            
        <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 mb-6 md:mb-0 md:w-1/4 px-4">
            <h1 className="font-semibold text-2xl mb-3 text-center md:text-left">Company</h1>
            <nav className="text-gray-500 space-y-2 text-center md:text-left">
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About Us</a>
                <a href="#" className="block">Delivery</a>
                <a href="#" className="block">Privacy Policy</a>
            </nav>
        </div>


            <div className="flex flex-col items-center mt-6 md:mt-0 md:w-1/4 px-4">
                <h1 className="font-semibold text-2xl mb-3 text-center">Get In Touch</h1>
                <div className="text-center text-gray-500 space-y-1">
                    <p>+018 5789 6584</p>
                    <p>shopzilla@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="w-full h-[40px] flex justify-center items-center text-primary">
            <a href="https://github.com/Nemanja0033" className="text-center flex"><GithubIcon />Nemanja Antonijevic</a>
        </div>
        </>
    );
};

export default Footer;
