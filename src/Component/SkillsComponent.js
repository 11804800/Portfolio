import React, { Component } from "react";
import { Circle } from 'rc-progress';
import {Tooltip} from 'reactstrap'
import {FadeTransform,Stagger,Fade} from 'react-animation-components';
function TechSkills({ skills }) {
    return (
        <div>
            {
                skills.map((skill) => {
                    return (
                        <Fade in>
                        <div className="row p-2">
                            <div className="ml-1 pl-2 pb-1 skill-name">{skill.name}</div>
                            <div className="ml-auto pr-2 mr-3 pb-1 skill-name">{skill.percentage}%</div>
                            <div className="progres mr-auto">
                                <div className="skill-per" style={{ width: `${skill.percentage}%` }}>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    );
                })
            }
        </div>
    );
}

function Professional({ skills }) {
    return (
        <div className="row ">
            {
                skills.map((skill) => {
                    return (
                        
                        <div className="col-md-6 m-auto col-12 pt-4">
                            <div className="circular m-auto ">
                            <Fade in>
                                <Circle percent={skill.percentage} strokeColor="rgb(100, 100, 75)"
                                    strokeWidth={4} strokeLinecap={"square"} trailWidth={2} />
                                <p className="circle-per">{skill.percentage}%</p>
                                <p className="tag">{skill.name}</p>
                                </Fade>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    );
}

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            open:false
        };
        this.toggle=this.toggle.bind(this);
    }
    toggle()
    {
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <div className="mb-2 p-5">
                <div className="container text-light inverted text-center">
                    <div className="row justify-content-around skill-row">
                        <div className="col-12 text-center pb-4 pr-4">
                            <p className="head-bor m-auto">Skills</p>
                        </div>
                        <div className="col-12 col-md-5 inverted">
                            <p className="skill-heading m-auto">Technical Skills</p>
                            <TechSkills skills={this.props.skill.filter((skill) => skill.category === "Technical")} />
                        </div>
                        <div className="col-12 col-md-5 pt-4 skills">
                            <p className="skill-heading m-auto">Professional Skills</p>
                            <Professional skills={this.props.skill.filter((skill) => skill.category === "professional")} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-4">
                            <button className="resume-btn" id="resume">Download My Resume</button>
                            <Tooltip isOpen={this.state.open} target="resume" toggle={this.toggle}
                            placement="bottom">
                                Download resume
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;