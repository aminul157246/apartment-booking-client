import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useState } from "react";
import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import { FiAlignJustify } from "react-icons/fi";

const Dashboard = () => {


    const [isAdmin] = useAdmin();
    console.log(isAdmin);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className="flex">
            <Helmet><title>New Home || Dashboard</title></Helmet>

            <div className="lg:ml-24 ml-8 mt-8 lg:mt-16 text-4xl">
            <button onClick={toggleDrawer}><FiAlignJustify/></button>
            </div>
            <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="left"
                >
            <div className="w-1/4 p-4 lg:p-12">
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

            </Drawer>

            <div className="w-3/4  lg:mt-12 ml-8 lg:ml-40 bg-gray-100 p-8 ">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;