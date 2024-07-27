import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
    <div className="bg-blue-800 w-screen  min-h-[100vh] pt-[80px] flex flex-col items-center">
      <Todo/>
    </div>
    </>
  );
}

export default App;
