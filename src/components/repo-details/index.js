import React,{ useContext } from 'react'
import RepositoryContext from '../../contexts/repositoryList'

function RepoDetails({data}) {
    // if(data)
    //     console.log(data);
    const {repoList, setRepoList } = useContext(RepositoryContext);

    return (
        <div className="right--pane">
            <div className='top--row'>
                {data && <p><img src={data.owner.avatar_url} alt=''/>{data.name}</p>}
                <button className='delete--button' onClick={() => {
                    setRepoList(ogList => ogList.filter(repo => repo.id !== data.id))
                }}>
                    Delete
                </button>
            </div>
            <div className='detail-section'>
                <p>Hello</p>
            </div>
        </div>
    );
}

export default RepoDetails;
