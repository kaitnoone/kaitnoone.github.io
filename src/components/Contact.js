import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInLeft" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row animated fadeInRight">
                        <div className="col-md-4">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-globe-outline" />
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="mailto:kait.noone@gmail.com">kait.noone@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-phone" />
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="tel://17855437484">785.543.7484</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}