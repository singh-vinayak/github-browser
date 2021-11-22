import React from 'react'

function Repository({data, onClick}) {
    return (
        <div className="repo user-input-repo" onClick={onClick}>
            {data.name}
        </div>
    );
}

export default Repository;
