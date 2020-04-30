import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.stylesheet.css';

export default function Footer() {
  return(
    <Container>
      <Row>
        <Col>
          <p> Item de rodapé </p>
        </Col>
        <Col>
          <p> Outro item de rodapé </p>
        </Col>
        <Col>
          <p> Mais um item de rodapé </p>
        </Col>
      </Row>
      <Row>
        <hr/>
      </Row>
      <Row>
        <Col>
          <h5> Redes sociais </h5>
          <p> Twitter </p>
          <p> Instagram </p>
        </Col>
      </Row>
    </Container>
  );
}