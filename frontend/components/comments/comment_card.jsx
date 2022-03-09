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
                <div className="cc-body">
                    <div className="cc-bodytop">
                        <img className="cc-userpic" src={commenter.profilePic}/>
                        <div className="cc-titledate">
                            <span className="cc-username">{commenter.userName} </span>

                            <span className="cc-date">{comment.date}</span>
                        </div>
                    </div>
                    <p className="cc-text">{comment.body}</p>
                    <div className="cc-icons">
                        <button className="cc-iconbtn"><img src={thumbup}/></button>
                        <button className="cc-iconbtn"><img src={thumbdown}/></button>
                        <button className="cc-iconbtn">REPLY</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard;