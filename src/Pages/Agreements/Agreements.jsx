import { useQuery } from "@tanstack/react-query";
import Agreement from "./Agreement";
import { Helmet } from "react-helmet";

const Agreements = () => {


   
   

    const { isPending, data: apartments } = useQuery({
        queryKey: ['agree'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/apartment`)
            return res.json()
        }
    })
    console.log(apartments);



    if (isPending) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }



    return (
        <div>
            <Helmet>
                <title>New Home || Apartment</title>
            </Helmet>
            {
                apartments?.map((item) => <Agreement key={item._id} item={item}></Agreement> )
            }

        </div>
    );
};

export default Agreements;