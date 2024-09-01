"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Social() {
  return (
    <div className="flex space-x-96 bg-black/20 rounded-full bg-opacity-40 text-white">
      <ul className="list-none flex space-x-28  justify-center">
        <li className="mb-4">
          <a
            href="https://github.com/imrealrahul9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Link"
          >
            <FaGithub className="text-4xl hover:scale-[1.35]" />
            Github
          </a>
        </li>
        <li className="mb-4">
          <a
            href="https://drive.google.com/file/d/1lOwKlsjz3jWE0AdH0BL4qy5dXCAH4j7Y/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume Link"
          >
            <FaBookAtlas className="text-4xl hover:scale-[1.35]" />
            Resume
          </a>
        </li>
        <li className="mb-4">
          <a
            href="https://www.linkedin.com/in/rahul-802746217/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Link"
          >
            <FaLinkedin className="text-4xl hover:scale-[1.35]" />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
