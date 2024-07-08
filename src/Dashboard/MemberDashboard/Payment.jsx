import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

const Payment = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {  data: cart =[]} = useQuery({
        queryKey: ['cart', user?.email],

        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        },

    })

    // console.log(cart);

    const totalPrice = cart.reduce((acc, item) => acc + item?.apartmentItem?.RentPrice, 0);



        const { register, handleSubmit} = useForm();
   

    const onSubmit = async (data) => {



        const formItems = {
            name : data.name, 
            address: data.address,
            email : data.email,
            phone : data.phone,
            totalPrice, 
            

        }


        const response = await axios.post('http://localhost:5001/form-data', formItems);
            console.log("Server Response:", response.data);

            if (response.data.url) {
                // Redirect to the payment gateway URL
                window.location.href = response.data.url;
            } else {
                console.error("No URL returned from the server");
            }


    }



    return (

        <div className="pt-24 max-w-xl mx-auto">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-6'>



                
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">*Name </span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter your Name here..."
                            
                            className="input input-bordered w-full"
                        />
                    </label>


                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Address : </span>
                        </div>
                        <input
                            {...register("address", { required: true })}
                            type="text"
                            placeholder="Enter Your Address"
                            className="input input-bordered w-full"
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email : </span>
                        </div>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="abc@gmail.com"
                            // defaultValue="abc@gmail.com"
                            className="input input-bordered w-full"
                        />
                    </label>

              


                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">*Mobile No.</span>
                    </div>
                    <input
                        {...register("phone", { required: true })}
                        type="text"
                        placeholder="Enter your Mobile No." 
                        className="input input-bordered w-full"
                    />
                </label>

                {/* <button type="button" className="btn bg-gray-600 text">TOTAL: {total} TK</button> <br /> */}

                <button type="submit" className='btn'>Pay: {totalPrice}</button>
            </div>
        </form>
        </div>

    );
};

export default Payment;