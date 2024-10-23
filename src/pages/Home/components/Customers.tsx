import { customer1, customer2 } from "../../../utils/customers"

const Customers = () => {

    return(
        <div className="mt-[150px]">
        <h3 className="text-primary font-semibold text-xl md:ml-11 ml-0">C U S T O M E R S </h3>
        <h3 className="text-gray-700 font-semibold text-3xl md:ml-11 ml-0 mt-3">Customers says</h3>
        <div className="w-full flex-row md:flex justify-evenly">
            <div className="flex-row mt-6">
                <h3 className="text-gray-700 text-2xl mb-3">{customer1.name}</h3>
                <p>{customer1.comment}</p>
            </div>
            <div className="flex-row mt-6">
            <h3 className="text-gray-700 text-2xl mb-3">{customer2.name}</h3>
            <p>{customer2.comment}</p>
            </div>
            <div className="flex-row mt-6">
            <h3 className="text-gray-700 text-2xl mb-3">{customer1.name}</h3>
            <p>{customer1.comment}</p>
            </div>
        </div>
        </div>
    )
}

export default Customers