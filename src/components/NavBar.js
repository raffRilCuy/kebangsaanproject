import {Navbar, Container, Nav} from 'react-bootstrap'
import '../style/NavBar.css'

const NavBar = () => {
  return (
    <div id="top">
      <Navbar fixed='top' className="borderNavBar bg-white animate__animated animate__slideInDown">
        <Container>
          <Navbar.Brand href="/" className="fw-bold "><i>KebangsaanProject</i></Navbar.Brand>
        </Container>
        <Nav>
          <Nav.Link className="fw-bold" href="#top">Back To Top</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar