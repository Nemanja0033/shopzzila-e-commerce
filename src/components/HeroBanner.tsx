import { Button } from "@mui/material"
import { ArrowDown } from "lucide-react"

const HeroBanner = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-between">
    <div className="w-full text-center mt-[150px]">
        <h1 className="text-gray-700 text-5xl  font-bold">Welcome To The <span className="text-primary">Shopzzila!</span></h1>
        <br />
        <p className="text-gray-500 text-xl">Unleash unbeatable deals and exclusive treasures, all in one place. Shop smart, live better!</p>
        <br />
        <div className="gap-4 flex justify-center">
            <Button variant="contained" color="error" size="medium">Explore Products</Button>
            <Button variant="outlined" color="error" size="medium">Learn More<ArrowDown /></Button>
        </div>
    </div>
    <div className="w-full md:w-1/3 h-auto mt-4 md:mt-0">
        <img src="https://i.postimg.cc/ncGBx33t/Hero-Banner.png" alt="Shopzzila Banner" className="w-full h-auto" />
    </div>
</div>

  )
}

export default HeroBanner
