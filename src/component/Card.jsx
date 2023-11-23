import { Col } from "react-bootstrap";

const Card = ({ imgSrc, title, price }) => {
  return (
    <div>
      <Col sm>
        <img src={imgSrc} width="80%" alt="img" />
        <h4>{title}</h4>
        <p>{price}</p>
      </Col>
    </div>
  );
};

export default Card;
