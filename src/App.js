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
import ManageAllBookingsPage from './components/Pages/ManageAllBookings/ManageAllBookingsPage';
import AddEventPage from './components/Pages/AddEvent/AddEventPage';
import ContactPage from './components/Pages/Contact/ContactPage';
import AboutPage from './components/Pages/About/AboutPage';

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
            <Route exact path='/contact'>
              <ContactPage></ContactPage>
            </Route>
            <Route exact path='/about'>
              <AboutPage></AboutPage>
            </Route>
            <PrivateRoute exact path='/details/event/:eventId'>
              <EventDetails></EventDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/event/booking/:eventId'>
              <BookingPage></BookingPage>
            </PrivateRoute>
            <PrivateRoute exact path='/myBookings'>
              <MybookingPage></MybookingPage>
            </PrivateRoute>
            <PrivateRoute exact path='/manageAllBookings'>
              <ManageAllBookingsPage></ManageAllBookingsPage>
            </PrivateRoute>
            <PrivateRoute exact path='/addEvent'>
              <AddEventPage></AddEventPage>
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
