import "./App.css";
import Router from "./router/index";
import { Provider } from "react-redux";
import "redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
