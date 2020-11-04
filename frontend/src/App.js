import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import './bootstrap.min.css'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App
