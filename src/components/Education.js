import React, { Component } from "react";
import Accordion from "./Accordion";

export default class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible });
        if (document.body.classList.contains('offcanvas')) {
            document.body.classList.remove('offcanvas');
        }
        else {
            document.body.classList.add('offcanvas');
        }
    }
    render() {
        return (
            <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInLeft" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Education</span>
                            <h2 className="colorlib-heading animate-box">Degree</h2>
                        </div>
                    </div>
                    <div className="animate-box animated fadeInRight">
                        <Accordion>
                            <div label='Multimedia - B.S.'>
                                <p><strong>University of Nebraska at Kearney</strong><br />
                                    2006 - 2009</p>
                                <p>
                                    Summa Cum Laude and Honors Program graduate. Multimedia course of study is a
                                    hybrid of journalism, graphic design and computer science. Minor in advertising.
                                </p>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </section>
        )
    }
}