import React,{ useState, useContext} from 'react'
import Header from '../header'
import AddRepoButton from '../add-repo-button'
import Repository from '../repository'
function Dashboard() {

    return (
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
    );
}

export default Dashboard;
