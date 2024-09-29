import Message from "./Message";
import ListGroup from "./components/ListGroup";
import PropsListGroup from "./components/PropsListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let list = 2;
  const items = ["Vij", "Seattle", "Baltimore", "Virginia"];
  const [onVisibility, setOnVisibility] = useState(false);
  if (list === 0)
    return (
      <div>
        <Message />
      </div>
    );
  else if (list === 1)
    return (
      <div>
        <ListGroup />
      </div>
    );
  else if (list === 2)
    return (
      <div>
        <PropsListGroup items={items} headings="Props Cities" />
      </div>
    );
  return (
    <>
      {onVisibility && (
        <Alert onClose={() => setOnVisibility(false)}> My Alert </Alert>
      )}
      <Button onClick={() => setOnVisibility(true)}> My Button </Button>
    </>
  );
}
export default App;
