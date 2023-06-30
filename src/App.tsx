import { Button } from "./stories/TestBtn";

function App() {
  const Test = () => {
    alert("마우스이벤트");
  };

  return (
    <div className="App">
      <h1>Storybook test</h1>
      <Button label="testBtn" onMouseOver={Test} />
    </div>
  );
}

export default App;
