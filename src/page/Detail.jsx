import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App";
import { changeName, increase } from "./../store/userSlice"; //store의 상태변경함수
import { addProducts } from "../store"; //store의 상태변경함수
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ shoes }) => {
  const { check } = useContext(Context1);

  const dispatch = useDispatch();
  //store.js로 요청보내주는 함수

  const { id } = useParams();
  const product = shoes.find((item) => {
    return id == item.id;
  });

  // const [showbox, setShowbox] = useState(true);
  const [error, setError] = useState(false);
  const [tap, setTap] = useState(0);
  const [pagefade, setpageFade] = useState("");

  // 1. 디테일 페이지에 접속하면
  // 2. 상품번호 가져와서
  // 3. localStorage에 우선 array형식으로 보관하고
  useEffect(() => {
    console.log(product.id);
    let watched = localStorage.getItem("watched");
    watched = JSON.parse(watched);
    watched.push(product.id);
    watched = new Set(watched); //중복없는 array
    watched = Array.from(watched);
    localStorage.setItem("watched", JSON.stringify(watched));
    // if (!watched.includes(product.id)) {
    //   // 중복된 ID가 없을 때만 추가
    //   watched.push(product.id);
    //   localStorage.setItem("watched", JSON.stringify(watched));
    // }
  }, []);

  useEffect(() => {
    setTimeout(() => setpageFade("end"), 100);

    return setpageFade("");
  }, [id]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowbox(false);
  //   }, 2000);
  // });

  useEffect(() => {
    if (isNaN(error)) {
      alert("숫자만 입력");
    }
  }, [error]);

  return (
    <div className={`container start ${pagefade}`}>
      {/* <div>{check}</div> */}
      {/* {showbox ? (
        <div className="disappearBox">페이지 방문 후 2초 후 사라지는 박스</div>
      ) : null} */}
      {/* <input onChange={(e) => setError(e.target.value)}></input> */}
      <div className="row">
        <div className="col-md-6">
          <img src={product.imgSrc} width="100%" alt="productImg" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button
            className="btn btn-danger"
            // onClick={() => addProducts(product)}
            onClick={() => {
              dispatch(addProducts(product));
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTap(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTap(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTap(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TapControl tap={tap} shoes={shoes} />
    </div>
  );
};

function TapControl({ tap, shoes }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => setFade("end"), 100);

    return setFade("");
  }, [tap]);
  return (
    <div className={`start ${fade}`}>
      {shoes[0].title}
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  );
}

export default Detail;
