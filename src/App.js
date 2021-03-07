import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {

  return (
   <Router>
     <Switch>
       <Route path="/home">
        <Home/>
       </Route>
       <Route path="/friend/:friendId">
         <FriendDetails/>
       </Route>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route path="*">
        <NoMatch/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
