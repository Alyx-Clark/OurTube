import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoUpnext from './video_up_next';
import VideoWatch from './video_watch';
import VideoWatchBottom from './video_watch_bottom';
import CommentIndexContainer from '../comments/comment_index_container'
import CommentFormContainer from '../comments/comment_form_container';

class VideoShow extends React.Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchUsers();
        if(!this.props.match) { return null}

        this.props.fetchVideo(this.props.match.params.videoId, this.props.userId);
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProp) {
        if(this.props.match.params.videoId !== prevProp.match.params.videoId){
           this.props.fetchVideo(this.props.match.params.videoId);
        }
    }


    render(){

        if(!this.props.video) return null;
        const { video, users, videos, user } = this.props
        return(
            <div className='video-show'>
                <NavBarContainer className="vs-navbar"/>
                <div className="vs-bottom">
                    <div className='vs-videocolumn'>
                        <VideoWatch source={video.uploadedVideo} users={users} />
                        <VideoWatchBottom video={video} />
                        <CommentFormContainer />
                        <CommentIndexContainer />
                    </div>
                    <div className='vs-videos'>
                        {
                            videos.map(video => (
                                this.props.match.params.videoId != video.id ? 
                                <VideoUpnext key={video.id} video={video} /> : null
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default VideoShow;