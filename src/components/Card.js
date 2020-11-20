import React from "react";

function Card({ name, gitName, follower, createdAt, updatedAt, img }) {
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <h3>Git Name: {gitName}</h3>
            <img src={img} alt={`${name} github profile`} />
            <p>Nr di Follower: {follower} </p>
            <p>creato il: </p>
            <p>ultimo update: </p>
        </div>
    );
}

export default Card;
