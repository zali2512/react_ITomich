import React from "react";

const ReadOnly = ({post, handleEditClick, handleDeleteClick}) => {
     return (
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
                <button type="button" onClick={(e) => handleEditClick(e, post)}>
                    Edit</button>
                <button type="button" onClick={() => handleDeleteClick(post.id)}>Delete</button>
            </td>
        </tr>
     )
}


export default ReadOnly;