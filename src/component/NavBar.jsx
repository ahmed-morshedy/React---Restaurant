import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  const [search, setSearch] = useState("");

  function onSearch() {
    props.fillter(search.trim());
  }

  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container className="d-flex justify-content-between">
        <Form className="d-flex">
          <Button
            className="me-2"
            variant="secondary"
            onClick={() => onSearch()}
          >
            Search
          </Button>
          <Form.Control
            type="search"
            placeholder="search.."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <h2 className="text fs-4">Restaurant</h2>
      </Container>
    </Navbar>
  );
}

export default NavBar;
NavBar.propTypes = {
  fillter: PropTypes.func,
};
