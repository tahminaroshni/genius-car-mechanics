import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import AuthProvider from './Pages/Login/Authprovider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/booking/:serviceId' element={<Booking />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<PrivateRoute />}>
              <Route path='booking/:serviceId' element={<Booking />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
