import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">

            <div className="w-1/4 bg-gray-400 h-[700px]">
               <li><NavLink to={'/dashboard/memberProfile'}>Profile</NavLink></li>
               <li><NavLink to={'/dashboard/agreement'}>Agreement</NavLink></li>
               <li><NavLink to={'/dashboard/payment'}>payment</NavLink></li>
               <li><NavLink to={'/dashboard/paymentHistory'}>Payment History</NavLink></li>
            </div>

            <div className="w-3/4 bg-gray-200 h-[700px]">
<Outlet/>
            </div>

        </div>
    );
};

export default Dashboard;