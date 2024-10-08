import "./globals.css";
import { Routes, Route} from 'react-router-dom';
import Home from './root/pages/Home';
import Social from './root/pages/Social';
import Dashboard from './root/pages/Dashboard';
import Automate from './root/pages/Automate';
import Others from './root/pages/Others';
import { ThemeProvider } from "./components/theme-provider";


const App = () => {
  return (
    <main className="flex h-screen">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/social" element={<Social />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/automation" element={<Automate />} />
            <Route path="/other" element={<Others />} />
          </Routes>
        </ThemeProvider>
      </main>
  );
}

export default App

