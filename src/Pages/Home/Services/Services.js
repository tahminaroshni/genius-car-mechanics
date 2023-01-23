import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <div className='container' id='services'>
      <h2 className='text-primary my-5'>Our Services</h2>
      <div className='service-container'>
        {
          services.map(service => <Service key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;


// "https://ibb.co/RCmgkHg"
// "https: //ibb.co/7g3H7rY"
// "https: //ibb.co/4FcrTJb"
// " https: //ibb.co/gJwb2Wd"
// "https: //ibb.co/H2sKjP0"
// <a href="https://ibb.co/0VCJxvK"><img src="https://i.ibb.co/VpgBs5x/service1.jpg" alt="service1" border="0"></a>
// <a href="https://ibb.co/1qW4TCM"><img src="https://i.ibb.co/gTKcJ0d/service2.jpg" alt="service2" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/bQcwTpR/service3.jpg" alt="service3" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/WB9N1gv/service4.jpg" alt="service4" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/dpHDtj3/service5.jpg" alt="service5" border="0"></a>