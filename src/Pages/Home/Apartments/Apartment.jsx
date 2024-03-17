import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
// import axios from "axios";


const Apartment = ({ item }) => {

    const { _id, ApartmentName, OwnerImg, PropertyOwner, Address, img1, RentType, RentPrice, img2, img3, img4, Bedrooms, Bathrooms, Description } = item;



    // const handleDelete = () => {
    //     axios.delete(`http://localhost:5001/apartment/${_id}`)
    //         .then(response => {
    //             console.log(response.data.deletedCount);
    //         })
    // }


    return (
        <div className="mt-12  ">

            <div className=" h-[600px] card relative card-compact  bg-base-100 shadow-xl group">
                <Link to={`/apartmentDetails/${_id}`}>
                    <figure>
                        <img className="h-[300px] w-full" src={img1} alt="Apartment" />
                    </figure>
                </Link>



                {/* 
<div className="carousel carousel-center  ">
  <div className="carousel-item">
    <img src={img1} className=" w-96 h-96" />
  </div> 
  <div className="carousel-item">
    <img src={img2} className=" w-96 h-96" />
  </div> 
  <div className="carousel-item">
    <img src={img3} className=" w-96 h-96" />
  </div> 
  <div className="carousel-item">
    <img src={img4} className=" w-96 h-96" />
  </div> 
  
</div> */}




                <div className="card-body p-4">
                    <p className="flex gap-1 items-center">
                        <CiLocationOn /><small>{Address}</small>
                    </p>
                    <h2 className="card-title">{ApartmentName}</h2>
                    <p className=" text-gray-700 ">
                        {  Description?.length > 100 ? `${Description.slice(0, 130)}` : Description}
                    <div className="border-t border-gray-300 mt-4"></div>
                    </p>

                    {/* <div className="divider"></div> */}



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
                    </div>

                    <p className="absolute bg-gray-300 text-black rounded px-3 py-1 -left-2 top-4">For {RentType}</p>


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