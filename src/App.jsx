import { Card, CardFooter, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Animation from './components/Animation';
import Social from "./components/Social";
import GithubCorner from "react-github-corner";
import Footer from "./components/Footer";

export default function App() {
  console.log("Rendering GithubCorner");

  return (
    <div className="relative">
      <GithubCorner 
        href="https://github.com/imrealrahul9" 
        octoColor="#000" 
        bannerColor="#fff"
        size={80}
        className="fixed top-0 right-0 z-50"
      />
      <Card
        isFooterBlurred
        className="border-none bg-black h-screen w-screen"
      >
        <div className="flex flex-row">
          <div className="flex-shrink-0">
            <Image
              alt="Woman listening to music"
              className="object-cover h-full"
              height={600}
              src="profile2.jpeg"
              width={400}
            />
          </div>
          <motion.div
            className="h-full flex-1"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 3 }}
          >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 p-20">
              <div className="h-1/2 lg:h-full lg:w-5/12 flex justify-center items-center">
                <div className="deneme"></div>
              </div>
              <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Rahul: <br />
                  <span className="md:text-5xl">
                    <Animation />
                  </span>
                </h1>
                <p className="md:text-xl">
                  Welcome to my digital canvas, where innovation and creativity
                  converge. Embark on a journey where design meets development.
                </p>
              </div>
            </div>
            <Social />
          </motion.div>
        </div>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Footer/>
        </CardFooter>
      </Card>
    </div>
  );
}
