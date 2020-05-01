import * as React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

export default function AboutUs() {

  return(
    <Jumbotron fluid>
      <Container>
        <h2> Sobre nós </h2>
        <p>
          Nós somos nós, afinal se não fôssemos seríamos outros, mas o advento de não sermos outros nos faz nós, não 
          no sentido pronominal, mas no sentido de grupo com o qual estes que vos escrevem se identificam.
        </p>
      </Container>
    </Jumbotron>
  );

}