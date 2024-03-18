import useCarts from "../../hooks/useCarts";

const MyApartment = () => {

    const [cart] = useCarts()
    console.log('cart', cart);



    return (
        <div>
            {/* MyApartment
            <>
            <CreateApartment/>
            </> */}
            {
                cart.map(item => <div key={item.id}>
                    <ul>
                        <li>{item.ApartmentName}</li>
                    </ul>
                </div>)
            }


        </div>
    );
};

export default MyApartment;