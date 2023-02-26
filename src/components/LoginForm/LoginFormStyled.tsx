import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;

  .containerForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 30px;
    border-radius: 30px;
    gap: 20px;

    &__input {
      padding: 10px;
      border-radius: 20px;
      width: 250px;
      height: 150px;
    }
  }

  button {
    background-image: linear-gradient(150deg, #9500ff, #09f, #00ddff);
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    transition: 0.3s;
  }

  button:active {
    transform: scale(0.9);
  }
`;

export default LoginFormStyled;
