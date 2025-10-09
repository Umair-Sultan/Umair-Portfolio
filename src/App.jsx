import Navbar from "./components/navbar/navbar"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Project from "./components/projects/Project"
import ContactUs from "./components/contact us/ContactUs"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero section/Hero"
import Loader from "./components/loader/Loader"
import React, { useState, useEffect } from "react"
import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  const [loading, setLoading] = useState(true)

  // function to handle loader
  const showLoader = () => {
    setTimeout(() => {
      setLoading(false) // after 4 sec hide loader
    }, 1500)
  }

  useEffect(() => {
    showLoader()
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration (ms)
      once: true,     // run only once per scroll
    });
  }, []);

  if (loading) {
    return (

      <Loader />

    )
  }


  return (
    <div>

      <Navbar />

      <section id="home" style={{ height: "70vh" }} data-aos="fade-up">
        <Hero />
      </section>

      <div className="container-fluid hr1"></div>

      <section id="about" style={{ height: "150vh" }} data-aos="fade-right">
        <About />
      </section>

      <div className="container-fluid hr2"></div>

      <section id="services" style={{ height: "150vh" }} data-aos="zoom-in-up">
        <Services />
      </section>

      <div className="container-fluid hr3"></div>

      <section id="project" style={{ height: "150vh" }} data-aos="zoom-in-up">
        <Project />
      </section>

      <div className="container-fluid hr4"></div>

      <section id="contactus" style={{ height: "100vh" }} data-aos="fade-up">
        <ContactUs />
      </section>

      <div className="container-fluid hr5"></div>

      <div className="container-fluid top-btn">
        <a href="#home" class="btn back-to-top-btn btn-info">Back to Top</a>
      </div>

      <Footer />



    </div>
  )
}

export default App
