import React from "react";
import thumbup from '../../../app/assets/images/thumb-up.png'
import thumbdown from '../../../app/assets/images/thumb-down.png'

class CommentCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {comment, userId, commenter} = this.props;
        return(
            <div className="cc-comment">
                <div>
                    <img className="cc-userpic" src={commenter.profilePic}/>
                </div>
                <div className="cc-body">
                    <div className="cc-bodytop">
                        <div className="cc-titledate">
                            <span className="cc-username">{commenter.userName} </span>

                            <span className="cc-date">{comment.date}</span>
                        </div>
                    </div>
                    <p className="cc-text">{comment.body}</p>
                    <div className="cc-icons">
                        <button className="cc-iconbtn"><img src={thumbup} className="cc-thumb"/></button>
                        <button className="cc-iconbtn"><img src={thumbdown} className="cc-thumbdown"/></button>
                        <button className="cc-iconbtn"><span className="cc-reply">REPLY</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard;