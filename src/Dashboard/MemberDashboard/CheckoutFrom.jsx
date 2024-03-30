import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutFrom = () => {


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


        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        })

        if(error){
            console.log('error', error);
        }

        else{
            console.log('payment method' , paymentMethod);
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>





            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
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
                <button type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>











                {/* Show error message to your customers
      {errorMessage && <div>{errorMessage}</div>} */}
            </form>
        </div>
    );
};

export default CheckoutFrom;