import { aboutSections } from "../utils/constants";

const AboutContent = () => {
   
    return (
        <div className="max-w-2xl mx-auto p-6shadow-md rounded-lg ">
            {aboutSections.map((section, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-600">{section.title}</h2>
                    <p className="text-gray-500">{section.content}</p>
                </div>
            ))}
        </div>
    );
};

export default AboutContent;
