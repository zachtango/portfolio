



function Project({title, desc, tags, demo, github}){

    demo = demo && <a href={demo} target='blank' className='link'>Demo</a>;

    return (
        <div className='project'>
            <h2>{title}</h2>

            <p>{desc}</p> 
           
            <div className='tags'>
                {tags.map(tag => <span className='tag'>{tag}</span>)}
            </div>

            <div className='links'>
                {demo}
                <a href={github} target='blank' className='link' >
                    GitHub
                </a>
            </div>
        </div>
    );

}


export default Project;

