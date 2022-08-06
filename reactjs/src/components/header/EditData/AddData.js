import React from "react";

const AddData = ({addFormData, setAddFormData, posts, setPosts}) => {
    
    const handleAddFormChange = (e) => {
        e.preventDefault()
    
        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value
    
        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue
    
        setAddFormData(newFormData)
      }

      const handleAddFormSubmit = (e) => {
        e.preventDefault()
    
        const newPost = {
            id: addFormData.id,
            title: addFormData.title,
            body: addFormData.body
        }
    
        const newPosts = [...posts, newPost]
        setPosts(newPosts)
      }

    return(
        <form onSubmit={handleAddFormSubmit}>
        <input 
        type="text"
        name="id"
        required="required"
        placeholder="Enter an id..."
        onChange={handleAddFormChange}
         />
         
        <input 
        type="text"
        name="title"
        required="required"
        placeholder="Enter a title..."
        onChange={handleAddFormChange}
         />

         <input 
        type="text"
        name="body"
        required="required"
        placeholder="Enter a body..."
        onChange={handleAddFormChange}
         />
        <button type="submit" >Add</button>
      </form>)
    
}


export default AddData;