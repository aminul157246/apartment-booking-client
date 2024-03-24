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
             <div className="py-12 " data-aos="fade-in">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Here are some reasons why you should choose our apartment booking
                            service.
                        </p>
                    </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="https://i.ibb.co/LrNnH2f/a4.jpg"
                                alt="Feature 1"
                            />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    Benefit 1
                                </p>
                                <h3 className="mt-2 text-xl font-bold text-gray-900">
                                    Convenient Booking
                                </h3>
                                <p className="mt-3 text-base text-gray-500">
                                    Easily book your dream apartment online with just a few clicks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="https://i.ibb.co/1LKZvyd/a3.jpg"
                                alt="Feature 2"
                            />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    Benefit 2
                                </p>
                                <h3 className="mt-2 text-xl font-bold text-gray-900">
                                    Quality Accommodation
                                </h3>
                                <p className="mt-3 text-base text-gray-500">
                                    We offer high-quality apartments with modern amenities for your
                                    comfort.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src="https://i.ibb.co/dB825kc/a6.jpg"
                                alt="Feature 3"
                            />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    Benefit 3
                                </p>
                                <h3 className="mt-2 text-xl font-bold text-gray-900">
                                    Affordable Prices
                                </h3>
                                <p className="mt-3 text-base text-gray-500">
                                    Enjoy competitive pricing on our apartments without compromising
                                    on quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;