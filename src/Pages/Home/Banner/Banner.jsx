import videoBg from '../../../assets/banner-video.mp4'
import './banner.css'
const Banner = () => {
    return (
        <div className='main'>
        <video className='video' src={videoBg} autoPlay loop muted />


        <div className="absolute top-16 md:top-24 lg:top-72 left-10 md:left-12 lg:left-32 z-10 space-y-3">
          <h2 className="text-2xl lg:text-6xl font-bold text-white font-Vidaloka">
            
            <span className="text-yellow-400">We created</span> <br />
            you  
            celebrate
          </h2>
          <p className="text-white">
            Planning a Wedding, Proposal or Event in our busy city is not so
            easy,
            <br /> and its takes skills and time to make it all look easy going{" "}
          </p>
          <button className="bg-red-400 text-white rounded-3xl px-4 py-2">
            Online request
          </button>
        </div>

    </div>
    );
};

export default Banner;