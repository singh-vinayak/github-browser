import React,{ useState, useEffect} from 'react'
import Header from '../header'
import AddRepoButton from '../add-repo-button'
import Repository from '../repository'
import RepositoryContext from '../../contexts/repositoryList'

function Dashboard() {

    const initialState=[];
    const [repoList, setRepoList] = useState([]);

    useEffect(()=>{
        console.log(repoList);
    },[repoList]);

    return (
        <RepositoryContext.Provider value={repoList, setRepoList}>
            <div className="dashboard">
                <div className="top--section">
                    <Header text={"Github Browser"} />
                </div>
                <div className="main--section">
                    <div className="left--pane">
                        <Repository />
                        <AddRepoButton />
                    </div>
                    <div className="right--pane">
                        Repo-details
                    </div>
                </div>
            </div>
        </RepositoryContext.Provider>
    );
}

export default Dashboard;
