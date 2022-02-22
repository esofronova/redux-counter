import { Container } from 'react-bootstrap';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";

// REDUCER
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    case 'RESET':
      return 0;
    default:
      return state;
  };
};

// STORE
const store = createStore(reducer);

export default function App() {
  return (
    <Container className='py-5 d-flex justify-content-center'>
      <Provider store={store}>
        <Counter />
      </Provider>
    </Container>
  );
};