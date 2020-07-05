import React, { useState, useEffect } from 'react';
import { Button, Table } from '@material-ui/core';
import { Form, Col, Modal } from 'react-bootstrap';
import { Movement } from '../../models/Movement';
import { User } from '../../models/User';
import * as adminRemote from '../../remotes/admin.remote';



const AdminComponent:React.FC=(props)=>{
    const [movementList, setMovements] = useState<Movement[]>([]);

    const [modalView, setModalView] = useState(false);

    useEffect(() => {
        submit();
    }, [])

    var userMove: User ={
        id: 0,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        roleId: 0
    };

    userMove = props as User;

    const submit = () => {
        if(userMove) {
            console.log("Administrative Log: "+ userMove.email);
        }
        getAllMovements();
        renderAdminMovements(movementList);

    }

    // Creating the list of all movements
    const renderAdminMovements = (movement: Movement[]) => {
        return movement.map(movement => {
            //Needs to be directed to the new Movement created 
            return (movementList);
        })
    }

    const getAllMovements = () => {
        adminRemote.getAllMovements().then(movement => {
            setMovements(movement);
        })
    }

   /** const filterMovements = (status: string) => {
        adminRemote.filterMovements(status).then(movemment => {
            setMovements(movemment);
        });
        renderAdminMovements(movementList);
    }
     */ 

    
    return (
        <div> 
            <header>
                <h2 id="movement-header">Movement Approval System</h2>
            </header>
            <div >
               <button
                className="adminButton"
                    onClick={() => setModalView(true)}
                        >Movements for Review</button>
            </div>
            
            <section id="movementContainer">
                {renderAdminMovements(movementList)}
            </section>

            <Modal show={modalView} onHide={() => setModalView(false)}>
                <Modal.Header>
                <Modal.Title>Filter Movements</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                <Form.Group>
                    <Form.Control as="select" id="dropdown"> 
                        <option value="pending">Pending</option>
                        <option value= "authorized">Authorized</option>
                        <option value= "expired">Expired</option>
                        <option value= "denied">Denied</option>
                    </Form.Control>
                </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalView(false)}>Close</Button>
                </Modal.Footer>
             </Modal>


        </div>
    );
}
export default AdminComponent; 