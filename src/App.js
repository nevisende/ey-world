import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import DetailState from './pages/DetailState';
import DetailCity from './pages/DetailCity';
import Detail from './pages/Detail';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="detail"
              element={<Detail />}
            />
            <Route
              path="detail-state"
              element={<DetailState />}
            />
            <Route
              path="detail-city"
              element={<DetailCity />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
