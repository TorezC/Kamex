import './header.css';
import kamex from '../../assets/kamex.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const expand= 'lg';
  const navStyles = ({ isActive }) => {
    return { color: isActive ? "#007bff" : "#111111" };
  };

  return (
    <>
        <Navbar   expand={expand} className="nav--kamex" >
          <Container fluid>
            <Navbar.Brand href="#">
              <NavLink style={navStyles} exact={false} to='/' className='nav--link'>
                <img src={kamex} alt='logo' width={150} height={100} className='img-fluid' />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className='offc' closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={kamex} alt='logo' width={150} height={100} className='img-fluid' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='offc'>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link >
                    <NavLink style={navStyles} exact={true} to='/' className='nav--link'>Home</NavLink> 
                  </Nav.Link>
                  <Nav.Link  >
                    <NavLink style={navStyles} exact={false} to='/about-us' className='nav--link'>About Us</NavLink> 
                  </Nav.Link>
                  <Nav.Link >
                    <NavLink style={navStyles} exact={false} to='/team' className='nav--link'>Team</NavLink> 
                  </Nav.Link>
                  <Nav.Link >
                    <NavLink style={navStyles} exact={false} to='/contact' className='nav--link'>Contact</NavLink> 
                  </Nav.Link>
                  {/* <Nav.Link >
                    <NavLink style={navStyles} exact={false} to='/our-donors' className='nav--link'>Our Donors</NavLink> 
                  </Nav.Link> */}
                  {/* <Nav.Link >
                    <NavLink style={navStyles} exact={false} to='/activities' className='nav--link'>Activities</NavLink> 
                  </Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header