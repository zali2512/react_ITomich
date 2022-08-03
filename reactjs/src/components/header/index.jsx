import React, {useEffect, useState} from "react";
import axios from "axios";
import './style.css'

function DataFetch() {
  const[posts, SetPosts] = useState([])
  const[userId, setUserId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => {
      console.log(res)
      SetPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [userId])

  return (
    <div>
      <label htmlFor="userId">Write down the userId for necessary title and body: </label>
      <p><input type="text" value={userId} onChange={e => setUserId(e.target.value) } /></p>
      <ul>
        {
          posts.map(post => <p key={post.userId}>post title: {post.title}</p>)
        }
      </ul>
      
    </div>
  )

}

export default DataFetch;