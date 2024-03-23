import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
 

const AdminProfile = () => {
    const axiosSecure = useAxiosSecure()

    const { data: state } = useQuery({
        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-status')
            return res.data;

        }
    })

    const { user } = useAuth()

    return (
        <div>
            <h2 className="text-4xl text-center underline">Admin Profile</h2>
            <h3 className="text-4xl text-center mt-4">Hello I am <span className="font-bold text-gray-500">{user.displayName}</span></h3>


            <div className="mt-12">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                        </div>
                        <div className="stat-title">Total Member</div>
                        <div className="stat-value text-primary text-center">{state?.users}</div>
                    </div>
                </div>

                <div className="stats shadow ml-8">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                        </div>
                        <div className="stat-title">Total Apartment Items</div>
                        <div className="stat-value text-primary text-center">{state?.apartmentItems}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;