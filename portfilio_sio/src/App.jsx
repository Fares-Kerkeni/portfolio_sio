import style from "./app.module.scss";
import Nav from "./components/nav/nav";
function App() {
  return (
    <>
      <div className={style.container_app}>
        <Nav />
      </div>
    </>
  );
}

export default App;
