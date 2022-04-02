import React from 'react';
import { Container } from 'react-bootstrap';

interface BoilerplateComponent {
  prop1?: string;
  prop2?: number;
}

const BoilerplateComponent: React.FC<BoilerplateComponent> = ({
  prop1,
  prop2,
}) => {
  return <Container fluid></Container>;
};

export default BoilerplateComponent;
