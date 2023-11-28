import { createSlice } from "@reduxjs/toolkit";

//파일분할
const user = createSlice({
  //useState와 비슷
  name: "user", //state명
  initialState: { name: "kim", age: 20 }, //값
  // initialState: { name: "kim" }, //문자 하나만 필요해도 이런식으로 작성가능 -> 좀더 수정하기 수월하다
  //state를 slice라고 한다

  //state 수정하는 함수 만들기
  reducers: {
    changeName(state) {
      //기존state
      state.name = "park"; //1. 리턴문 안쓰고 이렇게 직접수정해도 state 변경됨
    },
    increase(state, action) {
      //기존state
      //   state.age += 1;
      state.age += action.payload;
      //payload : 메세지에 보내는 화물
      //action : state변경함수
    },
  },
});

export const { changeName, increase } = user.actions;
export default user;
