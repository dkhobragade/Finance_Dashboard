import { AppShell, Burger } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import './App.css';
import Sidebar from './components/sidebar';
import RenderComp from './components/renderComp';
import { useStore } from './store/useStore';
import LoginPage from './components/loginPage';

function App ()
{
  const isAuthenticated = useStore( ( s ) => s.isAuthenticated );

  const [ opened, { toggle } ] = useDisclosure( false );
  const isMobile = useMediaQuery( '(max-width: 768px)' );

  if ( !isAuthenticated )
  {
    return <LoginPage />;
  }

  return (
    <AppShell
      navbar={ {
        width: 150,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      } }
      header={ isMobile ? { height: 50 } : undefined }
    >
      { isMobile && (
        <AppShell.Header p="xs">
          <Burger opened={ opened } onClick={ toggle } size="sm" />
        </AppShell.Header>
      ) }

      <AppShell.Navbar p={ 5 }>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <RenderComp />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;