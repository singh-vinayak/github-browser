import React, { useState } from 'react';
import Modal from '../modal'
export default function AddRepoButton(props) {
    const [show,setShow] =  useState(false);
    
    return (
        <div style={{
            "boxSizing":"border-box",
            "border":"1px solid green",
            "width":"100%",
            }}>
            <button className='add-button' onClick={()=> setShow(true)}>+</button>
            <Modal  show={show} onClose={()=> setShow(false)} />
        </div>
    );
}

