import React from 'react';
import "../../fonts/fonts.css";
import { FaLinkedinIn } from 'react-icons/fa';

function TeamMember({ name, title, image, linkedin }) {
  return (
    <>
      {/* Card Mobile Layout*/}
      <div className="bg-[#9DAF87] p-4 w-full max-w-xs mx-auto text-left rounded-md shadow flex items-center block md:hidden">
        <div className="relative w-20 h-auto mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="font-[Faustina] text-white">
          <h3 className="text-base">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 bg-[#D8AA6C] hover:bg-[#9DAF87] text-white rounded-full ml-auto"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      {/* Card Desktop Layout */}
      <div className="bg-[#9DAF87] p-4 w-45 text-left rounded-md shadow flex flex-col max-w-xs mx-auto md:block hidden relative group">
        <div className="relative w-full md:w-40 mx-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
        <div className="mt-4 font-[Faustina] text-white">
          <h3 className="text-sm">{name}</h3>
          <p className="text-md">{title}</p>
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="absolute top-4 right-4 p-2 bg-[#9DAF87] hover:bg-[#D8AA6C] text-white rounded-full"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

    </>
  );
}

export default TeamMember;
