import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Main } from './components/Main';
import History from './components/History';

  
const App = () => 
<Router>
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to='/history'>History</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/history">
                <History />
            </Route>
        </Switch>
    </header>
</Router>

export default App