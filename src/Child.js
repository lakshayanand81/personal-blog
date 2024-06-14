
import React from 'react';
import './Child.css';

const Child = (props) => {
    return (
        <div className="child-component">
            {props.data} <button className="tap-button">Tap</button>
        </div>
    );
}

export default Child;
