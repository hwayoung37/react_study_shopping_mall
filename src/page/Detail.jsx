import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  width: ${(props) => props.width || "200px"};
  padding: 10px;

  // Styled Components에서 제공하는 css 함수를 사용하여 여러개의 css 속성을 묶어서 정의할 수 있다.
  // primary prop이 존재하는 경우에만 primary로 정의된 스타일이 적용되도록
  ${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}
`;

let Box = styled.div`
  background-color: grey;
  padding: 20px;
`;

const Detail = ({ shoes }) => {
  const { id } = useParams();
  const product = shoes.find((item) => {
    console.log("id: ", typeof id);
    console.log("shoes.id: ", typeof item.id);
    return id == item.id;
  });

  return (
    <div className="container">
      <Box>
        <YellowBtn bg="blue" width="150px">
          150btn
        </YellowBtn>
        <YellowBtn bg="yellow">200btn</YellowBtn>
        <YellowBtn primary>primary</YellowBtn>
      </Box>
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
