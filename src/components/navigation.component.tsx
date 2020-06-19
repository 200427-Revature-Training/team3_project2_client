import React from 'react';
import { Link } from 'react-router-dom';


const NavigationComponent:React.FC=()=>{
    
    return (
        <div> 
            <div> this is navation : </div>
            <Link to="/"> </Link>
             <Link to="/SignUp"> SignUp</Link>
             <Link to="/Login"> Login</Link>
             <Link to="/Help"> help</Link>
        </div>
       
    )
}
export default NavigationComponent; 