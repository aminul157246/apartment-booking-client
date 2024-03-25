import { useEffect } from 'react';
import videoBg from '../../../assets/video.mp4'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './banner.css'
const Banner = () => {

  useEffect(() => {
    AOS.init({
         duration: "1000"
    });

}, [])



    return (
        <div>
        <div className=" ">
        <video className='w-full h-screen brightness-50 object-cover' src={videoBg} autoPlay loop muted />

        </div>

        <div className="absolute top-36 md:top-24 lg:top-72 left-10 md:left-12 lg:left-32 z-10 space-y-3">
          <h2 data-aos="fade-right" className="font-textStyle text-3xl lg:text-6xl font-bold text-gray-300 ">
            
          Buy or rent properties <br />
with  no commission
          </h2>
          <p data-aos="fade-right" className="py-4 text-white font-textStyle">
            Planning a Wedding, Proposal or Event in our busy city is not so
            easy,
            <br /> and its takes skills and time to make it all look easy going
          </p>
          <button data-aos="fade-up" className="font-textStyle border-4 text-white   px-4 py-2">
            Online request
          </button>
        </div>

    </div>
    );
};

export default Banner;