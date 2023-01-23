import React from 'react';
import { Card, Col } from 'react-bootstrap';



const Expert = ({ expert }) => {
  const { name, image } = expert;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;