
import React from 'react'
import Figure from 'react-bootstrap/Figure';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';


function Footer() {
  return (
    <Figure>
    <a href="https://github.com/LuciaMGil">
    <Figure.Image
      width={40}
      height={42}
      alt="85x90"
      src={github}
      style={{ margin: '20px'}}
    />
    </a>
    <a href="https://www.linkedin.com/in/luciagil/">
    <Figure.Image
      width={40}
      height={42}
      alt="85x90"
      src={linkedin}
      style={{ margin: '20px'}}
    />
    </a>
  
  </Figure>
  
  );
}

export default Footer;