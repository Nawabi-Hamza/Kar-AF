

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

function App() {
  return ( 
    <div className="App">
      <BrowserRouter >
          <Routes> 
            <Route element={<NavbarFooter />}>
              <Route path="/" element={<Index />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/singlejob/:id" element={<SingleJob />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/our-projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/register" element={<Register />} />
            </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
