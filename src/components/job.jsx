

const Job = ({ job }) => {
    return (
        <div className="col-md-3 border border-success border-4 m-3 p-3">
            <a href="#"><h4>{job.title}</h4></a>
            <p>Type: {job.type}</p>
            <p>Compant: {job.company}</p>
            <address>
                <p>Location: {job.location}</p>
            </address>
            <p>Published: {job.published}</p>
        </div>
    )
}

export default Job;