import React, { Component } from "react";
import {FadeTransform} from 'react-animation-components';
class Intro extends Component {
    render() {
        return (
            <FadeTransform in 
            transformProps={{
                exitTransform:'scale(0.5)'
            }}>
            <div>
                <div className="container text-light mt-5">
                    <div className="row justify-content-center intro1">
                        <div className="col-12 p-2 pl-4">
                        <p className="text-light skill-heading">About Me</p>
                        </div>
                        <div className="col-12 col-md mt-4 pl-4">
                            <img src='/images/about.png' className="intro-img" />
                        </div>
                        <div className="col-12 col-md p-4">
                            <h3 className="question">Intro</h3>
                            <p>Hey, I'm Nikhil Pathak and I have done my B.tech from Lovely
                                Professional Univeristy and I'm a fresher looking forward to
                                start my career in web-development as a full-stack MERN developer.
                                My expertise is in building clean and responsive web designs 
                                and maintaining the backend of the website and other than this 
                                i am also a software tester, Java and ETL developer.
                            </p>
                            <br/>
                            <h5 className="question1">Why web development</h5>
                            <p>Since I started My journey as Engineering student in LPU. I got curious to learn 
                                that how websites work so smoothly like providing us the relevent data 
                                ,connecting to other people etc.So,I think by working as an web-developer 
                                I'll be able to learn more about web-development and will sharp my skills 
                                and will build fine career in it. 
                            </p>
                            <br/>
                            <h5 className="question1">Why You Should Hire Me</h5>
                            <p>I Believe that action speaks more than words So,Please visit my project that I have 
                                methioned in my portfolio there you'll get know about my skills. And, Other than that I have relevent skills which 
                                are required for an web-developer post like I have my expertise in React, CSS, NodeJs,
                                Redux, ExpressJs, Mongodb and More.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </FadeTransform>
        );
    }
}
export default Intro;