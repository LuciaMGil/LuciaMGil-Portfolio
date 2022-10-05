import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import lucia from '../img/lucia.png';


function AboutMe() {
    return (
      <>
      <Row className="justify-content-center" style={{ marginTop: '80px'}}>
      
        <Card  style={{ border: 'none', width: '80%'}}>
          <Figure style={{ margin: '60px'}}>
            <Figure.Image
              width={250}
              height={250}
              src={lucia}
            />
          </Figure>
          <Card.Title>About Me</Card.Title>
            <Card.Body>
              <Card.Text>
              My name is Lucia Gil. Recently completed Georgia Tech's Full-Stack Development Bootcamp. 
              <br></br>
              I recently enhanced my knowledge in Agile and Scrum practice by completeing the the Certified Scrum Master (CSM) certification and the Certified Scrum Product Owner (CSPO) certification.  
              I have a background in marketing and graduated with a BBA from Georgia State University.
              </Card.Text>
            </Card.Body>
        </Card>
      </Row>
       
        
       
         
      </>
    );
  }
  
  export default AboutMe;