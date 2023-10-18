import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import {useParams} from 'react-router-dom'
const JoinIt = () => {
    let {roomId}=useParams();
    const myMeeting = async (element) => {
        const appID = 675948974;
        const serverSecret = "3b8322ecdfa7b78f0b459b4b37d78259";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomId, Date.now().toString(),' ');
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
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
          });
         };
    console.log(roomId)
  return (
  <>
  <div className="joindiv">
    <div ref={myMeeting}/>
  </div>
  </>
  )
}

export default JoinIt