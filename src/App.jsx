import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TrisLogo from './assets/trislogo.png'
import LandingPageLayout from './layout/LandingPageLayout'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<LandingPageLayout />}> 
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
