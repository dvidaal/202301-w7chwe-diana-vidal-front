import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled>
      <form className="containerForm">
        <h2>Log in</h2>
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

        <button className="log" type="submit" aria-label="Log in">
          Log in
        </button>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
