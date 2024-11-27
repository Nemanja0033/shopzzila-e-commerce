import { useEffect } from "react";
import gsap from "gsap";

export const useAnim = (ref: any) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                ref.current,
                { opacity: 0, y: 200 },
                { opacity: 1, y: 0, duration: 1.5 }
              );
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0 }); 
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, [ref]);
}