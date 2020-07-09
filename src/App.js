import React from 'react';
import Header from './components/Header'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';

//REDUX

import {Provider} from "react-redux"
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Productos}/>
              <Route exact path="/productos/nuevo" component={NuevoProducto}/>
              <Route exact path="/productos/editar/:id" component={EditarProducto}/>
            </Switch>
          </div>
      </Router>
    </Provider>
   
  );
}

export default App;
