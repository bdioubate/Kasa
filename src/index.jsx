import React from 'react'
import './styles/index.scss'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import Accueil from './pages/Accueil/'
import APropos from './pages/APropos'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Logement from './pages/Logement'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div id="container">
        <Header />
        <Switch>
          <Route exact path="/" element={<Accueil />}></Route>
          <Route path="/a-propos" element={<APropos />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/logement/:id" element={<Logement />}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
)
