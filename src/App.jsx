import Navbar from "./components/navbar/navbar"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Project from "./components/projects/Project"
import ContactUs from "./components/contact us/ContactUs"
import Footer from "./components/footer/Footer"
import "./App.css"
import Hero from "./components/hero section/Hero"

const App= () => {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ height: "70vh" }}>
        <Hero />
      </section>
      <div className="container-fluid hr1"></div>
      <section id="about" style={{ height: "150vh" }}>
        <About />
      </section>
      <div className="container-fluid hr2"></div>
      <section id="services" style={{ height: "150vh" }}>
        <Services />
      </section>
      <div className="container-fluid hr3"></div>
      <section id="project" style={{ height: "150vh" }}>
        <Project />
      </section>
      <div className="container-fluid hr4"></div>
      <section id="contactus" style={{ height: "100vh" }}>
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
