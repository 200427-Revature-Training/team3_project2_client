import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationComponent from './navigation.component';
import SignupComponent from './page/singnup/signup.component';
import LoginComponent from './page/login/login.component';
import HelpComponent from './page/help/help.component';
import UserComponent from './page/user/user.component';
import AdminComponent from './page/admin/admin.component';


const MainComponent: React.FC = () => {
    return <div>
                
                <BrowserRouter>
                    <NavigationComponent></NavigationComponent>    
                    <Switch>
                        <Route exact path='/SignUp'  >
                            <SignupComponent></SignupComponent>
                        </Route>
                        <Route exact path='/Login'>
                            <LoginComponent></LoginComponent>
                        </Route>                         
                        <Route exact path='/Help'>
                                <HelpComponent></HelpComponent>
                        </Route>
                        <Route exact path='/User'>
                                <UserComponent></UserComponent>
                        </Route>
                        <Route exact path='/Admin'>
                                <AdminComponent></AdminComponent>
                        </Route>

                        
                    </Switch>

                    
                    
                </BrowserRouter>
            </div>
    }
export default MainComponent; 