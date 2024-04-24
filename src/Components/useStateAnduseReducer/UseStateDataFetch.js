import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UseStateDataFetch() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]  = useState('');
    const [post, setPost] = useState({});

    useEffect(() =>{

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) =>{
            setIsLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch((error) =>{
            setIsLoading(false)
            setPost({})
            setError('oops.... something went wrong')
        })
        
    },[])
    return (
        <div>

            {
                isLoading ? 'data is Loading':post.title
            }

            {
                error ? error : null
            }
        </div>
    )
}

export default UseStateDataFetch
