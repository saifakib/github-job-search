import Job from './job'

const Jobs = ({ jobs }) => {
    return (
        <div className="row my-4">
        {jobs.map(job => <Job key={job.title} job={job}/>)}
      </div>
    )
}

export default Jobs;