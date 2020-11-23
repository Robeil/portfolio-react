import React from 'react';
import Header from '../Header/index';
import './style.css';
//import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import CovidImg from '../../Image/screenshot/CovidTracker.png';
import Jobimg from '../../Image/screenshot/JobFinder.png';
import NoteImg from '../../Image/screenshot/note-taker-front.png';
import FitnessImg from '../../Image/screenshot/fitness-tracker.png';

const Portfolio = () => {

    return (
        <>
            <Header />
            <div className="project">
                <div className="card mb-3 mx-auto " style={{ width: "90%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={CovidImg} className="card-img" alt="Covid" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Fitness Tracker</h5>
                                <a href="https://github.com/ShepLT1/covid-tracker.git">GitHub Repo</a>
                                <br>
                                </br>
                                <a href="https://sheplt1.github.io/covid-tracker/">Deployed link</a>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                                There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                              
                            </div>
                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className="card mb-3 mx-auto" style={{ width: "90%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Job Finder</h5>
                                <a href="https://github.com/saikitjk/JobFinder.git">GitHub Repo</a>
                                <br>
                                </br>
                                <a href="https://uw-jobfinder.herokuapp.com/">Deployed link</a>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                                 There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                          
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={Jobimg} className="card-img" alt="Job Finder" />
                        </div>
                    </div>
                </div>
                {/* project 3 */}
                <div className="card mb-3 mx-auto" style={{ width: "90%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={NoteImg} className="card-img" alt="Note Taker" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Note Taker</h5>  
                                <a href="https://github.com/Robeil/note-taker.git">GitHub Repo</a>
                                <br>
                                </br>
                                <a href="https://express-note-app.herokuapp.com/">Deployed link</a> 
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                                There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                              
                            </div>
                        </div>
                    </div>
                </div>
                {/* project 4 */}
                <div className="card mb-3 mx-auto" style={{ width: "90%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Fitness Tracker</h5>
                                <a href="https://github.com/Robeil/fitness-tracker.git">GitHub Repo</a>
                                <br>
                                </br>
                                <a href="https://obscure-wave-35182.herokuapp.com/">Deployed link</a>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>The Covid-19 Dashboard displays up-to-date API data on the spread of Covid-19 for any state the user specifies.
                                There is a landing page featuring a clickable map, and the website is responsive and screen-reader accessible.</p>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <h3>Discovery:</h3>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                                <li>Wrote Initial Project Proposal and spec'd out user requirements.</li>
                               
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={FitnessImg} className="card-img" alt="Fitness Tracker" />
                        </div>
                    </div>
                </div>
                <Icon />
            </div>
        </>
    )
}

export default Portfolio;