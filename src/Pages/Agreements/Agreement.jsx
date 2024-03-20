
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
// import axios from "axios";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";


const Agreement = ({item}) => {

    const { _id, ApartmentName, OwnerImg, PropertyOwner, Address, img1, RentType, RentPrice, img2, img3, img4, Bedrooms, Bathrooms, Description } = item;
    

    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
const [, refetch] = useCarts()

    const handleAddToDatabase = () => {
        if(user && user?.email ){
            //something
            console.log(user.photoURL);



            const apartmentItem = {
              itemId : _id, image: img1, photo: user.photoURL,  name: user.displayName , email : user?.email, ApartmentName, RentPrice , apartId :  _id, Bedrooms, Bathrooms,Address

            }
            // console.log(apartmentItem);

            axiosSecure.post('/carts', {apartmentItem})
            .then(res => {

                // console.log(res.data); 

                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${ApartmentName}'s agreement has been successful`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      refetch()
                }
            })

                }
            
                else{
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
        <div key={item._id} >


                    <div className="card max-w-5xl mx-auto bg-base-100 shadow-xl  mt-6">
                        <div className="card-body ">


                            <div className="flex gap-12">
                                <div>
                                    <img className="w-[250px] h-[150px] rounded" src={item.img1} alt="" />
                                </div>

                                

                                <div className="space-y-1">
                                    <h2 className="text-2xl font-semibold"> {item.ApartmentName}</h2>
                                    <p>Block Name : <span className="font-semibold">{item.BlockName}</span></p>
                                    <p>Floor No : <span className="font-semibold">{item.FloorNo}</span></p>
                                    <p>Price: <span className="font-semibold">{item.RentPrice}</span> $</p>
                                    <p>Block Name : <span className="font-semibold">{item.BlockName}</span></p>
                                </div>

                            </div>




                            <div className="card-actions justify-end">
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