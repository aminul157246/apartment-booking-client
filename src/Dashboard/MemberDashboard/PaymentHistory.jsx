import Lottie from "lottie-react";
import comingSoon from '../../../src/lottie/coming.json'
const PaymentHistory = () => {
    return (
        <div>
              <div className='pt-24 max-w-xl mx-auto'>
            <Lottie animationData={comingSoon} loop={true} />;
        </div>
        </div>
    );
};

export default PaymentHistory;