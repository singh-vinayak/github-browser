import React from 'react'

function Header(props) {
    return (
        <div className="header">
            {props.text}
        </div>
    );
}

export default Header;
