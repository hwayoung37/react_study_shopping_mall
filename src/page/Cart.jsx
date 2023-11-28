import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice"; //store의 상태변경함수
import { increaseCount } from "../store"; //store의 상태변경함수

function Cart() {
  //리듀서 가져옴
  let data = useSelector((data) => {
    return data;
  });
  console.log(data);

  const dispatch = useDispatch();
  //store.js로 요청보내주는 함수

  return (
    <>
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
