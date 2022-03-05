import React from 'react';


class VideoItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { video } = this.props;
        const duration = ["0:14", "0:13", "0:31", "0:16", "0:04", "0:04", "0:04" ]

        return ( 
            <div className="vi-videos">
                <div className='vi-thumbnail'>
                    <button className='vi-thumbnailbtn'>
                        <img src={video.uploadedThumbnail} className='vi-thumbnailpic'/>
                        <span className='vi-duration'>{duration[video.id - 1]}</span>
                    </button>
                </div>
                <div className="vi-videobottom">
                    <button className='vi-profilepicbtn'><img src={video.user.profilePic} className='vi-profilepic'/></button>
                    <div className="vi-viddetails">
                        <span className='vi-title'>{video.title}</span>
                        <span className="vi-username">{video.user.userName}</span>
                        <div className='vi-data'>
                            <span>{Math.floor(Math.random() * (999 - 10) + 10)}k views </span>
                            • 
                            <span> {video.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoItem;