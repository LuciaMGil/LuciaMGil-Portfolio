import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactMeForm() {
  return (

    <Form>
        <Container className="justify-content-center">
            <Row className="justify-content-center" style={{ padding: '0px'}} >
                <Col  className="justify-content-center" style={{ padding: '0px'}} xs={12} md={8}>
                <Card style={{ margin: '20px', width: '50rem', border: 'none', border: 'none', borderRadius: '5px'}}>
                <Card.Title style={{ margin: '60px',}}>
                    Contact Me
                </Card.Title>
                <Form.Group  controlId="formBasicName">
                <Form.Label style={{ marginRight: '44%'}} >Name</Form.Label>
                <Form.Control    style={{ width: '50%', marginBottom: '20px', marginLeft: '25%'}} type="text" placeholder="Enter Name" />
                </Form.Group>
                
                <Form.Group  controlId="formBasicEmail">
                <Form.Label style={{ marginRight: '38%'}} >Email address</Form.Label>
                <Form.Control style={{ width: '50%', marginBottom: '20px' , marginLeft: '25%'}} type="email" placeholder="Enter email" />
            </Form.Group>
            
            
            <Form.Group  controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ marginRight: '42%'}} >Message</Form.Label>
                <Form.Control style={{ width: '50%', marginBottom: '20px', marginLeft: '25%'}} as="textarea" rows={3} />
            </Form.Group>
            <Button style={{ width: '50%', marginBottom: '60px', marginLeft: '25%', backgroundColor: 'rgb(204, 206, 207)', color: 'black', border: 'none'}}  variant="primary" type="submit">
                Submit
            </Button>
                </Card>

                
                </Col>
            </Row>
        </Container>
    <div>
    <br></br>
    </div>

    </Form>
  );
}

export default ContactMeForm;