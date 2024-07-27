import './App.css';
import Login from './Login/Login';
import Registtration from './Registration/Registtration';
import { Routes, Route } from 'react-router-dom';
import Verifyotp from './Registration/Verifyotp';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import WelcomePage from './Registration/Welcome';
import { ApiProvider } from './Context/ApiContext';
import TenantLogin from './Login/TenantLogin';

function App() {

  return (
    <>
      <Routes>
        <Route path='/tenantlogin' element={<TenantLogin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<ApiProvider><Registtration /></ApiProvider>} />
        <Route path='/verifyotp/:userId' element={<Verifyotp />} />
        <Route path='/welcome/:tenantId' element={<WelcomePage />} />
        <Route path='*' element={<SidebarHeader />} />
      </Routes>

    </>
  );
}

export default App;







