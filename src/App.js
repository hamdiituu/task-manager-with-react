import Router from "./router";
import { Provider } from "react-redux";
import reduxStore from "./store/redux/store";

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="w-100">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
