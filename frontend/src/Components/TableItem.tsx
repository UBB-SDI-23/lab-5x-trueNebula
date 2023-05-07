import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


export default function TableItem(props: any) {
    let { id, name, password, isVIP, joinDate } = props.object

    const handleClick = (e: any) => {
        e.preventDefault()
        props.onClick({ id, name, password, isVIP, joinDate })
    }

    const handleDelete = (e: any) => {
        e.preventDefault()
        props.deleteGame(id)
    }

    return (
        <tr key={id} onClick={handleClick}>
            <td>{name}</td>
            <td>{password}</td>
            <td>{isVIP}</td>
            <td>{new Date(joinDate).toDateString()}</td>
            {!props.noDel ?  <td><Button  className="p-2 my-2 w-100 btn-danger" onClick={handleDelete}>Delete</Button></td> : null}
        </tr>
    );
}
