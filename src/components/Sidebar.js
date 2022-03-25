import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// SETUP RESIZING LISTENER
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

    closeMenu() {
        this.setState({visible: false});
        document.body.classList.remove('offcanvas');
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
                                <li><NavLink exact={true} activeClassName='active' onClick={this.closeMenu} to='/'>Home</NavLink></li>
                                <li><NavLink activeClassName='active' onClick={this.closeMenu} to='/about-me'>About</NavLink></li>
                                <li><NavLink activeClassName='active' onClick={this.closeMenu} to='/specialties'>Specialties</NavLink></li>
                                <li><NavLink activeClassName='active' onClick={this.closeMenu} to='/education'>Education</NavLink></li>
                                <li><NavLink activeClassName='active' onClick={this.closeMenu} to='/experience'>Experience</NavLink></li>
                                <li><NavLink activeClassName='active' onClick={this.closeMenu} to='/work'>Work</NavLink></li>
                                <li><NavLink activeClassName='active' onClick={this.closeMenu} to='/contact'>Contact</NavLink></li>
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