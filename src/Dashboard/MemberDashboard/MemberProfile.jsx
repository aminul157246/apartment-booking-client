
import useAuth from "../../hooks/useAuth";

const MemberProfile = () => {

    const { user } = useAuth()

    return (

        <div className="flex items-center p-12 space-x-4">
            <img src={user.photoURL} alt="User Profile" className="h-96 w-96 rounded-full" />
            <div>
                <p className="font-medium text-5xl">{user.displayName}</p>
                <p className="text-gray-500 text-4xl">{user.email}</p>
            </div>
        </div>

    );
};

export default MemberProfile;