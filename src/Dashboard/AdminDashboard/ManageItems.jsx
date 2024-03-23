import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";



const ManageItems = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosPublic()

    const { refetch, data: apartments = [] } = useQuery({
        queryKey: ['allApartment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartment');
            return res.data;

        }
    })




    // const handleUpdateItem = id => {

    // }

    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                axiosSecure.delete(`/apartment/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }


    return (
        <div>
            <h2 className="text-4xl text-center pt-12 font-bold">All Apartments</h2>
            <h3 className="text-3xl pl-12 font-semibold">Total Items : {apartments.length}</h3>


            <div className="overflow-x-auto p-12">
                <table className="table p-12">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Apartment</th>
                            <th>Price($)</th>
                            <th>Address</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            apartments.map((apartment, idx) => <tr key={apartment._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={apartment.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{apartment.ApartmentName}</td>
                                <td>{apartment.RentPrice}</td>
                                <td>{apartment.Address}</td>
                                <td>
                                    <Link to={`/dashboard/updateApartment/${apartment._id}`}><button className="  text-2xl font-bold btn btn-ghost"
                                    // onClick={() => handleUpdateItem(apartment._id)}
                                    > <FaEdit /></button></Link>
                                </td>
                                <td><button className="text-red-500 text-2xl font-bold btn btn-ghost" onClick={() => handleDeleteItem(apartment._id)}><RiDeleteBin6Line/></button></td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageItems;