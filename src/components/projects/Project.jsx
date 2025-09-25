import "./Project.css"
import iosproject from "../../assets/ios-calculator.jpg"
import rockpapergame from "../../assets/rock-paper-scissor-game.jpg"
import wheatherapp from "../../assets/wheather-app-pic.jpg"
import todolistapp from "../../assets/to-do-list.jpg"
import amazonclone from "../../assets/amazon-clone-pic.png"
import currencyconverter from "../../assets/currency-converter.png"

const Project = () => {
    return (
        <div>

            <div className="container-fluid project-section">

                <h1>Projects</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={amazonclone} className="card-img-top fixed-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Amazon Clone</h5>
                                <p className="card-text">
                                    I make this Amazon Clone using HTML, CSS and JS.
                                </p>
                                <a href="https://github.com/Umair-Sultan/Amazon-Clone.git" class="btn btn-info">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={iosproject} className="card-img-top fixed-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Iphone Calculator App</h5>
                                <p className="card-text">
                                    I make this Calculator App using Swift Language.
                                </p>
                                <a href="https://github.com/Umair-Sultan/Calculator-Swift.git" class="btn btn-info">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={wheatherapp} className="card-img-top fixed-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Wheather App</h5>
                                <p className="card-text">
                                    I make this Wheather using HTML, CSS and JS.
                                </p>
                                <a href="https://github.com/Umair-Sultan/weather-app.git" class="btn btn-info">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={todolistapp} className="card-img-top fixed-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">To Do List App </h5>
                                <p className="card-text">
                                    I make this To Do List using HTML, CSS and JS.
                                </p>
                                <a href="https://github.com/Umair-Sultan/To-Do-List.git" class="btn btn-info">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={currencyconverter} className="card-img-top fixed-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">To Do List App </h5>
                                <p className="card-text">
                                    I make this To Do List using HTML, CSS and JS.
                                </p>
                                <a href="https://github.com/Umair-Sultan/Currency-Converter-App.git" class="btn btn-info">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-bg-primary">
                            <img src={rockpapergame} className="card-img-top fixed-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">To Do List App </h5>
                                <p className="card-text">
                                    I make this To Do List using HTML, CSS and JS.
                                </p>
                                <a href="https://github.com/Umair-Sultan/Rock-Paper-Scissor-Game-in-JS.git" class="btn btn-info">GitHub Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project