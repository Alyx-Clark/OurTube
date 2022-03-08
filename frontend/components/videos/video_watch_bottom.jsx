import React from "react";
import thumbup from '../../../app/assets/images/thumb-up.png'
import thumbdown from '../../../app/assets/images/thumb-down.png'
import sharearrow from '../../../app/assets/images/share-arrow.png'
import clip from '../../../app/assets/images/clip.png'
import save from '../../../app/assets/images/save.png'
import dots from '../../../app/assets/images/dots.png'

class VideoWatchBottom extends React.Component{
    constructor(props){
        super(props)


    }

    render(){
        const { video } = this.props
        const views = Math.floor(Math.random() * (999 - 10) + 10)
        const likes = Math.floor(Math.random() * (999 - 10) + 10)
        const dislikes = Math.floor(Math.random() * (999 - 10) + 10)
        return(
            <div className="vw-container">
                <h2 className="vw-title">{video.title}</h2>
                <div className="vw-under">
                    <div className="vw-data">
                        <span>{views}k views </span>
                        •
                        <span>{video.date}</span>
                    </div>
                    <div className="vw-tools">
                        <button className="vw-button"><img src={thumbup}/> {likes}</button>
                        <button className="vw-button"><img src={thumbdown}/> {dislikes}</button>
                        <button className="vw-button"><img src={sharearrow}/> SHARE</button>
                        <button className="vw-button"><img src={clip}/> CLIP</button>
                        <button className="vw-button"><img src={save}/> SAVE</button>
                        <button className="vw-button"><img src={dots}/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoWatchBottom;