import React from "react";
import arrow from '../../../app/assets/images/arrow.png'

class Categories extends React.Component{

    refreshPage(){
        window.location.reload();
    }
    
    render(){
        return(
            <div className="c-categories">
                <section className="c-category-section">
                    <button onClick={this.refreshPage} className="c-category c-active">All</button>
                    <button onClick={this.refreshPage} className="c-category">Computer Programming</button>
                    <button onClick={this.refreshPage} className="c-category">Electrical Engineering</button>
                    <button onClick={this.refreshPage} className="c-category">Call of Duty: Warzone</button>
                    <button onClick={this.refreshPage} className="c-category">Dr DisRespect</button>
                    <button onClick={this.refreshPage} className="c-category">How to Survive App Academy</button>
                    <button onClick={this.refreshPage} className="c-category">HTML</button>
                    <button onClick={this.refreshPage} className="c-category">Music</button>
                    <button onClick={this.refreshPage} className="c-category">Tools</button>
                    <button onClick={this.refreshPage} className="c-category">Gaming Laptops</button>
                    <button onClick={this.refreshPage} className="c-category">3-D Printing</button>
                    <button onClick={this.refreshPage} className="c-category">Mechanical Engineering</button>
                    <button onClick={this.refreshPage} className="c-category">CAD</button>     
                    <button onClick={this.refreshPage} className="c-category">AI</button>     
                    <button onClick={this.refreshPage} className="c-arrow"><img src={arrow}/></button>
                </section>
            </div>
        )
    }
}


export default Categories;