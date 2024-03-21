
import swal from "sweetalert";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Google = () => {

    const {signInWithGoogle} = useAuth()
const axiosPublic = useAxiosPublic()
const navigate = useNavigate()
 
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {

            const userInfo = {
                name : res.user?.displayName,
                email : res.user?.email,
                photo : res.user?.photoURL
                
            }

            axiosPublic.post('/users', {userInfo})
            .then(res => {
                console.log(res.data);
                navigate('/')
            })

            // console.log(res.user);
            swal("Good job!", "Sign in with Google done!", "success");
        })
        .catch(err => {
            console.log(err.message);
        })
    } 


    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">Google log in </button>
        </div>
    );
};

export default Google;