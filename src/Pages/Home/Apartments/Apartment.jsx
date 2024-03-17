import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import axios from "axios";


const Apartment = ({ item }) => {

    const { _id, ApartmentName, Address, img1, RentType, RentPrice, Bedrooms, Bathrooms, Description } = item;



    const handleDelete = () => {
        axios.delete(`http://localhost:5000/apartment/${_id}`)
        .then(response => {
            console.log(response.data.deletedCount);
        })
    }


    return (
        <div>

            <div className="card relative card-compact w-96 bg-base-100 shadow-xl group">
                <figure>
                    <img src={img1} alt="Apartment" />
                </figure>
                <div className="card-body">
                    <p className="flex gap-1 items-center">
                        <CiLocationOn /><small>{Address}</small>
                    </p>
                    <h2 className="card-title">{ApartmentName}</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {/* {Description.length > 100 ? `${Description.slice(0, 80)}...` : Description} */}
                    </p>
                    <div className="divider"></div>
                    <div className="flex justify-between">
                        <p className="text-2xl">{RentPrice}$</p>
                        <div className="flex gap-8">
                            <p className="flex items-center text-2xl gap-2">
                                <span className="text-3xl"><MdOutlineBedroomParent /></span>{Bathrooms}
                            </p>
                            <p className="flex items-center text-2xl gap-2">
                                <span className="text-3xl"><GiBathtub /></span>{Bedrooms}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/apartmentDetails/${_id}`}>Details</Link>
                    </div>

                    <p className="absolute bg-gray-300 text-black rounded px-3 py-1 -left-2 top-4">For {RentType}</p>


                    <div className="absolute bg-gray-300 text-black rounded px-3 py-1 left-2 top-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Aminul Islam
                    </div>

                    <button onClick={handleDelete}>X</button>
                </div>
            </div>











        </div>
    );
};



Apartment.propTypes = {
    item: PropTypes.object
}


export default Apartment;