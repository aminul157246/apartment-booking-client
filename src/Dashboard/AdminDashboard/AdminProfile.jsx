// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminProfile = () => {


    // const axiosSecure = useAxiosSecure()

    // const {  data: users = [] } = useQuery({
    //     queryKey: ['admin'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users/onlyAdmin')
    //         console.log(res.data);
    //         return res.data;

    //     }
    // })

    // console.log(users);

    return (
        <div>
            <h2 className="text-4xl">Admin Profile</h2>
            {/* {
                users.map(user => <li key={user._id}>{user.name}</li>)
            } */}

        </div>
    );
};

export default AdminProfile;