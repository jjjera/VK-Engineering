import React from 'react';
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

const Contact = () => {
    return(
        <Layout className="section landing-section" style={{backgroundColor:'black'}}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Keep in touch?</h2>
              <Form className="contact-form">
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <label>Message</label>
                <Input
                  placeholder="Tell us your thoughts and feelings..."
                  type="textarea"
                  rows="4"
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="danger" size="lg">
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