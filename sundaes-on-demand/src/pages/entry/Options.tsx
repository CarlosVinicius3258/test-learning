import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import OptionCol from './OptionCard';
import AlertBanner from '../../components/AlertBanner';

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
  const [error, setError] = useState<boolean>(false);

  async function getOptions() {
    try {
      const response = await axios.get(`http://localhost:3030/${optionType}`);
      setOptions(response.data);
    } catch (error) {
      setError(true);
    }

  }

  useEffect(() => {
    getOptions();
  }, [optionType]);

  if (error) return <AlertBanner />;
  const optionItems = options.map((option) => OptionCol && <OptionCol key={ option.name } name={ option.name } imagePath={ option.imagePath } optionType={ optionType } />);
  return <Row >
    { optionItems }
  </Row>;
};

export default Options;