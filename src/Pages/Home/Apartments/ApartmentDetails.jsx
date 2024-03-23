import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ApartmentDetails = () => {

    // const hi = useLoaderData()
    // console.log(hi);

    const { id } = useParams()
    // console.log(id);

    const { isPending, data: apartment } = useQuery({
        queryKey: ['apart'],
        queryFn: async () => {
            const res = await fetch(`https://apartment-booking-server.vercel.app/apartments/${id}`)
            return res.json()
        }
    })
    // console.log(apartment);

    if (isPending) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    return (
        <div className=" mt-6  mx-12">
 
                <div>
                    <img className="w-full h-[80vh]" src={apartment.image} alt="" />
                </div>

            <div className="space-y-3  ">
                <button className="bg-gray-200 py-1 px-2 mt-6"><small>For {apartment.RentType}</small></button>
                <div className="flex items-center gap-8">
                    <div className="w-1/2 space-y-4">
                        <h3 className="text-3xl font-bold">{apartment.ApartmentName}</h3>
                        <p className="text-xl font-semibold"> Price : {apartment.RentPrice} $</p>
                        <p >{apartment.Description}</p>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-2xl font-semibold">Properties Feature</h1>
                        <p className="  my-6 " > The apartment is a residential unit that is part of one (or several) residential buildings, or a separate dwelling within a house with its own entrance, bathroom and kitchen</p>
                    </div>
                </div>
                <div className="divider"></div>
            


                <div className="flex gap-8">
                    <div className="w-1/2 bg-gray-100">

                        <h3 className="text-2xl font-semibold">Properties Details:</h3>


                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <p className="text-lg pl-4 mt-6" >Bedrooms: <span className="font-semibold">{apartment.Bedrooms}</span></p>
                                <div className="divider"></div>

                                <p className="text-lg pl-4 ">Bathrooms: <span className="font-semibold">{apartment.Bathrooms}</span></p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Ceiling Height: <span className="font-semibold">{apartment.CeilingHeight} sq ft</span></p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Furnishing: <span className="font-semibold">{apartment.Furnishing}</span></p>
                                <div className="divider"></div>
                            </div>

                            <div className="w-1/2">
                                <p className="text-lg pl-4 mt-6" >Floor No: <span className="font-semibold">{apartment.FloorNo}</span></p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Area: <span className="font-semibold">{apartment.Area}</span></p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Construction Year: <span className="font-semibold">{apartment.ConstructionYear}</span></p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Renovation: <span className="font-semibold">{apartment.Renovation}</span></p>
                                <div className="divider"></div>
                            </div>
                        </div>



                    </div>

                    <div className="w-1/2 bg-gray-100"></div>
                </div>


            </div>

        </div>
    );
};

export default ApartmentDetails;