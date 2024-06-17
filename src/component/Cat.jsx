import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Cat(props) {
  const onFilter = (cat) => {
    props.fillter(cat);
    handelActive();
  };

  function handelActive() {
    const cats = document.body.querySelectorAll(".cat");
    cats.forEach((cat) => {
      cat.addEventListener("click", remove);
    });
    function remove() {
      cats.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
      });
    }
  }
  return (
    <Container>
      <div className="d-flex justify-content-center my-5">
        <button onClick={() => onFilter("عشاء")} className="cat">
          عشاء{" "}
        </button>
        <button onClick={() => onFilter("غداء")} className="cat">
          غداء
        </button>
        <button onClick={() => onFilter("فطار")} className="cat">
          فطار
        </button>
        <button onClick={() => onFilter("الكل")} className="cat active">
          الكل
        </button>
      </div>
    </Container>
  );
}

Cat.propTypes = {
  fillter: PropTypes.func,
};
