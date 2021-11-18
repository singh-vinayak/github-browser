import React from 'react'

function Repository({data}) {
    return (
        <div className="repo"  >
            {data.name}
        </div>
    );
}

export default Repository;
