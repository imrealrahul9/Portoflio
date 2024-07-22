import { useRef } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Footer from "../components/Footer";
import React from "react";
import Brain from "../components/Brain";
import { useScroll,motion } from "framer-motion";
import ContactAddress from "../components/ContactAddress";

const ContactPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div className="from-blue-400 bg-gradient-to-r">
    <motion.div
      className="h-full from-black bg-blue-400"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-400 text-white">
      <Card className="flex flex-col flex-1 bg-transparent">
        <CardHeader className="pb-0 pt-4 px-8 flex-col items-start bg-transparent">
         
        </CardHeader>
        <CardBody className="flex flex-1 flex-col lg:flex-row gap-8 p-8" ref={containerRef}>

          <div className="flex flex-col justify-center bg-gray-800 bg-opacity-50 p-8 rounded-lg lg:w-2/3 w-full">
            <h1 className="text-5xl font-bold text-center text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Let's build something great!</h1>
            <h2 className="text-xl text-center mt-4 text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Interested in starting your own website project with me?
            </h2>
            <h2 className="text-xl text-center mt-2 text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Excellent! I'd love to talk to you about your idea.
            </h2>
            <div className="mt-12">
              <h1 className="text-3xl text-center text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Connect With Me</h1>
            </div>
          </div>
          <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
        </CardBody>
        <div className="mt- px-8 w-full mb-12 ">
          <ContactAddress />
        </div>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Footer />
        </CardFooter>
      </Card>
    </div>
    </motion.div>
    </div>
  );
};

export default ContactPage;
