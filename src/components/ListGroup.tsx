import { Fragment, useState } from "react";
import Message from "../Message";

function ListGroup() {
  let items = ["NewYork", "San Fransisco", "Tokyo", "Hyderabad"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //     items = []
  //      we can write this if condition in the jsx context( in the return statement in the place of message)
  const message = items.length === 0 ? <p> No Item Found </p> : null;
  return (
    <>
      <Message />
      <h1> List of Elements </h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      <br></br>
      <h1 onClick={(event) => console.log(event)}> Ordered List of Cities </h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
