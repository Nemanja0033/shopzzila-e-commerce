import { Briefcase, Handshake, ShoppingCartIcon } from "lucide-react"

const PromoSection = () => {

    return(
        <>
        <h3 className="md:ml-11 ml-0 mt-3 text-primary font-semibold">C R E E D</h3>
        <h1 className="text-gray-700 md:ml-11 font-semibold md:text-3xl text-xl mt-3">What We Stand For: ShopZila's Commitment to You</h1>
        <br />
        <hr />
          <div className="w-full md:flex flex-row justify-center mt-10 bg-gray-50">
            <div className="w-full flex-row">
                <h1 className=" ml-11 text-gray-700 font-semibold text-3xl mt-3  text-center">Customer Commitment</h1>
                <div className="flex justify-center mt-3 mb-3">
                    <ShoppingCartIcon color="red" />
                </div>
                <p className="text-gray-500 text-center">At ShopZila, we are dedicated to providing an exceptional shopping experience. Your satisfaction is our top priority, and we strive to exceed your expectations every step of the way.</p>
            </div>
            <div className="w-full flex-row">
                <h1 className=" ml-11 text-gray-700 font-semibold text-3xl mt-3 text-center">Quality Assurance</h1>
                <div className="flex justify-center mt-3 mb-3">
                <Briefcase color="red" />
                </div>
                <p className="text-gray-500 text-center">We believe in offering only the best. Every product in our store is carefully curated to ensure quality, reliability, and value for our customers.</p>
            </div>
            <div className="w-full flex-row">
                <h1 className=" ml-11 text-gray-700 font-semibold text-3xl mt-3  text-center">Community Focus</h1>
                <div className="flex justify-center mt-3 mb-3">
                <Handshake color='red' />
                </div>
                <p className="text-gray-500 text-center">We are more than just a shopping platform; we are a community. We support local businesses and artisans, bringing you unique finds while fostering a vibrant marketplace</p>
            </div>
        </div>
        </>
    )
}

export default PromoSection