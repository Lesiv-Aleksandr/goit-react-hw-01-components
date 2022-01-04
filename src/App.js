import FrendsList from "./Components/FrendsList/FrendsList";
import frends from "./data/friend-list.json";
function App() {
  return (
    <div>
      <FrendsList items={frends} />
    </div>
  );
}

export default App;
