import { Route, Routes } from 'react-router-dom'
import './App.css'
import Desktop from './component/Desktop'
import Login from './component/Login'
import Test from './component/Test'
import ExampleWrapper from './component/ExampleWrapper'
// import Header from './component/Header'
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { JSX } from 'react'
import { Analytics } from "@vercel/analytics/react"
function App() {

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return children;
  };


  return (

    <>
      {/* <Desktop /> */}

      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<ProtectedRoute><Desktop /></ProtectedRoute>} path='/os' />
        <Route element={<ProtectedRoute><Desktop /></ProtectedRoute>} path='/os/:token' />
        <Route element={<Test />} path='/test' />
        <Route element={<ExampleWrapper />} path='/modal' />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Analytics />
    </>
  )
}

export default App
