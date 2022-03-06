import React from "react";


function VideoWatch(props){
    const { source} = props;
    return (
        <div className="vw-main">
            <video src={source.uploadedVideo} controls autoPlay></video>
        </div>
    )


}

export default VideoWatch;