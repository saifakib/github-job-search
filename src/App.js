import { useState, useEffect } from 'react'
import Header from './components/header'
import Jobs from './components/jobs'
import GithubJobs from './main/GithubClass'



const githubJobs = new GithubJobs("node.js")


function App() {

  const [jobs, setJobs] = useState([])


  useEffect(() => {
    setJobs(githubJobs.getJobs());
  })

  // useEffect(() => {
  //   fetchJobs()
  // })

  // const fetchJobs = async () => {
  //   let result = await axios.get('https://jobs.github.com/positions.json')
  //   setJobs(result)
  // }

  let searchTerm = (title, location) => {
    githubJobs.search(title, location)
        .then(data => {
            setJobs(data)
        })
        .catch(err => {
            console.log(err)
            alert('Something Went Wrong Term')
        })
}

  return (
    <div className="container my-4">
      <Header search={searchTerm}/>
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
