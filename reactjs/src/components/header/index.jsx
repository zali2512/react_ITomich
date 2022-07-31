
import React, {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";

function DataFetch() {
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div className="field">
            <label htmlFor="userId">Write down the userId for necessary title and body: </label>
            <input type="text" value={id} onChange={changer => setId(changer.target.value)}  />
            <div>
                <p>{post.title}</p>
                <p>{post.body}</p> </div>
            
        </div>
    )
}



export default DataFetch;

