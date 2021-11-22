import React,{ useContext } from 'react'
import RepositoryContext from '../../contexts/repositoryList'

function RepoDetails({data, id}) {
    if(data)
        console.log(data);
    const { setRepoList } = useContext(RepositoryContext);

    return (
        <div className="right--pane">
            <button onClick={() => {
                setRepoList(ogList => ogList.filter(repo => repo.id!==data.id))
            }}>Delete</button>
            <p>Hello</p>
        </div>
    );
}

export default RepoDetails;
