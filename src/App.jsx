import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react'; 
import { ChakraProvider } from '@chakra-ui/react';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Activities from './pages/Activities';
import ProgressPage from './pages/Progress';
import Appointments from './pages/Appointments';
import WellnessScore from './pages/WellnessScore';
import HealthSummary from './pages/HealthSummary';
import SummaryPage from './pages/Summary';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

import NavBar from './components/Navbar';
import NavbarPublic from './components/NavbarPublic'; // NEW
import Footer from './components/Footer'; 
import PrivateRoute from './components/PrivateRoute';
import theme from './theme.jsx'; 
import { useAuth } from './context/AuthContext'; // NEW

function App() {
  const { isAuthenticated } = useAuth(); // NEW

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {isAuthenticated ? <NavBar /> : <NavbarPublic />} {/* Conditional navbar */}
        <Box minH="calc(100vh - 80px)">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />

            {/* Private Routes */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/resources" element={<PrivateRoute><Resources /></PrivateRoute>} />
            <Route path="/activities" element={<PrivateRoute><Activities /></PrivateRoute>} />
            <Route path="/progress" element={<PrivateRoute><ProgressPage /></PrivateRoute>} />
            <Route path="/appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
            <Route path="/wellness" element={<PrivateRoute><WellnessScore /></PrivateRoute>} />
            <Route path="/health-summary" element={<PrivateRoute><HealthSummary /></PrivateRoute>} />
            <Route path="/summary" element={<PrivateRoute><SummaryPage /></PrivateRoute>} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
