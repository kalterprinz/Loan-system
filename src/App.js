import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; 
import Register from './components/signup'; 
import Landing from './components/landing';
import Officer from './components/officerdash'; 
import Borrower from './components/borrowerdash';
import LoanStatus from './components/loanstatus';
import TransactionHistory from './components/transac';
import OfficerDashboard2 from './components/OfficerDashboard2'; // Correct import
import OfficerDashboard3 from './components/OfficerDashboard3'; // Import the new component
import Payment from './components/payment';
import OfficerProfile from './components/officerprof';
import OfficerDashboard from './components/Dashboard';
//import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/signup" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/officerdash" element={<Officer />} /> 
          <Route path="/borrowerdash" element={<Borrower />} />
          <Route path="/loanstatus" element={<LoanStatus />} />
          <Route path="/transac" element={<TransactionHistory />} />
          <Route path="/OfficerDashboard2" element={<OfficerDashboard2 />} />  
          <Route path="/OfficerDashboard3" element={<OfficerDashboard3 />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/officerprof" element={<OfficerProfile />} />
          <Route path="/officerdashboard" element={<OfficerDashboard />} />
          {/*<Route path="/sidebar" element={<Sidebar />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
