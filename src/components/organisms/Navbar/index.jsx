import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import './style.css';

export default function Navigation() {
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarClass("scroll");
    } else {
      setNavbarClass("");
    }
  };

  return (
    <>
      <Navbar
        key="md"
        bg="transparent"
        variant="light"
        expand="md"
        fixed="top"
        className={navbarClass}
      >
        <Container>
          <Navbar.Brand href="/home">
            <b>Genshin Impact</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/character">Characters</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

// export default function Navigation() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Navbar key="md" bg="transparent" variant="light" expand="md" fixed="top" >
//         <Container>
//           <Navbar.Brand href="/home"><b>Genshin Impact</b></Navbar.Brand>
//           <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
//           <Navbar.Offcanvas
//             id="offcanvasNavbar-expand-md"
//             aria-labelledby="offcanvasNavbarLabel-expand-md"
//             placement="end">
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <Nav.Link href="/home">Home</Nav.Link>
//                 <Nav.Link href="/character">Characters</Nav.Link>
//                 <Nav.Link href="/about">About</Nav.Link>
                
//               </Nav>
//               {/* <Form className="d-flex">
//                 <Button
//                   variant="outline-primary"
//                   className="me-2"
//                   onClick={() => navigate("/login")}>
//                   Login
//                 </Button>
//                 <Button variant="primary" onClick={() => navigate("/register")}>
//                   Register
//                 </Button>
//               </Form> */}
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// }
