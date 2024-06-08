import './App.css';

// firebase----------
// import app from './firebase'

// api---------
// import requests from './api/requests';

// components---------
// import Nav from './components/Nav';


// Pages---------
import JoinPage from  './pages/JoinPage_';
import LoginPage from  './pages/LoginPage_';
import MainPage from   './pages/MainPage_';
import { Outlet, Route, Routes } from 'react-router-dom';



const Layout = () =>{
  return(
      <div>
          <Outlet/>
      </div>
  )
}



function App() {
  return (
    <div className='app'>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<LoginPage/>} />
                <Route path='main' element={<MainPage/>} />
                <Route path='join' element={<JoinPage/>} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;


