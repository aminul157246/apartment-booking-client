import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import { useEffect, useState } from "react";


const useAdmin = () => {

    const {user} = useAuth()
     const axiosSecure = useAxiosSecure()


    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email , 'isAdmin'],

        queryFn: async () => {
         
                const res = await axiosSecure(`/users/admin/${user?.email}`);
                console.log(res.data);
                return res.data?.admin;
            
        },
    
    });

    // const [isAdmin , setIsAdmin]  = useState(0)
    // const [isAdminLoading , setIsAdminLoading]  = useState(0)

    // useEffect(() => {


    //     if(user){
    //         fetch(`http://localhost:5001/users/admin/${user?.email}`)
    //     .then(res => {
    //         console.log(res.data);
    //         setIsAdmin(res.data)
    //     })
    //     }

    // }, [user.email, user])






    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`http://localhost:5001/users/admin/${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setIsAdmin(data?.isAdmin);
    //                 setIsAdminLoading(false);
    //             })
    //     }
    // }, [user?.email])
    return [isAdmin, isAdminLoading]
}



 


export default useAdmin;