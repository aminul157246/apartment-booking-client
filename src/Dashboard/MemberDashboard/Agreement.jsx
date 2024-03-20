// import axios from "axios";
// import useAuth from "../../hooks/useAuth";

// import Swal from "sweetalert2";  
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
// import CartTable from "./CartTable";

const Agreement = () => {

    const [   cart] = useCarts()
    // console.log('cart', cart);


// const axiosSecure = useAxiosSecure()



    // const handleDelete = (id) => {
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // }).then((result) => {

        //     if (result.isConfirmed) {

        //         axiosSecure.delete(`/carts/${id}`)
        //             .then(res => {
        //                 if (res.data.deletedCount > 0) {
        //                     refetch()
        //                     Swal.fire({
        //                         title: "Deleted!",
        //                         text: "Your file has been deleted.",
        //                         icon: "success"
        //                     });
        //                 }
        //                 console.log(res.data);
        //             })

        //     }
        // });

    //     console.log(id);
    // }







    return (
        <div>
            <h2 className="text-4xl text-center ">My Cart</h2>
           


            <div>


                <div className="overflow-x-auto">
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
                                cart.map((item, index,) => 
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
                                            // onClick={() => handleDelete(item._id)} 
                                             className="btn btn-ghost">X</button>
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