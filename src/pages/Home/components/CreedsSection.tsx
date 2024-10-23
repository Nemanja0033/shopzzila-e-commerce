import { useEffect, useRef } from "react"
import gsap from "gsap";
import { creed1, creed2, creed3 } from "../../../utils/creeds";

const CreedsSection = () => {

    const promoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                promoRef.current,
                { opacity: 0, y: 200 },
                { opacity: 1, y: 0, duration: 1.5 }
              );
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 }); 
    
        if (promoRef.current) {
          observer.observe(promoRef.current);
        }
    
        return () => {
          if (promoRef.current) {
            observer.unobserve(promoRef.current);
          }
        };
      }, [promoRef]);

    return(
        <div ref={promoRef} className="bg-white">
          <br />
        <h3 className="md:ml-11 ml-0 mt-3 text-primary font-semibold text-center md:text-start">C R E E D</h3>
        <h1 className="text-gray-700 md:ml-11 font-semibold md:text-3xl text-xl mt-3 text-center md:text-start">What We Stand For</h1>
          <div className="w-full md:flex flex-row justify-center mt-10 border-2">
            <div className="w-full flex-row mt-20 md:mt-0">
                <h1 className=" ml-11 text-gray-700 font-semibold text-3xl mt-3  text-center">{creed1.title}</h1>
                <div className="flex justify-center mt-3 mb-3">
                    {creed1.icon}
                </div>
                <p className="text-gray-500 text-center">{creed1.text}</p>
            </div>
            <div className="w-full flex-row mt-20 md:mt-0">
                <h1 className=" ml-11 text-gray-700 font-semibold text-3xl mt-3 text-center">{creed2.title}</h1>
                <div className="flex justify-center mt-3 mb-3">
                {creed2.icon}
                </div>
                <p className="text-gray-500 text-center">{creed2.text}</p>
            </div>
            <div className="w-full flex-row mt-20 md:mt-0">
                <h1 className=" ml-11 text-gray-700 font-semibold text-3xl mt-3  text-center">{creed3.title}</h1>
                <div className="flex justify-center mt-3 mb-3">
                {creed3.icon}
                </div>
                <p className="text-gray-500 text-center">{creed3.text}</p>
            </div>
        </div>
        </div>
    )
}

export default CreedsSection