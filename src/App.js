import Header from "./components/header/Header";
import Title from "./components/header/title/Title";
import Navbar from "./navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Title />
    </div>
  );
}

export default App;
