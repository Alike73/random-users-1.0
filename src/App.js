
import { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';

class App extends Component {

  state = {
    person: null
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0]})
    console.log(data.results[0])
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Random users data</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Random users" />
        </Helmet>
        {!this.state.person ? <i className="fa fa-spinner fa-spin"></i> :
        <div>
          <div className="imageBox">
            <img src={this.state.person.picture.large} alt="UserImage" width="320px" />
          </div>
          <p><span>Name:</span> {this.state.person.name.first} {this.state.person.name.last}</p>
          <p><span>City & Country:</span> {this.state.person.location.city}, {this.state.person.location.country}</p>
          <p><span>Address:</span> {this.state.person.location.street.number} {this.state.person.location.street.name}</p>
          <p><span>Email:</span> {this.state.person.email}</p>
          <p><span>Phone:</span> {this.state.person.cell}</p>
        </div>
        }
        <button onClick={() => {document.location.reload(true)}}>Next user</button>
      </div>
    );
  }
}

export default App;
