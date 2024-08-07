import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Titlebar from './components/Titlebar';

function App() {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col w-full h-screen'>
        <Titlebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
