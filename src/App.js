import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContexts';

import Chats from './components/Chats'
import Login from './components/Login'

function App() {
  return (
    <div className="App homescreen">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
