import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const Agreement = () => {

    const {user} = useAuth()
//     const { data : apartments } = useQuery({
//         queryKey : ['apartm'], 
//         queryFn : async () => {
//             const res = await fetch(`http://localhost:5001/carts?email=${user.email}`)
//             return res.json()
//         }
//     })
// console.log(apartments);


axios.get(`https://apartment-booking-server.vercel.app/carts?email=${user.email}`)
.then(res => {
    console.log(res.data);
})


    return (
        <div>
          kdjk
        </div>
    );
};

export default Agreement;