import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import Start from './components/Start';
import Battle from './components/Battle';
import Matchup from './components/Matchup';
import Stats from './components/Stats';
import Upload from './components/Upload';


function App() {
  return (
    <Router>
    <div className="App">
        <header className="App-header"> 
            <h1>HAMSTERWARS</h1>
            <h3>The newest and craziest hamsterwarsgame</h3>
            <nav>
                <Link to= "/start" activeClassName="active"> Start </Link>
                <NavLink to= "/battle" activeClassName="active"> Battle </NavLink>
                <NavLink to= "/matchup" activeClassName="active"> Matchup </NavLink>
                <NavLink to= "/stats" activeClassName="active"> Stats </NavLink>
                <NavLink to= "/uploads" activeClassName="active"> Uploads </NavLink>
            </nav>
        </header>

        <main className="App-main">
          <Switch>
           
            <Route path="/battle">  <Battle/>   </Route>
            <Route path="/matchup"> <Matchup/>  </Route>
            <Route path="/stats">   <Stats/>    </Route>
            <Route path="/uploads"> <Upload/>   </Route>
            <Route path="/"  >      <Start/>    </Route>
            </Switch>
        </main>
    
        <footer className="App-footer">
            <h3>Made by Lisa</h3>
        </footer>
    </div>
    </Router>
    );
  }
  
  export default App;
  