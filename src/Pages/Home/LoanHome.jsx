
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const LoanHome = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (
        <div className="lg:flex bg-gray-100 mt-12 p-6 lg:p-12 items-center gap-8">
            <div className="flex-1 lg:ml-28" data-aos="zoom-in-left">
                <img className="w-full lg:w-[600px] lg:border-r-[18px] pt-4 lg:border-t-[18px] lg:pr-5 border-yellow-400" src='https://i.ibb.co/Byg5LJQ/loan.jpg' alt="" />
            </div>

            <div className="flex-1 " data-aos="zoom-in-right">
 
                <h3 className="text-5xl font-textStyle mt-4">Explore your home <br />
                    <span className="font-bold"> loan</span> options</h3>
                <p className="mt-6">Learn effective practical tips to help you find budgeting strategies and <br /> tips to make the most of your travel funds for your next vacation.</p>
                
                <div className='flex justify-center'>
                <button className="px-5 ml-4 py-3 bg-yellow-400 mt-6 font-semibold">Search Property</button>
                </div>
            </div> 
        </div>
    );
};

export default LoanHome;