


import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvieder/AuthProvider';
import Google from './Google';

const Login = () => {



    const captchaRef = useRef(null)
    console.log(captchaRef);


    const [disable, setDisable ] = useState(true)




    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])

    const handleCaptcha = () => {
         const user_captcha_value = captchaRef.current.value;
         if(validateCaptcha(user_captcha_value)){
             setDisable(false)
         }
         else{
            setDisable(true)
         }
    }


    const location = useLocation()
    // const from = location.state?.from?.pathname || '/'
    console.log(location.pathname);







    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        // get input field 
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(  email, password);



        login(email,password) 
        .then(currentUser => {
            console.log(currentUser.user);
            toast.success('Login successfully')

            navigate(location?.state ? location.state : "/")

            
        })
        .catch((error) => {
            console.log(error.message); 
            toast.error('Login failed')

        });
    }
    return (
      <>
      <div className="hero min-h-screen bg-base-200">
          
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl text-center my-4 font-bold">Login now!</h1>
                  <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input type="text" placeholder="email" className="input input-bordered" name='email'/>
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input type="text" placeholder="password" className="input input-bordered" name='password' />
                          <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                          </label>
                      </div>

                      <div className="form-control">
                          <label className="label">
                          <LoadCanvasTemplate />
                          </label>
                          <input ref={captchaRef} type="text" placeholder="Fill the captcha" className="input input-bordered"   />
                          <button onClick={handleCaptcha} className="btn btn-xs mt-2">Validate</button>
                          
                      </div>


                      <div className="form-control mt-6 p-0">
                          <button disabled ={disable} type='submit' className="btn btn-neutral">Login</button>
                      </div>
                      <label className="label">
                           Do not have an account? <Link to="/registration" className="text-blue-700 underline">create an account</Link>
                      </label>
                  </form>
                  <div className='flex justify-center mb-4'>
                            <Google/>
                            </div>
              
          </div>
      </div>
  </>
    );
};

export default Login;