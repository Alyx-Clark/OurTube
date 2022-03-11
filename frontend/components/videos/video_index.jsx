import React from 'react';
import VideoItem from './video_item'


class VideoIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideos();
        this.props.fetchUsers();
    }

    render(){
        const { videos } = this.props;
        return(
            <div className='vidx-background'>
                <div className='vidx-eachvideo'>
                    {
                        videos.map(video => (
                        <VideoItem key={video.id} video={video}/>)
                        )
                    }
                </div>
            </div>
        )
    }
}


export default VideoIndex;