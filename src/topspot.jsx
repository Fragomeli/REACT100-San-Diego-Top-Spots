import React from 'react';

export default props => (
<div className= "container">
<div className= "card card-default">
<div className= "card-body">
    <h4> {props.name}</h4>
    <p> {props.description} </p>
    <a className = "btn btn-secondary btn-lrg" href= {"https://maps.google.com/?q=" + props.location} role="button" target = "_blank"> MAP IT!</a>
</div>
</div>
</div>
);
