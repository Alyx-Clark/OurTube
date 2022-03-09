import React from "react";

class CommentCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {comment, userId} = this.props;
        return(
            <div className="cc-comment">
                <img className="cc-userpic" src=""/>
                <div className="cc-body">
                    <div className="cc-bodytop">
                        <span>{comment.commenter.userName}</span>
                        <span></span>
                    </div>
                    <p></p>
                    <div className="cc-icons">
                        <button><img src=""/></button>
                        <button><img src=""/></button>
                        <button>REPLY</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard;