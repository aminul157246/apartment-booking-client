import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {


    const isAdmin = true;


    return (
        <div className="flex">
            <Helmet><title>New Home || Dashboard</title></Helmet>
            <div className="w-1/4 bg-gray-400 h-[700px]">
                {
                    isAdmin ? <>
                        <li>
                            <NavLink to={'/dashboard/adminProfile'}> Admin Home </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/allUsers'}>  All Users </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/addItems'}>  Add Items </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/manageItems'}> Manage Items </NavLink>
                        </li>
                        <li>
                            {/* <NavLink to={'/dashboard/manageBooking'}> Manage Booking </NavLink> */}
                        </li>

                    </>
                        :
                        <>
                            <li><NavLink to={'/dashboard/memberProfile'}>Profile</NavLink></li>
                            <li><NavLink to={'/dashboard/agreement'}>Agreement</NavLink></li>
                            <li><NavLink to={'/dashboard/payment'}>payment</NavLink></li>
                            {/* <li><NavLink to={'/dashboard/paymentHistory'}>Payment History</NavLink></li> */}
                            <li><NavLink to={'/dashboard/announcement'}>Announcement</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                        </>
                }
            </div>

            <div className="w-3/4 bg-gray-200 h-[700px]">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;