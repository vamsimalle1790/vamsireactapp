import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";

import { UserList } from "./features/users/UserList";
import {Emplogin} from "./Emplogin";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
       
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/home">
            <UserList />
          
          </Route>
          <Route path="/"><Emplogin/></Route>
        </Switch>
      </div>
    </Router>
  );
}
