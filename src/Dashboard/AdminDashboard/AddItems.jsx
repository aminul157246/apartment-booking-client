import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEy;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItems = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }


        const res = await axiosPublic.post(image_hosting_api, imageFile,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            })

        console.log(res.data);
        if (res.data.success) {
            const apartmentItem = {
                RentPrice: data.RentPrice,
                RentType: data.RentType,
                Description: data.Description,
                Area: data.Area,
                CeilingHeight: data.CeilingHeight,
                Renovation: data.Renovation,
                ConstructionYear: data.ConstructionYear,
                Furnishing: data.Furnishing,
                // AdditionalSpace: data.AdditionalSpace,
                ApartmentItem: data.ApartmentItem,
                Bathrooms: data.Bathrooms,
                Bedrooms: data.Bedrooms,
                Address: data.Address,
                ApartmentName: data.ApartmentName,
                FloorNo: data.FloorNo,
                image: res.data.data.url,

            }

            const apartmentRes = await axiosSecure.post('/apartment', apartmentItem)
            // console.log(apartmentRes.data);

            if (apartmentRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.ApartmentName} added in the menu item`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }

    }







    return (
        <div>
            <div className='p-12'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='space-y-6 '>
                        <div className='flex gap-8 items-center'>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Apartment Name</span>
                                </div>
                                <input  {...register("ApartmentName", { required: true })} type="text" placeholder="eg: Skyline Residences" className="input input-bordered w-full " />

                            </label>


                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Apartment Image</span>
                                </div>
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs " />


                            </label>


                        </div>




                        <div className="flex gap-8">







                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Area</span>
                                </div>
                                <input {...register("Area", { required: true })} type="text" placeholder="eg. 250 sq ft" className="input input-bordered w-full " />

                            </label>




                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Price</span>
                                </div>
                                <input {...register("RentPrice", { required: true })} type="number" placeholder="RentPrice" className="input input-bordered w-full " />

                            </label>
                        </div>




                        <div className="flex gap-8">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Address</span>
                                </div>
                                <input {...register("Address", { required: true })} type="text" placeholder="Address" className="input input-bordered w-full " />

                            </label>



                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Rent Type</span>
                                </div>
                                <select defaultValue="default" {...register("RentType", { required: true })}
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
                                <input {...register("Bedrooms", { required: true })} type="number" placeholder="eg: 3" className="input input-bordered w-full " />

                            </label>



                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Bathrooms</span>
                                </div>
                                <input {...register("Bathrooms", { required: true })} type="number" placeholder="eg: 1" className="input input-bordered w-full " />

                            </label>

                        </div>




                        <div className="flex gap-8">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Floor</span>
                                </div>
                                <input {...register("FloorNo", { required: true })} type="number" placeholder="eg: 3" className="input input-bordered w-full " />

                            </label>



                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Furnishing</span>
                                </div>
                                <input {...register("Furnishing", { required: true })} type="text" placeholder="eg: Furnished" className="input input-bordered w-full " />

                            </label>


                        </div>



                        <div className="flex gap-8">

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Construction Year</span>
                                </div>
                                <input {...register("ConstructionYear", { required: true })} type="number" placeholder="eg: 2012" className="input input-bordered w-full " />

                            </label>



                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Renovation</span>
                                </div>
                                <input {...register("Renovation", { required: true })} type="number" placeholder="eg: 2026" className="input input-bordered w-full " />

                            </label>

                        </div>


                        <div className='flex gap-8'>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">*Ceiling Height</span>
                                </div>
                                <input {...register("CeilingHeight", { required: true })} type="number" placeholder="eg: 3 sqm^2" className="input input-bordered w-full " />

                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">* Area</span>
                                </div>
                                <input {...register("Area", { required: true })} type="number" placeholder="eg: 300 sqm^2" className="input input-bordered w-full " />

                            </label>

                        </div>











                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">*Details</span>
                            </div>
                            <textarea {...register("Description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-md w-full " ></textarea> <br />
                        </label>



                        <button className='btn'>Add Item</button>
                    </div>


                </form>


            </div>
        </div>
    );
};

export default AddItems;