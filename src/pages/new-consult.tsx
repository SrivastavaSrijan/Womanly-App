import React from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import CustomImage from '../common/components/CustomImage';
import FormControl from '../common/components/FormControl';
function NewConsult() {
  return (
    <Container fluid className="pt-5 mx-0 bg-muted">
      <Row gap={5} className="w-100 justify-content-evenly">
        <Col lg={5}>
          <Form>
            <Stack>
              <h1>Consult with a Doctor</h1>
              <p>Tell us your symptom or health problem</p>

              <FormControl
                label="Enter your symptoms"
                modifier="symptoms"
                placeholder="fever, headache"
                as="textarea"
              />
              <Button>Continue</Button>
            </Stack>
          </Form>
        </Col>
        <Col lg={3}>
          <CustomImage classNames="img-fluid" path="/images/consult.webp" />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default NewConsult;
