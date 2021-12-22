import './App.css';

import HeaderBar from './components/headerBar/HeaderBar';
import ChatBotComponent from './components/chatBot/ChatBot';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <br /><br />

      <main style={{ padding: '0 5%' }}>
        <div className='skeleton-container'>
          <h1><Skeleton /></h1>
          <Skeleton count={10} />

          <h1><Skeleton /></h1>
          <Skeleton count={10} />
        </div>

        {/* Componente del chat bot */}
        <ChatBotComponent />
      </main>
    </div>
  );
}

export default App;
