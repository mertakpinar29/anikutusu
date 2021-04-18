import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'

import Header from './components/Header'
import Footer from './components/Footer'

import { Container } from 'react-bootstrap'
import UpdateScreen from './Screens/UpdateScreen'
import AuthScreen from './Screens/AuthScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/create' component={CreateScreen} />
          <Route path='/update/:id' component={UpdateScreen} />
          <Route path='/auth' component={AuthScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
