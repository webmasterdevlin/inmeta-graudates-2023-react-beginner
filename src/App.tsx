import { BrowserRouter } from 'react-router-dom';
import EagerRoutes from './EagerRoutes';
import LazyRoutes from './LazyRoutes';
import State from './built-in-hooks/State';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container prose mx-auto px-4">
        <State />
      </div>
      <NavigationBar />
      <LazyRoutes />
    </BrowserRouter>
  );
};
// github.com/webmasterdevlin/inmeta-graudates-2023-react-beginner
export default App;
