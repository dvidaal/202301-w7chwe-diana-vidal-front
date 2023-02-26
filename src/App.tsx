import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <LoginForm />
    </div>
  );
};

export default App;
