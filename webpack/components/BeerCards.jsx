import React from 'react';
import { Link } from 'react-router'

class BeerCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beers: [] };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/beers',
      type: 'GET',
      dataType: 'JSON'
    }).done( beers => {
      this.setState({ beers });
    }).fail( data => {
      console.log(data);
    });
  }

  deleteBeer(id) {
    $.ajax({
      url: `/api/beers/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      let beers = this.state.beers;
      let index = beers.findIndex( b => b.id === id);
      this.setState({
        beers:[
          ...beers.slice(0, index),
          ...beers.slice(index + 1, beers.length)
        ]
      })
    }).fail( data => {
      console.log(data);
    })
  }

  displayCards() {
    return this.state.beers.map( beer => {
      return(
        <div key={`beer-${beer.id}`} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{beer.name}</span>
              <p>{beer.style}</p>
            </div>
            <div className="card-action">
              <Link to={`/beers/${beer.id}`}>Show</Link>
              <button onClick={() => this.deleteBeer(beer.id)} className='btn red'>Delete Beer</button>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <div className='row'>
        {this.displayCards.bind(this)()}
      </div>
    )
  }
}

export default BeerCards;
