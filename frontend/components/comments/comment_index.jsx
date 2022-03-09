import React from "react";
import CommentCard from "./comment_card";

class CommentIndex extends React.Component{
    constructor(props){
        super(props)


    }

    componentDidMount(){
        // this.props.fetchVideo(this.props.video.id)
        // console.log("mom")
    }

    

    render(){
        const {comments, deleteComment, userId, video} = this.props;
        console.log(video.comments)
        if(video.comments){
            return(
                <div className="ci-comments">
                    {
                        video.comments.map(comment => (
                            <CommentCard key={comment.id} comment={comment} commenter={comment.commenter} deleteComment={deleteComment} userId={userId}/>
                        ))
                        
                    }
                </div>
            )
        }else{
            return <h1>One sec :D</h1>
        }
        // console.log("hi")
    }
}


export default CommentIndex; 