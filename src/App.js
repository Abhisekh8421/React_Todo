import { TodoWrapper } from "./components/TodoWrapper";
import { Toaster } from "react-hot-toast";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <Toaster />
    </div>
  );
}

export default App;
