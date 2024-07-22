import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

function ContactAddress() {
  return (
    <div className="flex  bg-transparent text-white p-4 justify-center">
      <ul className="list-none flex space-x-16">
        <li className="mb-4">
          <a
            href="mailto:rahulrkumar380@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Link"
            className="flex flex-col items-center"
          >
            <MdEmail className="text-4xl hover:scale-[1.35] transition-transform" />
            <span className="mt-2">Email</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="https://www.instagram.com/imrealrahul8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Link"
            className="flex flex-col items-center"
          >
            <FaInstagramSquare className="text-4xl hover:scale-[1.35] transition-transform" />
            <span className="mt-2">Instagram</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="https://www.linkedin.com/in/rahul-802746217/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Link"
            className="flex flex-col items-center"
          >
            <FaLinkedin className="text-4xl hover:scale-[1.35] transition-transform" />
            <span className="mt-2">Linkedin</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactAddress;
