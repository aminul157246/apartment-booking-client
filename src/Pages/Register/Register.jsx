

// import { Link,  useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import toast from 'react-hot-toast';
// import { AuthContext } from '../../Shared/AuthProvider';
// import Google from '../Login/Google';
// import swal from 'sweetalert';
// import { Helmet } from 'react-helmet';

// const Register = () => {



//     const { createUser, handleUpdateProfile } = useContext(AuthContext);
//     const Navigate = useNavigate()

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // get field values 
//         const name = event.target.name.value;
//         const email = event.target.email.value;
//         const img = event.target.img.value;
//         const password = event.target.password.value;


//         // validation 
//         if (password.length < 6) {
//             toast.error('Password must be at least 6 characters');
//             return;
//         }

//         else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password)) {
          
//           toast.error("You should use valid password");
//           return;
//         }


//         // creating a new user
//         createUser(email, password)
//             .then(res => {
//               console.log(res.user);
//                 handleUpdateProfile(name,img)
//                     .then(() => {
//                         swal("Good job!", "Sign in  done!", "success");
//                         Navigate('/')

//                     })
//             })
//             .catch(error => {
//                 toast.error(error.message)
//             })




//     }

//     return (
//         <>
//             <div className="hero min-h-screen bg-base-200">
// <Helmet><title>New Home || Registration</title></Helmet>

//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleSubmit} className="card-body">
//                 <h1 className="text-5xl font-bold">Registration now!</h1>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Full Name</span>
//                                 </label>
//                                 <input type="text" required placeholder="Full name" className="input input-bordered" name='name' />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Image Url</span>
//                                 </label>
//                                 <input type="text" required placeholder="image url" className="input input-bordered" name='img' />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" required placeholder="email" className="input input-bordered" name='email' />
//                             </div>
                            
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label> 
//                                 <input type="text" required placeholder="password" className="input input-bordered" name='password' />
//                             </div>
//                             <div className="form-control mt-6 p-0">
//                                 <button className="btn btn-neutral" type='submit'>Registration</button>
//                             </div>
//                             <label className="label">
//                                 Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
//                             </label>
//                         </form>
//                             <div className='flex justify-center mb-4'>
//                             <Google/>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Register;









import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Google from "../Login/Google";
import { Helmet } from "react-helmet";


const Register = () => {

    const axiosPublic = useAxiosPublic()

    const { createUser, updateUserProfile } = useAuth()

    const navigate = useNavigate()



    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                toast.success('User created successfully');

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        // user Info send in database 
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            // photo : data
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {

                                if (res.data.insertedId) {
                                    reset()
                                    // console.log('user updated');
                                    toast.success('Login successfully')

                                    navigate('/')
                                }

                            })

                    })
                    .catch(error => {
                        toast.error(error.message);
                    })

            })
            .catch(error => {
                toast.error(error.message)
            })


    }

    // const { createUser, handleUpdateProfile } = useContext(AuthContext);




    return (
        <>
 <Helmet><title>New Home || Registration</title></Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Full name" className="input input-bordered" />
                                {errors.name && <span className="text-red-400"> Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.name && <span className="text-red-400"> photo URL is required</span>}
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" name='email' />
                                {errors.name && <span className="text-red-400"> Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password",
                                    {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                                    })} placeholder="password"
                                    className="input input-bordered"
                                    name='password' />
                                {errors.password?.type === 'required' && <p className="text-red-400">Password is required</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-400">Password must be less than 20 character</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be more than 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-400">Password must have one uppercase letter , one lowercase letter, one number and one special character</p>}
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                        </form>
                        <div className='flex justify-center mb-4'>
                            <Google/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;