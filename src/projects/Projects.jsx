import Project from "./Project";

import './Projects.css';

import projects from './data.json';

function Projects(){

    return (
        <article className='projects'>
            <h1>Projects</h1>

            <div>
                {projects.map(project => <Project {...project} />)}
            </div>
        </article>
    );
}


export default Projects;