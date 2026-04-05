import { AppShell } from '@mantine/core';
import './App.css'
import Sidebar from './components/sidebar';
import RenderComp from './components/renderComp';
import { useStore } from './store/useStore';
import LoginPage from './components/loginPage';

function App ()
{
  const isAuthenticated = useStore( ( s ) => s.isAuthenticated );

  if ( !isAuthenticated )
  {
    return <LoginPage />;
  }

  return (
    <AppShell
      navbar={ {
        width: 150,
        breakpoint: 'sm',
      } }
    >
      <AppShell.Navbar p={ 5 }><Sidebar /></AppShell.Navbar>
      <AppShell.Main h="100%" ><RenderComp /></AppShell.Main>
    </AppShell>
  )
}

export default App
