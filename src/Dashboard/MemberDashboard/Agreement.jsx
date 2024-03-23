import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";

const Agreement = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { refetch, data: cart } = useQuery({
        queryKey: ['cart', user?.email],

        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        },

    })



    const handleDelete = (id) => {
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

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        // console.log(res.data);
                    })

            }
        });

    }







    return (
        <div>
            <h2 className="text-4xl text-center ">My Cart</h2>
            <div>
                <div className="overflow-x-auto p-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Apartment Image</th>
                                <th>Apartment Name</th>
                                <th>Price($) </th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart?.map((item, index,) =>
                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.apartmentItem?.image} alt="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {item.apartmentItem?.ApartmentName}

                                        </td>
                                        <td>{item.apartmentItem?.RentPrice}</td>
                                        <td>{item.apartmentItem?.Address}</td>
                                        <th>
                                            <button 
                                                onClick={() => handleDelete(item._id)}
                                                className="text-red-500 text-2xl font-bold btn btn-ghost"><RiDeleteBin6Line/></button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>


                    </table>
                </div>

            </div>

        </div>
    );
};

export default Agreement;