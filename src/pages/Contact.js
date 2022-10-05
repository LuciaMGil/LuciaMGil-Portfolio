import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkEmail, checkPassword } from '../utils/helpers';

function ContactMeForm() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const inputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!checkEmail(email) || !name) {
      setMessage('Email or name is invalid');
    
      return;
    }
    if (!checkPassword(password)) {
      setMessage(
        'Please enter message before submitting.'
      );
      return;
    }
    setMessage(
        'Thank you! Message sent.'
      );
    // alert('Thank you! Message sent.');

    setName('');
    setPassword('');
    setEmail('');
  };

  return (

    <Container  className="justify-content-center">

        <Row className="justify-content-center" style={{ padding: '0px'}} >
        <Col  className="justify-content-center" style={{ padding: '0px'}} xs={12} md={8}>

        <Card style={{ margin: '20px', width: '50rem', border: 'none', border: 'none', borderRadius: '5px'}}>

            <div>
                <h3 style={{ margin: '40px', }}>Contact Me</h3>
                <form className="form">
                    <label style={{ marginRight: '35%'}}>Enter your name:</label>
                    <input   style={{ width: '50%', marginBottom: '20px', marginLeft: '25%'}} value={name} name="name" onChange={inputChange} type="text" placeholder="name" class="form-control" />
                    <label style={{ marginRight: '35%'}}>Enter your email:</label>
                    <input style={{ width: '50%', marginBottom: '20px', marginLeft: '25%'}} value={email}  name="email" onChange={inputChange} type="email" placeholder="Email" class="form-control" />
                    <label style={{ marginRight: '34%'}}>Leave a message:</label>
                    <textarea style={{ width: '50%', marginBottom: '20px', marginLeft: '25%'}} value={password} name="password" onChange={inputChange} type="textarea" placeholder="Please enter a message." rows="4" class="form-control" />
                    <br></br>
                    <button  style={{ width: '50%', marginBottom: '50px', color: 'black'}} type="button" onClick={submit}>Submit</button></form>
                {message && (<div> <p className="error-text">{message}</p> </div>  )}
            </div>
            </Card>
            
        </Col>
            
        </Row>
    
    </Container>
  );
}

export default ContactMeForm;
