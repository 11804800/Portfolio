import React, { Component } from "react";
import Switch from 'react-switch';
import {
    Navbar, Nav, NavbarBrand, NavItem, Collapse,
    NavbarToggler
} from "reactstrap";
import '../App.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mode: true
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggle = this.toggle.bind(this);
        this.scrolltop=this.scrolltop.bind(this);
        this.scrollProject=this.scrollProject.bind(this);
        this.scrollContact=this.scrollContact.bind(this);
        this.scrollaboutme=this.scrollaboutme.bind(this);
        this.scrollskills=this.scrollskills.bind(this);
    }
    toggleNav() {
        this.setState({
            open: !this.state.open
        });
    }
    toggle() {
        this.setState({
            mode: !this.state.mode
        });
    }
    scrolltop()
    {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    scrollProject()
    {
        window.scrollTo({top:2100,left:0,behavior:"smooth"})
    }
    scrollaboutme()
    {
        window.scrollTo({top:550,left:0,behavior:"smooth"})
    }
    scrollContact()
    {
        window.scrollTo({top:3800,left:0,behavior:"smooth"})
    }
    scrollskills()
    {
        window.scrollTo({top:1400,left:0,behavior:"smooth"})
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="lg" style={{ background: this.state.mode ? "rgb(217, 227, 236)" : "rgb(63, 71, 79)" }}>
                <NavbarBrand className="brand">
                            🅽🅸🅺🅷🅸🅻🅿🅰🆃🅷🅰🅺
                        </NavbarBrand>
                        <NavbarToggler className="toggle bg-dark " onClick={this.toggleNav}/>
                    <div className="container">
                        <Collapse navbar isOpen={this.state.open}>
                            <Nav>
                                <NavItem onClick={this.scrolltop}>
                                    <span className="fa fa-home fa-lg nav-button" ></span> HOME
                                </NavItem>
                                <NavItem onClick={this.scrollaboutme}>
                                    <span className="fa fa-user fa-lg nav-button"></span> About ME
                                </NavItem>
                                <NavItem onClick={this.scrollskills}>
                                    <span className="fa fa-comments fa-lg nav-button"></span> Skills
                                </NavItem>
                                <NavItem onClick={this.scrollProject}>
                                    <i class="fa fa-sliders fa-lg nav-button"></i> PROJECTS
                                </NavItem>
                                <NavItem onClick={this.scrollContact}>
                                    <span className="fa fa-comments fa-lg nav-button"></span> CONTACT ME
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default Header;