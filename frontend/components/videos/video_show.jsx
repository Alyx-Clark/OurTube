import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoUpnext from './videoUpnext';
import VideoWatch from './video_watch';

class VideoShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log("thisiscodfmaoife")
        this.props.fetchUsers();
        if(!this.props.match) { return null}
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProp) {
        if(this.props.match.params.videoId !== prevProp.match.params.videoId){
           this.props.fetchVideo(this.props.match.params.videoId);
        // (this.props.video).load()
        }
    }


    render(){
        const { video, users, videos } = this.props
        return(
            <div>
                <NavBarContainer />
                <VideoWatch source={video.uploadedVideo} users={users} />
                <div className='vs-videos'>
                    {
                        videos.map(video => (
                            <VideoUpnext key={video.id} video={video} />
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default VideoShow;