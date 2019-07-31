import React, { Component } from 'react';
import './AnimalCard.scss';

class AnimalCard extends Component {
  render(){
    const { name, species, description, img} = this.props
    return(
      <article className='card'>
        <h2>{name}</h2>
        <img
          className='card-img' 
          src={img}
          alt={name}
        />
        <h3>{species}</h3>
        <p>{description}</p>
      </article>
    )
  }
}

export default AnimalCard;