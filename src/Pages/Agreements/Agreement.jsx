
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
// import axios from "axios";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Agreement = ({ item }) => {


    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    const { _id, ApartmentName, Address, image, RentPrice, Bedrooms, Bathrooms } = item;


    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCarts()

    const handleAddToDatabase = () => {
        if (user && user?.email) {
            //something
            console.log(user.photoURL);



            const apartmentItem = {
                itemId: _id, image, photo: user.photoURL, name: user.displayName, email: user?.email, ApartmentName, RentPrice, Bedrooms, Bathrooms, Address

            }
            // console.log(apartmentItem);

            axiosSecure.post('/carts', { apartmentItem })
                .then(res => {

                    // console.log(res.data); 

                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${ApartmentName}'s agreement has been successful`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        refetch()
                    }
                })

        }

        else {
            Swal.fire({
                title: "You have to login first",
                text: "please login in bistro!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: " Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send in login page
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    }


    return (
        <div key={item._id} data-aos="fade-up">


            <div className="card max-w-5xl mx-auto bg-base-100 shadow-xl  mt-6">
                <div className="card-body lg:flex-row justify-between ">


                    <div className="lg:flex lg:gap-12">
                        <div>
                            <img className="w-full lg:w-[250px] h-[200px] lg:h-[150px] rounded" src={item.image} alt="" />
                        </div>



                        <div className="space-y-1 mt-4">
                            <h2 className="text-2xl font-semibold"> {item.ApartmentName}</h2>

                            <p>Apartment Item : <span className="font-semibold">{item.ApartmentItem}</span> </p>
                            <p>Price: <span className="font-semibold">{item.RentPrice} $</span></p>
                            <p>Address : <span className="font-semibold">{item.Address}</span></p>
                            <p>Bedrooms : <span className="font-semibold">{item.Bedrooms}</span></p>
                            <p>Bathrooms : <span className="font-semibold">{item.Bathrooms}</span></p>
                        </div>


                    </div>


                    <div className="pt-2 flex justify-center lg:pt-12 ">
                        <button onClick={handleAddToDatabase} className="btn btn-outline">Agreement</button>
                    </div>


                </div>
            </div>




        </div>
    );
};



Agreement.propTypes = {
    item: PropTypes.object
}


export default Agreement;