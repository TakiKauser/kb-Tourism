import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EventDetails from './components/EventDetails/EventDetails';
import HomePage from './components/Home/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import EventsPage from './components/Pages/Events/EventsPage';
import BookingPage from './components/Pages/Booking/BookingPage';
import Login from './components/UserAuth/Login/Login';
import PrivateRoute from './components/UserAuth/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import MybookingPage from './components/Pages/MyBooking/MybookingPage';

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
              <EventsPage></EventsPage>
            </PrivateRoute>
            <PrivateRoute exact path='/details/event/:eventId'>
              <EventDetails></EventDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/event/booking/:eventId'>
              <BookingPage></BookingPage>
            </PrivateRoute>
            <PrivateRoute exact path='/myBookings/:email'>
              <MybookingPage></MybookingPage>
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
