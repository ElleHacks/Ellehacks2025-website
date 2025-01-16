import React from 'react';
import "../fonts/fonts.css";
import img4 from "../assets/Volunteer/img4.JPG";
import img5 from "../assets/Volunteer/img5.JPG";
import img7 from "../assets/Volunteer/img7.JPG";

function Applications() {
    return (
        <div className="mt-20 font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-20 select-none w-full max-w-screen-xl">
            <h2 className="text-4xl sm:text-5xl md:text-5xl mb-24 text-left text-[#555F49] font-bold">
                Interested in Volunteering?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 md:mb-20 justify-items-center">
                <div className="w-full h-full flex justify-center items-center sm:-rotate-3">
                    <img src={img5} alt="img5" className="h-60 object-contain rounded-lg" />
                </div>
                <div className="w-full h-auto flex justify-center items-center -rotate-3 sm:rotate-6">
                    <img src={img4} alt="img4" className="h-60 object-contain rounded-lg" />

                </div>
                <div className="w-full h-full flex justify-center items-center -rotate-3 sm:-rotate-6">
                    <img src={img7} alt="img7" className="h-60 object-contain rounded-lg" />

                </div>
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAdiknyMYs4_HG-HFX3eq7hz--E7cQDwBNSN9ePqfogBiVHA/viewform"
                target="_blank"
                rel="noopener noreferrer">
                <button className="mt-3 bg-[#555F49] font-['Faustina'] text-white text-xl lg:text-2xl py-2 px-12 rounded-3xl hover:bg-[#D8AA6C]">
                    Become a Mentor Or Volunteer
                </button>
            </a>

        </div>

    );
}

export default Applications;
