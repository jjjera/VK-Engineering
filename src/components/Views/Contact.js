import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
import Layout from '../../pages/Layout';
import axios from 'axios';
import Validator from 'validator';

const Contact = () => {
  const initialFormState = {name: '', email: '', number: '', message: '', error : {}};
  const [data, setData] = useState(initialFormState);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setData({...data, [name]:value});
  }

  const validateData = (data) => {
    const errors = {};

    if(data.name.length <= 0){
      errors.name = "Name field cannot be empty"
    }

    if(data.message.length <= 0){
      errors.message = "Message field cannot be empty"
    }

    if(data.email.toString().trim().length <= 0){
      errors.email = "Email field cannot be empty";
    }else if(data.email.toString().trim().length > 0 &&  !Validator.isEmail(data.email.toString().trim())){
      errors.email = "Invalid Email";
    }
    
    if(data.number.toString().trim().length === ''){
      errors.number = "Mobile number cannot be empty";
    }else if(data.number.toString().trim().length !== 10){
      errors.number ='Mobile number should be 10 digits';
    }

    return errors;
  }

    return(
        <Layout className="section landing-section" style={{backgroundColor:'black'}}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Keep in touch?</h2>
              <Form className="contact-form" 
                    onSubmit={(event) => {
                    event.preventDefault();
                    let errors = validateData(data);
                    setData({...data, error:errors});
                    if(!data.name || !data.number || !data.email || !data.message){
                      return;
                    }else if(data.number.length < 10 || !Validator.isEmail(data.email.toString().trim())){
                      return;
                    }
                    axios.post('http://localhost:8001/api/mail/sendmail',{data})
                      .then((response) => {
                        alert('Data updated successfully');
                        console.log('response is',response);
                      })
                      .catch((error) => {
                        console.log('error block called',error);
                      })
                    setData(initialFormState);
                  }}>
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="name" placeholder="Name" type="text" value={data.name} onChange={handleChange}/>
                    </InputGroup>
                    {data.error.name && <span style={{color:'red'}}>{data.error.name}</span>}
                  </Col>

                  <Col md="6">
                    <label>Phone</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="number" placeholder="+91" type="number" value={data.number} onChange={handleChange}/>
                    </InputGroup>
                    {data.error.number && <span style={{color:'red'}}>{data.error.number}</span>}
                  </Col>

                  <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="email" placeholder="Email" type="text" value={data.email} onChange={handleChange}/>
                    </InputGroup>
                    {data.error.email && <span style={{color:'red'}}>{data.error.email}</span>}
                  </Col>
                </Row>
                <label>Message</label>
                <Input
                  name="message"
                  placeholder="Tell us your thoughts..."
                  type="textarea"
                  rows="4"
                  value={data.message}
                  onChange={handleChange}
                />
                {data.error.message && <span style={{color:'red'}}>{data.error.message}</span>}
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="danger" size="lg" type="submit">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>   
    )
}

export default Contact;