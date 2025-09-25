import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (section) => {
    setActiveLink(section);

    // Scroll to section with offset (navbar height ~ 80px)
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -80; // adjust if navbar height changes
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* NavBar Start */}
      <div className="navbar-fluid">
        <nav className="navbar fixed-top bg-primary navbar-expand-lg" data-bs-theme="dark">
          <div className="container-fluid my-container">
            <a className="navbar-brand" href="#">
              Umair Sultan Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="container-fluid collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {["home", "about", "services", "project", "contactus"].map((section) => (
                  <li key={section} className="nav-item">
                    <button
                      className={`nav-link ${activeLink === section ? "active disabled" : ""}`}
                      onClick={() => handleClick(section)}
                      style={{ background: "transparent", border: "none" }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* NavBar End */}
    </div>
  );
};

export default Navbar;
