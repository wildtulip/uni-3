import classes from "./App.module.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.appWrapper}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
