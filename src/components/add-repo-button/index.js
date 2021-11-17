import React, { useState } from 'react';
import Modal from '../modal'
export default function AddRepoButton(props) {
    const [show,setShow] =  useState(false);
    
    return (
        <div style={{
            "border":"1px solid white"
            }}>
            <button className='add-button' onClick={()=> setShow(true)}>+</button>
            <Modal  show={show} onClose={()=> setShow(false)} />
        </div>
    );
}

