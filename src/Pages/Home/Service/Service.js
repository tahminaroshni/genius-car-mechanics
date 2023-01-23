import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { id, name, price, time, image } = service;

  return (
    <div className='service pb-3'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <p>Time: {time}</p>
      <Link to={`/booking/${id}`}>
        <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;

// use unsplash, freepik, pexels for free images
// use photopea for image resizing
// use tiny png for optimizing images
// use imgbb for image hosting