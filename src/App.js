import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Events from './components/Events/Events';
import HomePage from './components/Home/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import Login from './components/UserAuth/Login/Login';
import PrivateRoute from './components/UserAuth/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route exact path='/home'>
            <HomePage></HomePage>
            </Route>
            <PrivateRoute exact path='/events'>
              <Events></Events>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
