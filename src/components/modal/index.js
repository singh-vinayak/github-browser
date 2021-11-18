import React, { useState, useEffect, useContext } from 'react'
import RepositoryContext from '../../contexts/repositoryList'

export default function Modal({show, onClose})
{

    const [name, setName] = useState('');
    const [org, setOrg] = useState('');
    const [error, setError] = useState('');

    const { setRepoList } = useContext(RepositoryContext);

    useEffect(() => {
        // console.log(name);
        // console.log(org);
        setError('');
    }, [org, name]);

    if(!show){
        return null;
    }

    async function handleSubmit(){
        const response = await fetch(`https://api.github.com/repos/${org}/${name}`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const repoDetails = await response.json();
        return repoDetails;
    }

    return(
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>ADD NEW REPOSITORY</h4>
                    {error && <p style={{ "margin": "0", "color":"#eb2f06", "fontWeight":"bold", "fontSize":"0.85rem"}}>Check your Repo or Owner name again</p>}
                    </div>
                    <div className='modal-body'>
                        <form className='form' onSubmit={(e)=> {
                            e.preventDefault();
                            
                            //console.log(`name : ${name} org : ${org}`)
                            handleSubmit()
                            .then(data =>{
                                console.log(data);
                                const newRepo = {
                                    "name": name,
                                    "ownerName": org
                                }
                                setRepoList(prevArray => [...prevArray, newRepo]);
                                onClose();
                            })
                            .catch(error => {
                                console.log(error.message);
                                setError(error.message);
                            });
                        }}
                        >
                <label htmlFor="orgName">Owner / Organization</label>
                <input type="text" name="orgName" id="orgName" value={org} onChange={(event) => {
                    setOrg(event.target.value.trim());
                    //console.log(name);
                    }}
                    required/>
                <label htmlFor="repoName">Repository Name</label>
                <input type="text" name="repoName" id="repoName" value={name} onChange={(event) => {
                    setName(event.target.value.trim());
                    //console.log(org);
                    }}
                    required/>
                <button type='submit' id='submit-form-btn' >ADD</button>
            </form>
                    </div>
                    <div className='modal-footer'>
                        <button className='close-modal' onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
    )
}