import Image from 'next/image'

export default function Project({project}: {project: any}) {
    const imagePath = "/images/projects/" + project.image;

    return (
        <div className="container project-card">
            <div className="row">
                <div className="col project-image">
                    <a href={project.link}>
                        <Image height={150} width={200} src={imagePath} alt={project.alt} />
                    </a>
                </div>
                <div className="col">
                    <h4>{project.title}</h4>
                </div>
            </div>
            <div className="row project-description">{project.description}</div>
        </div>
    )
}