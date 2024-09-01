import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return ( 
     <Router>
      <Routes>
         <Route path= "/blog/:id" element={<BlogPost />} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/protectedroute" element={<ProtectedRoute />} />
      </Routes>
    </Router>
   );
}

export default App;
