import React from 'react';
// import './App.css';
import styles from "./App.module.css"
// import * as styles from './App.module.css'; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className={styles.App}>
      <div className={styles.content}>
       
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
