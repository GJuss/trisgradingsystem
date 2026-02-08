import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TrisLogo from './assets/trislogo.png'
import LandingPageLayout from './layout/LandingPageLayout'
import Home from './pages/Home'
import GetStarted from './components/GetStarted'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPageLayout />}> 
            <Route path="/get-started" element={<GetStarted />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
