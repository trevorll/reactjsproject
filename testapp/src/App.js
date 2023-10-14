import logo from './logo.svg';

import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { Component, useEffect, useState } from 'react';

import Login from './container/Login.js'
import LoggedIn from './container/LoggedIn.js'
import Data from './container/data';
import HomePage from './container/home';




class App extends Component {

  render() {
    App.defaultProps = {
      name: 'godwill'
    }
    return (

      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="loggedin" element={<LoggedIn />} />
          <Route path="data" element={<Data />} />
          {/*  <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>

      // <Router>
      //   <div className="App">
      //     <ul className="App-header">
      //       <li>
      //         <Link to="/">Login</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About </Link>
      //       </li>
      //       <li>
      //         <Link to="/contact">Contact Us</Link>
      //       </li>
      //     </ul>
      //     <Routes>
      //       <Route exact path='/' element={< Login />}></Route>
      //       <Route exact path='/about' element={< Login />}></Route>
      //       <Route exact path='/contact' element={< Login />}></Route>
      //     </Routes>
      //   </div>
      // </Router>
    );
  }
}

export default App;
