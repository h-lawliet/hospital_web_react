import './App.css'
import Navbar from './components/navbar.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import { navList } from './data/navlist'
import Home from './routes/home.jsx'
import About from './routes/about.jsx'
import Center from './routes/center.jsx'
import Admin from './routes/admin.jsx'
import Footer from './components/footer.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appointment from './routes/appointment.jsx'
import Examination from './routes/examination'
import NotFoundPage from './routes/NotFoundPage'
import Community from './routes/community'
import { isAllowedPath } from './filter'
import { OutsideLink } from './components/outsideLink.jsx'
import ScrollToTop from './scroller.js'

function App() {
  
  const location = useLocation()
  const isAllowedRoute = isAllowedPath(location.pathname)

  return(
    <>
    {
      isAllowedRoute ? <>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about/:id' element={<About item={navList[0]}/>} />
          <Route path='/appointment/:id' element={<Appointment item={navList[1]}/>} />
          <Route path='/center/:id' element={<Center item={navList[2]}/>} />
          <Route path='/examination/:id' element={<Examination item={navList[3]}/>} />
          <Route path='/community/:id/*' element={<Community item={navList[4]}/>} />
          <Route path='/api/admin/*' element={<Admin/>}/>
        </Routes>
        <Footer/>
        <OutsideLink/>
      </> : <NotFoundPage/>
    }
    </>
  )
}

export default App