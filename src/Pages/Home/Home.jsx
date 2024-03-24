import { Helmet } from "react-helmet";
import Apartments from "./Apartments/Apartments";
import Banner from "./Banner/Banner";
import LoanHome from "./LoanHome";
import Map from "./Map/Map";

import AOS from 'aos';
import 'aos/dist/aos.css';

import ModernHome from "./ModernHome";
import PerfectHome from "./PerfectHome";
import SuitHome from "./SuitHome";
import Company from "./Company";
import Testimonial from "./Testimonial";
import { useEffect } from "react";
const Home = () => {


    useEffect(() => {
        AOS.init({
            duration: "2000"
        });

    }, [])


    return (
        <div>

            <Helmet>
                <title>New Home || Home</title>
            </Helmet>


            <Banner />
            <div className="w-[1450px] mx-auto">
                <Apartments />
                <PerfectHome />
                {/* <div data-aos="fade-right"> */}
                    <ModernHome />

                {/* </div> */}
                <SuitHome />
                <LoanHome />
                <Testimonial />
            </div>
            <Company />
            {/* <Map /> */}
        </div>
    );
};

export default Home;