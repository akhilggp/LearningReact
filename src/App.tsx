import Message from "./Message";
import ListGroup from "./components/ListGroup";
import PropsListGroup from "./components/PropsListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  let list = 4;
  const items = ["Vij", "Seattle", "Baltimore", "Virginia"];
  const [onVisibility, setOnVisibility] = useState(false);
  let login = true;
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
  else if (list === 3)
    return (
      <>
        {onVisibility && (
          <Alert onClose={() => setOnVisibility(false)}> My Alert </Alert>
        )}
        <Button onClick={() => setOnVisibility(true)}> My Button </Button>
      </>
    );
  if (login === true) return <Register></Register>;
  return <Login></Login>;
}
export default App;
