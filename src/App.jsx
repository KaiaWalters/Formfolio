import ResponsiveAppBar from './components/Appbar';
import { Outlet, Route, Routes } from 'react-router';
import AdminHomePage from './pages/Admin';
import HomePage from './pages/Home'
import LandingPage from './pages/Landing';
import './css/App.css'
import './css/snow.css'

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div style = {{ 
        marginTop: '72px',
        padding: '16px' 
      }}>
        <Outlet />
      </div>
    </>
   
  );
};

const App = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
