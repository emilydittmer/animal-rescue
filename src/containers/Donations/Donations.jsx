import React, { Component } from 'react';
import './Donations.scss';
import { connect } from 'react-redux';
import DonationCard from '../../components/DonationCard/DonationCard'

class Donations extends Component {
  render() {
    const { donations } = this.props;
    const eachDonation = donations.map(donation => {
      return (
        <DonationCard 
          key={donation.id}
          name={donation.name}
          donation={donation.donation}
        />
      )
    })
    return(
      <section className='donations'>
        {eachDonation}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  donations: state.donations
})
 
export default connect(mapStateToProps)(Donations);