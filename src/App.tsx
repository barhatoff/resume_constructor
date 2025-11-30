import { BrowserRouter, Route, Routes } from "react-router-dom";

import { constant } from "./constants/constant";
import { helpers } from "./helpers/helpers";

import Main from "./routes/Home/Main";
import Demo from "./routes/Demo/Demo";
import PDFButton from "./ui/button-pdf";

function App() {
  document.title = constant.name;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex md:p-10 ">
              <PDFButton title="PDF" event={() => helpers.downloadPdf()} />
              <Main />
            </div>
          }
        />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
