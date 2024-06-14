import { Container } from "react-bootstrap";

export default function Cat() {
  return (
    <Container>
      <div className="d-flex justify-content-center my-5">
        <button className="cat">عشاء </button>
        <button className="cat">غداء</button>
        <button className="cat">فطار</button>
        <button className="cat">الكل</button>
      </div>
    </Container>
  );
}
