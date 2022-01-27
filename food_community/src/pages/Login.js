import React from "react";
import { Text, Input, Grid, Button } from "../elements";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const changeId = (e) => {
    setId(e.target.value);
  };
  const changePwd = (e) => {
    setPwd(e.target.value);
  };
  const login = () => {
    console.log("login");
    dispatch(userActions.loginAction({ user_name: "perl" }));
  };
  return (
    <React.Fragment>
      <Grid padding={16}>
        <Text type="heading">로그인 페이지</Text>
      </Grid>
      <Grid padding={16}>
        <Input
          value={id}
          onChange={changeId}
          placeholder="아이디를 입력하세요."
        />
        <Input
          value={pwd}
          onChange={changePwd}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
      </Grid>
      <Button
        _onClick={() => {
          console.log("login");
          login();
        }}
      >
        로그인
      </Button>
    </React.Fragment>
  );
};
export default Login;
