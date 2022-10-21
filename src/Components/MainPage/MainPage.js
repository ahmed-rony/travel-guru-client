import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from '../Booking/Booking';
import Destination from '../Destination/Destination';
import Home from '../Home/Home';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import './MainPage.css';

const MainPage = () => {
    return (
        <div>
            
            <div className='main-page'>
                
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/booking' element={<Booking />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/destination' element={<Destination />}></Route>
                        <Route path='*' element={<PageNotFound />}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default MainPage;