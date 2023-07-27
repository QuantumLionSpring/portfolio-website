

import React from "react";
import Header  from './components/header/Header';
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Experience from "./components/Experience/Experience";
import Services from './components/services/services';
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from  './components/testimonials/testimonials'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
function App() {
    return (
        <div className={"App"}>

<Header/>

<Nav/>

<About/>
<Experience/>
<Services/>
<Portfolio/>
<Testimonials/>
<Contact/>
<Footer/>
        </div>
    );
}

export default App;
