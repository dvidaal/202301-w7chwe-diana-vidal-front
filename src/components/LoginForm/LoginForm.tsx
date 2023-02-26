import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled>
      <form className="containerForm">
        <h1>Log in</h1>
        <input
          className="containerForm__input"
          placeholder="Username"
          aria-label="Field name of user"
        />
        <input
          className="containerForm__input"
          placeholder="************"
          aria-label="Field password of user"
        />

        <button className="log" type="submit" aria-label="Send button">
          Log in
        </button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;