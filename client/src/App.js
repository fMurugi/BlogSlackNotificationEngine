import logo from './logo.svg';
import './App.css';
import {Layout} from './components/Layout';
import { RouterProvider } from 'react-router';
import { router } from './components/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
