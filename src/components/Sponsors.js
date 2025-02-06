import React from 'react';

//Gold Sponsors
import TD from '../assets/Sponsors/TD.png';

// Silver Sponsors
import RBC from '../assets/Sponsors/RBC.png';

// Bronze Sponsors
import KPM from '../assets/Sponsors/KPM.png';
import ExperienceVentures from '../assets/Sponsors/ExperienceVentures.png';
import Yspace from '../assets/Sponsors/Yspace.png';
import EnvironicsAnalytics from '../assets/Sponsors/environics.png';
import YorkRegion from '../assets/Sponsors/YorkRegion.png';
import CSE from "../assets/Sponsors/CSE.jpg";
import PG from "../assets/Sponsors/P&G.png";
import Ubisoft from "../assets/Sponsors/Ubisoft.png";
import Quantum from "../assets/Sponsors/quantum.png";
import ICP from "../assets/Sponsors/icp.png";

// Community Sponsors
import Reactor from '../assets/Sponsors/Reactor.png';
import BramptionInnovationDistrict from '../assets/Sponsors/Brampton_Innovation.png';
import VoiceFlow from '../assets/Sponsors/Voiceflow.png';
import StandOutSticker from '../assets/Sponsors/StandOutSticker.png';
import LevelUp from '../assets/Sponsors/LevelUp.png';
import XYZ from '../assets/Sponsors/XYZ.png';
import ZebraRobotics from '../assets/Sponsors/ZebraRobotics.png';
import CodeCrafteres from '../assets/Sponsors/CodeCrafters.png';
import Nordpass from '../assets/Sponsors/Nordpass.png';
import NordVPN from '../assets/Sponsors/NordVPN.png';
import Icogni from '../assets/Sponsors/Incogni.png';
import Saily from '../assets/Sponsors/Saily.png';
import InterviewCake from '../assets/Sponsors/interviewcake.png';
import SiraPrint from "../assets/Sponsors/SiraPrint.png";
import VueSchool from "../assets/Sponsors/vueschool.png";
import WASP from "../assets/Sponsors/WASP.png";
import BEST from "../assets/Sponsors/BEST.png";
import DoraHacks from "../assets/Sponsors/Dorahacks.png";
import FGF from "../assets/Sponsors/fgf.png";
import Ranfoods from "../assets/Sponsors/ranfoods.png";
import Github from "../assets/Sponsors/github-logo.png";


