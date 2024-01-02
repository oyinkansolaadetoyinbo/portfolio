import React from 'react';
import './services.css';
import { useState } from 'react';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="bx bx-analyse services__icon"></i>
                        <h3 className="services__title">Data <br />Analytics</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>View More{''}
                        <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data <br /> Analytics</h3>
                            <p className="services__modal-description">
                                I turn raw, meaningless data to valuable insights.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database querying
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Data cleaning
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Data wrangling
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Predictive <br /> Analysis</h3>
                    </div>
                    <span onClick={() => toggleTab(2)} className=" services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Predictive <br /> Analysis</h3>
                            <p className="services__modal-description">
                                Using modern statistical and machine-learning techniques, I can help you reduce uncertainty in making forecasts.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Statistical methods
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Data modelling
                                    </p>
                                </li>

                                {/* <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Machine learning and AI
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Data <br /> Visualization</h3>
                    </div>
                    <span onClick={() => toggleTab(3)} className=" services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Data <br /> Visualization</h3>
                            <p className="services__modal-description">
                                It delights me to design and create dashboards and visuals that tell the story in your data.
                                Previous experience in graphics design serves me well in this regard.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Dashboarding
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Technical writing
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Business presentation
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services