import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Popover from '../../components/Popover';

// import { Container } from './styles';

const SummaryForm: React.FC = () => {
  const [termChecked, setTermChecked] = useState<boolean>(false);
  const Checkboxlabel = () => (
    <Popover content='No ice cream will actually be delivered'>
      <span>
        I agreen to <span style={ { color: 'blue' } }>Terms and Conditions</span>
      </span>
    </Popover>

  );

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions' >
        <Form.Check
          type='checkbox'
          checked={ termChecked }
          onChange={ (e) => {
            setTermChecked(e.target.checked);
          } }
          label={ <Checkboxlabel /> }
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={ !termChecked }  >
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;