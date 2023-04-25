import "./header.css";
import kamex from "../../assets/kamex.jpeg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  const expand = "lg";
  const navStyles = ({ isActive }) => {
    return { color: isActive ? "#007bff" : "#111111" };
  };

  return (
    <>
      <div className='socialheader'>
      <span className='contact-info'>
        <span className='soc-1'>
          <i class="fa-sharp fa-solid fa-phone"></i>
          <span className='social-info'> +2348104025253</span>
        </span>
        <span className='soc-2'>
        <i class="fa-solid fa-envelope"></i>
        <span className='social-info'> info@kamexgroup.com</span>
        </span>
        <span className='soc-3'>
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <span className='social-info'> 90 Circular Road Freetown, Sierra Leone</span>
        </span>
      </span>
      <span className='contact-info'>
        <i class="fa-brands fa-facebook-f social-info"></i>
        <i class="fa-brands fa-instagram social-info"></i>
        <i class="fa-brands fa-twitter social-info"></i>
      </span>
    </div>
      <Navbar expand={expand} className="nav--kamex">
        <Container fluid>
          <Navbar.Brand href="#">
            <NavLink
              style={navStyles}
              exact={false}
              to="/"
              className="nav--link"
            >
              <img
                src={kamex}
                alt="logo"
                width={150}
                height={100}
                className="img-fluid"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header className="offc" closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                  src={kamex}
                  alt="logo"
                  width={150}
                  height={100}
                  className="img-fluid"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offc">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <NavLink
                    style={navStyles}
                    exact={true}
                    to="/"
                    className="nav--link"
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    style={navStyles}
                    exact={false}
                    to="/about-us"
                    className="nav--link"
                  >
                    About Us
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    style={navStyles}
                    exact={false}
                    to="/team"
                    className="nav--link"
                  >
                    Team
                  </NavLink>
                </Nav.Link>
                <NavDropdown
                  
                  className="nav--link black"
                  title="Products"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink to='/water' className="nav--links">
                      Kamex Water
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <NavLink to='/fisheries' className="nav--links">
                    Kamex Fisheries
                  </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to='/mining' className="nav--links">
                      Kamex Mining
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink to='/construction' className="nav--links">
                      Kamex Construction
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink to='/oilandgas' className="nav--links">
                      Kamex Petroleum
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <NavLink to='/agriculture' className="nav--links">
                      Kamex Agriculture
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <NavLink
                    style={navStyles}
                    exact={false}
                    to="/contact"
                    className="nav--link"
                  >
                    Contact
                  </NavLink>
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
};

export default Header;
