import React, { Component } from 'react'

export default class WhoAmI extends Component {
    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box animated fadeInUp" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p><strong>Hi, I'm Kaitlyn Noone!</strong> I'm a front-end web and software engineer.</p>
                                        <p>I'm currently located in Tulsa, OK and live with my two dogs and one cat. I run with a great group of young professionals brought to the city through 
                                            the <a href="https://tulsaremote.com/">Tulsa Remote</a> program. I'm passionate about remote work, health and wellness, and bringing gorgeous designs to life
                                            through accessible and clean code.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 animate-box animated fadeInLeft" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline" /></span>
                                        <h3>Web Development</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box animated fadeInRight" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data" /></span>
                                        <h3>App Development</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}