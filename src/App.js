import React from "react";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
const TemplatePage = React.lazy(() => import("./components/Template/Template"));
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Suspense fallback={<Spinner />}>
            <TemplatePage />
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
