import React, { Component } from "react";
import { connect } from "react-redux";
import "./DonationForm.scss";
import {
  setAnimals,
  loadingComplete,
  hasErrored,
  setDonations,
  addDonation
} from "../../actions/index";

class DonationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      donationAmount: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewDonation = event => {
    event.preventDefault();
    this.resetInputs();
    const user = {
      id: Date.now(),
      name: this.state.name,
      donation: this.state.donationAmount
    };
    return fetch("http://localhost:3001/api/v1/donations/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          return error => this.props.hasErrored(error.message);
        } else {
          return response.json();
        }
      })
      .then(donation => this.props.addDonation(donation))
      .then(() => this.props.loadingComplete())
      .catch(error => this.props.hasErrored(error.message));
  };

  resetInputs = () => {
    this.setState({ name: "", donationAmount: 0 });
  };

  render() {
    return (
      <section className='donation-form-section'>
        <h2 className='donation-form-header'>Add a Donation:</h2>
        <form className="donation-form">
          Your Name:<input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={event => this.handleChange(event)}
            name="name"
          />
          Donation Amount:<input
            type="number"
            value={this.state.donationAmount}
            placeholder="Donation Amount"
            onChange={event => this.handleChange(event)}
            name="donationAmount"
          />
          <button onClick={event => this.addNewDonation(event)}>Donate!</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  setAnimals: animals => dispatch(setAnimals(animals)),
  loadingComplete: () => dispatch(loadingComplete()),
  hasErrored: message => dispatch(hasErrored(message)),
  setDonations: donations => dispatch(setDonations(donations)),
  addDonation: donation => dispatch(addDonation(donation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationForm);
