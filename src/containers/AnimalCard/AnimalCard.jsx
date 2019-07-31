import React, { Component } from 'react';

class AnimalCard extends Component {
  render(){
    const { name, species, description, img} = this.props
    return(
      <article>
        <h2>{name}</h2>
        <img 
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