import Nav from "./component/NavBar";
import Header from "./component/Header";
import Cat from "./component/Cat";
import Cards from "./component/Card";
import { Items } from "./component/Data";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Cat />
      <Cards data={Items} />
    </>
  );
}

export default App;
