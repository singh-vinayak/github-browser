import React from 'react'

function Repository({data, onClick}) {
    return (
        <div className="repo user-input-repo" onClick={onClick}>
            <h4>{data.name}</h4>
            <p>{data.owner.login}</p>
        </div>
    );
}

export default Repository;
