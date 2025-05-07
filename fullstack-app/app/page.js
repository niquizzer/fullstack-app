import QuoteCard from "./components/QuoteCard";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <div>
      <h1>Random Quote Generator</h1>
      <Provider store={store}>
        <QuoteCard />
      </Provider>
      </div>
  );
}
