import React from 'react';
import './wrapper.css';

const Wrapper = props =>
 <div className="row col-sm-9 col-md-6 col-lg-8 col-xl-12">
 {props.children} 
</div>

export default Wrapper;
