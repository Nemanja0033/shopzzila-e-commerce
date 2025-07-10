import { useEffect, useState } from "react";
import { customers } from "../../utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomersSection = () => {
  const [progress, setProgress] = useState(0);
  const [review, setReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 200) {
          return prevProgress + 1;
        } else {
          return prevProgress;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 200) {
      setTimeout(() => {
        setReview((prevReview) => (prevReview + 1) % customers.length);
        setProgress(0); 
      }, 100);
    }
  }, [progress]);

  const setNextReview = () => {
    setReview((prevReview) => (prevReview + 1) % customers.length);
    setProgress(0); 
  };


  const setPastReview = () => {
    setReview((prevReview) => (prevReview - 1) % customers.length);
    setProgress(0); 
  };

  const currentCustomer = customers[review];

  return (
    <div className="bg-transparent w-full grid place-items-center gap-5 shadow-md py-10">
      <div className="grid md:place-items-start place-items-center w-full">
        <h3 className="md:ml-11 ml-0 mt-3 text-primary font-semibold md:text-start text-center">
          R E V I E W S
        </h3>
        <h1 className="md:ml-11 font-semibold md:text-3xl text-xl mt-3 mb-12 text-center md:text-start">
          What Our Customers Say
        </h1>
      </div>
      <div className="md:flex justify-center px-5">
        <progress className="progress md:w-[500px]" value={progress} max="200"></progress>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={review}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-12 md:w-[650px] w-full"
        >
        <button onClick={setPastReview} className="p-1 bg-gray-50 h-10 w-10 hover:bg-100 rounded-full"><ArrowLeft /></button>
        <div className="rounded-md shadow-md border-2 p-3">
          <div className="w-full flex items-center gap-5 justify-start">
            <img className="rounded-full w-20 h-20" src={currentCustomer.avatar} alt="Customer Avatar" />
            <div className="grid gap-1">
              <span className="text-lg font-semibold">{currentCustomer.name}</span>
              <span className="text-sm text-gray-500">{currentCustomer.from}</span>
            </div>
          </div>
          <div className="text-start">
            {currentCustomer.comment}
          </div>
        </div>
        <button onClick={setNextReview} className="p-1 bg-gray-50 h-10 w-10 hover:bg-100 rounded-full"><ArrowRight /></button>
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default CustomersSection;
