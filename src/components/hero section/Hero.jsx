import "./Hero.css"
import profileimage from '../../assets/profile_img.jpeg'

const Hero = () => {
  return (
    <div>

      <div className="container-fluid hero-section">

        <div className="container-fluid image">
          <img src={profileimage} class="img-fluid" alt="..."></img>
        </div>

        <div className="container-fluid about">
          <h3>Hi! <br /> I am Umair Sultan a Software Engineer</h3>
          <h5>I am a Student of Bs Software Engineering at University of Management and Technology, Lahore</h5>
        </div>

      </div>

      <div className="container-fluid hero-buttons">
        <a
          href="/Umair_Sultan_Resume.pdf"
          download="Umair_Sultan_Resume.pdf"
          className="btn btn-primary btn-lg"
        >
          My Resume
        </a>
        <a href="https://www.linkedin.com/in/umair-sultan-915b04352/" class="btn btn-lg btn-primary">Connect with Me</a>
      </div>

    </div>
  )
}

export default Hero