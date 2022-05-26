import React from 'react';
import VideoItem from '../videos/video_item';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: ''
        }
        this.filterVideo = this.filterVideo.bind(this)
    }

    componentDidMount(){
        this.props.fetchVideos().then(()=>this.filterVideo());
    }

    componentDidUpdate(prevProp) {
        if (prevProp.match.params.searchQuery !== this.props.match.params.searchQuery) {
            this.filterVideo();
            // console.log(this.state, 'videos state')
        }
    }

    filterVideo(){
        let filteredVideos;
        if (this.props.match.params.searchQuery.length >= 1) {
            filteredVideos = this.props.videos.filter(video => {
                return video.title.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.description.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase()) ||
                    video.user.userName.toLowerCase().includes(this.props.match.params.searchQuery.toLowerCase())
            })
        }
        this.setState({ videos: filteredVideos })
    }

    render(){
        //console.log(typeof this.state.videos.length)
        //console.log('videos array')
        if(this.state.videos.length === 0) return null
        //console.log('here')
        const { videos } = this.props;
        return(
            <div className='vidx-background'>
                <div className='vidx-eachvideo'>
                    {
                        this.state.videos.map(video => (
                        <VideoItem key={video.id} video={video}/>)
                        )
                    }
                </div>
            </div>
        )
    }

}

export default SearchBar;