import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { NewModel } from './components/NewModal';
//import {} from './components/EventTable';

export function App() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  function handleOpenNewModal() {
    setIsNewModalOpen(true)
  }

  function handleCloseNewModal() {
    setIsNewModalOpen(false)
  }

  
  return (
    <div className="App">
      <Header onOpenNewModal={handleOpenNewModal} />
      <Dashboard />
      <NewModel isOpen={isNewModalOpen} onRequestClose={handleCloseNewModal} />
      <GlobalStyle />
    </div>
  );
}

export default App;
