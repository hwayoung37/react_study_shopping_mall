import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  const product = shoes.find((item) => {
    console.log("id: ", typeof id);
    console.log("shoes.id: ", typeof item.id);
    return id == item.id;
  });

  const [showbox, setShowbox] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowbox(false);
    }, 2000);
  });

  useEffect(() => {
    if (isNaN(error)) {
      alert("숫자만 입력");
    }
  }, [error]);

  return (
    <div className="container">
      {showbox ? (
        <div className="disappearBox">페이지 방문 후 2초 후 사라지는 박스</div>
      ) : null}
      <input onChange={(e) => setError(e.target.value)}></input>
      <div className="row">
        <div className="col-md-6">
          <img src={product.imgSrc} width="100%" alt="productImg" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
