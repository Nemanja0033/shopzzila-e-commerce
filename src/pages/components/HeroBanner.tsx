import { Button } from "@mui/material"
import { ArrowDown } from "lucide-react"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const HeroBanner = () => {

  const heroRef = useRef<HTMLDivElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(heroRef.current) {
      gsap.from(heroRef.current, { opacity: 0, x: -400})
      gsap.to(heroRef.current, {opacity: 1, x: 0, delay: 0.3})
    }
  }, [])

  useEffect(() => {
    if(bannerRef.current) {
      gsap.from(bannerRef.current, { opacity: 0, x: 50})
      gsap.to(bannerRef.current, {opacity: 1, x: 0, delay: 0.3})
    }
  }, [])

  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-between">
    <div ref={heroRef} className="w-full text-center mt-[150px]">
        <h1 className="text-gray-700 text-5xl  font-bold">Welcome To The Shopzzila</h1>
        <br />
        <p className="text-gray-500 text-2xl">Your One-Stop Shop for Everything You Desire</p>
        <p className="text-gray-500 text-2xl">Explore Endless Categories and Unbeatable Deals—Shop Now!</p>
        <br />
        <div className="gap-4 flex justify-center">
            <Button variant="contained" color="error" size="medium"><Link to='/products'>Explore Products</Link></Button>
            <Button href="#featured" variant="outlined" color="error" size="medium">Learn More<ArrowDown /></Button>
        </div>
    </div>
    <div ref={bannerRef} className="w-full md:w-1/3 h-auto mt-4 md:mt-0">
        <img src="https://i.postimg.cc/9fY8YJJX/Hero-Banner-1.png" alt="Shopzzila Banner" className="w-full h-auto" />
    </div>
</div>

  )
}

export default HeroBanner
