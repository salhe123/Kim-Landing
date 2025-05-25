import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import OurTeam from "./components/OurTeam"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
