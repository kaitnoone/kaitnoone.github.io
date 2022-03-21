import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="colorlib-work" data-section="work">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInUp" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Work</span>
                            <h2 className="colorlib-heading animate-box">Recent Work</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 animate-box animated fadeInLeft" data-animate-effect="fadeInLeft">
                            <div className="project" style={{ backgroundImage: 'url(images/work/kithcare2.png)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://kithcare.app">Kith Care</a></h3>
                                        <span>Angular Application</span>
                                        <p className="info">
                                            I joined Gitwit to help with the rewrite of kith.care, 
                                            a two-sided app that allows parents to apply for DHS funding 
                                            to pay their children's caretakers. I came in mid-project to
                                            create most of the front end components, including application forms
                                            and timesheet render code, and use and tweak the API my colleages 
                                            were writing, to get the data into and out of the backend. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box animated fadeInRight" data-animate-effect="fadeInRight">
                            <div className="project" style={{ backgroundImage: 'url(images/work/tulsaremote.png)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://apply.tulsaremote.com/applicant/application">Apply Tulsa Remote</a></h3>
                                        <span>Angular Application</span>
                                        <p className="info">
                                            While at Gitwit, I've also enjoyed getting to work on various
                                            community initiatives, including rewriting the application for 
                                            the Tulsa Remote program. My work on this project included 
                                            revamping the front-end component styling and working on
                                            routing the app based on the applicant's answers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box animated fadeInLeft" data-animate-effect="fadeInTop">
                            <div className="project" style={{ backgroundImage: 'url(images/work/cc.png)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="https://coppercowcoffee.com/pages/quiz-flow">Copper Cow Coffee</a></h3>
                                        <span>Shopify site redesign, Vue app, middleware app</span>
                                        <p className="info">
                                           While at The Taproom, I had the opportunity to work on a large-scale
                                           project for Copper Cow Coffee. We re-skinned their entire Shopify site,
                                           then created a custom Vue app for customers to build a coffee
                                           subscription box. I also created a middleware app in Express to push 
                                           the results to third party services outside of Shopify, like Klaviyo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box animated fadeInRight" data-animate-effect="fadeInBottom">
                            <div className="project" style={{ backgroundImage: 'url(images/work/msurcpd.png)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">MSU Resource Center for Persons with Disabilities</a></h3>
                                        <span>Drupal</span>
                                        <p className="info">
                                            While at Gravity Works, I worked on a redesign for Michigan State University's
                                            Resource Center for Persons with Disabilitites. I was able to
                                            work with a visually impaired user for testing usability, which helped build empathy, 
                                            and learned a lot regarding the challenges that impaired users face on many sites. Of 
                                            note on this project is the fully keyboard navigable megamenu with multiple levels.
                                        </p>
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