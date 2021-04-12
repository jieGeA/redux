import NumberContainner from './component/Number'
import {Provider} from 'react-redux'
import store from './redux/index.copy'

function App() {
  return (
    <Provider store={store}>
      <NumberContainner />
    </Provider>  
  );
}

export default App;
