import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import CricketBettingTips from './pages/CricketBettingTips'
import Home from './pages/Home'
import PaymentMethods from './pages/PaymentMethods'
import SiteApp from './pages/SiteApp'
import SiteLogin from './pages/SiteLogin'
import SportsBettingApp from './pages/SportsBettingApp'
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/site-app" element={<SiteApp/>}/>
          <Route path="/site-login" element={<SiteLogin/>}/>
          <Route path="/payment-methods" element={<PaymentMethods/>}/>
          <Route path="/cricket-betting-tips" element={<CricketBettingTips/>}/>
          <Route path="/sports-betting-tips" element={<SportsBettingApp/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
        </Router>
    </>
  )
}

export default App
