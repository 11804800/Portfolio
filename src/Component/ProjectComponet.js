import React, { Component } from "react";
import '../App.css';
import {FadeTransform} from 'react-animation-components';









function Renderprojects({ projects }) {
    return (
        <div className="row p-5">
            {
                projects.map((pro) => {
                    return (
                        <div className="row">
                            {
                                pro.align ?
                                    <div className="row">
                                        <div className="col-12 col-md-6 p-4">
                                            <img src={pro.image} width="100%" className="project-img" alt={pro.name} />
                                        </div>
                                        <div className="col-12 col-md-6 mt-3 p-4">
                                            <div className="rectangular"></div>
                                            <p className="pro-name">{pro.name}</p>
                                            <p className="describe">{pro.describe}</p>
                                            <div className="link">
                                                <a className="btn-variant" href={pro.link}>DEMO</a>
                                                &nbsp;
                                                <a className="btn-outline bg-dark" href={pro.git}><span className="fa fa-github fa-lg"></span> CODE</a>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="row">
                                        <div className="col-12 col-md-6 mt-3 p-4">
                                            <div className="circle"></div>
                                            <p className="pro-name">{pro.name}</p>
                                            <p className="describe">{pro.describe}</p>
                                            <div className="link">
                                                <a className="btn-variant" href={pro.link}>DEMO</a>
                                                &nbsp;
                                                <a className="btn-outline bg-dark" href={pro.git}><span className="fa fa-github fa-lg"></span> CODE</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 p-4">
                                            <img src={pro.image} width="100%" className="project-img" alt={pro.name} />
                                        </div>
                                    </div>
                            }
                        </div>
                    );
                })
            }
        </div>
    )
}


































class Project extends Component {
    render() {
        return (
            <FadeTransform in 
            transformProps={{
                exitTransform:'scale(0.5)'
            }}>
            <React.Fragment>
                <div className="mt-5">
                    <div className="container text-light ">
                        <div className="row ml-auto justify-content-center">
                            <p className="heading">LAST </p><p className="head-bor">PROJECTS</p>
                            <Renderprojects projects={this.props.projects} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            </FadeTransform>
        )
    }
}
export default Project;