import { useRef } from "react"
import { creed1, creed2, creed3 } from "../../utils/constants";
import { useAnim } from "../../hooks/useAnim";

const CreedsSection = () => {
    const promoRef = useRef<HTMLDivElement | null>(null);

      const creeds = [
        { title: creed1.title, icon: creed1.icon, text: creed1.text },
        { title: creed2.title, icon: creed2.icon, text: creed2.text },
        { title: creed3.title, icon: creed3.icon, text: creed3.text },
    ];

    useAnim(promoRef);

    return (
      <div ref={promoRef} className="bg-transparent shadow-md">
          <h3 className="md:ml-11 ml-0 mt-3 text-primary font-semibold md:text-start text-center">F E A T U R E D</h3>
          <h1 className=" md:ml-11 font-semibold md:text-3xl text-xl mt-3 mb-12 text-center md:text-start">What We Stand For</h1>
          <div className="md:flex justify-center px-5">
              {creeds.map((creed, index) => (
                  <div key={index} className="w-full flex-row mt-20 md:mt-0">
                      <h1 className="ml-11  font-semibold text-3xl mt-3 text-center">{creed.title}</h1>
                      <div className="flex justify-center mt-3 mb-3">
                          <creed.icon className="text-red-500" />
                      </div>
                      <p className="text-center">{creed.text}</p>
                  </div>
              ))}
          </div>
          <br /><br />
      </div>
  );
}

export default CreedsSection