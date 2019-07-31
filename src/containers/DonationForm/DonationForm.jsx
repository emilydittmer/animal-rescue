import React, { Component } from 'react';
import { addDonation } from '../../actions';
import { connect } from 'react-redux';
import './DonationForm.scss';

class DonationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      donationAmount: 0
    }
  }

  render() {
    return(
      <form>
        <input 
          type='text'
          value={this.state.name}
          placeholder='Name'
        />
        <input 
          type='number'
          value={this.state.donationAmount}
          placeholder='Donation Amount'
        />
        <button>Add Donation</button>
      </form>
    )
  }
}

export default DonationForm;