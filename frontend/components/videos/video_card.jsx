import React from "react";
import { Link } from 'react-router-dom';

class VideoCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { video } = this.props;
        const duration = ["0", "0:14", "0:13", "0:31", "0:16", "0:04", "0:04", "0:04", "0:12", "0:19", "0:27" ]
        return(
            <div className="vc-eachvideo">
                <div className="vc-videos">
                    <Link to={`/watch/${video.id}`} className='vc-link'>
                        <div className='vc-thumbnail'>
                            <button className='vc-thumbnailbtn'>
                                <img src={video.uploadedThumbnail} className='vc-thumbnailpic'/>
                                <span className='vc-duration'>{duration[video.id - 1]}</span>
                            </button>
                        </div>
                        <div className="vc-videobottom">
                            <div className="vc-viddetails">
                                <span className='vc-title'>{video.title}</span>
                                <span className="vc-username">{video.user.userName}</span>
                                <div className='vc-data'>
                                    <span>{Math.floor(Math.random() * (999 - 10) + 10)}k views </span>
                                    • 
                                    <span> {video.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}



export default VideoCard;