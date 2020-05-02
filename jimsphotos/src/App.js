import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './Components/Posts/Posts'
import VidInfo from './Components/VideoInfo/VideoInfo'
import RecentVids from './Components/RecentVideos/RecentVideo'

import Catrergories from './Components/Categories/Categories';
import Recents from './Components/Recents/RecentPics';
import DogCategory from './Components/DogCategory/DogCategory';
import PictureDescription from './Components/Description/Description';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path = '/VideoInfo' component ={VidInfo}></Route>
          <Route path = '/Posts' component ={Posts}></Route>
          <Route path = '/RecentVideo' component = {RecentVids}></Route>
          <Route path = '/' exact component = {Posts}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
