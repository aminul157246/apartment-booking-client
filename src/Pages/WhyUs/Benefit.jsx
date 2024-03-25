import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Benefit = () => {

    useEffect(() => {
        AOS.init({
            duration: "1000"
        });

    }, [])


    return (
        <div>
            <div className="py-6 lg:py-12 " >
                <div className=" px-4   lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold font-textStyle text-gray-900 sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Here are some reasons why you should choose our apartment booking
                            service.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-8">
                    <div data-aos="fade-up" className="p-4 md:p-0 lg:p-0 card card-compact rounded-sm  bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px]' src="https://i.ibb.co/dB825kc/a6.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="text-sm font-medium text-indigo-600">
                                Benefit 1
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">
                                Affordable Prices
                            </h3>
                            <p className="mt-3 text-base text-gray-500">
                            We offer high-quality apartments with modern amenities for your
                                    comfort.
                            </p>
                            <div className=" mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="p-4 md:p-0 lg:p-0 card card-compact rounded-sm  bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px]' src="https://i.ibb.co/LrNnH2f/a4.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="text-sm font-medium text-indigo-600">
                                Benefit 2
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">
                                Affordable Prices
                            </h3>
                            <p className="mt-3 text-base text-gray-500">
                                Enjoy competitive pricing on our apartments without compromising
                                on quality.
                            </p>
                            <div className=" mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="p-4 md:p-0 lg:p-0 card card-compact rounded-sm  bg-base-100 shadow-xl">
                        <figure><img className='w-full h-[300px]' src="https://i.ibb.co/1LKZvyd/a3.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="text-sm font-medium text-indigo-600">
                                Benefit 3
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">
                                Affordable Prices
                            </h3>
                            <p className="mt-3 text-base text-gray-500">
                            We offer high-quality apartments with modern amenities for your
                                    comfort.
                            </p>
                            <div className=" mt-4 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Benefit;