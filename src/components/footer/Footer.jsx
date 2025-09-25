import "./Footer.css"

const Footer = () => {
    return (
        <div>

            <div className="container-fluid footer-section bg-primary">

                <footer
                    style={{
                        // background: "blue",
                        color: "#fff",
                        textAlign: "center",
                        padding: "20px 0",
                        marginTop: 40,
                    }}
                >
                    <p style={{ margin: 0 }}>© 2025 Umair Sultan | All Rights Reserved</p>
                    <div style={{ marginTop: 10 }}>
                        <a
                            href="https://github.com/Umair-Sultan"
                            target="_blank"
                            style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
                        >
                            GitHub
                        </a>{" "}
                        |
                        <a
                            href="https://www.linkedin.com/in/umair-sultan-915b04352/"
                            target="_blank"
                            style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
                        >
                            LinkedIn
                        </a>{" "}
                        |
                        <a
                            href="mailto:umairsultan2121@gmail.com"
                            style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
                        >
                            Email
                        </a>
                    </div>
                </footer>

            </div>


        </div>
    )
}

export default Footer