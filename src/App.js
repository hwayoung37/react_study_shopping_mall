import "./App.css";
import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Container, Row } from "react-bootstrap";
import data from "./data.js";
import Card from "./component/Card.jsx";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./page/Detail.jsx";
import axios from "axios";

export const Context1 = React.createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [shoesData, setShoesData] = useState([]);

  const navigate = useNavigate();

  let [check, setCheck] = useState([10, 20, 30]);

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
                <Nav.Link onClick={() => navigate("/event")}>
                  이벤트
                  {/* <Link to="/detail">상세페이지</Link> */}
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((res) => {
                console.log(res.data);
                console.log(shoes);
                let copy = [...shoes, ...res.data];
                setShoes(copy);
                console.log(shoes);
              })
              .catch(() => {
                console.log("실패");
              });
          }}
        >
          버튼
        </button>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="main-bg"></div>
                <Container>
                  <Row>
                    {shoes.map((item) => (
                      <Card
                        key={item.id}
                        imgSrc={`https://codingapple1.github.io/shop/shoes${
                          item.id + 1
                        }.jpg`}
                        title={item.title}
                        price={item.price}
                      />
                    ))}
                  </Row>
                  <Row>
                    {shoesData.map((item) => (
                      <Card
                        key={item.id}
                        imgSrc={`https://codingapple1.github.io/shop/shoes${
                          item.id + 1
                        }.jpg`}
                        title={item.title}
                        price={item.price}
                      />
                    ))}
                  </Row>
                </Container>
              </div>
            }
          />

          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

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
