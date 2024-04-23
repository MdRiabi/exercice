import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchMultiplePostes() {
    const [postes, setPostes] = useState([])

    useEffect(() =>{
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then((result) => {
        console.log(result)
        setPostes(result.data);
     }).catch((err) => {
        console.log(err)
        
     });
    },[])
    return (
        <div>
            <ul>
                {postes.map(post =>
                    <li key = {post.id}>{post.title}</li>
                )}
            </ul>
        </div>
        
    )
}

export default FetchMultiplePostes
