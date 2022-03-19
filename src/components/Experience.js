import { React, Component } from "react";

export default class Experience extends Component {
    render() {
        return (
            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-1">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="http://gitwit.com">Software Engineer at Gitwit</a> <span>2021 - Present</span></h2>
                                            <ul>
                                                <li>Developing web apps in the MEAN stack</li>
                                                <li>Suggesting changes to streamline the frontend development flow</li>
                                                <li>Guiding full-stack engineers to be more aware of front-end principles</li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://cadenzo.io">Front End Engineer at Cadenzo</a> <span>2021 - Present</span></h2>
                                            <ul>
                                                <li>Helping develop front-end features of React app</li>
                                                <li>Acting as a sounding board for first-time founders</li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-3">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://thetaproom.com">Front End Developer at The Taproom</a> <span>2020 - 2021</span></h2>
                                            <ul>
                                                <li>Created DTC ecommerce solutions for large brands such as Nestle, Copper
                                                Cow Coffee, and InsideTracker</li>
                                                <li>Developed custom Vue solution to create subscription boxes for customers</li>
                                                <li>Developed custom Shopify themes to match small businesses’ branding</li>
                                                <li>Helped write middleware apps to connect Shopify to other third party
                                                vendors</li>    
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-4">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://www.gravityworksdesign.com/">Front End Developer at Gravity Works</a> <span>2016 - 2018</span></h2>
                                            <ul>
                                                <li>Developed web sites of all sizes in DNN and Drupal CMS</li>
                                                <li>Focused on clean, semantic markup and 
                                                    accessibility meeting WCAG standards</li>
                                                <li>Paired with both junior and more senior developers to teach and learn, respectively</li>
                                                <li>Trained customers on how to manage their sites effectively</li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-5">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://intellicominc.com/">Front End Developer at Intellicom, Inc</a> <span>2016 - 2018</span></h2>
                                            <ul>
                                                <li>Designed custom skins around client requirements</li>
                                                <li>Developed sites in DNN content management system</li>
                                                <li>Managed customer email hosting, web hosting, and DNS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-none">
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <p><em>More work history and references available upon request.</em></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}