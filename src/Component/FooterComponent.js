import React, { Component } from "react";
import { Button, Col, Form, Input, Label, Row,Tooltip } from "reactstrap";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state={
            open:false,
            open1:false,
            open2:false,
            open3:false
        };
        this.toggle=this.toggle.bind(this);
    }
    toggle()
    {
        this.setState({
            open:!this.state.open
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className=" footer">
                    <div className="container-fluid text-light p-4">
                        <div className="row justify-content-center p-2">
                            <div className="col-12 col-md-4 pt-3 text-center">
                                <div style={{ padding: "110px 10px" }}>
                                    <h5>🅽🅸🅺🅷🅸🅻🅿🅰🆃🅷🅰🅺</h5>
                                    <p>
                                        This is my portfolio developed using <i>React</i>,<i> CSS</i>.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 border-right pt-4 border-left">
                                <div className="pl-4">
                                    <h2 className="skill-heading">Address</h2>
                                    <ul className="list-unstyled">
                                        <li className="pt-2">
                                            <span className="fa fa-phone fa-lg pt-3 pr-1"></span> +91-8417814745, 7024560733
                                        </li>
                                        <li className="pt-2">
                                            <span className="fa fa-envelope fa-lg pt-3 pr-2"></span> sanjaypathak2707@gmail.com
                                        </li>
                                        <li className="pt-2">
                                            <span className="fa fa-map-marker fa-lg pt-3 pr-3"></span> Shahdol, Madhya-Pradesh
                                        </li>
                                        <li>
                                            <div className="pt-4">
                                                <a href="#sanjaypathak2707@gmail.com" className="fa fa-google-plus fa-lg pr-3" id="gamil"></a>
                                                <a href="https://www.instagram.com/lucifer60_2/" className="fa fa-instagram fa-lg pr-3" id="2"></a>

                                                <a href="https://www.linkedin.com/in/nikhil-pathak-28760b17b/" className="fa fa-linkedin fa-lg pr-3" id="3"></a>

                                                <a href="#" className="fa fa-twitter fa-lg" id="4"></a>
 
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 pt-3  pl-5">
                                <h2 className="skill-heading">Contact Me</h2>
                                <Form action="https://formspree.io/f/xnqypnnv" method="POST">
                                    <Row className="form-group">
                                        <Label htmlFor="name" md={3}>Your Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="username" name="username"
                                                innerRef={(input) => this.name = input} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="email" md={3}>Your Email</Label>
                                        <Col md={10}>
                                            <Input type="text" id="username" name="username"
                                                innerRef={(input) => this.email = input} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="Name" md={3}>Message</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="username" name="username"
                                                innerRef={(input) => this.message = input} />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{ size: 10 }}>
                                            <Button type="submit" value="submit" style={{ background: "rgb(89, 84, 68)" }}>SEND</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            </div>
                        </div>
                        <div className="row justify-content-center p-2" style={{ background: "rgba(0,0,0,0.1)" }}>
                            <div className="col-auto">
                                <h6>Copyright @2023 <i>Nikhil</i>. All right reserved</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
export default Footer;