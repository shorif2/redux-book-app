import { Provider } from "react-redux";
import store from "./redux/store";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
