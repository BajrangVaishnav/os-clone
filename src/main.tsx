import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.tsx';
import { AuthProvider } from "./AuthContext.tsx";
createRoot(document.getElementById('root')!).render(

  <StrictMode>
      <BrowserRouter>  {/* Wrap your App component with BrowserRouter */}
      <AuthProvider>
        <App />
    </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
);
