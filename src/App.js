import FrendList from "./Components/friend-list";
import frends from "./friend-list.json";
function App() {
  return (
    <ul class="friend-list">
      {frends.map((frend) => {
        <FrendList imgProfile={frend.avatar} name={frend.name} />;
      })}
    </ul>
  );
}

export default App;
