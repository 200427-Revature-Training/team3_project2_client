import React, { useState, useEffect } from 'react';
import { Button, Table, GridListTile, GridListTileBar, IconButton, makeStyles } from '@material-ui/core';
import { Form, Col, Modal } from 'react-bootstrap';
import { Movement } from '../../models/Movement';
import { User } from '../../models/User';
import * as adminRemote from '../../remotes/admin.remote';
import InfoIcon from '@material-ui/icons/Info';



const AdminComponent: React.FC = (props) => {
    const [movementList, setMovements] = useState<Movement[]>([]);
    const classes = useStyles();

    const [modalView, setModalView] = useState(false);

    useEffect(() => {
        submit();
    }, [])

    var userMove: User = {
        id: 0,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 0
    };

    userMove = props as User;

    const submit = () => {
        if (userMove) {
            console.log("Administrative Log: " + userMove.email);
        }
        getAllMovements();
        render(movementList);

    }



    const render = (movement: Movement[]) => {

        if (movement[0] != undefined) {

            return (movement.map((tile) => (
                <GridListTile key={tile.id}>
                    <img src={require(`${tile.image}`)} alt={tile.name} />
                    <GridListTileBar
                        title={tile.name}
                        subtitle={<span>by: {(tile.author as User).firstName}</span>}
                        actionIcon={
                            <IconButton onClick={() => { }} aria-label={`info about ${tile.name}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
            )))
        }

    }

    const getAllMovements = () => {

        adminRemote.getMovementByStatus("Pending").then(movements => {
            setMovements(movements);

        });
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
                {render(movementList)}
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
                                <option value="authorized">Authorized</option>
                                <option value="expired">Expired</option>
                                <option value="denied">Denied</option>
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'light-grey',
    },
    gridList: {
        width: 1100,
        height: 850,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));