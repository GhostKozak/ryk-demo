import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import Test from './components/test'
import Testtwo from './components/testtwo'

//Pages
import List from './List'
import Admin from './Admin'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Contact from './pages/Contact'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Homepage />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/about' element={<Aboutpage />} >
            <Route index element={<Test />} />
            <Route path='test' element={<Test />} />
            <Route path='test2' element={<Testtwo />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          {/* Test */}
          <Route path='/list' element={<List />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
