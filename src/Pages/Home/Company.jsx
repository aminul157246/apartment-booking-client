import Marquee from "react-fast-marquee";
import img1 from '../../../src/assets/Alibaba-Logo.png'
import img2 from '../../../src/assets/power-point.png'
import img3 from '../../../src/assets/BlackRock.png'
import img4 from '../../../src/assets/facebook.png'
import img5 from '../../../src/assets/google.png'
import img6 from '../../../src/assets/microsoft.png'
import img7 from '../../../src/assets/twitter.png'
import img8 from '../../../src/assets/youtube.png'


const Company = () => {
    return (
        <div className="my-6">
            <Marquee>
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img1} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img2} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img3} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img4} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img5} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img6} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img7} alt="" />
                <img className=" w-48 flex items-center ml-8 pt-3 justify-center" src={img8} alt="" />
            </Marquee>
        </div>
    );
};

export default Company;