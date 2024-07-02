import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Registtration from './Registration/Registtration';
import { Route, Routes } from 'react-router-dom';
import Verifyotp from './Registration/Verifyotp';

function App() {
  return (
    <>

      <Routes>
        {/* <Login /> */}
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registtration />} />
        <Route path='/verifyotp' element={<Verifyotp />} />


      </Routes>

    </>
  );
}

export default App;
