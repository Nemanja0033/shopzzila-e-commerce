import { useEffect, useRef } from "react";
import { aboutSections } from "../../../utils/about";
import gsap from "gsap";

const AboutContent = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        aboutRef.current,
                        { opacity: 0, y: 200 },
                        { opacity: 1, y: 0, duration: 1.5 }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div ref={aboutRef} className="max-w-2xl mx-auto p-6shadow-md rounded-lg ">
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
