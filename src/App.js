import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Msg from './components/Msg';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';

function App(){
  return (
   <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/msg" component={Msg}/>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
