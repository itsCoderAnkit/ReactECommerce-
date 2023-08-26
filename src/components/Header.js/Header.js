import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Fragment } from 'react'

const Header = (props) => {


    const containerStyle = {
         // Set your desired width
        height: '100px', // Set your desired height
        backgroundColor: 'lightgray', // Just for visualization
        padding: '20px', // Optional: Add padding
        display: 'flex', // Use flexbox for centering
    justifyContent: 'center', // Horizontally center content
    alignItems:'center'
    };

    const contentStyle = {
        fontSize: '200px', // Set desired font size
        textAlign: 'center', // Center-align text
    }

    return (
        <Fragment>
            <Navbar bg="dark" expand="lg" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Your E-commerce Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto justify-content-center">
                            <Nav.Link href="#home" className="text-white mx-6">Home</Nav.Link>
                            <Nav.Link href="#link" className="text-white mx-6">Store</Nav.Link>
                            <Nav.Link href="#link" className="text-white">About</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto" onClick={props.onShowCart}>
                            <Nav.Link href="#home" className="text-white">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid style={containerStyle}>
                <div style={contentStyle}>
                <h1>The Generic</h1>
                </div>
            </Container>
        </Fragment>
    )
}

export default Header