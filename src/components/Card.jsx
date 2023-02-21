import React from "react";

function Card(props) {
  const content = props.description;
    

  return (
    <div className="card">
      <p className="card-no">{props.id}</p>
      <span>Category : {props.category}</span>
      <h1>{props.name}</h1>
      <p className="card-content">{content.substring(0,150)}</p>
      <div className="card-read">Read More</div>
      <img
        src={props.img}
        alt="food pic"
      />
      <div>
      <button className="btn-card">Order Now</button>

      </div>
    </div>
  );
}

export default Card;
