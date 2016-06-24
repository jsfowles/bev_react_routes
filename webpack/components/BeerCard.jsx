import React from 'react';
import { Link } from 'react-router'

class BeerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beer: null, editView: false }
  }

  componentWillMount() {
    $.ajax({
      url: `/api/beers/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( beer => {
      this.setState({ beer });
    }).fail( data => {
      console.log(data);
    });
  }

  render() {
    if(this.state.editView) {
      return(<h1>Edit View</h1>);
    } else {
      if(this.state.beer) {
        return(
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{this.state.beer.name}</span>

                <div>
                  <label>Style:</label>
                  <p>{this.state.beer.style}</p>

                  <label>Description:</label>
                  <p>{this.state.beer.description}</p>

                  <label>Alcohol Content:</label>
                  <p>{this.state.beer.alcohol_content}</p>
                </div>

              </div>
              <div className="card-action">
                <Link to='/'>All Beers</Link>
                <button className='btn' onClick={this.toggleEdit}>Edit</button>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className='row'>
            <h3 className='center'>Beer Not Loaded...</h3>
          </div>
        )
      }
    }
  }
}

export default BeerCard;
