
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const SuitHome = () => {

    useEffect(() => {
        AOS.init({
            duration: "2000"
        });

    }, [])


    return (
        <div>
            <div
                className="relative mt-12 h-[100vh] "
                style={{
                    backgroundImage: 'url(https://i.ibb.co/Ch3Rg7X/suithome.jpg)'
                }}
                data-aos="zoom-in-up"
            >
                <div
                    className="absolute inset-0 bg-black opacity-60"
                ></div>
                <div className="absolute top-16 md:top-24 lg:top-64 left-2 md:left-24 lg:left-12 z-10 space-y-3">

                   <div  className="grid grid-cols-2 items-center gap-80">
                   <div >
                   <h2 className="text-5xl lg:text-6xl font-bold text-white font-Vidaloka"> Find a home that <br /> truly suits you</h2>
                    <p className="text-white">Proposal or Event in our busy city is not so easy</p>
                   </div>
                   <div className="bg-gray-200 p-12 space-y-3">
                    <h3 className="text-3xl font-semibold">Sign to newsletter</h3>
                    <p>Save your time and easily rent or sell your property with the <br /> lowest commission on the real estate market.</p>
                    <input className="text-gray-800 px-16 py-3" type="email"  />
                    <button className="text-gray-800 px-4 bg-rose-400 py-3">Sign UP</button>
                   </div>

                   </div>
                </div>
            </div>

        </div>
    );
};

export default SuitHome;