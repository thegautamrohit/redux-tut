import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/Store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import DrinkContainer from "./components/DrinkContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import Itemcontainer from "./components/Itemcontainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Itemcontainer cake />
        <Itemcontainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <DrinkContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
