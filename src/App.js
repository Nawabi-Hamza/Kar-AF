

import { BrowserRouter, Route, Routes   } from 'react-router-dom';
import NavbarFooter from './Pages/Navbar_Footer';
import Index from './Pages/Index';
import Jobs from './Pages/Jobs';
import Companies from './Pages/Companies';
import Projects from './Pages/Projects';
import Register from './Pages/Register';
import Services from './Pages/Services';
import NotFound from './Pages/404';
import './App.css';
import SingleJob from './Pages/SingleJob';
import Scholorships from './Pages/Scholorships';
import News from './Pages/News';
import Login from './Pages/Login';
import Dashboard from './DASHBOARD/Dashboard';
import Main from './DASHBOARD/Components/Main';
import Profile from './DASHBOARD/Pages/Profile';
import Scholorshpis from './DASHBOARD/Pages/Scholorshpis';
import JobsAdmin from './DASHBOARD/Pages/Jobs';
import CompaniesAdmin from './DASHBOARD/Pages/Companies';
import ServicesAdmin from './DASHBOARD/Pages/Services';
import Users from './DASHBOARD/Pages/Users';

function App() {
 
  
  return ( 
    <div className="App" id='firstSection'>                   
      <BrowserRouter >
          <Routes> 
            <Route element={<NavbarFooter />}>
              <Route path="/" element={<Index />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/singlejob/:id" element={<SingleJob />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/scholorships" element={<Scholorships />} />
              <Route path="/news" element={<News />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-project" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* Login and Register page */}
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/" element={<Main />} />
              <Route path="/dashboard/service" element={<ServicesAdmin />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/scholorship" element={<Scholorshpis />} />
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/jobs" element={<JobsAdmin />} />
              <Route path="/dashboard/companies" element={<CompaniesAdmin />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
