import { useQuery } from "@tanstack/react-query";
import {  useParams } from "react-router-dom";

const ApartmentDetails = () => {

    // const hi = useLoaderData()
    // console.log(hi);

    const { id } = useParams()
    // console.log(id);

    const { isPending, data: apartment } = useQuery({
        queryKey: ['apart'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/apartments/${id}`)
            return res.json()
        }
    })
    console.log(apartment);

    if (isPending) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    return (
        <div className="max-w-7xl mx-auto">


            <div className="grid grid-cols-2 gap-2">
                <div>
                    <img className="w-full h-[590px]" src={apartment.img1} alt="" />
                </div>

                <div className="">
                    <div className="flex gap-2">
                        <img className="w-[300px] h-[290px]" src={apartment.img2} alt="" />
                        <img className="w-[300px] h-[290px]" src={apartment.img3} alt="" />
                    </div>

                    <div className="flex gap-2 mt-2">
                        <img className="w-[300px] h-[290px]" src={apartment.img4} alt="" />
                        <img className="w-[300px] h-[290px]" src={apartment.img5} alt="" />
                    </div>
                </div>


            </div>

            <div className="space-y-3 w-2/3">
                <button className="bg-gray-200 py-1 px-2 mt-6"><small>For {apartment.RentType}</small></button>
                <h3 className="text-3xl font-bold">{apartment.ApartmentName}</h3>
                <p>{apartment.Description}</p>

                <div className="divider"></div>
                {/* properties  */}


                <div className="flex">
                    <div >
                        <h1 className="text-2xl font-semibold">Properties Feature</h1>
                        <p className="text-xl my-6 " > The apartment is a residential unit that is part of one (or several) residential buildings, or a separate dwelling within a house with its own entrance, bathroom and kitchen</p>

                        <h3 className="text-2xl font-semibold">Properties Details:</h3>


                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <p className="text-lg pl-4 mt-6" >Bedrooms: {apartment.Bedrooms}</p>
                                <div className="divider"></div>

                                <p className="text-lg pl-4 ">Bathrooms: {apartment.Bathrooms}</p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">CeilingHeight: {apartment.CeilingHeight}m^2</p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Furnishing: {apartment.Furnishing}</p>
                                <div className="divider"></div>
                            </div>

                            <div className="w-1/2">
                                <p className="text-lg pl-4 mt-6" >AdditionalValue: {apartment.AdditionalValue}m^2</p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">AdditionalSpace: {apartment.AdditionalSpace}</p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">ConstructionYear: {apartment.ConstructionYear}</p>
                                <div className="divider"></div>
                                <p className="text-lg pl-4 ">Renovation: {apartment.Renovation}</p>
                                <div className="divider"></div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

        </div>
    );
};

export default ApartmentDetails;