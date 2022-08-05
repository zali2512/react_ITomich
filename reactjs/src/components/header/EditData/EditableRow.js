import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input 
                type="text"
                required="required"
                placeholder="Enter an id..."
                name="id"
                value={editFormData.id}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                type="text"
                required="required"
                placeholder="Enter a title..."
                name="title"
                value={editFormData.title}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                type="text"
                required="required"
                placeholder="Enter a body..."
                name="body"
                value={editFormData.body}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td><button type="submit">Save</button></td>
            <td><button type="button" onClick={handleCancelClick}>Cancel</button></td>
        </tr>
    )

}


export default EditableRow;