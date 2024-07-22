import React from 'react'
import {Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate=useNavigate()
  return (
    <div className=" justify-center w-24 mx-auto flex space-x-12">
          <Button onClick={()=>navigate("/")} className="text-tiny hover:bg-green-400 text-white bg-cyan-400" variant="flat" color="default" radius="lg" size="sm">
            Home
          </Button>
          <Button onClick={()=>navigate("/projects")} className="text-tiny hover:bg-green-400 text-white bg-cyan-400" variant="flat" color="default" radius="lg" size="sm">
            Projects
          </Button>
          <Button onClick={()=>navigate("/about")} className="text-tiny hover:bg-green-400 text-white bg-cyan-400" variant="flat" color="default" radius="lg" size="sm">
            About
          </Button>
          <Button onClick={()=>navigate("/contact")} className="text-tiny hover:bg-green-400 text-white bg-cyan-400" variant="flat" color="default" radius="lg" size="sm">
            Contact
          </Button>
    </div>
  )
}

export default Footer