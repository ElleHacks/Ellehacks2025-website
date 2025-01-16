import React from 'react';

const HackerApplication = () => {
    return (
        <div className="font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-32 w-full max-w-screen-xl">
            <h2 className="text-5xl md:text-5xl lg:text-6xl mb-4 text-left text-[#555F49] font-bold">
                Apply Now
            </h2>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfJr8LUIzLU_blRhwNp2GwZmgfqX_juneJpAuhK03lRsStdkQ/viewform?embedded=true"
                title="Hacker Application Form"
                className="w-full h-[650px] bg-white rounded-lg shadow-lg border-0"
            >
                Loading…
            </iframe>

        </div>
    );
}

export default HackerApplication;

