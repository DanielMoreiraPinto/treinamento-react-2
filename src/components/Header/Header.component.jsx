import * as React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand> Trouvez-les: Nouriturre </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to='/'> Principal </Nav.Link>
          <Nav.Link as={Link} to='/'> Sobre nós </Nav.Link>
        </Nav>
    </Navbar>
  );
}