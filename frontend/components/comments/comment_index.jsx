import React from "react";
import commentsReducer from "../../reducers/comments_reducer";

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const {comments, deleteComment, userId} = this.props;
        return(
            <div>
                {
                    comments.map(comment => (
                        <CommentCard key={comment.id} comment={comment} deleteComment={deleteComment} userId={userId}/>
                    ))
                    
                }
            </div>
        )
    }
}


export default CommentIndex; 