import { BrowserRouter } from 'react-router-dom';
import EagerRoutes from './EagerRoutes';
import LazyRoutes from './LazyRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Navigation</h1>
      <LazyRoutes />
    </BrowserRouter>
  );
};

export default App;
