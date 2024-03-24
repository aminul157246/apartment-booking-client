
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const LoanHome = () => {

    useEffect(() => {
        AOS.init({
            duration: "2000"
        });

    }, [])


    return (
        <div className="flex bg-gray-100 mt-12 p-12 items-center gap-8">
            <div className="flex-1 ml-28" data-aos="zoom-in-left">
                <img className="w-[600px] border-r-[18px] pt-4 border-t-[18px] pr-5 border-yellow-400" src='https://i.ibb.co/Byg5LJQ/loan.jpg' alt="" />
            </div>

            <div className="flex-1 " data-aos="zoom-in-right">
 
                <h3 className="text-5xl">Explore your home <br />
                    <span className="font-bold"> loan</span> options</h3>
                <p className="mt-6">Learn effective practical tips to help you find budgeting strategies and <br /> tips to make the most of your travel funds for your next vacation.</p>
                
                <button className="px-5 ml-4 py-3 bg-yellow-400 mt-6 font-semibold">Search Property</button>
            </div> 
        </div>
    );
};

export default LoanHome;