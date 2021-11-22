import React,{ useState, useEffect} from 'react'
import Header from '../header'
import AddRepoButton from '../add-repo-button'
import Repository from '../repository'
import RepositoryContext from '../../contexts/repositoryList'
import RepoDetails from '../repo-details'

function Dashboard() {

    const initialState=[];
    const [repoList, setRepoList] = useState(initialState);
    const [showRepo, setShowRepo] = useState(-1);

    useEffect(()=>{
        setShowRepo(-1);
    },[repoList]);

    return (
        <RepositoryContext.Provider value={{repoList, setRepoList}}>
            <div className="dashboard">
                <div className="top--section">
                    <Header text={"Github Browser"} />
                </div>
                <div className="main--section">
                    <div className="left--pane">
                        <div className='repoList'>
                            {repoList.length === 0 ?
                                <div className="repo">
                                    Repo will be here
                                </div> :
                                repoList.map((repo, i) => <Repository key={i} data={repo}  onClick={()=> setShowRepo(i)}/>)}
                        </div>
                    </div>
                    {showRepo === -1 ?
                        <div className="right--pane">
                            Repo-details
                        </div> :
                        <RepoDetails data={repoList[showRepo]} />
                    }
                </div>
                <AddRepoButton />
            </div>
        </RepositoryContext.Provider>
    );
}

export default Dashboard;
