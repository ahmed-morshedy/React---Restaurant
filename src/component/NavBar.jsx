import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container className="d-flex justify-content-between">
        <Form className="d-flex">
          <Button className="me-2" variant="secondary">
            Search
          </Button>
          <Form.Control type="search" placeholder="search.." />
        </Form>
        <h2 className="text fs-4">Restaurant</h2>
      </Container>
    </Navbar>
  );
}

export default NavBar;
