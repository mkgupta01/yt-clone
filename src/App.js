import { AppContext } from './assets/contextAPI';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <AppContext>
      <div className='h-screen'>
        <Navbar />
        <Sidebar />
        <Feed />
      </div>
    </AppContext>
  );
}

export default App;

