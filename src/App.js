import React from 'react';
import Utama from './Component/Utama';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">BOOKSTORE </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Beranda</Nav.Link>
                <Nav.Link href="/Karya">Karya</Nav.Link>
                <Nav.Link href="/Kontak">Kontak</Nav.Link>
                <Nav.Link href="/TentangSaya">TentangSaya</Nav.Link>
                <Nav.Link href="/Gallery">Gallery</Nav.Link>
              </Nav>
            </Container>
        </Navbar> 
        <br></br>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
