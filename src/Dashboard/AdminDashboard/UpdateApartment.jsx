
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateApartment = () => {



    const apartment = useLoaderData()

    const {
        _id,
        RentPrice,
        RentType,
        Description,
        ParkingArea,
        CeilingHeight,
        Renovation,
        ConstructionYear,
        Furnishing,
        AdditionalSpace,
        Bathrooms,
        Bedrooms,
        Address,
        AdditionalValue,
        ApartmentName,
        BlockName,
        FloorNo,
        
    } = apartment;

    const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEy;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        console.log(res.data);

        if (res.data.success) {
            const apartmentItem = {
                RentPrice: data.RentPrice,
                RentType: data.RentType,
                Description: data.Description,
                ParkingArea: data.ParkingArea,
                CeilingHeight: data.CeilingHeight,
                Renovation: data.Renovation,
                ConstructionYear: data.ConstructionYear,
                Furnishing: data.Furnishing,
                AdditionalSpace: data.AdditionalSpace,
                Bathrooms: data.Bathrooms,
                Bedrooms: data.Bedrooms,
                Address: data.Address,
                AdditionalValue: data.AdditionalValue,
                ApartmentName: data.ApartmentName,
                BlockName: data.BlockName,
                FloorNo: data.FloorNo,
                img1: res.data.data.display_url,


            }

            const apartmentRes = await axiosSecure.patch(`/apartments/${_id}`, apartmentItem)
            console.log(apartmentRes.data);
            if (apartmentRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }




        console.log(res.data);
    }


    return (
        <div>
            <h3 className='text-4xl text-center'>Update Apartment</h3>


            <div>
                <div className='p-12'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='space-y-6 '>
                            <div className='flex gap-8 items-center'>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Apartment Name</span>
                                    </div>
                                    <input defaultValue={ApartmentName} {...register("ApartmentName", { required: true })} type="text" placeholder="eg: Skyline Residences" className="input input-bordered w-full " />

                                </label>


                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Apartment Image</span>
                                    </div>
                                    <input  type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs " />




                                </label>


                            </div>




                            <div className="flex gap-8">







                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Area</span>
                                    </div>
                                    <input defaultValue={AdditionalValue}{...register("AdditionalValue", { required: true })} type="text" placeholder="eg. 250 sq m^2" className="input input-bordered w-full " />

                                </label>




                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Price</span>
                                    </div>
                                    <input defaultValue={RentPrice}{...register("RentPrice", { required: true })} type="number" placeholder="RentPrice" className="input input-bordered w-full " />

                                </label>
                            </div>




                            <div className="flex gap-8">

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Address</span>
                                    </div>
                                    <input defaultValue={Address}{...register("Address", { required: true })} type="text" placeholder="Address" className="input input-bordered w-full " />

                                </label>



                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Rent Type</span>
                                    </div>
                                    <select defaultValue={RentType} {...register("RentType", { required: true })}
                                        className='select select-bordered w-full '
                                    >
                                        <option disabled value="default"> select an item</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Sell">Sell</option>

                                    </select>

                                </label>

                            </div>



                            <div className="flex gap-8">

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Bedroom</span>
                                    </div>
                                    <input defaultValue={Bedrooms}{...register("Bedrooms", { required: true })} type="number" placeholder="eg: 3" className="input input-bordered w-full " />

                                </label>



                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Bathrooms</span>
                                    </div>
                                    <input defaultValue={Bathrooms}{...register("Bathrooms", { required: true })} type="number" placeholder="eg: 1" className="input input-bordered w-full " />

                                </label>

                            </div>




                            <div className="flex gap-8">

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Floor</span>
                                    </div>
                                    <input defaultValue={FloorNo}{...register("FloorNo", { required: true })} type="number" placeholder="eg: 3" className="input input-bordered w-full " />

                                </label>



                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*BlockName</span>
                                    </div>
                                    <input defaultValue={BlockName}{...register("BlockName", { required: true })} type="text" placeholder="eg: Tower A" className="input input-bordered w-full " />

                                </label>

                            </div>




                            <div className="flex gap-8">

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Additional Space</span>
                                    </div>
                                    <input defaultValue={AdditionalSpace}{...register("AdditionalSpace", { required: true })} type="text" placeholder="eg: Attic" className="input input-bordered w-full " />

                                </label>



                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Furnishing</span>
                                    </div>
                                    <input defaultValue={Furnishing}{...register("Furnishing", { required: true })} type="text" placeholder="eg: Furnished" className="input input-bordered w-full " />

                                </label>

                            </div>




                            <div className="flex gap-8">

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Construction Year</span>
                                    </div>
                                    <input defaultValue={ConstructionYear}{...register("ConstructionYear", { required: true })} type="number" placeholder="eg: 2012" className="input input-bordered w-full " />

                                </label>



                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Renovation</span>
                                    </div>
                                    <input defaultValue={Renovation}{...register("Renovation", { required: true })} type="number" placeholder="eg: 2026" className="input input-bordered w-full " />

                                </label>

                            </div>


                            <div className='flex gap-8'>

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Ceiling Height</span>
                                    </div>
                                    <input defaultValue={CeilingHeight}{...register("CeilingHeight", { required: true })} type="number" placeholder="eg: 3 sqm^2" className="input input-bordered w-full " />

                                </label>

                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">*Parking Area</span>
                                    </div>
                                    <input defaultValue={ParkingArea} {...register("ParkingArea", { required: true })} type="number" placeholder="eg: 300 sqm^2" className="input input-bordered w-full " />

                                </label>

                            </div>











                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Details</span>
                                </div>
                                <textarea defaultValue={Description} {...register("Description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-md w-full " ></textarea> <br />
                            </label>



                            <button className='btn'>Add Item</button>
                        </div>


                    </form>


                </div>
            </div>


        </div>
    );
};

export default UpdateApartment;