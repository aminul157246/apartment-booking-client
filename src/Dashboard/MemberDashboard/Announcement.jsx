import Lottie from 'lottie-react';
import comingSoon from '../../../src/lottie/coming.json'
const Announcement = () => {
    return (
        <div className='pt-24 max-w-xl mx-auto'>
            <Lottie animationData={comingSoon} loop={true} />;
        </div>
    );
};

export default Announcement;