import "./About.css"
import profileimg from "../../assets/profile_img.jpeg"
import umtlogo from "../../assets/UMT-Logo.jpg"
import paeclogo from "../../assets/paec-logo.jpg"

const About = () => {
  return (
    <div>

      <div className="container-fluid about-section">
        <h1>About me</h1>

        <div className="container-fluid about-section-1">

          <div class="text-center about-section-img">
            <img src={profileimg} class="rounded mx-auto d-block" alt="..."></img>
          </div>

          <div className="container-fluid about-section-detail">
            <p>"Hi, I'm Umair Sultan, a Software Engineering student with a strong passion for web development and game development. I enjoy creating interactive and user-friendly applications, from building student portals and e-commerce platforms to experimenting with Unity game environments. My technical toolkit includes HTML, CSS, JavaScript, Node.js, Swift, React, Bootstrap and MySQL, and I’m constantly exploring new technologies to improve my skills. Also i have a youtube channel, ‘Code with Umair.’ My goal is to keep learning, building, and contributing to impactful projects that make technology more accessible and exciting."</p>
          </div>

        </div>

        <h3>Education</h3>

        <div className="container-fluid about-section-2">

          <div class="text-center umt-logo">
            <img src={umtlogo} class="rounded mx-auto d-block" alt="..."></img>
          </div>

          <div className="container-fluid uni-detail">
            <h6>BS Software Engineering</h6>
            <h6>I am 5th Semester Student at University of Management and Technology, Lahore</h6>
            <h6>2023-2027</h6>
          </div>

        </div>

        <div className="container-fluid about-section-3">

          <div class="text-center paec-logo">
            <img src={paeclogo} class="rounded mx-auto d-block" alt="..."></img>
          </div>

          <div className="container-fluid clg-detail">
            <h6>FSC Pre Engineering</h6>
            <h6>I Completed my FSC from PAEC Model College for Boys, Chashma</h6>
            <h6>2021-2023</h6>
          </div>
        </div>

        <h3>Skills</h3>

        <div className="container-fluid about-section-4">

          <div className="container-fluid skills">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JS</h4>
            <h4>Swift</h4>
          </div>

          <div className="container-fluid percentage">
            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "80%" }}>
                80%
              </div>
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "55%" }}>
                55%
              </div>
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "75%" }}>
                75%
              </div>
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "75%" }}>
                70%
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About