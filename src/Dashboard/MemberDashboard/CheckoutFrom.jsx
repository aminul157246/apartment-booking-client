import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const CheckoutFrom = () => {


    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [cart] = useCarts()

    const axiosSecure = useAxiosSecure()

    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (event) => {
        event.preventDefault()


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setError(error.message)
        }

        else {
            console.log('payment method', paymentMethod);
            setError('')
        }

    }

    const totalPrice = cart.reduce((acc, item) => acc + item?.apartmentItem?.RentPrice, 0);
    console.log(totalPrice);

    // console.log(cart);

    
    // useEffect( () => {
    //     axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //         .then(res => {
    //             console.log(res.data.clientSecret);
    //             setClientSecret(res.data.clientSecret)
    //         })
          

    // }, [axiosSecure, totalPrice])





    useEffect(() => {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        
    }, [axiosSecure, totalPrice])
    
    console.log('clientSecret', clientSecret);


    return (
        <div>
            <form onSubmit={handleSubmit}>





                <CardElement
                    options={{
                        style: {
                           
                            base: {
                                fontSize: '24px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />






                {/* <PaymentElement /> */}
                <button className="mt-12 bg-green-300 px-4 py-2 rounded-lg" type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>











                {/* Show error message to your customers */}
                <p className="text-red-500"> {error}</p>

            </form>
        </div>
    );
};

export default CheckoutFrom;