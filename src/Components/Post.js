import React from 'react';


const post = (props) => (

    <div className="card card-custom " onClick = {props.clicked} >
        <div className="card-body">
            <img src={props.imageURL} className="img-fluid card-img-heigh"/>
            
            <h3 className="card-title">{props.title}</h3>
            <h5 className="card-subtitle">{props.description}</h5>
        </div>
    </div>
);

export default post;
