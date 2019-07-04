import React from 'react';
import './card.css';

const Cards = props => (
    <div className="row col-sm-9 col-md-6 col-lg-8 col-xl-3">
        <div className="planet-names">
         <div class="portrait square landscape">
            <img className="images" alt={props.name} src={props.image}
             onClick={() => props.handleClick(props.id)} 
            />
         </div>
         {props.name}
        </div>
    </div>

);

export default Cards;
