import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";
function App() {
  const dataEntry = data.map((entry) => <Entry {...entry} />);

  return (
    <main>
      <Header />
      <main>{dataEntry}</main>
    </main>
  );
}

export default App;
