import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainerWithHooks from "./components/CakeContainerWithHooks";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeContainerWithHooks />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
