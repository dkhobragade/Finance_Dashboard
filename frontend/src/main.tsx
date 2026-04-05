import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider } from "@mantine/core";
import { useStore } from "./store/useStore.ts";

const Root = () =>
{
  const colorScheme = useStore( ( s ) => s.colorScheme );

  return (
    <MantineProvider defaultColorScheme={ colorScheme }>
      <App />
    </MantineProvider>
  );
};

createRoot( document.getElementById( "root" )! ).render( <Root /> );