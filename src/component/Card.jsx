import { useState } from "react";
import { Col } from "react-bootstrap";

const Card = ({ imgSrc, title, price, onClick }) => {
  // // const [watched, setWatched] = useState(localStorage.getItem('watched'));
  // let watched = localStorage.getItem("watched");
  // console.log("[JSON]watched:", watched);
  // watched = JSON.parse(watched);
  // console.log("[array]watched:", watched);
  // watched.push(key);
  // console.log("[push]watched:", watched);

  // // localStorage.setItem('watched', [key]);

  return (
    <div onClick={onClick}>
      <Col sm>
        <img src={imgSrc} width="80%" alt="img" />
        <h4>{title}</h4>
        <p>{price}</p>
      </Col>
    </div>
  );
};

export default Card;
