import { useEffect, useState } from "react";
import { customers } from "../../utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@mui/material";

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
    <motion.div initial={{ y: 200, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1}} className="bg-transparent w-full grid place-items-center gap-5 py-10">
      <div className="grid place-items-center w-full">
        <h3 className="md:ml-11 ml-0 mt-3 text-primary font-semibold md:text-start text-center">
        T E S T I M O N I A L S
        </h3>
        <h1 className="md:ml-11 font-semibold md:text-3xl text-xl mt-3 mb-12 text-center md:text-start">
          What Our Customers Say
        </h1>
      </div>
      <div className="md:flex justify-center px-5">
        <progress className="progress md:w-[700px]" value={progress} max="200"></progress>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={review}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center md:gap-12 md:w-[850px] w-full"
        >
        <Button color="error" onClick={setPastReview}><ArrowLeft /></Button>
        <div className="rounded-md shadow-md border-2 p-3">
          <div className="w-full flex items-center gap-5 justify-start">
            <img className="rounded-full w-20 h-20" src={currentCustomer.avatar} alt="Customer Avatar" />
            <div className="grid gap-1">
              <span className="text-lg font-semibold">{currentCustomer.name}</span>
              <span className="text-sm text-gray-500">{currentCustomer.from}</span>
            </div>
          </div>
          <div className="text-start text-gray-500">
            {currentCustomer.comment}
          </div>
        </div>
        <Button color="error" onClick={setNextReview}><ArrowRight /></Button>
      </motion.div>
    </AnimatePresence>
    </motion.div>
  );
};

export default CustomersSection;
