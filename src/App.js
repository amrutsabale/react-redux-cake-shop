import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainerWithHooks from "./components/CakeContainerWithHooks";
import IceCreamContainer from "./components/IceCreamContainer";
import AddCakes from "./components/AddCakes";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeContainerWithHooks />
        <IceCreamContainer />
        <AddCakes />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
