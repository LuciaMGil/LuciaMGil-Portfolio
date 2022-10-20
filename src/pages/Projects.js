
import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import dailyplanner from '../img/dailyplanner.png';
import passwordgenerator from '../img/passwordgenerator.png';
import timedquiz from '../img/timedquiz.png';
import weather from '../img/weather.png';
import notetaker from '../img/notetaker.png';
import realestate from '../img/realestate.png';
import positivethoughts from '../img/positiveThoughts.png';

function Projects() {
  return (

    <Row className="justify-content-center" style={{ marginTop: '80px'}}>

    <Col  xs={12} md={10}>
    <br></br>
    <CardGroup>
    <Card style={{ margin: '20px', width: '68rem', border: 'none' }}>
        <Card.Img  src={positivethoughts} />
        <Card.Body>
          <Card.Title>Positive Thoughts App</Card.Title>
          <Card.Text>
         An application that displays positive thoughts and allows users to add profiles, save thoughts and add comments.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
            <button>
               <a href="https://github.com/m-j-hodges/positive-thoughts">
          <small >View on Github</small>
          </a>   
            </button>
            <button style={{ margin: '20px',border: 'none', paddingRight: '55px', paddingLeft: '40px'}}>
               <a href="https://positive-thoughts-9-28-2022.herokuapp.com/">
          <small >View Deployed App</small>
          </a>   
            </button>
         
        </Card.Footer>
      </Card>


    <Card style={{ margin: '20px', width: '68rem', border: 'none' }}>
        <Card.Img  src={realestate} />
        <Card.Body>
          <Card.Title>Real Estate Investment App</Card.Title>
          <Card.Text>
          This application is used to research a certain market in the US for investment potential. The purpose of the app is to evaluate which properties are a great investment based on ther initial cost, return on investment, and occupancy rates for the state or city.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
            <button>
               <a href="https://github.com/m-j-hodges/Real-Estate-Top-5">
          <small >View on Github</small>
          </a>   
            </button>
            <button style={{ margin: '20px',border: 'none', paddingRight: '55px', paddingLeft: '40px'}}>
               <a href="https://real-estate-top-5.herokuapp.com/">
          <small >View Deployed App</small>
          </a>   
            </button>
         
        </Card.Footer>
      </Card>

      <Card style={{ margin: '20px', width: '68rem', border: 'none' }}>
        <Card.Img  src={notetaker} />
        <Card.Body>
          <Card.Title>Notes App</Card.Title>
          <Card.Text>
          This application allows users to create and save notes.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
            <button>
               <a href="https://github.com/LuciaMGil/Note-Taker">
          <small >View on Github</small>
          </a>   
            </button>
            <button style={{ margin: '20px',border: 'none', paddingRight: '55px', paddingLeft: '40px'}}>
               <a href="https://note-taker-luciamg.herokuapp.com/">
          <small >View Deployed App</small>
          </a>   
            </button>
         
        </Card.Footer>
      </Card>
     
      <Card   style={{ margin: '20px', width: '68rem', border: 'none', border: 'none', borderRadius: '5px'}}>
        <Card.Img src={dailyplanner} />
        <Card.Body>
          <Card.Title >Daily Planner</Card.Title>
          <Card.Text>
            A daily planner that allows users to plan their day by adding tasks according to current time.
          </Card.Text>
        
        </Card.Body>
        <Card.Footer  style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
        <button>
            <a href="https://github.com/LuciaMGil/daily-planner">
          <small >View on Github</small>
          </a>
        </button>
        
        </Card.Footer>
       
      </Card>

     
    </CardGroup>
    <br></br>

    <CardGroup >
    <Card style={{ margin: '20px', width: '68rem', border: 'none' }}>
        <Card.Img  src={timedquiz} />
        <Card.Body>
          <Card.Title >Timed Quiz</Card.Title>
          <Card.Text>
            A timed javascript quiz that tracks the users score and subracts time when user selects incorrect answer.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
            <button>
                <a href="https://github.com/LuciaMGil/timed-quiz">
          <small >View on Github</small>
          </a>  
            </button>
        
        </Card.Footer>
      </Card>
      
      <Card style={{ margin: '20px', width: '68rem', border: 'none' }}>
        <Card.Img  src={weather} />
        <Card.Body>
          <Card.Title>Weather App</Card.Title>
          <Card.Text>
          A Weather Dashboard application which shows users weather data based on the cities they input.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
            <button>
              <a href="https://github.com/LuciaMGil/weather-app">
          <small >View on Github</small>
          </a>   
            </button>
          
        </Card.Footer>
      </Card>

      <Card style={{ margin: '20px', width: '68rem', border: 'none' }}>
        <Card.Img  src={passwordgenerator} />
        <Card.Body>
          <Card.Title >Password Generator</Card.Title>
          <Card.Text>
            An app that generates a password based on chosen length and if user wants to use uppercase, numbers, or special characters.
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'none', background: 'white', padding: '50px'}}>
            <button>
              <a href="https://github.com/LuciaMGil/password-generator">
          <small>View on Github</small>
          </a>  
            </button>
        
        </Card.Footer>
      </Card>


    </CardGroup>
   
    <br></br>
    </Col>

    </Row>
   
    
  );
}

export default Projects;