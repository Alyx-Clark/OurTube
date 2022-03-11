import React from "react";
import CommentCard from "./comment_card";

class CommentIndex extends React.Component{
    constructor(props){
        super(props)


    }


    

    render(){
        const {comments, deleteComment, userId} = this.props;

        if(comments){
            return(
                <div className="ci-comments">
                    {
                        comments.map(comment => (
                            <CommentCard key={comment.id} comment={comment} commenter={comment.commenter} deleteComment={deleteComment} userId={userId}/>
                        ))
                        
                    }
                </div>
            )
        }else{
            return <h1>One sec :D</h1>
        }
    }
}


export default CommentIndex; 