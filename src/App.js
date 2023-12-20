import "./App.css";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Container, Row } from "react-bootstrap";
import data from "./data.js";
import Card from "./component/Card.jsx";
import { Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";
import Detail from "./page/Detail.jsx";
import Cart from "./page/Cart.jsx";
import axios from "axios";
import { useQuery } from "react-query";

export const Context1 = React.createContext();

function App() {
  useEffect(() => {
    if (!localStorage.getItem("watched"))
      localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  //제일 처음 접속하면 localStorage에 watched라는 key 만들기

  let obj = { name: "kim" };
  localStorage.setItem("data", JSON.stringify(obj));

  const [shoes, setShoes] = useState(data);

  const navigate = useNavigate();

  let [check, setCheck] = useState([10, 20, 30]);

  function clickHandler(id) {}

  let result = useQuery(
    "작명",
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        console.log("요청됨");
        return a.data;
      }),
    { staleTime: 2000 }
  );
  // 1. 데이터 패치 성공/실패/로딩 중 상태를 파악하기 쉽다. -> 쌩리액트는 state로 만들어서 코딩해야됨
  // result.data -> 성공 시 데이터 들어옴
  // result.isLoading -> 로딩 중일 때 true
  // result.error -> 에러일때 true

  // axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
  //   // a.data;
  //   console.log(a.data);
  // });

  return (
    <Context1.Provider value={{ check, shoes }}>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")}>
                  홈
                  {/* <Link to="/">홈</Link>  링크를 사용하면 a태그처럼 파란색으로 변한다 */}
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/event")}>이벤트</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                {result.isLoading ? "로딩중" : result.data.name}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="main-bg"></div>
                <Container>
                  <Row>
                    {shoes.map((item) => (
                      <Link to={`/detail/${item.id}`}>
                        <Card
                          key={item.id}
                          imgSrc={`https://codingapple1.github.io/shop/shoes${
                            item.id + 1
                          }.jpg`}
                          title={item.title}
                          price={item.price}
                          onClick={() => clickHandler(item.id)}
                        />
                      </Link>
                    ))}
                  </Row>
                </Container>
              </div>
            }
          />

          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/event" element={<Event />}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
          </Route>
          <Route path="*" element={<div>없는페이지 404임</div>} />
        </Routes>
      </div>
    </Context1.Provider>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
