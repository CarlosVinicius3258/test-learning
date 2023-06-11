import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';
import { Row } from 'react-bootstrap';

// import { Container } from './styles';
interface OptionsProps {
  optionType: string;
}

interface Option {
  name: string,
  imagePath: string,
}

const Options: React.FC<OptionsProps> = ({ optionType }: OptionsProps) => {
  const [options, setOptions] = useState<Option[]>([] as Option[]);

  async function getOptions() {
    const response = await axios.get(`http://localhost:3030/${optionType}`);
    setOptions(response.data);
  }

  useEffect(() => {
    getOptions();
  }, [optionType]);

  const OptionComponent = optionType === 'scoops' ? ScoopOptions : null;
  const optionItems = options.map((option) => OptionComponent && <OptionComponent key={ option.name } name={ option.name } imagePath={ option.imagePath } />);
  return <Row >
    { optionItems }
  </Row>;
};

export default Options;