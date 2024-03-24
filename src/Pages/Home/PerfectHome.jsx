
import { FaHome } from "react-icons/fa";
import { GiKeyring } from "react-icons/gi";
import { IoDocumentTextSharp } from "react-icons/io5";
import { SiGooglemeet } from "react-icons/si";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const PerfectHome = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (
        <div className="mt-12 "  data-aos="fade-up">
            <h2 className="text-4xl ">How It works? <br />
Find a perfect home</h2>
<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 md:p-0 lg:p-0 gap-4  mt-8 space-y-2">
    <div className="md:border-r-2 space-y-2">
        <FaHome className="text-4xl "></FaHome >
        <h4 className="font-bold">Find real estate</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>

    </div>
    <div className="border-r-2 space-y-2">
    <SiGooglemeet className="text-4xl "/>

        <h4 className="font-bold">Meet relator</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
    </div>

    <div className="border-r-2 space-y-2">
    <IoDocumentTextSharp className="text-4xl "/>
        <h4 className="font-bold">Documents</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
    </div>
    <div>
        <GiKeyring className="text-4xl space-y-2"></GiKeyring>
        <h4 className="font-bold">Take the keys</h4>
        <p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
    </div>

</div>
        </div>
    );
};

export default PerfectHome;
