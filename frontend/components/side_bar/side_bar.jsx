import React from "react";
import homeBlack from '../../../app/assets/images/sb-home-black.png'
import explore from '../../../app/assets/images/sb-explore.png'
// import shorts from '../../../app/assets/images/sb-shorts.png'
import subscriptions from '../../../app/assets/images/sb-subscriptions.png'
// import library from '../../../app/assets/images/sb-library.png'

class SideBar extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="sb-sidebar">
                <div className="sb-icons">
                    <div className="sb-groups">
                        <button className="sb-button"><img src={homeBlack} className="sb-icon"/></button>
                        <p className="sb-text">Home</p>
                    </div>
                    <div className="sb-groups">
                        <button className="sb-button"><img src={explore}/></button>
                        <p className="sb-text">Explore</p>
                    </div>
                    <div className="sb-groups">
                        {/* <button className="sb-button"><img src={shorts}/></button> */}
                        <p className="sb-text">Shorts</p>
                    </div>
                    <div className="sb-groups">
                        <button className="sb-button"><img src={subscriptions} className="sb-img"/></button>
                        <p className="sb-text">Subscriptions</p>
                    </div>
                    <div className="sb-groups">
                        {/* <button className="sb-button"><img src={library}/></button> */}
                        <p className="sb-text">Library</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default SideBar