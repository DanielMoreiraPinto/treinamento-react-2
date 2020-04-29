import * as React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Restaurant from './pages/Restaurant/Restaurant.component';
import {Switch, Route} from 'react-router-dom'

function App() {

  
  return (
    //<div class="jumbotron-fluid"></div>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/restaurants/:handle' component={Restaurant}/>
    </Switch>
  );
}

export default App;
