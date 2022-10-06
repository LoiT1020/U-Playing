
import './App.css';
import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Display from './components/Display';
import Detail from './pages/Detail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import "bootstrap/dist/css/bootstrap.min.css"
const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
function App () {


  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        <Route path ='/results' element={<Detail />} />
          <Route path ='/games/:id' element={<Display />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;

