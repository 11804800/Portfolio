import React, { Component } from "react";
import {FadeTransform} from 'react-animation-components';

function RenderLogo({ image, mode }) {
    return (
        <div className="row" style={{ background:"rgb(217, 227, 236)", width: "100%", margin: "auto 20px" }}>
            {
                    image.map((image) => {
                        return (
                            <div className="col p-2">
                                <img className="logo" src={image.image} alt={image.id} />
                            </div>
                        );
                    })
            }
        </div>
    );
}

class Poster extends Component {
    render() {
        return (
            <FadeTransform in 
            transformProps={{
                exitTransform:'scale(0.5)'
            }}>
            <React.Fragment>
                <div className="poster">
                </div>
                <div className="poster-glass">
                    <div className="intro col-12 col-md-8 mt-4">
                        <p className="a1">Nikhil Pathak</p>
                        <p className="text">Frontend web Developer</p>
                        <p className="description">
                            <span >I'm a web Designer with experience of clean and well organised responsive web designs.</span>
                            <span className="d-none d-md-block">My expertise is to create Web-designs,Backend Api and much more.</span>
                        </p>
                        <div className="contact ">
                            <button className="btn border">CONTACT ME</button>
                            <a href="#https://www.linkedin.com/in/nikhil-pathak-28760b17b/"  className="fa fa-linkedin fa-lg p-3"></a>
                            <a href="https://github.com/11804800" className="fa fa-github fa-lg p-3"></a>
                            <a href="https://www.instagram.com/lucifer60_2/"  className="fa fa-instagram fa-lg p-3"></a>
                        </div>
                    </div>
                    <div className="profile d-sm-none d-md-block">
                        <img src="images/profilebg.png" className="profile-img" alt="profile" />
                    </div>
                </div>
                <div className="bg-dark logo-display">
                    <div className="container p-0 logo-shahdow">
                        <div className="row">
                            <RenderLogo image={this.props.image} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            </FadeTransform>
        );
    }
}
export default Poster;