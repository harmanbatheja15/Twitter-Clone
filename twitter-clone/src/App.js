import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>

                <Route path="/">

                    <div className="app">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>

                </Route>

            </Switch>
        </Router>
    );
}

export default App;
