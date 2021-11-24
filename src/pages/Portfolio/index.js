import React, { useState, useEffect } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image } from "react-bootstrap";
import Wackywiki from '../../assets/images/wackywiki.png'
import Mental from '../../assets/images/mental_health_tracker.png'
import Quiz from '../../assets/images/Quiz-Start.png'
import Password from '../../assets/images/passwordgenerator.png'


function Portfolio() {
    return (
        <section className="container page">
            <div className="justify-text-center">
                <h2 className="areatitle justify-text-center">Portfolio</h2>
            </div>

            <div className="content justify-content-center info row" >
                <figure className="pad card col-sm-4">
                    <Image className='image' src={Wackywiki} alt="" fluid />
                    <div className="text card-body">
                        <h3>Wacky-Wiki </h3>
                        <p>My first group project website</p>
                        <a href="https://evanhosni.github.io/wackywiki/" className="btn btn-primary"> Wacky-Wiki</a>
                    </div>
                </figure>
                <figure className="pad card col-sm-4">
                    <Image src={Mental} alt="" fluid />
                    <div className="card-body">
                        <h3>Mental Health Tracker</h3>
                        <p>My second major project</p>
                        <a href="https://mental-health-tracker-dbt.herokuapp.com/" className="btn btn-primary" target="_blank">Mental Health Tracker</a>
                    </div>
                </figure>
                <figure class="pad card col-sm-4">
                    <Image src={Quiz} alt="start screen for the quiz" />
                    <div class="card-body">
                        <h3>Code Quiz</h3>
                        <p>A simple 5 question quiz with score timer</p>
                        <a href="https://jdlanata.github.io/quiz-code/" className="btn btn-primary" target="_blank">Code Quiz</a>
                    </div>
                </figure>
                <figure className="pad card col-sm-4">
                    <Image src={Password} alt="" fluid />
                    <div>
                        <h3>Password Generator</h3>
                        <p>A random passowrd generator that uses user input to generate a passowrd</p>
                        <a href="https://jdlanata.github.io/password-generator/" className="btn btn-primary" target="_blank">Password Generator</a>
                    </div>
                </figure>

            </div>
        </section>

    )

};

export default Portfolio;