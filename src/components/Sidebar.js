import React, { Component } from 'react'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false  
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible});
        if (document.body.classList.contains('offcanvas')) {
            document.body.classList.remove('offcanvas');
        }
        else {
            document.body.classList.add('offcanvas');
        }
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.toggleMenu} className={`js-colorlib-nav-toggle colorlib-nav-toggle ${this.state.visible ? "active" : ""}`} aria-expanded={this.state.visible} aria-controls="navbar"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{ backgroundImage: 'url(images/kaitlyn-avatar.png)' }} />
                        <h1 id="colorlib-logo"><a href="index.html">Kaitlyn Noone</a></h1>
                        <span className="position">Frontend Software Engineer</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="about-me">About</a></li>
                                <li><a href="skills">Skills</a></li>
                                <li><a href="education">Education</a></li>
                                <li><a href="experience">Experience</a></li>
                                <li><a href="work">Work</a></li>
                                <li><a href="contact">Contact</a></li>
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
            </div>
        )
    }
}