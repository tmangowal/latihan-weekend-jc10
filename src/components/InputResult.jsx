import React from 'react'

export const InputResult = (props) => {
    const {name, job, dob, id} = props

    return(
        <ul className="list-group-flush list-group p-3">
            <li className="list-group-item">ID : {id}</li>
            <li className="list-group-item">Name : {name}</li>
            <li className="list-group-item">Job : {job}</li>
            <li className="list-group-item">Date of Birth : {dob}</li>
        </ul>
    )
}