function Sponsors() {
  return (
    <div className="mt-20 font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-32 select-none w-full max-w-screen-xl">
      <h2 className="text-4xl sm:text-5xl md:text-5xl mb-4 text-left text-[#555F49] font-bold">
        Meet our Sponsors!
      </h2>

      {/* Gold Sponsors  */}

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 mb-8 justify-items-center place-items-center">
          <div className="w-full h-28 lg:h-40 md:h-36 sm:h-28 bg-white rounded-full border-4 border-yellow-400 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://careers.td.com/student-new-grads/" target="_blank" rel="noreferrer">
              <img src={TD} alt="TD" className="h-20 sm:h-20 md:h-32 object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 mb-8 justify-items-center place-items-center">
          <div className="w-full lg:w-[1000px] h-28 lg:h-40 md:h-36 sm:h-28 bg-white rounded-full border-4 border-gray-300 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://jobs.rbc.com/ca/en/students-graduates" target="_blank" rel="noreferrer">
              <img src={RBC} alt="RBC" className="h-20 sm:h-20 md:h-32 object-contain" />
            </a>
          </div>
        </div>
      </div>

      { /* Bronze Sponsors */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 justify-items-center place-items-center text">

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.ubisoft.com/en-us/company/careers/interns-graduates" target="_blank" rel="noreferrer">
              <img src={Ubisoft} alt="Ubisoft" className="h-16 md:h-20 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.kpmpower.com/" target="_blank" rel="noreferrer">
              <img src={KPM} alt="KPM" className="h-16 sm:h-18 md:h-24 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.yorku.ca/yspace/" target="_blank" rel="noreferrer">
              <img src={Yspace} alt="Yspace" className="h-7 md:h-10 w-80 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://experienceventures.ca/" target="_blank" rel="noreferrer">
              <img src={ExperienceVentures} alt="Experience Ventures" className="h-8 md:h-20 lg:h-12 w-80 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://environicsanalytics.com/en-ca" target="_blank" rel="noreferrer">
              <img src={EnvironicsAnalytics} alt="EnvironicsAnalytics" className="h-12 md:h-14 lg:h-16 w-80 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.cse-cst.gc.ca/en" target="_blank" rel="noreferrer">
              <img src={CSE} alt="CSE" className="h-14 md:h-24 object-contain border-2" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.york.ca/" target="_blank" rel="noreferrer">
              <img src={YorkRegion} alt="YorkRegion" className="h-14 md:h-20 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.york.ca/" target="_blank" rel="noreferrer">
              <img src={PG} alt="PG" className="h-14 md:h-20 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://x.com/icphub_CA" target="_blank" rel="noreferrer">
              <img src={Quantum} alt="Quantumlabs" className="h-8 md:h-12 object-contain" />
            </a>
          </div>

          <div className="w-100 h-20 md:w-64 md:h-32 sm:h-35 bg-white rounded-full border-4 border-amber-600 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://quantumleaplabs.ca/" target="_blank" rel="noreferrer">
              <img src={ICP} alt="ICP" className="h-14 sm:h-20 object-contain" />
            </a>
          </div>

        </div>
      </div>

      { /* Community Sponsors */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 justify-items-center place-items-center">

          <div className="w-full h-14 sm:h-22 bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://developer.microsoft.com/en-us/reactor/" target="_blank" rel="noreferrer">
              <img src={Reactor} alt="Community Sponsor" className="h-8 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://investbrampton.ca/locate-here/innovation-district/" target="_blank" rel="noreferrer">
              <img src={BramptionInnovationDistrict} alt="Community Sponsor" className="h-8 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.voiceflow.com/" target="_blank" rel="noreferrer">
              <img src={VoiceFlow} alt="Community Sponsor" className="h-6 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.levelupreality.ca/" target="_blank" rel="noreferrer">
              <img src={LevelUp} alt="Community Sponsor" className="h-7 md:h-9 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.standoutstickers.com/?srsltid=AfmBOopNkIb2AnJvdcvEBv5sjg4xbijr5kfaZ0EExfDaWWkK9Ogt-5pz" target="_blank" rel="noreferrer">
              <img src={StandOutSticker} alt="Community Sponsor" className="h-11 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://gen.xyz/" target="_blank" rel="noreferrer">
              <img src={XYZ} alt=".XYZ" className="h-10 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.zebrarobotics.com/" target="_blank" rel="noreferrer">
              <img src={ZebraRobotics} alt="ZebraRobotics" className="h-6 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://codecrafters.io/" target="_blank" rel="noreferrer">
              <img src={CodeCrafteres} alt="CodeCrafteres" className="h-7 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://nordpass.com/" target="_blank" rel="noreferrer">
              <img src={Nordpass} alt="Nordpass" className="h-6 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://nordvpn.com/coupon/deal/?coupon=hackathons&utm_medium=affiliate&utm_term=&utm_content&utm_campaign=off600&utm_source=aff92203" target="_blank" rel="noreferrer">
              <img src={NordVPN} alt="NordVPN" className="h-18 md:h-16 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://incogni.com/" target="_blank" rel="noreferrer">
              <img src={Icogni} alt="Icogni" className="h-6 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://saily.com/" target="_blank" rel="noreferrer">
              <img src={Saily} alt="Saily" className="h-12 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.interviewcake.com/" target="_blank" rel="noreferrer">
              <img src={InterviewCake} alt="InterviewCake" className="h-6 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://vueschool.io/" target="_blank" rel="noreferrer">
              <img src={VueSchool} alt="VueSchool" className="h-6 object-contain" />
            </a>
          </div>
          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://siraprint.ca/?cmp_id=20778277100&adg_id=158125614680&kwd=siraprint&device=c&gad_source=1&gclid=Cj0KCQiA-aK8BhCDARIsAL_-H9kQhRxdqpskr_8HOdUaQXXrsT8Ardh2QmS3Z6G1YJ4Xcbn1R5GN5F8aAhXQEALw_wcB" target="_blank" rel="noreferrer">
              <img src={SiraPrint} alt="SiraPrint" className="h-6 object-contain" />
            </a>
          </div>
          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://wasp-lang.dev/" target="_blank" rel="noreferrer">
              <img src={WASP} alt="WASP" className="h-8 object-contain" />
            </a>
          </div>
          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://lassonde.yorku.ca/best/" target="_blank" rel="noreferrer">
              <img src={BEST} alt="BEST" className="h-6 sm:h-8 object-contain" />
            </a>
          </div>
          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://dorahacks.io/" target="_blank" rel="noreferrer">
              <img src={DoraHacks} alt="DoraHacks" className="h-14 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://www.fgfbrands.com/" target="_blank" rel="noreferrer">
              <img src={FGF} alt="FGF" className="h-10 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://ranfoods.com/pages/about-us-updated" target="_blank" rel="noreferrer">
              <img src={Ranfoods} alt="Ranfoods" className="h-10 object-contain" />
            </a>
          </div>

          <div className="w-full h-14 sm:h-22  bg-white bg-white rounded-full border-4 border-emerald-800 flex justify-center items-center transform transition-transform duration-300 hover:translate-y-2 hover:shadow-lg">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src={Github} alt="Github" className="h-6 object-contain" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sponsors;