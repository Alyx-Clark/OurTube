import React from "react";
import sort from '../../../app/assets/images/sort.png'
// import profilepic from '../../../app/assets/images/profilepicture.png'

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: ""
        }
        this.showele = this.showele.bind(this);
        this.hideele = this.hideele.bind(this);
        this.handleInput = this.handleInput.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    showele(){
        let input = document.getElementById("idtext");
        let buttons = document.getElementById("idbtn");
        if(document.activeElement === input){
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
    }

    handleInput(e){
        this.setState({ body: e.currentTarget.value})
        let input = document.getElementById("idtext");
        let btn = document.getElementById("idcomment")
        if(input.value){
            btn.style.backgroundColor = "#065FD4";
        }else{
            btn.style.backgroundColor = "#ECECEC";
        }

    }


    render(){
        // console.log(this.props.user);
        const {comments} = this.props.video;
        const {video, user} = this.props;
        // console.log(user)
        return(
            <div className="cf-form">
                <div className="cf-top">
                    <span className="cf-commentslength">2,433 Comments</span>
                    <button className="cf-sortbtn"><img className="cf-sortimg"src={sort}/><span className="cf-sortbytxt">SORT BY</span></button>
                </div>
                <div className="cf-bottom">
                    <div className="cf-profilepic">
                        <img src={user.profilePic}/>
                    </div>
                    <div className="cf-info">
                        <div className="cf-input">
                            <input id="idtext" className="cf-input-text" type="text" placeholder="Add a comment..." onClick={this.showele} onChange={this.handleInput}/>
                        </div>
                        <div className="cf-submit" id="idbtn">
                            <button className="cf-btncancel"  onClick={this.hideele}>CANCEL</button>
                            <button id="idcomment" className="cf-btncomment"><span className="cf-commenttxt">COMMENT</span></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentForm;