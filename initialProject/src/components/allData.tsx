import App from "../App.tsx";
import reactLogo from "./assets/react.svg";

const example = <h1>Welcome this is Akhil Gandikota</h1>;

function MyContent() {
  return <h1> How you doin!!!</h1>;
}
function AllData() {
  return (
    <div>
      <img src={reactLogo} width="100px" /> {/* Image inclusion*/}
      {example} {/* Example of constant which is considered as JSX */}
      <MyContent /> {/* Components using functions */}
      <App />
    </div>
  );
}
