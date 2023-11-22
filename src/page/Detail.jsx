import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  const product = shoes.find((item) => {
    return id == item.id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imgSrc} width="100%" />
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
