import React, {useEffect, useState, Fragment, useContext} from "react";
import axios from "axios"; 
import './style.css';
import ReadOnly from "./EditData/ReadOnlyRow";
import EditableRow from "./EditData/EditableRow";
import AddData from "./EditData/AddData";
import { useNavigate } from "react-router-dom";
import LogInContext from "../logIn/logInContext";

const DataFetch = () => {
  const[posts, setPosts] = useState([])
  const[userId, setUserId] = useState(1)
  const[addFormData, setAddFormData] = useState({
        id: "",
        title:"",
        body: ""
    })
  const [editPostId, setEditPostId] = useState(null)
  const [editFormData, setEditFormData] = useState({
        id: "",
        title:"",
        body: ""  
    })

  const [emailContext, setEmailContext] = useContext(LogInContext)

    const navigate = useNavigate()

    const handleClick = () => {
      navigate("/")
    }

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [userId])

  const handleEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value
    
    const newFormData = { ...editFormData}
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    const editedPost = {
        id: editFormData.id,
        title: editFormData.title,
        body: editFormData.body
    }

    const newPosts = [...posts]

    const index = posts.findIndex((post) => post.id === editPostId)
    
    newPosts[index] = editedPost

    setPosts(newPosts)
    setEditPostId(null)
  }

  const handleEditClick = (e, post) => {
    e.preventDefault()
    setEditPostId(post.id)

    const formValues = {
      id: post.id,
      title: post.title,
      body: post.body,
    }

    setEditFormData(formValues)
   }

  const handleCancelClick = () => {
    setEditPostId(null)
  }
 
  const HandleDeleteClick = (postId) => {
      const newPosts = [...posts]
    
      const index = posts.findIndex((post)=> post.id === postId)
    
      newPosts.splice(index, 1)
        
      setPosts(newPosts)
    }

    const email = emailContext

  return (
    <div className="field">
      <label htmlFor="userId"> {email}, Write down the userId for necessary title and body: </label>
      <p><input type="text" value={userId} onChange={e => setUserId(e.target.value) } /></p>
      
      <div className="Container">
        <form onSubmit={handleEditFormSubmit}>
         <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {posts.map(post => (
              <Fragment>
                { editPostId === post.id ? (<EditableRow editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick} />)
                 : (<ReadOnly 
                  post={post} 
                  handleEditClick={handleEditClick}
                  handleDeleteClick={HandleDeleteClick}
                 />)}
             </Fragment>
         ))}   
            </tbody>
        </table>    
        </form>
      </div>
      
      <h2>Add new data</h2>
      <AddData
      addFormData={addFormData}
      setAddFormData={setAddFormData}
      posts={posts}
      setPosts={setPosts} 
      />
      <button type="submit"  onClick={handleClick} >LogOut</button>
    </div>
  )
}

export default DataFetch;