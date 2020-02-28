import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// need imports for pictures

import Recents from './Components/Recents/RecentPics';
import DogCategory from './Components/DogCategory/DogCategory';
import PictureDescription from './Components/Description/Description';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path = '/dogcategory' component ={DogCategory}></Route>
          <Route path = '/home' component ={Recents}></Route>
          <Route path = '/pictureDescription' component = {PictureDescription}></Route>
          <Route path = '/' exact component = {Recents}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
