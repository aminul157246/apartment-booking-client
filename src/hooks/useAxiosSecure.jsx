import axios from "axios";

export const axiosSecure = axios.create({
    baseURL : 'https://apartment-booking-server.vercel.app',
})



const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;