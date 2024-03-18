import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // console.log(user?.email);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],


        queryFn: async () => {

            const res = await axiosSecure.get(`/carts?email=${user?.email}`)

            console.log(res.data)
            return res.data;
        },

    })

    return [cart, refetch];

};

export default useCarts;