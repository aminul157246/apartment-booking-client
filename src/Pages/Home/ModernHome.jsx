import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ModernHome = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])



    return (
        <div className="flex mt-12 bg-gray-100 p-12 items-center gap-8 "> 
            <div className="flex-1 ml-28" data-aos="zoom-in-left">
                <img className="w-[600px] border-l-[18px] pt-4 border-b-[18px] pr-5 border-yellow-400" src='https://i.ibb.co/wWtgQgn/modern-space.jpg' alt="" />
            </div>

            <div className="flex-1 " data-aos="zoom-in-right">
                <h3 className="text-5xl">Modern spaces and <br />
                    <span className="font-bold"> premium</span> design</h3>
                <p className="mt-6">Learn effective practical tips to help you find budgeting strategies and <br /> tips to make the most of your travel funds for your next vacation.</p>
                <p className="mt-3">– Mea omnium explicari</p>
                <p>– His no legere feugaitoer</p>
                <p>– illum idquem</p>
                <button className="px-5 ml-4 py-3 bg-yellow-400 mt-6 font-semibold">Search Property</button>
            </div> 
        </div>
    );
};

export default ModernHome;