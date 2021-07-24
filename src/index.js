import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Site.Navbar';
import SiteHeader from './Site.Header';
import Footer from './Site.Footer';
import Status from './Site.Status';
import Carousel from './Home.Carousel';
import AboutMe from './Home.AboutMe';
import Production from './Home.Production';
import ClimateClock from './Home.ClimateClock';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <SiteHeader />
    <Carousel />
    <Status />
    <AboutMe />
    <Production />
    <ClimateClock />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();