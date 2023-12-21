import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice"; //store의 상태변경함수
import { increaseCount } from "../store"; //store의 상태변경함수
import { memo, useMemo, useState } from "react";

//memo원리 : props가 변할 때만 재렌더링 해준다
//재렌더링 전 기존prop와 신규prop비교해야함 -> 프롭스가 길고 복잡하면 손해일수도
const Child = memo(() => {
  console.log("재렌더링됨");
  return <div>자식임⭐⭐⭐⭐</div>;
});

function 함수() {
  return "반복분 10억번 돌린 결과";
}

function Cart() {
  //리듀서 가져옴
  let data = useSelector((data) => {
    return data;
  });
  let result = useMemo(() => {
    return 함수();
  }, []);
  //useMemo : 컴포넌트 렌더링 시 1회만 실행(useEffect와 유사)
  //useEffect와 useMemo차이?
  //useEffect는 html 실행 후 실행, useMemo는 렌더링 될때 실행(실행시점의 차이)

  const dispatch = useDispatch();
  //store.js로 요청보내주는 함수

  let [count, setCount] = useState(0);

  return (
    <>
      <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div>
        {data.user.name}의 장바구니 / 나이 : {data.user.age}
      </div>
      <button
        onClick={() => {
          dispatch(increase(1));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>버튼</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increaseCount(i.id));
                  }}
                >
                  클릭
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
