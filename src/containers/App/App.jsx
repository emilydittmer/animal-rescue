import React, { Component } from 'react';
import './App.scss';
import { setAnimals, loadingComplete, hasErrored, setDonations } from '../../actions/index';
import { connect } from 'react-redux';
import AnimalsContainer from '../AnimalsContainer/AnimalsContainer';
import Donations from '../Donations/Donations'

class App extends Component {
  
  componentDidMount(){
    fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(response => {
      if(!response.ok){
        return error => this.props.hasErrored(error.message)
      } else {
        return response.json()
      }
    })
    .then(animals => this.props.setAnimals(animals))
    .then(() => this.props.loadingComplete())
    .catch(error => this.props.hasErrored(error.message))

    fetch('http://localhost:3001/api/v1/donations')
    .then(response => {
      if(!response.ok) {
        return error => this.props.hasError(error.message)
      } else {
        return response.json()
      }
    })
    .then(donations => this.props.setDonations(donations))
    .then(() => this.props.loadingComplete())
    .catch(error => this.props.hasErrored(error))
  }
  
  render() {

    const loader = (
      <h2>Page is Loading</h2>
    )
    const errorMessage = (
      <h2>{this.props.error}</h2>
    )
    return (
      <div className="App">
        <header>
          <h1>Animal Rescue</h1>
          {this.props.loading && loader}
          {this.props.error !== '' && errorMessage}
        </header>
        <AnimalsContainer />
        <Donations />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  setAnimals: animals => dispatch(setAnimals(animals)),
  loadingComplete: () => dispatch(loadingComplete()),
  hasErrored: message => dispatch(hasErrored(message)),
  setDonations: donations => dispatch(setDonations(donations))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
