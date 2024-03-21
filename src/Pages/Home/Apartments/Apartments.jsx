import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Apartment from "./Apartment";
import { useQuery } from "@tanstack/react-query";

const Apartments = () => {
const axiosPublic = useAxiosPublic()
    const { isPending, data: apartments } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPublic('/apartment')
            return res.data;
        }
    })
    // console.log(apartments);

    if (isPending) {
        return <div className="flex justify-center items-center">
           <p> <span className="loading loading-bars loading-lg"></span></p>
        </div>
    }



    return (

        <div>




            <h3 className="text-5xl mt-12 mb-4 font-semibold">Our choice of <br />
                popular real estate</h3>

            <div className="grid grid-cols-3 gap-6 ">

                {
                    apartments?.map((item) => <Apartment item={item} key={item._id} ></Apartment>)
                }

            </div>

            <div className="flex justify-center items-center">
                <button className="py-3 px-4 text-xl font-semibold bg-orange-500 mt-8">Browse More Properties</button>
            </div>
        </div>
    );
};

export default Apartments;