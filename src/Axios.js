import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  
  componentDidMount() {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post[ 'Access-Control-Allow-Origin'] = '*';
    axios.get(`http://127.0.0.1:8000/DHT/`)
      .then(res => {
        const dht = console.table(res.data);
        this.setState({ dht });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(dht => <li>{dht.H}</li>)}
      </ul>
    )
  }
}