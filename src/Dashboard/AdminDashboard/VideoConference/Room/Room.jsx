
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useEffect, useRef } from 'react';

const Room = () => {

    const { roomId } = useParams()
    const containerRef = useRef(null);


    const myMeeting = async (element) => {
        const appID = 1293958334;
        const serverSecret = "bf5bdd9b0ffcec2f6ec53c6a40cbc2b9a86a363d5d50ae6439f0c1c82b59583b";
        // const userID = String(Date.now());
        // const userName = "Aminul Islam";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, '234433', 'fhjk');


        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomId,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
      
        });
    }


    useEffect(() => {
        if (containerRef.current) {
            myMeeting(containerRef.current);
        }
    });

    return (
        <div ref={myMeeting}>
          
        </div>
    );
};

export default Room;