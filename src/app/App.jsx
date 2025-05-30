import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";


import "./app.css";
import { Provider } from "react-redux";
import store from "./store";

// TODO: Import the Redux store and provide it to this component using <Provider>.
export default function App() {
  return (
    <Provider store={store}>
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
    </Provider>
  );
}
