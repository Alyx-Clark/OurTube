import React from "react";
import arrow from '../../../app/assets/images/arrow.png'

class Categories extends React.Component{
    
    render(){
        return(
            <div className="c-categories">
                <section className="c-category-section">
                    <button className="c-category c-active">All</button>
                    <button className="c-category">Computer Programming</button>
                    <button className="c-category">Electrical Engineering</button>
                    <button className="c-category">Call of Duty: Warzone</button>
                    <button className="c-category">Dr DisRespect</button>
                    <button className="c-category">How to Survive App Academy</button>
                    <button className="c-category">HTML</button>
                    <button className="c-category">Music</button>
                    <button className="c-category">Tools</button>
                    <button className="c-category">Gaming Laptops</button>
                    <button className="c-category">3D Printing</button>
                    <button className="c-category">Mechanical Engineering</button>
                    <button className="c-category">CAD</button>
                    <button className="c-arrow"><img src={arrow}/></button>
                </section>
            </div>
        )
    }
}


export default Categories;