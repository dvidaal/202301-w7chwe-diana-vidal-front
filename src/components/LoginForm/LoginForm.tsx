import useUser from "../../hooks/useUser/useUser";
import LoginFormStyled from "./LoginFormStyled";
import { useState } from "react";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    await loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <LoginFormStyled onSubmit={onSubmitHandler}>
      <form className="containerForm">
        <h2>Log in</h2>
        <input
          className="containerForm__input"
          placeholder="Username"
          aria-label="Field name of user"
          onChange={handleUsername}
          value={username}
        />
        <input
          className="containerForm__input"
          placeholder="************"
          type="password"
          aria-label="Field password of user"
          onChange={handlePassword}
          value={password}
        />

        <button className="log" type="submit" aria-label="Log in">
          Log in
        </button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
