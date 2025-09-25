import "./Services.css"
import web from "../../assets/web-development.jpg"
import data from "../../assets/database-management.png"
import game from "../../assets/game-development.png"
import ios from "../../assets/iphone-app-devlopment.jpg"


const Services = () => {
    return (
        <div>

            <div className="container-fluid services">

                <h1>Services</h1>
                
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={web} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">
                                    I create responsive and user-friendly websites with modern designs, optimized for performance and accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={game} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Game Development</h5>
                                <p className="card-text">
                                    I build engaging game prototypes and interactive 3D environments using Unity and Unreal Engine.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={data} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Database Management System</h5>
                                <p className="card-text">
                                    I design and manage secure, efficient databases with MySQL for seamless data handling and integration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={ios} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Iphone Application Development</h5>
                                <p className="card-text">
                                    I develop simple and intuitive iOS apps tailored to user needs, ensuring smooth performance and design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Services