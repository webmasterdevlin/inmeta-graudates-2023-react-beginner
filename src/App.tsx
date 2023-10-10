import { BrowserRouter } from 'react-router-dom';
import EagerRoutes from './EagerRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Navigation</h1>
      <EagerRoutes />
    </BrowserRouter>
  );
};

export default App;
