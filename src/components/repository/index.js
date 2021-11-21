import React from 'react'

function Repository({data, onClick}) {
    return (
        <div className="repo"  >
            {data.name}
            <button onClick={onClick} >Show</button>
        </div>
    );
}

export default Repository;
