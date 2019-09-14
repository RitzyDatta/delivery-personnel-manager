import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup, Card, CardBody } from 'reactstrap';
import Modal from 'react-modal';

import './child.css';
import image from '../resources/icons8-user-30.png';
import {
  Navbar,
  NavbarBrand,
 } from 'reactstrap';
 
 
 let alength = 12;
 let blength = 0;
 
  export default class Child extends Component {
    
    constructor(){
      super()
     
    }
    assign = () => {
      document.getElementById("message1").style.display="none";
      switch(alength){
        case 0:
          document.getElementById("message").style.display="block";
          alert("No more person to assign");
          break;
        case 1:
          document.getElementById("a1").style.display = "none";
          document.getElementById("b12").style.display = "block";
          document.getElementById("message").style.display="block";
          alength --;
          blength ++;
          break;
        case 2:
          document.getElementById("a2").style.display = "none";
          document.getElementById("b11").style.display = "block";
          alength --;
          blength ++;
          break;
        case 3:
          document.getElementById("a3").style.display = "none";
          document.getElementById("b10").style.display = "block";
          alength --;
          blength ++;
          break;
        case 4:
          document.getElementById("a4").style.display = "none";
          document.getElementById("b9").style.display = "block";
          alength --;
          blength ++;
          break;
        case 5:
          document.getElementById("a5").style.display = "none";
          document.getElementById("b8").style.display = "block";
          alength --;
          blength ++;
          break;
        case 6:
          document.getElementById("a6").style.display = "none";
          document.getElementById("b7").style.display = "block";
          alength --;
          blength ++;
          break;
        case 7:
          document.getElementById("a7").style.display = "none";
          document.getElementById("b6").style.display = "block";
          alength --;
          blength ++;
          break;
        case 8:
          document.getElementById("a8").style.display = "none";
          document.getElementById("b5").style.display = "block";
          alength --;
          blength ++;
          break;
        case 9:
          document.getElementById("a9").style.display = "none";
          document.getElementById("b4").style.display = "block";
          alength --;
          blength ++;
          break;
        case 10:
          document.getElementById("a10").style.display = "none";
          document.getElementById("b3").style.display = "block";
          alength --;
          blength ++;
          break;
        case 11:
          document.getElementById("a11").style.display = "none";
          document.getElementById("b2").style.display = "block";
          alength --;
          blength ++;
          break;
        case 12:
          document.getElementById("a12").style.display = "none";
          document.getElementById("b1").style.display = "block";
          alength --;
          blength ++;
          break;
        default:

        break;

      }
    }

    revoke = () => {
      document.getElementById("message").style.display="none";
      switch(blength){
       
        case 0:
            document.getElementById("message1").style.display="block";
            alert("No more person to revoke");
            break;
        case 1:
          document.getElementById("b1").style.display = "none";
          document.getElementById("a12").style.display = "block";
          document.getElementById("message1").style.display="block";
          blength --;
          alength++;
          break;
        case 2:
          document.getElementById("b2").style.display = "none";
          document.getElementById("a11").style.display = "block";
          blength --;
          alength++;
          break;
        case 3:
          document.getElementById("b3").style.display = "none";
          document.getElementById("a10").style.display = "block";
          blength --;
          alength++;
          break;
        case 4:
          document.getElementById("b4").style.display = "none";
          document.getElementById("a9").style.display = "block";
          blength --;
          alength++;
          break;
        case 5:
          document.getElementById("b5").style.display = "none";
          document.getElementById("a8").style.display = "block";
          blength --;
          alength++;
          break;
        case 6:
          document.getElementById("b6").style.display = "none";
          document.getElementById("a7").style.display = "block";
          blength --;
          alength++;
          break;
        case 7:
          document.getElementById("b7").style.display = "none";
          document.getElementById("a6").style.display = "block";
          blength --;
          alength++;
          break;
        case 8:
          document.getElementById("b8").style.display = "none";
          document.getElementById("a5").style.display = "block";
          blength --;
          alength++;
          break;
        case 9:
          document.getElementById("b9").style.display = "none";
          document.getElementById("a4").style.display = "block";
          blength --;
          alength++;
          break;
        case 10:
          document.getElementById("b10").style.display = "none";
          document.getElementById("a3").style.display = "block";
          blength --;
          alength++;
          break;
        case 11:
          document.getElementById("b11").style.display = "none";
          document.getElementById("a2").style.display = "block";
          blength --;
          alength++;
          break;
        case 12:
          document.getElementById("b12").style.display = "none";
          document.getElementById("a1").style.display = "block";
          blength --;
          alength++;
          break;
        default:
          break;
      }
    }

    render() {
     
      
      return (
        
        <div>
        <div className="class1">
          <Navbar color="info" expand="md">
            <NavbarBrand href="/" className='navBrand'>Manage Delivery Personnel</NavbarBrand>
          </Navbar>
        </div>
        
        <Container className="class2">
        <Card>
        <CardBody>
          <Row>
            <Col xs="6" sm="4">
            <Card>
            <CardBody>
            <h5 class="message" id="message"> EMPTY </h5>
              <Row>
                <Col id="a1"> <img src={ image }/> </Col>
                <Col id="a2"> <img src={ image }/> </Col>
                <Col id="a3"> <img src={ image }/> </Col>
                <Col id="a4"> <img src={ image }/> </Col>
              </Row >
              <br/> <br/>
              <Row>
                <Col id="a5"> <img src={ image }/> </Col>
                <Col id="a6"> <img src={ image }/> </Col>
                <Col id="a7"> <img src={ image }/> </Col>
                <Col id="a8"> <img src={ image }/> </Col>
              </Row >
              <br/> <br/>
              <Row>
                <Col id="a9"> <img src={ image }/> </Col>
                <Col id="a10"> <img src={ image }/> </Col>
                <Col id="a11"> <img src={ image }/> </Col>
                <Col id="a12"> <img src={ image }/> </Col>
              </Row >
              </CardBody>
              </Card>
            </Col>
            <Col xs="6" sm="4" className="button">
                <Button color="info" onClick={this.assign}>ASSIGN</Button>
                <br/> <br/>
                <Button color="info" onClick={this.revoke}>REVOKE</Button>
            </Col>
            <Col xs="6" sm="4">
              <Card>
              <CardBody>
              <h5 class="message1" id="message1"> EMPTY </h5>
              <Row>
                <Col id="b1"> <img src={ image }/> </Col>
                <Col id="b2"> <img src={ image }/> </Col>
                <Col id="b3"> <img src={ image }/> </Col>
                <Col id="b4"> <img src={ image }/> </Col>
              </Row >
              <br/> <br/>
              <Row>
                <Col id="b5"> <img src={ image }/> </Col>
                <Col id="b6"> <img src={ image }/> </Col>
                <Col id="b7"> <img src={ image }/> </Col>
                <Col id="b8"> <img src={ image }/> </Col>
              </Row >
              <br/> <br/>
              <Row>
                <Col id="b9"> <img src={ image }/> </Col>
                <Col id="b10"> <img src={ image }/> </Col>
                <Col id="b11"> <img src={ image }/> </Col>
                <Col id="b12"> <img src={ image }/> </Col>
              </Row >
              
              </CardBody>
              </Card>
            </Col>
          </Row>
          </CardBody>
        </Card>
        </Container>
       
        </div>
      );
    }
  }