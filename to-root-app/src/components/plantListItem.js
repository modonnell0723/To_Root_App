import React from 'react';
import './PlantListItem.css';

function PlantListItem({ plant }) {
  return (
    <div className='plant-list-item'>
        <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>{plant.description}</p>
      <p>Sunlight: {plant.sunlight}</p>
      <p>Water: {plant.watering}</p>
    </div>
  );
}

export default PlantListItem;