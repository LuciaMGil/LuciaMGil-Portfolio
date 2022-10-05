import React from 'react'
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Lucia from '../img/lucia.png';


function AboutMe() {
    return (
      <>
        <Card style={{ border: 'none'}}>
          <Figure style={{ margin: '60px'}}>
            <Figure.Image
              width={250}
              height={250}
              src={Lucia}
            />
          </Figure>
          <Card.Title>About Me</Card.Title>
            <Card.Body>
              <Card.Text>
              My name is Lucia Gil. I recently completed the GA Tech Fullstack Development program.
              </Card.Text>
            </Card.Body>
        </Card>
      </>
    );
  }
  
  export default AboutMe;