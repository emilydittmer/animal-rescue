import React, { Component } from "react";
import "./DonationForm.scss";

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      donationAmount: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addDonation(event) {
    event.preventDefault();
    const user = {
      id: Date.now(),
      name: this.state.name,
      donation: this.state.donationAmount
    };
    this.props.addNewDonation(user)
    this.resetInputs();
  }


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
          <button onClick={event => this.addDonation(event)}>Donate!</button>
        </form>
      </section>
    );
  }
}

export default DonationForm
