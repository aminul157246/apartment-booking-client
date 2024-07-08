import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoConference = () => {

    const [value, setValue] = useState("")

    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`room/${value}`)
    }, [navigate, value])
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" name="" id="" placeholder="Enter Room Code" />
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    );
};

export default VideoConference;