import React, { PureComponent } from 'react';
import './LocationSearch.css';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Cities from '../WeatherForecast/Cities';

class LocationSearch extends PureComponent {

  state = {
    slug: (typeof this.props.match.params.city === 'string' ) ? this.props.match.params.city : null,
    refreshResults: false
  }

  componentDidMount = () => {
    if (typeof this.props.match.params.city === 'string') {
      this.getSearchResults(this.props.match.params.city).then(response => {
        this.refreshResults(response)
      });
    } 
  }

  componentWillReceiveProps = (newProps) => {
      this.getSearchResults(newProps.match.params.city).then(response => {
        this.refreshResults(response)
      });
  }

  refreshResults = (results) => {
    this.setState({data: results.data.length > 0 ? results.data : [], refreshResults: true});
  }

  getSearchResults = (slug) => {
    return axios.get("http://localhost:8000/weather.php?command=search&keyword="+slug);
  }

  searchInputHandler = (event) => {
    this.setState({slug: event.target.value});
  }
  
  render() {
  let cities = null; 
  if (this.state.data && this.state.data.length > 0 ) {      
    cities = this.state.data.map( resultObj => {
      return {
        "woeid": resultObj.woeid,
        "name" : resultObj.title
      }
    })
  }

  return (
    <div className="search-box">
      <form className="search-form">
        <input ref="srch" type="search" id="search" placeholder="Search..."  onChange={this.searchInputHandler}  />
        <Link to={"/search/"+this.state.slug}><button >Search</button></Link>
      </form>
      { (this.state.data && this.state.data.length === 0) ? <h2>No results</h2> : 
        <Cities cities={cities} />
      }
      </div>
  );
  }
}

export default withRouter(LocationSearch);