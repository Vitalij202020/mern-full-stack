import React from 'react'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import './bootstrap.min.css'
import HomeScrren from './screens/HomeScrren'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScrren />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
