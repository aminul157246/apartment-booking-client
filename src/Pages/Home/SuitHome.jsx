
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const SuitHome = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (
        <div>
            <div
                className="lg:relative mt-12 lg:h-[100vh] w-full"
                style={{
                    backgroundImage: 'url(https://i.ibb.co/Ch3Rg7X/suithome.jpg)'
                }}
                data-aos="zoom-in-up"
            >
                <div
                    className="lg:absolute inset-0 bg-black opacity-60"
                ></div>
                <div className="lg:absolute top-16 md:top-24 lg:top-64 left-2 md:left-24 lg:left-12 z-10 space-y-3">

                   <div  className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center lg:gap-80">
                   <div className='p-5' >
                   <h2 className="text-3xl font-textStyle lg:text-6xl font-bold text-white font-Vidaloka"> Find a home that <br /> truly suits you</h2>
                    <p className="text-white">Proposal or Event in our busy city is not so easy</p>
                   </div>
                   <div className="bg-gray-200 p-5 lg:p-12 space-y-3">
                    <h3 className="text-3xl font-semibold">Sign to newsletter</h3>
                    <p>Save your time and easily rent or sell your property with the <br /> lowest commission on the real estate market.</p>
                    <input className="text-gray-800 lg:px-16 py-3" type="email"  />
                    <button className="text-gray-800 px-4 bg-rose-400 py-3">Sign UP</button>
                   </div>

                   </div>
                </div>
            </div>

        </div>
    );
};

export default SuitHome;