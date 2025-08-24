import Main from "./components/Main";
import { constant } from "./constants/constant";
import { helpers } from "./helpers/helpers";
import Button from "./ui/button";

function App() {
  document.title = constant.name;
  return (
    <div className="flex md:p-10">
      <Button title="PDF" event={() => helpers.downloadPdf()} />
      <Main />
    </div>
  );
}

export default App;
