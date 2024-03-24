import CountUp from 'react-countup';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Count = () => {


    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (

        <div data-aos="fade-up" className="container grid grid-cols-5 text-5xl gap-4  shadow-lg bg-blue-50 p-12 mt-12">

            <div>
                <div className="flex">
                    <h3 >$</h3>
                    <CountUp end={980} />
                    <h3>k</h3>
                </div>
                <h3 className='text-xl mt-3'>Median sold price</h3>
            </div>


            <div>
                <CountUp end={24} />
                <h3 className='text-xl mt-3'>Properties sold</h3>
            </div>


            <div>
                <div className="flex">
                    <h3 >$</h3>
                    <CountUp end={680} />
                    <h3>k</h3>
                </div>
                <h3 className='text-xl mt-3'>Median leased price</h3>
            </div>


            <div>
                <CountUp end={95} />
                <h3 className='text-xl mt-3'>Properties leased</h3>
            </div>


            <div>
                <div className="flex">
                    <h3 >$</h3>
                    <CountUp end={722} />
                    <h3>k</h3>
                </div>
                <h3 className='text-xl mt-3'>sales & rental transactions</h3>
            </div>


        </div>
    );
};

export default Count;