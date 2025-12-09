import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { CategoryPage } from './pages/CategoryPage';
import { GamePage } from './pages/GamePage';
import { WikiPage } from './pages/WikiPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <Router basename="/stats-learning-game">
      <UserProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/game/:gameId" element={<GamePage />} />
              <Route path="/wiki" element={<WikiPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
