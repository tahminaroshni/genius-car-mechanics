import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';


const Experts = () => {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setMechanics(data));
  }, [])

  return (
    <div className='container' id='experts'>
      <h2 className='text-primary my-5'>Our Experts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {
          mechanics.map(expert => <Expert key={expert.id} expert={expert} />)
        }
      </Row>
    </div>
  );
};

export default Experts;