import React from "react";
import sort from '../../../app/assets/images/sort.png'
import guestuser from '../../../app/assets/images/guestuser.png'
import { Redirect } from 'react-router'

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: ""
        }
        this.showele = this.showele.bind(this);
        this.hideele = this.hideele.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showele(){
        let input = document.getElementById("idtext");
        let buttons = document.getElementById("idbtn");
        if(document.activeElement === input){
            if(!this.props.user){
                this.props.history.push('/login')
            }
            buttons.style.visibility = "visible";
        }
    }

    hideele(){
        let input = document.getElementById("idtext");
        let buttons = document.getElementById("idbtn");
        let btn = document.getElementById("idcomment")
        input.value = ""; 
        buttons.style.visibility = "hidden";
        btn.style.backgroundColor = "#ECECEC";
        btn.style.color = "#929490";
    }

    handleInput(e){
        this.setState({ body: e.currentTarget.value})
        let input = document.getElementById("idtext");
        let btn = document.getElementById("idcomment")
        if(input.value){
            btn.style.backgroundColor = "#065FD4";
            btn.style.color = "white";
        }else{
            btn.style.backgroundColor = "#ECECEC";
            btn.style.color = "#929490";
        }

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment({
            body: this.state.body,
            commenter_id: this.props.user.id,
            video_id: this.props.video.id
        })
        this.setState({body: ""});
        this.hideele();
    }

    render(){
        const {video, user, comments} = this.props;
        const pic = user ? user.profilePic : guestuser
        return(
            <div className="cf-form">
                <div className="cf-top">
                    <span className="cf-commentslength">{comments.length} Comments</span>
                    <button className="cf-sortbtn"><img className="cf-sortimg"src={sort}/><span className="cf-sortbytxt">SORT BY</span></button>
                </div>
                <div className="cf-bottom">
                    <div className="cf-profilepic">
                        <img className="cf-proimg" src={pic}/>
                    </div>
                    <div className="cf-info">
                        <form>
                            <div className="cf-input">
                                <input value={this.body} id="idtext" className="cf-input-text" type="text" placeholder="Add a comment..." onClick={this.showele} onChange={this.handleInput}/>
                            </div>
                        </form>
                        <div className="cf-submit" id="idbtn">
                            <button className="cf-btncancel"  onClick={this.hideele}>CANCEL</button>
                            <button id="idcomment" className="cf-btncomment" onClick={this.handleSubmit}><span className="cf-commenttxt">COMMENT</span></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentForm;