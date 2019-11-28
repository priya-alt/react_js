import React from 'react'
import Shopping from './shopping';
import Grid from './grid';
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import './App.css';
import Header from './header';
import Secondpage from './secondpage';
function App() {
  return (
       <Router>
     <Route exact path="/" component={withRouter(Grid)} />
     <Route path="/cart" component = {withRouter(Secondpage)} />
    </Router>
  );
}
  export default App;
