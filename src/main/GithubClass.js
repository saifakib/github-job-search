import axios from '../utils/axios'
//import axios from 'axios'


export default class GithubJobs {
  constructor(description) {
    this._description = description;
    this._location = '';
    this._page = 1
  }

  async getJobs() {
    try {
      const data = await axios.get(this._getURL())
      return data

    } catch (e) {
      throw new Error(e)
    }
  }

  search(title, location) {
    this._description = title;
    this._location = location
    return this.getJobs()
  }

  _getURL() {
    let url = '?';

    if (this._description) url += `descriptions=${this._description}`;
    if (this._location) url += `&location=${this._location}`;
    if (this._page) url += `&page +=${this._page}`;

    return url;
  }
}