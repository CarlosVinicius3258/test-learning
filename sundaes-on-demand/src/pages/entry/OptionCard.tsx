import React from 'react';
import { Col } from 'react-bootstrap';


interface ScoopOptionsProps {
  key: any;
  name: string;
  imagePath: string;
  optionType: string;
}


function OptionCol({ name, imagePath, optionType, key }: ScoopOptionsProps) {
  optionType = optionType.substring(0, optionType.length - 1);
  return (
    <Col key={ key } xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } style={ { textAlign: 'center' } }>
      <img
        style={ { width: '75%' } }
        src={ `http://http://localhost:3030/${imagePath}` }
        alt={ `${name} ${optionType}` } />
    </Col>
  );
}

export default OptionCol;