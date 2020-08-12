import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { useStateValue } from './Stateprovider';

function App() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        
          {!user ? 
          /*user not logged in, so authenticate*/
          (<Login/>) 
          :
          /*user logged in, so load the app*/
          (<> 
              <Header/>
              <div className = "app__body">
                  <Sidebar/>

                  <Switch>
                    <Route path="/room/:roomId">
                       <Chat/>
                    </Route>
                    <Route path="/">
                      <h1 className = "homepage__open">Welcome to MP-HQ, select a <b>#channel</b> to view the messages!</h1>
                    </Route>
                  </Switch>
              </div>
            </>)
          }

      </Router>
    </div>
  );
}

export default App;
