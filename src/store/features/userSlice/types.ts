export interface User {
  token: string;
  username: string;
}

export interface UserState extends User {
  isLogged: boolean;
}
