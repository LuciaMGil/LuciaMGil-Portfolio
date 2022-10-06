import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import resume from '../assets/resume.pdf';


function Resume() {
    return (
      <>
      <Container  className="justify-content-center">

        <Row className="justify-content-center" style={{ padding: '0px'}} >
            <Col   style={{ padding: '0px'}} xs={12} md={8}>

                <Card style={{ margin: '20px', width: '50rem', border: 'none', border: 'none', borderRadius: '5px'}}>
                    <Card.Body>
                    <h3 style={{  margin: '0px',  paddingTop: '20px', }}>Lucia M Gil</h3>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h5 style={{ backgroundColor: '#e2f0f0', margin: '0px',  paddingTop: '20px', }}>Front-End</h5>
                    
                    <div>
                       <ul style={{ listStyle: 'none', backgroundColor: '#e2f0f0', margin: '0px', padding: '0px', paddingBottom: '20px' }}>
                        <li >HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul> 
                    </div>
                    
                   
                    <br></br>
                    <h5 style={{ backgroundColor: '#e2f0f1', margin: '0px',  paddingTop: '20px'}}>Back-End</h5>
               
                    <ul style={{ listStyle: 'none', backgroundColor: '#e2f0f0', margin: '0px', padding: '0px', paddingBottom: '20px' }}>
                        <li >Node</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                    </ul>
                    <br></br>
                    <h5 style={{ backgroundColor: '#e2f0f0', margin: '0px', paddingTop: '20px', paddingBottom: '20px' }}>Certifications</h5>
                   
                    <ul style={{ listStyle: 'none', backgroundColor: '#e2f0f0', margin: '0px', padding: '0px', paddingBottom: '20px' }}>
                        <li >Certified Scrum Product Owner (CSPO), Scrum Alliance</li>
                        <li>Certified ScrumMaster (CSM), Scrum Alliance</li>
                    </ul>
                   
                  
                    <button  style={{ width: '50%', marginBottom: '50px', marginTop: '50px',color: 'black'}}><a href={resume} download='LuciaMGilResume.pdf'>Download my resume</a></button>
                    </Card.Body>
                
                </Card>
        
            </Col>
    
        </Row>

    </Container>
      
      
       
      </>
    );
  }
  
  export default Resume;