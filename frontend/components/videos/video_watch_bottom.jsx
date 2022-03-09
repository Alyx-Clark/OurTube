import React from "react";
import thumbup from '../../../app/assets/images/thumb-up.png'
import thumbdown from '../../../app/assets/images/thumb-down.png'
import sharearrow from '../../../app/assets/images/share-arrow.png'
import clip from '../../../app/assets/images/clip.png'
import save from '../../../app/assets/images/save.png'
import dots from '../../../app/assets/images/dots.png'
import verifiednew from '../../../app/assets/images/verifiednew.png'
import subscribe from '../../../app/assets/images/subscribe.png'

class VideoWatchBottom extends React.Component{
    constructor(props){
        super(props)

        // let likes = Math.floor(Math.random() * (999 - 10) + 10)
        this.state = {
            likes: 43,
            views: Math.floor(Math.random() * (99999 - 10) + 10)
        }
        this.incrementClick = this.incrementClick.bind(this);
    }

    componentDidMount(){
        this.numberWithCommas()
    }

    numberWithCommas() {
        this.setState(state => ({
            views: state.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }))
    }

    incrementClick(e){
        e.preventDefault()
        this.setState(state => ({
            likes: state.likes + 1
        }))
    }

    render(){
        const { video } = this.props
        // const views = Math.floor(Math.random() * (99999 - 10) + 10)
        const dislikes = Math.floor(Math.random() * (999 - 10) + 10)
        return(
            <div className="vw-container">
                <div className="vw-info">
                    <p className="vw-tags">#funny #trending #epic</p>
                    <h2 className="vw-title">{video.title}</h2>
                    <div className="vw-under">
                        <div className="vw-data">
                            <span>{this.state.views} views </span>
                            •
                            <span> {video.released}</span>
                        </div>
                        <div className="vw-tools">
                            <div className="vw-button-text">
                                <button className="vw-button" onClick={this.incrementClick}><img src={thumbup} className="vw-dislike"/><p className="vw-text">{this.state.likes}</p></button>
                            </div>

                            <div className="vw-button-text">
                                <button className="vw-button"><img src={thumbdown} className="vw-dislike"/> <p className="vw-text">DISLIKE</p> </button>
                            </div>

                            <div className="vw-button-text">
                                <button className="vw-button"><img src={sharearrow}/> <p className="vw-text">SHARE</p></button>
                            </div>

                            <div className="vw-button-text">
                                <button className="vw-button"><img src={clip} className="vw-clip"/> <p className="vw-text">CLIP</p></button>
                            </div>

                            <div className="vw-button-text">
                                <button className="vw-button"><img src={save}/> <p className="vw-text">SAVE</p></button>
                            </div>

                            <div className="vw-button-text">
                                <button className="vw-button"><img src={dots} className="vw-dots"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vw-user">
                    <div className="vw-user-top">
                        <div className="vw-user-info">
                            <img src={video.user.profilePic}/>
                            <div className="vw-user-words">
                                <span className="vw-username">{video.user.userName} <img src={verifiednew} className="vw-verified"/></span>
                                <span className="vw-subscribers">0 subscribers</span>
                            </div>
                        </div>
                        <button className="vw-sub-btn"><img src={subscribe}/></button>
                    </div>
                    <p className="vw-description">{video.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoWatchBottom;