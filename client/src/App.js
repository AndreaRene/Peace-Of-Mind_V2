import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';
// import Community from './pages/Community';
// import Feeling from './pages/Feeling';
// import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" element={<LandingPage />} />
          <Switch>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/community" element={<Community />} /> */}
            {/* <Route path="/comments" element={<Feeling />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Switch>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
