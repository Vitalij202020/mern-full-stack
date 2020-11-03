import React from 'react'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import './bootstrap.min.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
