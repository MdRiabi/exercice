import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchSinglePost() {
    const [postes, setPostes] = useState([])
    const [id, setId] = useState();
    const [buttonClickId, setButtonClickId] = useState();

    const handleClick = () =>{
        setButtonClickId(id);
    }

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/${buttonClickId}')
        .then((response) =>{
            setPostes(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[buttonClickId])
    return (

        <div>
            <button type='button' value={id} onClick={handleClick}>Click ID</button>
            <input
            type='text'
            onChange={(e)=>setId(id.target.value)}
            />
            <h1>{postes.title}</h1>
        </div>

        
        
    )
}

export default FetchSinglePost
