"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreen } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "E-Commerce",
    desc: "A eCommerce Website | Reactjs, Nodejs, Express, MongoDB, Axios.",
    img: "/pic3.png",
    link: "https://github.com/imrealrahul9/E-commerce",
  },
  {
    id: 2,
    title: "ApartmentX",
    desc: "Rent or For Sale | Reactjs, Firebase.",
    img: "/pic4.png",
    link: "https://github.com/imrealrahul9/ApartmentX",
  },
  {
    id: 3,
    title: "Chit-chat",
    desc: "Chat with friends and family | Reactjs, Nodejs, Expressjs, MongoDB, Socket.io.",
    img: "/pic2.png",
    link: "https://github.com/imrealrahul9/chit-chat",
  },
  {
    id: 4,
    title: "Blog-app",
    desc: "Blog Daily | Reactjs, Appwrite, TailwindCSS.",
    img: "/pic1.png",
    link: "https://github.com/imrealrahul9/Blog-a-day",
  },
  {
    id: 5,
    title: "Portfolio",
    desc: "Rahul-Portfolio | Reactjs,Nodejs.",
    img: "/pic5.png",
    link: "https://github.com/imrealrahul9/Portoflio",
  },
  {
    id: 6,
    title: "Restro",
    desc: "You can see Restaurant rating,menus and book tables | Reactjs, TailwindCSS.",
    img: "/pic6.png",
    link: "https://github.com/imrealrahul9/Restro",
  },
];

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 ">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="card bg-opacity-95 border-green-800 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full "
          style={{ width: "100%", maxWidth: "400px" }} // Ensures all cards are the same width
        >
          <figure className="relative">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{item.desc}</p>
            <div className="flex gap-4">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="flex-1 p-2 text-sm md:p-3 md:text-md lg:p-3 lg:text-lg ring-1 ring-black bg-black text-white bg-opacity-70 hover:bg-opacity-90 font-semibold rounded-full flex items-center justify-center">
                  Github <FaGithub className="ml-2 text-xl" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;
