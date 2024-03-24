import { Helmet } from "react-helmet";
import Benefit from "./Benefit";
import Count from "./Count";
import FAQ from "./FAQ";
import Mission from "./Mission";
import Vision from "./Vission";



const WhyUs = () => {
    return (
        <div className="w-[1450px] mx-auto"> 
        <Helmet>
            <title>New Home || Why Us</title>
        </Helmet>
           <Benefit/>
           <Mission/>
           <Count/>
           <Vision/>
           <FAQ/>
        </div>
    );
};

export default WhyUs;
