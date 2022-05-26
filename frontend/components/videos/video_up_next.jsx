import React from "react";
import VideoCard from "./video_card";

function VideoUpnext(props){
    
    return(
        <div className="cards-on-side">
            <VideoCard video={props.video}/>
        </div>
    )
}


export default VideoUpnext;