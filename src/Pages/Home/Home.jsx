import Apartments from "./Apartments/Apartments";
import Banner from "./Banner/Banner";
import Map from "./Map/Map";
import ModernHome from "./ModernHome";
import PerfectHome from "./PerfectHome";
const Home = () => {
    return (
        <div>
           <Banner/>
           <div className="w-[1450px] mx-auto">
           <Apartments/>
           <PerfectHome/>
           <ModernHome/>
           </div>
           <Map/>
        </div>
    );
};

export default Home;