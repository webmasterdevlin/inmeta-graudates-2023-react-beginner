import { BrowserRouter } from 'react-router-dom';
import EagerRoutes from './EagerRoutes';
import LazyRoutes from './LazyRoutes';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <LazyRoutes />
    </BrowserRouter>
  );
};
// github.com/webmasterdevlin/inmeta-graudates-2023-react-beginner
export default App;
