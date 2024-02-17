import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import HomePage from './components/HomePage';
//import AboutmePage from './components/AboutmePage';
import StudentPage from './components/StudentPage';
import ContactUsPage from './components/ContactUsPage';
import SignupPage from './components/SignupPage';
import AttendancePage from './components/AttendancePage';
import PasswordPrompt from './components/PasswordPrompt';
import './App.css';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please check the console for details.</div>;
    }

    return this.props.children;
  }
}







const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = 'mypassword'; 

  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password. You are not authorized.');
    }
  };


  return (
    <ErrorBoundary>
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/students" component={StudentPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/attendance">
        {authenticated ? (
          <AttendancePage />
        ) : (
          <PasswordPrompt onPasswordSubmit={handlePasswordSubmit} />
        )}
      </Route>
      </Switch>
    </Router>
    </ErrorBoundary>
  );
};

export default App;
