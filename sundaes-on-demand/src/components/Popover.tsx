import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopoverB from 'react-bootstrap/Popover';
// import { Container } from './styles';

//make the Popover Interface
interface PopoverProps {
  id?: string;
  content: string;
  children: React.ReactElement;

}

//what shoiuld be the typo of Popover?
//response: 
const Popover: React.FC<PopoverProps> = ({ children, content }: PopoverProps) => {


  const popover = (
    <PopoverB id="popover-basic">
      <PopoverB.Body>
        { content }
      </PopoverB.Body>
    </PopoverB>
  );


  return (<OverlayTrigger placement="right" overlay={ popover }>
    { children }
  </OverlayTrigger>);

};

export default Popover;