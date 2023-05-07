import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import CustomNavbar from "../Components/Navbar";
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import TableItem from '../Components/TableItem';

export interface Client {
    id: number;
    name: string;
    password: string;
    isVIP: boolean;
    dateJoined: Date;
}

const BACKEND_URI = "http://127.0.0.1:8000/api"

export default function Clients() {
    const [data, setData] = useState([])
    const [selection, setSelection] = useState<Client | undefined>({} as Client)
    const form = useRef(null)

    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/clients/", {
            method: "GET",
            mode: "no-cors"
        })
            .then(response => console.log(response))
    }

    useEffect(() => {
        fetchData()
        console.log(data);
    }, [])

    useEffect(() => {
        //console.log(selection)
    }, [selection])

    const selectClient = (dir_sel: any) => {
        console.log(dir_sel)
        setSelection(dir_sel)
    }

    const updateClient = (e: any) => {
        e.preventDefault()
        if (selection === undefined)
            return
        console.log(selection)
        fetch(BACKEND_URI + "/clients/" + (selection!.id ? selection!.id : ""), {
            method: selection!.id ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selection),
        }).then(response => console.log(response))
            .then(() => { fetchData() })
    }

    const deleteClient = (id: any) => {
        if (id) {
            fetch(BACKEND_URI + "/clients/" + id, {
                method: "DELETE"
            }).then(response => console.log(response))
                .then(() => { fetchData() })
        }
    }

    const clearSelection = () => {
        setSelection(undefined)
    }

    let [direction, setDir] = useState(true)
    const handleSort = () => {
        let temp = [...data]

        console.log(temp)
        temp.sort((a: Client, b: Client) => { return a.name.localeCompare(b.name) })
        setData(direction ? temp : temp.reverse())
        setDir(!direction)
    }


    return (
        <>
            <CustomNavbar />
            <Container className="pt-5">
                <Form className='my-3' ref={form}>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formId">
                                    <Form.Label>Id:</Form.Label>
                                    <Form.Control value={selection ? selection!.id : ""} type="text" placeholder="" disabled readOnly />
                                </Form.Group>
                            </Col>
                            <Col xs={5} >
                                <Form.Group className="mb-1" controlId="formName">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control value={selection ? selection!.name : ""} onChange={e => setSelection({ ...selection!, name: e.target.value })} type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col xs={5} >
                                <Form.Group className="mb-1" controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control value={selection ? selection!.password : ""} onChange={e => setSelection({ ...selection!, password: e.target.value })} type="text" placeholder="" />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>
                            <Col xs={1} >
                                <Form.Group className="mb-3" controlId="formReleaseVip">
                                    <Form.Label>VIP:</Form.Label>
                                    <Form.Check checked={selection ? selection!.isVIP : false} onChange={(e: ChangeEvent<HTMLInputElement>) => setSelection({ ...selection!, isVIP: e.target.checked })} type="checkbox" placeholder="" />
                                </Form.Group>
                            </Col>

                            <Col xs={7} >
                                <Form.Group className="mb-3" controlId="formDate">
                                    <Form.Label>Date Joined:</Form.Label>
                                    <Form.Control value={(selection !== undefined && selection != null && selection.dateJoined) ? (new Date(selection!.dateJoined).toISOString().split('T')[0]) : ""} onChange={e => setSelection({ ...selection!, dateJoined: new Date(e.target.value) })} type="date" placeholder="" />
                                </Form.Group>
                            </Col>
                            
                            <Col className="mt-3" >
                                <Button type="submit" className="p-2 m-2 w-100" onClick={updateClient}>Modify</Button>
                            </Col>
                            
                            <Col className="mt-3" >
                                <Button className="p-2 my-2 w-100 btn-danger" onClick={clearSelection}>Clear</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>

                <Table hover>
                    <thead>
                        <tr>
                            <th onClick={handleSort}>Name</th>
                            <th>Password</th>
                            <th>Is VIP?</th>
                            <th>Join Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((e: any) =>
                            <TableItem key={e.id} object={e} onClick={selectClient} deleteGame={deleteClient} />
                        ) : null}
                    </tbody>
                </Table>
            </Container>

        </>
    );
}
