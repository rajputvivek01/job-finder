import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar';
import JobList from './component/JobList';
import Login from './pages/login';
// import Dashboard from './pages/Dashboard'; // optional: another page
import { useSelector } from 'react-redux';
function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="flex">

                {/* Show Sidebar only if logged in */}
        {isAuthenticated && (
          <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg border-r border-gray-200 z-10">
            <Sidebar />
          </div>
        )}

        {/* Main content */}
        <div className="ml-64 flex-1 min-h-screen p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
