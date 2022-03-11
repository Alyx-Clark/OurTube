import React from "react";
import thumbup from '../../../app/assets/images/thumb-up.png'
import thumbdown from '../../../app/assets/images/thumb-down.png'
import verified from '../../../app/assets/images/verified.png'
import verticaldots from '../../../app/assets/images/verticaldots.png'
import trash from '../../../app/assets/images/trash.png'

class CommentCard extends React.Component{
    constructor(props){
        super(props)
      
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
       
        let elearray = document.querySelectorAll("div.cc-comment")
        let dotsarray = document.querySelectorAll("button.cc-dotsbtn")
        let modalarray = document.querySelectorAll("div.cc-modal")
        let modalbtn = document.querySelectorAll("button.cc-modbtn")
        let inmodal = document.querySelectorAll("div.cc-modal-content")
        let dotsimgarray = document.querySelectorAll("img.cc-dotsimg")


        for(let i = 0; i < dotsarray.length; i++){
            elearray[i].addEventListener("mouseover", func, false)
            elearray[i].addEventListener("mouseout", func1, false)
            dotsarray[i].addEventListener("mousedown", func2, false)
            dotsarray[i].addEventListener("mouseup", func3, false)
            window.addEventListener("mousedown", func4, false)
            
            function func(){
                dotsarray[i].style.visibility = "visible"
            }
            function func1(){
                dotsarray[i].style.visibility = "hidden"
                dotsarray[i].style.transition = "0s"
                dotsarray[i].style.borderColor = "#F9F9F9"
            }
            function func2(){
                dotsarray[i].style.backgroundColor = "#E0E0E0"
                dotsarray[i].style.transition = "0s"
                modalarray[i].style.display = "block"
            }
            function func3(){
                dotsarray[i].style.backgroundColor = "#F9F9F9"
                dotsarray[i].style.transition = "1s"
                dotsarray[i].style.borderColor = "black"                
            }

            function func4(event){
                if(event.target == modalarray[i] || event.target == modalbtn[i] || event.target == inmodal[i]){
                }else if(modalarray[i].style.display === "block" && event.target != dotsarray[i] && event.target != dotsimgarray[i]){
                    modalarray[i].style.display = "none"
                }
            }
        }
    }

    handleDelete(commenter, userId, comment){
        if(commenter.id === userId){
            this.props.deleteComment(comment.id)
        }
    }


    


    render(){
        const {comment, userId, commenter, deleteComment} = this.props;
        return(
            <div id="id-comment" className="cc-comment">
                <div>
                    <img className="cc-userpic" src={commenter.profilePic}/>
                </div>
                <div className="cc-body">
                    <div className="cc-bodytop">
                        <div className="cc-titledate">
                            <span className="cc-username">{commenter.userName} <img src={verified}/></span>

                            <span className="cc-date">{comment.date}</span>
                        </div>
                    </div>
                    <p className="cc-text">{comment.body} <button id="id-dots" className="cc-dotsbtn"><img className="cc-dotsimg" src={verticaldots}/></button></p>
                    <div className="cc-icons">
                        <div>
                            <button className="cc-iconbtn"><img src={thumbup} className="cc-thumb"/></button>
                            <button className="cc-iconbtn"><img src={thumbdown} className="cc-thumbdown"/></button>
                            <button className="cc-iconbtn"><span className="cc-reply">REPLY</span></button>
                        </div>
                        <div id="cc-mymod" className="cc-modal">
                            <div className="cc-modal-content">
                                <button className="cc-modbtn" onClick={()=>{this.handleDelete(commenter, userId, comment)}}> <img src={trash} className="cc-trshimg"/> Delete </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentCard;
