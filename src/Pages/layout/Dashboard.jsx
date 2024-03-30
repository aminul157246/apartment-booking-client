import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import 'react-modern-drawer/dist/index.css';

const Dashboard = () => {


    const [isAdmin] = useAdmin();
    console.log(isAdmin);




    return (
        <div className="flex">
            <Helmet><title>New Home || Dashboard</title></Helmet>

           

            <div className="w-1/5 pt-24  px-12">
                {
                    isAdmin ? <div className="list-none min-h-screen space-y-2">

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/adminProfile'}> Profile </NavLink>
                        </li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/allUsers'}>  All Users </NavLink>
                        </li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/addItems'}>  Add Items </NavLink>
                        </li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/manageItems'}> Manage Items </NavLink>
                        </li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/announcement'}>Announcement</NavLink></li>





                        <div className="divider"></div>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/'}>Home</NavLink></li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/agreement'}>Apartment</NavLink></li>

                    </div>
                        :
                        <div className="list-none min-h-screen space-y-2">
                            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/memberProfile'}>Profile</NavLink></li>

                            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold" : ""}
                                    style={{ background: 'none' }} to={'/dashboard/agreement'}>Agreement</NavLink></li>

                            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold" : ""}
                                    style={{ background: 'none' }} to={'/dashboard/payment'}>Payment</NavLink></li>

                            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold" : ""}
                                    style={{ background: 'none' }} to={'/dashboard/paymentHistory'}>Payment History</NavLink></li>


                            <div className="divider"></div>

                            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold" : ""}
                                    style={{ background: 'none' }} to={'/'}>Home</NavLink></li>

                            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold" : ""}
                                    style={{ background: 'none' }} to={'/agreement'}>Apartment</NavLink></li>
                        </div>
                }
            </div>


            <div className="w-4/5  lg:mt-12 bg-gray-100 p-8 ">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;