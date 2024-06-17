import { Container, Card } from "react-bootstrap";
import PropTypes from "prop-types";

function Cards(props) {
  return (
    <Container className="my-3">
      {props.data.length >= 1 ? (
        props.data.map((item, id) => {
          return (
            <Card key={id} className="my-3 d-flex  flex-row-reverse">
              <Card.Img
                variant="top"
                style={{ width: "200px" }}
                className="card-img"
                src={item.imgUrl}
              />
              <Card.Body style={{ textAlign: "right", position: "relative" }}>
                <div className="d-flex justify-content-between">
                  <div className="text fw-bold">{item.price}</div>
                  <div className="fw-bold"> {item.title} </div>
                </div>
                <Card.Text className="card-text">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <h3>أسف, لا يوجد طعام اليوم</h3>
      )}
    </Container>
  );
}

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
