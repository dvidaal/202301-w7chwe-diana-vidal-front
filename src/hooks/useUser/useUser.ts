import decodeToken from "jwt-decode";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload, LogStructure, UserCredentials } from "./types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL_API;
  const loginEndpoint = "login/";

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/${loginEndpoint}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-Type": "application/json" },
    });

    const { token } = (await response.json()) as LogStructure;

    const tokenPayload: CustomTokenPayload = decodeToken(token);

    const { sub: username } = tokenPayload;

    const logInUser: User = {
      username,
      token,
    };

    dispatch(loginUserActionCreator(logInUser));

    localStorage.setItem("token", token);
  };
  return { loginUser };
};

export default useUser;
