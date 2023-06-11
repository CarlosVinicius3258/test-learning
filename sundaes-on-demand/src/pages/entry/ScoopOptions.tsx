import React from 'react';
import { Col } from 'react-bootstrap';


interface ScoopOptionsProps {
  name: string;
  imagePath: string;
}


function ScoopOptions({ name, imagePath }: ScoopOptionsProps) {
  return (
    <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={ { textAlign: 'center' } }>
      <img
        style={ { width: '75%' } }
        src={ `http://http://localhost:3030/${imagePath}` }
        alt={ `${name} scoop` } />
    </Col>
  );
}

export default ScoopOptions;