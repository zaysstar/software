import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p className="card-category">{props.category}</p>
      <p>{props.description}</p>
      <a href={props.learnMoreLink} target="_blank" rel="noopener noreferrer" className="resource-link">
        Learn More
      </a>
    </div>
  );
};

export default Card;