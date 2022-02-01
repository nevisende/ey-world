import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import DetailState from '../pages/DetailState';
import DetailCity from '../pages/DetailCity';
import Detail from '../pages/Detail';

function Router() {
  const theme = useSelector((state) => state.themeReducer);
  return (
    <div
      data-testid="router"
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      className="flex flex-col items-center min-h-screen w-screen"
    >
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
  );
}

export default Router;
