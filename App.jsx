import Welcome from "./component/Welcome";
import { Routes, Route } from "react-router-dom";
import Counter from "./component/Counter";
import ShowGithubUser from "./component/ShowGithubUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Giu" />} />
        <Route path="counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
