import React from 'react';


class VideoItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { video } = this.props;

        return ( 
            <div>
                <button><img src={video.uploaded_thumbnail}/></button>
                <h2>{video.title}</h2>
                <p></p>
            </div>
        )
    }
}

export default VideoItem;