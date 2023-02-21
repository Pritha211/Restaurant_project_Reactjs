import React from "react";

function Navbar(props){
    


    return (
        <div className="btn-container">
            <div className="btn-grp">
                <div className="btn-grp-item">
                <button className="item-btn" name="Breakfast" onClick={props.onChange}>Breakfast</button>
                <button className="item-btn" name="Lunch" onClick={props.onChange}>Lunch</button>
                <button className="item-btn" name="Evening" onClick={props.onChange}>Evening</button>
                <button className="item-btn" name="Dinner" onClick={props.onChange}>Dinner</button>
                <button className="item-btn" name="All" onClick={props.onChange}>All</button>
                </div>
            </div>
        </div>
    );

}

export default Navbar;