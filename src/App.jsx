import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TrisLogo from './assets/trislogo.png'
import LandingPageLayout from './layout/LandingPageLayout'
import LandingPage from './pages/LandingPage'
import GetStarted from './pages/GetStarted'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPageLayout />}> 
            <Route index element={<LandingPage />} />
            <Route path='/Get Started' element={<GetStarted />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
