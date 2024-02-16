import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
//import AboutmePage from './components/AboutmePage';
import StudentPage from './components/StudentPage';
import ContactUsPage from './components/ContactUsPage';
import SignupPage from './components/SignupPage';
import AttendancePage from './components/AttendancePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/students" component={StudentPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/attendance" component={AttendancePage} />
      </Switch>
    </Router>
  );
};

export default App;
