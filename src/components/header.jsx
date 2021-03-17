import { useState} from 'react';
const Header = (props) => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')

    let handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    let handleLocationChange = (event) => {
        setLocation(event.target.value)
    }

    let handleSubmit = () => {
        props.search(title, location)
    }

    return (
        <div classNameNameNameName="my-4">
            <h1 classNameNameNameName="mb-4">Github Jobs</h1>
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Job Title" value={title} onChange={handleTitleChange}/>
                </div>
                <div className="col-auto">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Location"  value={location} onChange={handleLocationChange}/>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" for="autoSizingCheck">
                            Full Time
                        </label>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Header;
