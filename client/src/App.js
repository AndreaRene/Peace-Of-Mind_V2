import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';
import Community from './pages/Community';
import Feeling from './pages/Feeling';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/about" element={<Navbar />} />
            <Route path="/login" element={<Navbar />} />
            <Route path="/community" element={<Navbar />} />
            <Route path="/feeling/:feelingId" element={<Navbar />} />
            <Route path="/dashboard" element={<Navbar />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/community" element={<Community />} />
<<<<<<< HEAD
            {/* <Route path="/comments" element={<Feeling />} /> */}
=======
            <Route path="/feeling/:feelingId" element={<Feeling />} />
>>>>>>> 8dbc550d197f56f41eae7bbb3a58bec52b6a85da
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<Footer />} />
            <Route path="/login" element={<Footer />} />
            <Route path="/community" element={<Footer />} />
<<<<<<< HEAD
            {/* <Route path='/comments' element={<Footer />} /> */}
            <Route path='/dashboard' element={<Footer />} />
=======
            <Route path="/feeling/:feelingId" element={<Footer />} />
            <Route path="/dashboard" element={<Footer />} />
>>>>>>> 8dbc550d197f56f41eae7bbb3a58bec52b6a85da
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
