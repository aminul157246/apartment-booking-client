import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const Payment = () => {


    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: cart = [] } = useQuery({
        queryKey: ['cart-pay', user?.email],

        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        },

    })

    // console.log(cart);

    const totalPrice = cart.reduce((acc, item) => acc + item.apartmentItem?.RentPrice, 0);


    const stripePromise = loadStripe(import.meta.env.VITE_PK);


    return (

        <div>
            <div className="flex justify-between px-12">
                <h3 className="text-center font-bold font-textStyle text-3xl">Payment</h3>
                <h3 className="text-center font-bold font-textStyle text-3xl">Total Price : {totalPrice} $</h3>
            </div>

            <div>
                <Elements stripe={stripePromise} >
                    <CheckoutFrom/>
                </Elements>
            </div>


        </div>
    );
};

export default Payment;