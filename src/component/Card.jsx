import { Col } from "react-bootstrap";

const Card = ({ imgSrc, title, price }) => {
  console.log(imgSrc);
  return (
    <div>
      <Col sm>
        <img src={imgSrc} width="80%" />
        <h4>{title}</h4>
        <p>{price}</p>
      </Col>
    </div>
  );
};

export default Card;
