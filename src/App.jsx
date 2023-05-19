import "./App.css";
import { Button } from "flowbite-react";

function App() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <div>
          <Button gradientMonochrome="info">Info</Button>
        </div>
        <div>
          <Button gradientMonochrome="success">Success</Button>
        </div>
        <div>
          <Button gradientMonochrome="cyan">Cyan</Button>
        </div>
        <div>
          <Button gradientMonochrome="teal">Teal</Button>
        </div>
        <div>
          <Button gradientMonochrome="lime">Lime</Button>
        </div>
        <div>
          <Button gradientMonochrome="failure">Failure</Button>
        </div>
        <div>
          <Button gradientMonochrome="pink">Pink</Button>
        </div>
        <div>
          <Button gradientMonochrome="purple">Purple</Button>
        </div>
      </div>
    </>
  );
}

export default App;
