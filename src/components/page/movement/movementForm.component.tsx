import React, { useState } from 'react';
import { Movement } from '../../models/Movement';

/**interface MovementFormComponentProps {
    setView: (str: 'MOVEMENT') => void;
    addMovement: (movement: Movement) => void;
}
*/

const MovementFormComponent:React.FC = () => {

  /**   const [moveName, setMoveName] = useState('');
    const [moveGoal, setMoveGoal] = useState('');
    const [moveStart, setMoveStart] = useState('');
    const [moveDescription, setMoveDescription] = useState('');
    const [moveType, setMoveType] = useState('');
    const [moveImage, setMoveImage] = useState('');

    const saveMovement = () => {
        const movement = {
            moveName, moveGoal, moveStart, moveDescription, moveType, moveImage
        };
        //props.addMovement(movement);
        props.setView('MOVEMENT');

    }
*/
    
  
        return (
            <section id="movementForm-container">
                <header>
                    <h2>Register New Movement</h2>
                </header>
    
                <form>
                    <div>
                        <label><div>Movement Name:</div>
                        <input 
                            //value={moveName} 
                            //onChange={(e) => setMoveName(e.target.value)} 
                            type="text" />
                        </label>
                   </div>
    
                    <div>
                        <label><div>Movement Goal</div>
                        <input
                        // value={moveGoal} 
                          //  onChange={(e) => setMoveGoal(e.target.value)}
                            type="text" />
                        </label>
                    </div>
    
                    <div>
                        <label><div>Movement Start:</div>
                        <input 
                            //value={moveStart} 
                            //onChange={(e) => setMoveStart(e.target.value)}
                            type="date" />
                        </label>
                    </div>
    
                    <div>
                        <label><div>Movement Description:</div>
                        <textarea 
                            //value={moveDescription} 
                            //onChange={(e) => setMoveDescription(e.target.value)}
                         />
                        </label>
                    </div>

                    <div>
                        <label><div>Movement Type:</div>
                        <input 
                        //value={moveType} 
                         //   onChange={(e) => setMoveType(e.target.value)}
                            type="number" />
                        </label>
                    </div>

                    <div>
                        <label><div>Movement Image:</div>
                        <input 
                         //value={moveImage} 
                           // onChange={(e) => setMoveImage(e.target.value)}
                            type="file" accept="image/*" />
                        </label>
                    </div>
    
        
                    <button>Save Movement</button>
            
    
                </form>
    
            </section>
            
            

    );
}

export default MovementFormComponent; 

/**
 *    <div>
                 <button onClick={() => props.setView('MOVEMENT')}>Back
                    </button>
                    <button onClick={() => saveMovement()}>Save</button>
                </div>
 */