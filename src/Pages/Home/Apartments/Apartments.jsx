import Apartment from "./Apartment";
import { useQuery } from "@tanstack/react-query";

const Apartments = () => {

    const {isPending,data : apartments } = useQuery({
        queryKey : ['apartment'], 
        queryFn : async () => {
            const res = await fetch(`http://localhost:5000/apartment`)
            return res.json()
        }
    })
console.log(apartments);

    if(isPending){
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }



    return (
        <div className="grid grid-cols-3">

{
    apartments?.map((item) => <Apartment item={item} key={item._id} ></Apartment>)
}

        </div>
    );
};

export default Apartments;