import FrendsList from "./Components/FrendsList/FrendsList";
import frends from "./data/friend-list.json";

import StatisticsData from "./data/statisticsData.json";
import Statistics from "./Components/Statistics/Statistics";
function App() {
  return (
    <div>
      <FrendsList items={frends} />
      <Statistics title="Upload stats" stats={StatisticsData} />
    </div>
  );
}

export default App;
