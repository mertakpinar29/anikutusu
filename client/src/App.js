import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import CreateScreen from './Screens/CreateScreen'

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/create' component={CreateScreen} />
    </Router>
  )
}

export default App
