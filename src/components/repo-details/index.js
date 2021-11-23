import React,{ useContext, useState, useEffect } from 'react'
import RepositoryContext from '../../contexts/repositoryList'

function RepoDetails({data}) {
    // if(data)
    //     console.log(data);
    const { setRepoList } = useContext(RepositoryContext);
    const [category, setCategory] = useState('branches');
    const [catData, setCatData] = useState();

    useEffect(()=>{
        fetch(`https://api.github.com/repos/${data.owner.login}/${data.name}/branches`)
            .then(response => response.json())
            .then(data =>
                setCatData(JSON.stringify(data))
                // JSON.stringify(data)
                //console.log(data);
            ).catch(e => console.log(e));
    },[data]);
    
    useEffect(()=>{

        document.getElementById(category).classList.add('active');
    },[category]);


    const handleCategoryChange =(c) =>{
        // console.log(`https://api.github.com/repos/${data.owner.login}/${data.name}/${category}`)
        fetch(`https://api.github.com/repos/${data.owner.login}/${data.name}/${c}`)
        .then(response => response.json())
        .then(data => 
            setCatData(JSON.stringify(data))
            // JSON.stringify(data)
            //console.log(data);
        ).catch(e => console.log(e));
    }

    return data ? (
        <div className="right--pane">
            <div className='top--row'>
                <p><img src={data.owner.avatar_url} alt=''/>{data.name}</p>
                <button className='delete--button' onClick={() => {
                    setRepoList(ogList => ogList.filter(repo => repo.id !== data.id))
                }}>
                    Delete
                </button>
            </div>
            <div className='detail-section'>
                <div className='view--buttons'>
                    <p className='list--button active'id='branches' onClick={() => {
                        if(!document.getElementById(`branches`).classList.contains('active'))
                            {
                            document.getElementById(category).classList.toggle('active')
                                setCategory('branches');
                                handleCategoryChange('branches');
                            }
                    }}>Branches</p>
                    <p className='list--button' id='issues' onClick={() => {
                        if (!document.getElementById(`issues`).classList.contains('active')) {
                            document.getElementById(category).classList.toggle('active')
                            setCategory('issues');
                            handleCategoryChange('issues');
                        }
                    }}>Issues</p>
                    <p className='list--button' id='commits' onClick={() => {
                        if (!document.getElementById(`commits`).classList.contains('active')) {
                            document.getElementById(category).classList.toggle('active')
                            setCategory('commits');
                            handleCategoryChange('commits');
                        }
                    }}>Commits</p>
                </div>
                <div className='repo--detail'>
                    {catData}
                </div>
            </div>
        </div>
    ): null;
}

export default RepoDetails;
