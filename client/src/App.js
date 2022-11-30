import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';
import GenerateNavbar from './pages/Navbar';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { far } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// library.add(far, faCheckSquare, faCoffee);

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutPage" element={<GenerateNavbar />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
