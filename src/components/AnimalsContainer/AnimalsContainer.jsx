import React, { Component } from 'react';
import './AnimalsContainer.scss';
import { connect } from 'react-redux';
import AnimalCard from '../../containers/AnimalCard/AnimalCard'

class AnimalContainer extends Component {
  render(){
    const { animals } = this.props
    const allAnimals = animals.map(animal => {
      return (
        <AnimalCard 
          id={animal.id}
          name={animal.name}
          species={animal.species}
          description={animal.description}
          img={animal.img}
        />
      )
    })
    return(
      <section>
        <h2>Animals</h2>
        {allAnimals}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  animals: state.animals
})

export default connect(mapStateToProps)(AnimalContainer);