import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import ListBar from './components/MainContent/ListBar'
import Header from './components/MainContent/Header'
import Footer from './components/MainContent/Footer'
import ProfileContent from './components/MainContent/ProfileContent'
import Write from './routes/Write'
import Detail from './routes/Detail'
import Edit from './routes/Edit'
import SignUp from './routes/SignUp'

function App() {
  return (
    <div className="bg-[#F7F5F4]">
      <Router>
        <Header />
        <ListBar />
        <div className="flex justify-between  w-[1280px] m-auto relative">
          <ProfileContent />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
