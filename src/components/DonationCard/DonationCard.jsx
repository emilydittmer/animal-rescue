import React, { Component } from 'react';
import './DonationCard.scss';

class DonationCard extends Component {
  render(){
    const { name, donation } = this.props
    return(
      <article className='donation-card'>
        <h3>Name: {name}</h3>
        <h3>Donation: ${donation}</h3>
      </article>
    )
  }
}

export default DonationCard;
