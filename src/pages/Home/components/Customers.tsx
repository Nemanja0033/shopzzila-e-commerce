import { useRef } from "react"
import { customer1, customer2, customer3 } from "../../../utils/customers"
import { useAnim } from "../../../hooks/useAnim";

const Customers = () => {

    const customersRef = useRef<HTMLDivElement | null>(null);

    useAnim(customersRef);

    const customers = [
        { avatar: customer1.avatar, name: customer1.name, comment: customer1.comment },
        { avatar: customer2.avatar, name: customer2.name, comment: customer2.comment },
        { avatar: customer3.avatar, name: customer3.name, comment: customer3.comment },
    ];
    

    return (
        <div ref={customersRef} className="mt-[150px] shadow-md">
            <h3 className="text-primary font-semibold text-xl md:ml-11 ml-0 md:text-start text-center">C U S T O M E R S</h3>
            <h1 className="font-semibold text-3xl md:ml-11 ml-0 mt-3 md:text-start text-center md:mb-10">Customers say</h1>
            <div className="w-[90%] flex-row justify-evenly ml-5 mr-3 md:ml-10">
                <br />
                {customers.map((customer, index) => (
                    <div key={index} className="flex-row mt-6">
                        <h3 className="text-2xl mb-3 flex">
                            <span>
                                <img className="w-[50px] mr-3 h-[50px]" src={customer.avatar} alt="" />
                            </span>
                            {customer.name}
                        </h3>
                        <p>{customer.comment}</p>
                    </div>
                ))}
            </div>
            <br /><br />
        </div>
    );
}

export default Customers