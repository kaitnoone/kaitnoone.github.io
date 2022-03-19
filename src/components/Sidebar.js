import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                <div className="text-center">
                    <div className="author-img" style={{ backgroundImage: 'url(images/kaitlyn-avatar.png)' }} />
                    <h1 id="colorlib-logo"><a href="index.html">Kaitlyn Noone</a></h1>
                    <span className="position">Frontend Software Engineer</span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                            <li><a href="#" data-nav-section="about">About</a></li>
                            <li><a href="#" data-nav-section="skills">Skills</a></li>
                            <li><a href="#" data-nav-section="education">Education</a></li>
                            <li><a href="#" data-nav-section="experience">Experience</a></li>
                            <li><a href="#" data-nav-section="work">Work</a></li>
                            <li><a href="#" data-nav-section="contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="colorlib-footer">
                    <ul>
                        <li><a href="https://github.com/kaitnoone"><i className="icon-github" /></a></li>
                        <li><a href="https://twitter.com/kait_noone"><i className="icon-twitter2" /></a></li>
                        <li><a href="https://www.linkedin.com/in/kaitlynnoone/"><i className="icon-linkedin22" /></a></li>
                    </ul>
                </div>
            </aside>
        )
    }
}