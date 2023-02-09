import React from 'react';
import Header from './HeaderComponent';
import Project from './ProjectComponet';
import { IMAGE } from '../Shared/Image';
import {PROJECTS} from '../Shared/Projects';
import {SKILLS} from '../Shared/Skills';
import Skills from './SkillsComponent';
import Footer from './FooterComponent';
import Poster from './Poster';
import Intro from './IntroComponent';
import Goto from './Gototp';
import {FadeTransform} from 'react-animation-components';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: IMAGE,
            projects:PROJECTS,
            skill:SKILLS
        }
    }
    render() {
        return (
            <div className="bg-dark">
                <Header toogle={this.togglebg} />
                <Goto/>
                <Poster image={this.state.image.filter((image) => image.tag === "light")} />
                <Intro />
                <Skills skill={this.state.skill} />
                <Project projects={this.state.projects}  />
                <Footer />
            </div>
        );
    }
}