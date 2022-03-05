import React from 'react';
import VideoItem from './video_item'


class VideoIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchVideos();
        // this.props.fetchUsers();
        // this.props.fetchVideos().then((videos) => {
        //     this.props.fetchUsers(video.id)
        // })
    }

    render(){
        const { videos } = this.props;
        return(
            <div className='vidx-eachvideo'>
                {
                    videos.map(video => (
                    <VideoItem key={video.id} video={video}/>)
                    )
                }
            </div>
        )
    }
}


export default VideoIndex;