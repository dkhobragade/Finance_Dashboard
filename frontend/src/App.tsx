import { AppShell } from '@mantine/core';
import './App.css'
import Sidebar from './components/sidebar';
import Main from './components/main';

function App ()
{

  return (
    <AppShell
      navbar={ {
        width: 150,
        breakpoint: 'sm',
      } }
    >
      <AppShell.Navbar p={ 5 }><Sidebar /></AppShell.Navbar>
      <AppShell.Main h="100%" ><Main /></AppShell.Main>
    </AppShell>
  )
}

export default App
