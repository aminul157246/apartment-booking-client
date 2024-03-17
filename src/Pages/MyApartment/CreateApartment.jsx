
import axios from "axios";
import Swal from "sweetalert2";
const CreateApartment = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        //  title , description, mark , img 


        const form = event.target;
        const title = form.title.value;
        const mark = form.mark.value;
        const description = form.description.value;
        const image = form.image.value;
        const created = {title, mark, description, image};
        console.log(created);

        // send data in server from here
       axios.post('http://localhost:5001/apartment', created)
            
            .then((data) => {
                console.log(data);
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Assignment created successfully.  😻 ",
                        icon: "success",
                        confirmButtonText: "ok",
                    });
                }
            });
    };

    return (
        <div className=" p-8 max-w-4xl mx-auto ">
            <h2 className="text-5xl text-[#F2184F] text-center font-bold my-4"> Create  </h2>

            <form onSubmit={handleAddProduct}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="  Title"
                        className="input input-bordered"
                        name="title"
                        required
                    />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Mark</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Mark"
                        className="input input-bordered"
                        name="mark"
                        required
                    />
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Description"
                        className="input input-bordered"
                        name="description"
                        required
                    />
                </div>


                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Image"
                        className="input input-bordered"
                        name="image"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button className="btn  mt-4">Create </button>
                </div>
            </form>
        </div>
    );
};

export default CreateApartment;
