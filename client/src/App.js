import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Employees from "./Employees/employees"
import PageNotFound from './PageNotFound.js';



class App extends Component {
  componentDidMount() {
    document.title = "R2R Group Betting";
  }
    render(){
      return(
        // <Router>
        // <main>
        //     <Switch>
                          
        //         <Route path="/employees" render={() => (
                  <Employees />
                // )} />
/*                 
                <Route path="/" render={() => (
                  <PageNotFound />
                )} /> */
                
    //         </Switch>
    //         </main>
    //     </Router>
    
       )
     }

    }


export default App;