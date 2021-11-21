import React from 'react'

function RepoDetails({data}) {
    console.log(data);

    return (
        <div className="right--pane">
            {JSON.stringify(data)}
        </div>
    );
}

export default RepoDetails;
