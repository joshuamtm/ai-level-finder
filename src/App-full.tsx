import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AssessmentPage from './pages/AssessmentPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;