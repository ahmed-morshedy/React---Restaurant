import Nav from "./component/NavBar";
import Header from "./component/Header";
import Cat from "./component/Cat";
import Cards from "./component/Card";
import { Items } from "./component/Data";
import { useState } from "react";
function App() {
  const [item, setItem] = useState(Items);
  function hanedlCat(cat) {
    if (cat === "الكل") {
      setItem(Items);
    } else {
      const newItems = Items.filter((i) => i.category === cat);
      setItem(newItems);
    }
  }

  function hanedlSearch(search) {
    if (search !== "") {
      const newItems = Items.filter((i) => i.description.includes(search));
      setItem(newItems);
    }
  }
  return (
    <>
      <Nav fillter={hanedlSearch} />
      <Header />
      <Cat fillter={hanedlCat} />
      <Cards data={item} />
    </>
  );
}

export default App;
