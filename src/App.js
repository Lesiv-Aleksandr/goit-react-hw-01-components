import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/FriendList";
import TransactionHistory from "./components/Transactions/TransactionHistory";

import user from "./components/data/user.json";
import data from "./components/data/data.json";
import friends from "./components/data/friends.json";
import items from "./components/data/transactions.json";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <Profile user={user} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
