import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


export default function TableItem(props: any) {
    let { id, name, password, isvip, datejoined } = props.object

    const handleClick = (e: any) => {
        e.preventDefault()
        props.onClick({ id, name, password, isvip, datejoined })
    }

    const handleDelete = (e: any) => {
        e.preventDefault()
        props.deleteGame(id)
    }

    return (
        <tr key={id} onClick={handleClick}>
            <td>{name}</td>
            <td>{password}</td>
            {isvip ? <td>✓</td> : <td></td>}
            <td>{datejoined}</td>
            {!props.noDel ?  <td><Button  className="p-2 my-2 w-100 btn-danger" onClick={handleDelete}>Delete</Button></td> : null}
        </tr>
    );
}
