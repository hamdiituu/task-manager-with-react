import Router from "./router";
import { Provider } from "react-redux";
import sliceStore from "./store/slice/store";
function App() {
  return (
    <Provider store={sliceStore}>
      <div className="w-100">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
