import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'

import Header from './components/Header'
import Footer from './components/Footer'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/create' component={CreateScreen} />
      </Container>
      <Footer />
    </Router>
  )
}

export default App
