import Apartments from "./Apartments/Apartments";
import Banner from "./Banner/Banner";
import LoanHome from "./LoanHome";
import Map from "./Map/Map";
import ModernHome from "./ModernHome";
import PerfectHome from "./PerfectHome";
import SuitHome from "./SuitHome";
const Home = () => {
    return (
        <div>
           <Banner/>
           <div className="w-[1450px] mx-auto">
           <Apartments/>
           <PerfectHome/>
           <ModernHome/>
           <SuitHome/>
           <LoanHome/>
           </div>
           <Map/>
        </div>
    );
};

export default Home;