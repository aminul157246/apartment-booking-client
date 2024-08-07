import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import PropTypes from 'prop-types';
import { useEffect } from "react";

const Apartment = ({ item }) => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    const { _id, ApartmentName,Area, OwnerImg, PropertyOwner, Address, image, RentType, RentPrice, Bedrooms, Bathrooms, Description } = item;


    return (
        <div className="lg:mt-12  " data-aos="zoom-in-up">

            <div className="p-3 lg:h-[550px] w-full card relative card-compact  bg-base-100 shadow-xl group">
                <Link to={`/apartmentDetails/${_id}`}>
                    <figure>
                        <img className="h-[300px] w-full" src={image} alt="Apartment" />
                    </figure>
                </Link>



                <div className="space-y-2  p-4">
                    <p className="flex gap-1 items-center">
                        <CiLocationOn /><small>{Address}</small>
                    </p>
                    <h2 className="card-title font-textStyle">{ApartmentName}</h2>
                    <div className=" text-gray-500 ">
                        {  Description?.length > 100 ? `${Description.slice(0, 130)}` : Description}
                    </div>
                    <div className="border-t border-gray-300 mt-4"></div>

                    {/* <div className="divider"></div> */}



                    <div className="flex gap-6 lg:justify-between pt-3">
                        <p className="text-xl ">{RentPrice}$</p>
                        <div className="flex gap-3 lg:gap-8">
                            <p className="flex items-center  gap-2">
                                <span className="lg:text-3xl"><BiArea /></span>{Area}
                            </p>
                            <p className="flex items-center  gap-2">
                                <span className="lg:text-3xl"><MdOutlineBedroomParent /></span>{Bathrooms}
                            </p>
                            <p className="flex items-center  gap-2">
                                <span className="lg:text-3xl"><GiBathtub /></span>{Bedrooms}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                    </div>

                    <p className="absolute bg-gray-300 text-black rounded px-3 py-1 -left-1 lg:-left-2 top-4">For {RentType}</p>


                    <div className="absolute text-black rounded px-3 py-1 right-2 top-48 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <p className="font-bold text-gray-200 mb-1">{PropertyOwner}</p>
                        <img className="w-[60px]  rounded-full" src={OwnerImg} alt="" />
                    </div>

                    {/* <button onClick={handleDelete}>X</button> */}

                </div>
            </div>
        </div>
    );
};



Apartment.propTypes = {
    item: PropTypes.object
}


export default Apartment;