import { useEffect, useRef } from "react"
import { customer1, customer2, customer3 } from "../../../utils/customers"
import gsap from "gsap";

const Customers = () => {

    const customersRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        customersRef.current,
                        { opacity: 0, y: 200 },
                        { opacity: 1, y: 0, duration: 1.5 }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });
    
        if (customersRef.current) {
            observer.observe(customersRef.current);
        }
    
        return () => {
            if (customersRef.current) {
                observer.unobserve(customersRef.current);
            }
        };
    }, []);
    

    return(
        <div ref={customersRef} className="mt-[150px]">
        <h3 className="text-primary font-semibold text-xl md:ml-11 ml-0 md:text-start text-center">C U S T O M E R S </h3>
        <h3 className="text-gray-700 font-semibold text-3xl md:ml-11 ml-0 mt-3 md:text-start text-center md:mb- mb-20">Customers says</h3>
        <div className=" flex-row md:flex justify-evenly ml-20 md:ml-0">
            <div className="flex-row mt-6">
                <h3 className="text-gray-700 text-2xl mb-3 flex"><span><img className="w-[50px] mr-3 h-[50px]" src={customer1.avatar} alt="" /></span>{customer1.name}</h3>
                <p className="text-gray-500">{customer1.comment}</p>
            </div>
            <div className="flex-row mt-6">
            <h3 className="text-gray-700 text-2xl mb-3 flex"><span><img className="w-[50px] mr-3 h-[50px]" src={customer2.avatar} alt="" /></span>{customer2.name}</h3>
            <p  className="text-gray-500">{customer2.comment}</p>
            </div>
            <div className="flex-row mt-6">
            <h3 className="text-gray-700 text-2xl mb-3 flex"><span><img className="w-[50px] mr-3 h-[50px]" src={customer3.avatar} alt="" /></span>{customer3.name}</h3>
            <p  className="text-gray-500">{customer3.comment}</p>
            </div>
        </div>
        </div>
    )
}

export default Customers