import { Component } from "react";

export default class Skills extends Component {
    render() {
        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                        </div> */}
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>SCSS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Angular</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>React</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Vue</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Shopify</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>SQL / MongoDB / GraphQL</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
                                        <span>65%</span>
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