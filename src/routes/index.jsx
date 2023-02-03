import Accueil from '../pages/Accueil'
import APropos from '../pages/APropos'
import Error from '../pages/Error'
import Logement from '../pages/Logement'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'

import React from 'react'

function RoutesPath() {
  return (
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
  )
}

export default RoutesPath
