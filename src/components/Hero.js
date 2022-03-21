import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="hero">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight hero-text animated fadeInUp">
                                <div className="hero-text-inner js-fullheight">
                                    <div className="desc">
                                        <h1>Hi! <br />I'm Kaitlyn.</h1>
                                        <p><a className="btn btn-primary btn-learn" target="_blank" href="documents/resume.pdf">Download Resume <i className="icon-download4" /></a></p>
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