import React from 'react';

// Silver Sponsors
import RBC from '../assets/Sponsors/RBC.png';

// Bronze Sponsors
import KPM from '../assets/Sponsors/KPM.png';
import ExperienceVentures from '../assets/Sponsors/ExperienceVentures.png';
import Yspace from '../assets/Sponsors/Yspace.png';

// Community Sponsors
import Reactor from '../assets/Sponsors/Reactor.png';
import BramptionInnovationDistrict from '../assets/Sponsors/Brampton_Innovation.png';
import VoiceFlow from '../assets/Sponsors/Voiceflow.png';
import StandOutSticker from '../assets/Sponsors/StandOutSticker.png';
import LevelUp from '../assets/Sponsors/LevelUp.png';

function Sponsors() {
  return (
    <div className="mt-20 font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-32 select-none w-full max-w-screen-xl">
      <h2 className="text-4xl sm:text-5xl md:text-5xl mb-4 text-left text-[#555F49] font-bold">
        Meet our Sponsors!
      </h2>

      {/* Silver Sponsors */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 mb-8 items-center justify-center">
          <div className="w-75 h-28 lg:h-40 md:w-64 md:h-32 sm:h-28 sm:w-20 bg-white rounded-full border-4 border-gray-300 flex justify-center items-center">
            <a href="https://jobs.rbc.com/ca/en/students-graduates" target="_blank" rel="noreferrer">
              <img src={RBC} alt="RBC" className="h-20 sm:h-28 object-contain" />
            </a>
          </div>
        </div>
      </div>
      
      { /* Bronze Sponsors */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 justify-center">
          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center">
            <a href="https://www.kpmpower.com/" target="_blank" rel="noreferrer">
              <img src={KPM} alt="KPM" className="h-16 sm:h-20 object-contain" />
            </a>
          </div>
          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center">
            <a href="https://www.yorku.ca/yspace/" target="_blank" rel="noreferrer">
              <img src={Yspace} alt="Yspace" className="h-5 lg:h-8 w-80 object-contain" />
            </a>
          </div>
          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center">
            <a href="https://experienceventures.ca/" target="_blank" rel="noreferrer">
              <img src={ExperienceVentures} alt="Experience Ventures" className="h-6 lg:h-8 w-80 object-contain" />
            </a>
          </div>
        </div>
      </div>

      { /* Community Sponsors */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="w-1/3 h-14 md:w-64 sm:h-22 bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center">
            <a href="https://developer.microsoft.com/en-us/reactor/" target="_blank" rel="noreferrer">
              <img src={Reactor} alt="Community Sponsor" className="h-7 object-contain" />
            </a>
          </div>
          <div className="w-1/3 h-14 md:w-64 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center">
            <a href="https://investbrampton.ca/locate-here/innovation-district/" target="_blank" rel="noreferrer">
              <img src={BramptionInnovationDistrict} alt="Community Sponsor" className="h-7 object-contain" />
            </a>
          </div>
          <div className="w-1/3 h-14 md:w-64 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center">
            <a href="https://www.voiceflow.com/" target="_blank" rel="noreferrer">
              <img src={VoiceFlow} alt="Community Sponsor" className="h-7 object-contain" />
            </a>
          </div>
          <div className="w-1/3 h-14 md:w-64 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center">
            <a href="https://www.levelupreality.ca/" target="_blank" rel="noreferrer">
              <img src={LevelUp} alt="Community Sponsor" className="h-28 object-contain" />
            </a>
          </div>
          <div className="w-1/3 h-14 md:w-64 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center">
            <a href="https://www.standoutstickers.com/?srsltid=AfmBOopNkIb2AnJvdcvEBv5sjg4xbijr5kfaZ0EExfDaWWkK9Ogt-5pz" target="_blank" rel="noreferrer">
              <img src={StandOutSticker} alt="Community Sponsor" className="h-10 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;